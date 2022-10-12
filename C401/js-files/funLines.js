var express = require('express');
var app     = express();
var port    =   process.env.PORT || 8080;

var router = express.Router();


router.use(function(req, res, next) {
  // log each request to the console
  console.log(req.method, req.url);
  // continue doing what we were doing and go to the route
  next();
});
// apply the routes to our application
app.use('/', router);


router.param('name', function(req, res, next, name) {
  // do validation on name here
  // blah blah validation
  // log something so we know its working
  console.log('doing name validations on ' + name);
  // once validation is done save the new item in the req
  req.name = name;
  // go to the next thing
  next();
});


router.get('/', function(req, res) {
  res.send('im the home page!');
});


// about page route (http://localhost:8080/about)
router.get('/about', function(req, res) {
  res.send('im the about page!');
});


// route with parameters (http://localhost:8080/hello/:name)
router.get('/hello/:name', function(req, res) {
  res.send('hello ' + req.name + '!');
});


app.route('/login')
// show the form (GET http://localhost:8080/login)
  .get(function(req, res) {
      res.send('this is the login form');
  })

  // process the form (POST http://localhost:8080/login)
  .post(function(req, res) {
      console.log('processing');
      res.send('processing the login form!');
});


app.listen(port);
console.log('Magic happens on port ' + port);