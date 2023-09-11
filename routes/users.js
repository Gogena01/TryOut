var express = require('express');
var router = express.Router();
var axios = require('axios')
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource');
});

router.get('/make-request', async (req, res, next) => {
  try {
    // The URL you want to request
    const url = 'http://v0.ovapi.nl/';

    // Make a GET request to the URL
    fetch(url).then(res => res.json()).then(res => console.log(res))

    // Handle the response here
    // console.log(response.data);

    // Send a response to the client
    // res.json(response.data);
  } catch (error) {
    // Handle any errors that occur during the request
    console.error('Error:', error);
    next(error);
  }
});

router.get('/request/:apiEndPoint', async (req, res) => {
  fetch(`http://v0.ovapi.nl/${req.params.apiEndPoint}`)
    .then(res =>
      res.json())
    .then(data => res.send(data))
    .catch(err =>
      console.log(err.message))
})


module.exports = router;
