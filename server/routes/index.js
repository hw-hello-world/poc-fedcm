var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/fedcm.json', function(req, res, next) {
  const resp = {
    "accounts_endpoint": "https://localhost:3000/fedcm/accounts_endpoint",
    "client_metadata_endpoint": "https://localhost:3000/fedcm/client_metadata_endpoint",
    "id_token_endpoint": "https://localhost:3000/fedcm/id_token_endpoint",
    "revocation_endpoint": "https://localhost:3000/fedcm/revocation_endpoint",
    "branding": {
      "background_color": "green",
      "color": "#FFEEAA",
      "icons": [{
        "url": "https://localhost:3000/images/logo.ico",
        "size": 10
      }]
    }
  };
  res.json(resp);
});

router.get('/fedcm/accounts_endpoint', function(req, res, next) {
  console.log(req);
  res.json([]);
});

router.get('/fedcm/client_metadata_endpoint', function(req, res, next) {
  console.log(req);
});

router.get('/fedcm/id_token_endpoint', function(req, res, next) {
  console.log(req);
  res.json({
    id_token: 'test id token',
  });
});

router.get('/fedcm/revocation_endpoint', function(req, res, next) {
  console.log(req);
});

module.exports = router;
