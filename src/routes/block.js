
var express = require('express');
var router = express.Router();

const axios = require('axios');


/* GET users listing. */
router.get('/', function (req, res, next) {
  const urlString = 'http://graphql-engine:8080/api/rest/getBlockSells/';
  const block = req.query.block;
  const uri = encodeURI(`http://graphql-engine:8080/api/rest/getBlockSells/${block}`);

  // let fetchedData;

  try {
    axios.get(uri).then(function (api) {
      var fetchedData = api.data['sell43'];
      console.log(fetchedData);
      res.json(fetchedData)
    })
  } catch (e) {
    throw new Error(e);
  }





  // const xmlReq = new XMLHttpRequest();


  // fetch('http://localhost:8888/api/rest/getBlockSells/都城')
  //   .then(response => response.json())
  //   .then(data => console.log(data))

  // res.send(result);
  // res.send('rees')

});

module.exports = router;
