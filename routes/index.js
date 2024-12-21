var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// const axios = require('axios');

// // Data to be sent in the POST request
// const postData = {
//     "userName": "Test User 4",
//     "password": "testpassword",
// };

// const url = 'http://localhost:8080/api/auth/login'; // Replace with your API's URL

// axios.post(url, postData)
//   .then((response) => {
//     console.log('Response:', response.data); // Log the API response
//   })
//   .catch((error) => {
//     console.error('Error:', error); // Handle any errors
//   });


module.exports = router;
