import { validate } from 'jsonschema';

module.exports = {
    validateSchema : (req, res, callback) => {
        let instance = req.body.instance;
        let schema = req.body.schema;

        let response = validate(instance, schema);
        callback(response);
    }
}