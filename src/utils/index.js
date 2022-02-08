const isDevelopment = process.env.NODDE_ENV === 'development';

const randomIntInRange = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export { isDevelopment, randomIntInRange };
