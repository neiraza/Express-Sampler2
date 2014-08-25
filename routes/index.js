/*var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
*/

module.exports = function (app, controller) {
  app.get('/', controller.index.index);
  app.get('/index/support', controller.index.support);
}
