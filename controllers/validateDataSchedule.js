const joi = require('joi');

const schema = joi.object({
    
});

const validateData = (data) => {
    return schema.validate(data);
}

module.exports = validateData;