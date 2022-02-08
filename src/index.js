import errorHandler from '$common/errorhandler';
import mongoDB from '$common/mongoDB';
import logger from '$middlewares/logger';
import routes from '$routes/routes';
import { isDevelopment } from '$utils';
import colors from 'colors';
import express from 'express';

(async () => {
	const app = express();
	const host = process.env.HOST || 'localhost';
	const port = process.env.PORT || 3001;

	isDevelopment && app.use(logger);

	app.use(express.json());
	app.use(express.urlencoded({ extended: true }));

	routes(app);
	mongoDB.connect();

	app.use(errorHandler);
	app.listen(port, () => {
		isDevelopment
			? console.log(colors.green(`App listening at ${host}:${port}`))
			: console.log(colors.green(`App listening at ${host}`));
	});
})();
