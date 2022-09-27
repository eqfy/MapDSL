import Server from './rest/Server';

export class App {
  public initServer(port: number) {
    const server = new Server(port);
    return server.start().catch((err: Error) => {
      console.error(`App::initServer() - ERROR: ${err.message}`);
    });
  }
}

console.info('App - starting');
const app = new App();
(async () => {
  await app.initServer(1337);
})();
