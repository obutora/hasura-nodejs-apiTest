
var express = require('express');
var router = express.Router();

const axios = require('axios');


/* GET users listing. */
router.post('/', function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  console.log(req.headers)

  const urlString = 'http://graphql-engine:8080/api/rest/getBlockSells/';
  const block = req.body.block;
  // const block = req.query.block;
  console.log(req.body)
  const uri = encodeURI(`${urlString}${block}`);
  // const uri = encodeURI(`${urlString}`);

  // let fetchedData;

  try {
    axios.post(uri).then(function (api) {
      var fetchedData = api.data['sell43'];
      // console.log(fetchedData);
      res.json(fetchedData)
    })
  } catch (e) {
    throw new Error(e);
  }


});

module.exports = router;
