import { App } from './app';

const start = (): void => {
  const app = new App(4000);
  app.listen();
}
start();
