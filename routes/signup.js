var express = require('express');
var router = express.Router();
const axios = require('axios');

// API URL
const apiUrl = 'http://localhost:8080/api/auth/register';

// GET: Render Signup Page
router.get('/', function (req, res, next) {
  res.render('signup', { title: 'Signup' });
});

// POST: Handle User Registration
router.post('/register', (req, res) => {
  const userData = {
    username: req.body.username,
    password: req.body.password,
    accountname: req.body.accountname,
    phone: req.body.phone,
    province: req.body.province,
    district: req.body.district,
    subdistrict: req.body.subdistrict,
    postalcode: req.body.postalcode,
    accounttype: req.body.accounttype,
  };

  // Making the POST request to the API with user data
  axios
    .post(apiUrl, userData)  // Corrected line: no assignment
    .then((response) => {
      console.log('Response from API:', response.data);
      res.render('signup', {
        title: 'Signup Success',
        message: 'Registration successful!',
        data: response.data,
      });
    })
    .catch((error) => {
      if (error.response) {
        console.error('API Error Response:', error.response.data);
        res.render('signup', {
          title: 'Signup Error',
          error: error.response.data.message || 'Registration failed!',
        });
      } else {
        console.error('API Error:', error.message);
        res.render('signup', {
          title: 'Signup Error',
          error: 'An unexpected error occurred.',
        });
      }
    });
});

module.exports = router;
