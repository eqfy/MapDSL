import MapServer from './MapServer';

export class MapApp {
	public initServer(port: number) {
		const server = new MapServer(port);
		return server.start().catch((err: Error) => {
			console.error(`App::initServer() - ERROR: ${err.message}`);
		});
	}
}
