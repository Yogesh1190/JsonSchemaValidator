//*********************** imports section ***********************//
// Dependancies
import express from 'express';
import urlencoded from 'body-parser';
var app = express();

// Files
import routes from '../routes/routes';

//**************************** End ****************************//

// App Configuration
app.use(urlencoded({extended: true}));
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});

// Routes
app.use('/', routes)

// Constants
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
  console.log('Node.js server is running on port ' + PORT);
});