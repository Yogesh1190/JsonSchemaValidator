# JSON Schema Validator

This is simple project which will help you to validate the json based on json schema. This is nodejs project which will take 2 inputs from the user, one is json request and second will be json schema against which we need to validate.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

Make sure nodejs is installed on your machine. You can use below command to check current version of the nodejs which is available on your machine.

```
E:\workspace\jsonvalidator>node -v
v12.14.1
```
If you do not have nodejs installed in your machine then please go throgh below link to download nodejs based on your operating system.

```
https://nodejs.org/en/download/
```

## Installing

You can download the source code either by downloading zip file or by clonning.

Once you downloaded the file simply extract the zip file in empty folder where you want to put source code of JSON Schema Validator.

After finishing all the above steps. You can use below command to download the required dependencies and packages for this project.

```
E:\workspace\jsonvalidator>npm install
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.12 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.12: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

audited 4503 packages in 9.727s

14 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Run

To run the project use below command

```
E:\workspace\jsonvalidator>npm start

> jsonvalidator@1.0.0 start E:\workspace\jsonvalidator
> npm run build && node dist/index.js


> jsonvalidator@1.0.0 build E:\workspace\jsonvalidator
> babel src -d dist

Successfully compiled 4 files with Babel.
body-parser deprecated bodyParser: use individual json/urlencoded middlewares dist\lib\server.js:17:36
Node.js server is running on port 3000
```

## Example

API URL

```
http://localhost:3000/validate/schema
```

- Sample Input Request 1

  ```
  {
    "instance": {
        "emp_id": 1,
        "emp_name": "02"
    },
    "schema": {
        "$schema": "Sample Schema 1",
        "$id": "v1.0",
        "title": "Employee Details Schema 1",
        "description": "This is sample schema for employee details",
        "type": "object",
        "properties": {
            "emp_id": {
                "description": "Employee Indentification number",
                "type": "integer"
            },
            "emp_name": {
                "description": "Name of the employee",
                "type": "string"
            }
        }
    }
  }
  ```

  Success Response

  ```
  {
    "status": 1000,
    "message": "JSON request validated successfully against provided JSON schema",
    "body": ""
  }
  ```
  
- Sample Input Request 2

  ```
  {
    "instance": {
        "emp_id": "1",
        "emp_name": "02"
    },
    "schema": {
        "$schema": "Sample Schema 1",
        "$id": "v1.0",
        "title": "Employee Details Schema 1",
        "description": "This is sample schema for employee details",
        "type": "object",
        "properties": {
            "emp_id": {
                "description": "Employee Indentification number",
                "type": "integer"
            },
            "emp_name": {
                "description": "Name of the employee",
                "type": "string"
            }
        }
    }
  }
  ```

  Success Response

  ```
  {
    "status": 1001,
    "message": "JSON request validation failed against provided JSON schema",
    "body": [
        {
            "property": "instance.emp_id",
            "message": "is not of a type(s) integer",
            "schema": {
                "description": "Employee Indentification number",
                "type": "integer"
            },
            "instance": "1",
            "name": "type",
            "argument": [
                "integer"
            ],
            "stack": "instance.emp_id is not of a type(s) integer"
        }
    ]
  }
  ```

## Contributing

Please read [CONTRIBUTING.md](https://github.com/Yogesh1190/JsonSchemaValidator/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Yogesh1190/JsonSchemaValidator/tags).

## Authors

* **Yogesh Shisode** - *Initial work* - (https://github.com/Yogesh1190)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
