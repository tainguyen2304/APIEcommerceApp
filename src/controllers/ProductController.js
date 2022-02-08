import Product from '$models/Product';

const ProductController = {
	index: async (req, res, next) => {
		try {
			const products = await Product.find();
			return res.status(200).json({
				message: 'Create product successfully',
				products
			});
		} catch (err) {
			return next(err);
		}
	},

	create: async (req, res, next) => {
		try {
			const product = new Product(req.body);
			await product.save();
			return res.status(200).json({
				message: 'Get products successfully',
				product
			});
		} catch (err) {
			return next(err);
		}
	},

	newest: async (req, res, next) => {
		try {
			const products = await Product.find().sort('-updatedAt').limit(10);
			return res.status(200).json({
				message: 'Get products successfully',
				products
			});
		} catch (err) {
			return next(err);
		}
	},

	fillter: async (req, res, next) => {
		console.log(req.query);
		try {
			const { sortByPrice, ...filter } = req.query;
			const products = await Product.find(filter).sort({
				'price.actual': sortByPrice
			});

			return res.status(200).json({
				message: 'Get products successfully',
				products
			});
		} catch (err) {
			return next(err);
		}
	}
};

export default ProductController;
