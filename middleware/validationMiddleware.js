import Joi from 'joi';

const validateRequest = (schema) => {
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({ message: error.details[0].message });
        }
        req.body = value; // Replace with validated/cast data
        next();
    };
};

export default validateRequest;

