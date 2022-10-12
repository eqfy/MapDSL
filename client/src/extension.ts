/* eslint-disable @typescript-eslint/no-var-requires */
/* --------------------------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 * ------------------------------------------------------------------------------------------ */

import * as path from 'path';
import { commands, ExtensionContext, workspace } from 'vscode';

import { LanguageClient, LanguageClientOptions, ServerOptions, TransportKind } from 'vscode-languageclient/node';

let client: LanguageClient;

export function activate(context: ExtensionContext) {
	activateCommands(context);
	activateLanguageServer(context);
}

function activateLanguageServer(context: ExtensionContext) {
	const serverModule = context.asAbsolutePath(path.join('server', 'out', 'main.js'));
	const debugOptions = { execArgv: ['--nolazy', '--inspect=6009'] };
	const serverOptions: ServerOptions = {
		run: { module: serverModule, transport: TransportKind.ipc },
		debug: {
			module: serverModule,
			transport: TransportKind.ipc,
			options: debugOptions,
		},
	};
	const clientOptions: LanguageClientOptions = {
		documentSelector: [{ scheme: 'file', language: 'mg' }],
		synchronize: {
			fileEvents: workspace.createFileSystemWatcher('**/.clientrc'),
		},
	};
	client = new LanguageClient('mgLanguageServer', 'Map Generator Language Server', serverOptions, clientOptions);
	client.start();
}

function activateCommands(context: ExtensionContext) {
	const open = require('open');
	const disposableSwitch = commands.registerCommand('MapGenMenuBar.openMap', () => {
		open('http://localhost:1337/');
	});
	context.subscriptions.push(disposableSwitch);
}

export function deactivate(): Thenable<void> | undefined {
	if (!client) {
		return undefined;
	}
	return client.stop();
}
