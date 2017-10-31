const express = require('express');
const router = express.Router();
const fs = require('fs');
const elastic = require('../elasticsearch');
const query_data = require('../data');
/* GET suggestions */
router.get('/suggest/:input', function (req, res, next) {
  elastic.getSuggestions(req.params.input).then(function (result) {
    res.json(result)
  }, function (err) {
    console.log(err);
  });
});

router.get('/search', function (req, res, next) {
  let promises = [];
  for (let i = 0; i < query_data.length; i++) {
    promises.push(elastic.getSuggestions(query_data[i]));
  }
  Promise.all(promises).then(function (values) {
    console.log(values.length);
    res.json(values);
  })
});

/* POST document to be indexed */
router.post('/', function (req, res, next) {
  elastic.addDocument(req.body).then(function (result) {
    res.json(result)
  });
});

router.post('/addAllDocuments', function (req, res, next) {
  elastic.indexExists().then(function (exists) {
    if (exists) {
      return elastic.deleteIndex();
    }
  }).then(function () {
    return elastic.initIndex().then(elastic.initMapping).then(function (resp) {
      //Add a few titles for the autocomplete
      //elasticsearch offers a bulk functionality as well, but this is for a different time
      console.log(resp);
      let bulkAddDocs = prepareJsonToIndex([]);
      return elastic.bulkAdd(bulkAddDocs);
    }, function (err) {
      console.log(err);
    });
  }).then((resp) => res.json(resp), (err) => res.err(err));
});

function prepareJsonToIndex(bulk_request) {
  for (let i = 1; i < 440; i++) {
    let currentJsonFile = JSON.parse(fs.readFileSync("./json_files/" + i + ".json"));
    bulk_request.push({index: {_index: 'second440index@954pm', _type: 'document', _id: i}});
    bulk_request.push(currentJsonFile);
  }
  return bulk_request;
}
module.exports = router;
