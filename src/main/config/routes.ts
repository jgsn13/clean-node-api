import { Express, Router } from 'express';
import fg from 'fast-glob';

type RouterType = (router: Router) => void;

export default (app: Express): void => {
  const router = Router();
  app.use('/api', router);
  fg.sync('**/src/main/routes/**.routes.ts').map(async (file) => {
    const route = (await import(`../../../${file}`)).default as RouterType;
    route(router);
  });
};
