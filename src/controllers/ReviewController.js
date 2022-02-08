import Review from '$models/Review';
import { mongooseBeautyfulId, mongooseToClient, randomIntInRange } from '$utils';

const ViewController = {
	create: async (req, res, next) => {
		try {
			const review = new Review(req.body);

			await review.save();

			const populated = await Review.findById(review._id).populate('postedBy');

			return res.status(200).json({
				message: 'Create reviews successfully',
				review: populated
			});
		} catch (err) {
			return next(err);
		}
	},

	random: async (req, res, next) => {
		try {
			const limitRecords = 3;
			const reviews = await Review.aggregate([
				{ $sample: { size: limitRecords } },
				{
					$addFields: {
						id: '$_id'
					}
				},
				{ $unset: ['_id', '__v'] }
			]);
			const populated = await Promise.all(reviews.map((review) => Review.populate(review, 'postedBy')));

			return res.status(200).json({
				message: 'Get reviews successfully',
				reviews: populated
			});
		} catch (err) {
			return next(err);
		}
	}
};

export default ViewController;
