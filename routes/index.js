var express = require('express');
var router = express.Router();
var GitHubApi = require("github");

/* GET home page. */
router.get('/getFollowers/:user', function(req, res, next) {
  var github = new GitHubApi({})
    github.users.getFollowingForUser({
        username: res.params.user
    }, function(err, res) {
        res.json(data)
    });
});

module.exports = router;
