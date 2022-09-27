import express, {Application, Request, Response} from "express";
import * as http from "http";
import cors from "cors";
import InsightFacade from "../controller/InsightFacade";
import {InsightDatasetKind, InsightError} from "../controller/IInsightFacade";
import * as fs from "fs-extra";

export default class Server {
	private readonly port: number;
	private express: Application;
	private server: http.Server | undefined;
	private static insightFacade: InsightFacade;

	constructor(port: number) {
		console.info(`Server::<init>( ${port} )`);
		this.port = port;
		this.express = express();

		this.registerMiddleware();
		this.registerRoutes();

		Server.insightFacade = new InsightFacade();
		let demo = false;
		if (demo) {
			let loadPromises = [];
			if (!Server.insightFacade.containsDataset("courses")) {
				let coursesCont = fs.readFileSync("./src/archives/courses.zip").toString("base64");
				loadPromises.push(Server.insightFacade.addDataset("courses", coursesCont, InsightDatasetKind.Courses));
			}
			if (!Server.insightFacade.containsDataset("rooms")) {
				let roomsContent = fs.readFileSync("./src/archives/rooms.zip").toString("base64");
				loadPromises.push(Server.insightFacade.addDataset("rooms", roomsContent, InsightDatasetKind.Rooms));
			}

			Promise.all(loadPromises).then(() => this.express.use(express.static("./frontend/public")));
		} else {
			this.express.use(express.static("./frontend/public"));
		}
		// NOTE: you can serve static frontend files in from your express server
		// by uncommenting the line below. This makes files in ./frontend/public
		// accessible at http://localhost:<port>/
	}

	/**
	 * Starts the server. Returns a promise that resolves if success. Promises are used
	 * here because starting the server takes some time and we want to know when it
	 * is done (and if it worked).
	 *
	 * @returns {Promise<void>}
	 */
	public start(): Promise<void> {
		return new Promise((resolve, reject) => {
			console.info("Server::start() - start");
			if (this.server !== undefined) {
				console.error("Server::start() - server already listening");
				reject();
			} else {
				this.server = this.express.listen(this.port, () => {
					console.info(`Server::start() - server listening on port: ${this.port}`);
					resolve();
				}).on("error", (err: Error) => {
					// catches errors in server start
					console.error(`Server::start() - server ERROR: ${err.message}`);
					reject(err);
				});
			}
		});
	}

	/**
	 * Stops the server. Again returns a promise so we know when the connections have
	 * actually been fully closed and the port has been released.
	 *
	 * @returns {Promise<void>}
	 */
	public stop(): Promise<void> {
		console.info("Server::stop()");
		return new Promise((resolve, reject) => {
			if (this.server === undefined) {
				console.error("Server::stop() - ERROR: server not started");
				reject();
			} else {
				this.server.close(() => {
					console.info("Server::stop() - server closed");
					resolve();
				});
			}
		});
	}

	// Registers middleware to parse request before passing them to request handlers
	private registerMiddleware() {
		// JSON parser must be place before raw parser because of wildcard matching done by raw parser below
		this.express.use(express.json());
		this.express.use(express.raw({type: "application/*", limit: "10mb"}));

		// enable cors in request headers to allow cross-origin HTTP requests
		this.express.use(cors());
	}

	// Registers all request handlers to routes
	private registerRoutes() {
		// This is an example endpoint this you can invoke by accessing this URL in your browser:
		// http://localhost:4321/echo/hello
		// this.express.get("/echo/:msg", Server.echo);
		this.express.put("/dataset/:id/:kind", Server.putDataset);
		this.express.delete("/dataset/:id", Server.deleteDataset);
		this.express.post("/query", Server.postQuery);
		this.express.get("/datasets", Server.getDatasets);
	}

	// The next two methods handle the echo service.
	// These are almost certainly not the best place to put these, but are here for your reference.
	// By updating the Server.echo function pointer above, these methods can be easily moved.
	private static echo(req: Request, res: Response) {
		try {
			console.log(`Server::echo(..) - params: ${JSON.stringify(req.params)}`);
			const response = Server.performEcho(req.params.msg);
			res.status(200).json({result: response});
		} catch (err) {
			res.status(400).json({error: err});
		}
	}

	private static performEcho(msg: string): string {
		if (typeof msg !== "undefined" && msg !== null) {
			return `${msg}...${msg}`;
		} else {
			return "Message not provided";
		}
	}

	private static postQuery(req: Request, res: Response) {
		try {
			Server.insightFacade = new InsightFacade();
			let query = req.body;
			Server.insightFacade.performQuery(query).then((data) => {
				res.status(200).json({result: data});
			}).catch((err) => {
				res.status(400).json({error: err.toString()});
			});
		} catch (e: any) {
			res.status(400).json({error: e.message});
		}
	}

	private static getDatasets(req: Request, res: Response) {
		try {
			Server.insightFacade = new InsightFacade();
			Server.insightFacade.listDatasets().then((data) => {
				res.status(200).json({result: data});
			}).catch((err) => {
				res.status(400).json({error: err.toString()});
			});
		} catch (e: any) {
			res.status(400).json({error: e.message});
		}
	}

	private static deleteDataset(req: Request, res: Response) {
		try {
			Server.insightFacade = new InsightFacade();
			Server.insightFacade.removeDataset(req.params.id).then((id) => {
				res.status(200).json({result: id});
			}).catch((err) => {
				if (err instanceof InsightError) {
					res.status(400).json({error: err.toString()});
				} else {
					res.status(404).json({error: err.toString()});
				}
			});
		} catch (e: any) {
			res.status(400).json({error: e.message});
		}
	}

	private static putDataset(req: Request, res: Response) {
		try {
			Server.insightFacade = new InsightFacade();
			let type;
			if (req.params.kind === "courses") {
				type = InsightDatasetKind.Courses;
			} else if (req.params.kind === "rooms") {
				type = InsightDatasetKind.Rooms;
			} else {
				res.status(400).json({error: "Not a valid type"});
				return;
			}
			let content = Buffer.from(req.body).toString("base64");
			Server.insightFacade.addDataset(req.params.id, content, type).then((sets) => {
				res.status(200).json({result: sets});
			}).catch((err) => {
				res.status(400).json({error: err.toString()});
			});
		} catch (e: any) {
			res.status(400).json({error: e.message});
		}
	}
}

