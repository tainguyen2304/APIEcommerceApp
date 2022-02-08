import { isDevelopment } from '$utils/';
import colors from 'colors';
import Mongoose from 'mongoose';

const mongoDB = {
	connect: () => {
		try {
			const connectString = process.env.MONGODB_URL;
			const mongooseOptions = {
				useNewUrlParser: true,
				useUnifiedTopology: true
			};

			if (isDevelopment) {
				Mongoose.set('debug', function (coll, method, query) {
					console.log(
						`${colors.green('Mongoose: ')}${colors.yellow(coll)}.${colors.cyan(method)}(${JSON.stringify(query, null, 2)});`
					);
				});
			}

			Mongoose.connect(connectString, mongooseOptions);
			console.log(colors.green('Connect to MongoDB successfully!'));
		} catch (err) {
			console.log(colors.red('Connect to MongoDB failure!!!'));
		}
	}
};

export default mongoDB;
