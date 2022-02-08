import { verifyToken } from '$utils/jwt';

const authen = async (request, response, next) => {
	let token = request.headers.authorization;

	if (token) {
		token = token.replace('Bearer ', '');
	}

	try {
		await verifyToken(token, process.env.JWT_SECRET_KEY);
		return next();
	} catch (error) {
		return response.status(401).json({ message: error.message });
	}
};

const author = (roleCheck) => async (request, response, next) => {
	let token = request.headers.authorization;

	if (token) {
		token = token.replace('Bearer ', '');
	}

	try {
		const jwtPayload = await verifyToken(token, process.env.JWT_SECRET_KEY);

		if (jwtPayload.roles.includes(roleCheck)) {
			return next();
		}

		return response.status(403).json({
			message: "Access denied, you don't have permission to access"
		});
	} catch (error) {
		return response.status(401).json({ message: error.message });
	}
};

export { authen, author };
