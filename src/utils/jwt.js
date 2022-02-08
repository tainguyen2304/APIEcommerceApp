import jwt from 'jsonwebtoken';

const verifyToken = (token, options = {}) => {
	return new Promise((resolve, reject) => {
		jwt.verify(token, process.env.JWT_SECRET_KEY, options, (error, decoded) => {
			if (error) {
				return reject(error);
			}
			return resolve(decoded);
		});
	});
};

const generateToken = (payload, options = {}) => {
	return new Promise((resolve, reject) => {
		const { _id, roles } = payload;
		jwt.sign({ _id, roles }, process.env.JWT_SECRET_KEY, options, (error, token) => {
			if (error) {
				return reject(error);
			}
			return resolve(token);
		});
	});
};

export { verifyToken, generateToken };
