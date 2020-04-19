import { validate } from 'jsonschema';

module.exports = {
    validateSchema : (req, res, callback) => {
        let instance = req.body.instance;
        let schema = req.body.schema;

        let result = validate(instance, schema);

        let response = {};

        if(result.errors != null && result.errors.length > 0){
            response.status = 1001;
            response.message = "JSON request validation failed against provided JSON schema";
            response.body = result.errors;

        }else{
            response.status = 1000;
            response.message = "JSON request validated successfully against provided JSON schema";
            response.body = "";
        }

        callback(response);
    }
}