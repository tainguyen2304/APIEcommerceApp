const errorHandler = (req, res, next) => {
	return res.status(500).json({
		messgage: 'There was an error, please try again later!'
	});
};

export default errorHandler;
