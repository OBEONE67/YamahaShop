const axios = require('axios');

const url = 'http://localhost:8080/api/user/get/all'; // Replace with your API endpoint

axios.get(url)
    .then((response) => {
        console.log(response.data); // Log the data received from the API
    })
    .catch((error) => {
        console.error('Error:', error); // Handle any errors
    });