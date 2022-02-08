import User from '$models/User';
import { generateToken } from '$utils/jwt';

const AuthController = {
	login: async (req, res, next) => {
		try {
			const { email, password } = req.body;
			const user = await User.findOne({
				email
			});

			if (!user) {
				return res.status(400).json({
					message: 'Email does not exits'
				});
			}
			if (!(await user.verifyPassword(password))) {
				return res.status(400).json({
					message: 'Password incorrect'
				});
			}

			return res.status(200).json({
				message: 'Login successfully',
				user: user,
				token: await generateToken(user)
			});
		} catch (err) {
			return next(err);
		}
	},

	register: async (req, res, next) => {
		try {
			const user = new User(req.body);

			user.roles = ['Guest'];
			await user.save();
			return res.status(200).json({
				message: 'Register account successfully',
				user: user,
				token: await generateToken(user)
			});
		} catch (err) {
			return next(err);
		}
	}
};

export default AuthController;
