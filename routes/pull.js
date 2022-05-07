const { RssIcon } = require('@vue-hero-icons/outline');
const express = require('express');
const router = express.Router();
const Pusher = require('pusher');

const pusher = new Pusher({
  appId: "1406258",
  key: "c074d08f4c2e01bcd9a0",
  secret: "e4d651dbc552ad3ce759",
  cluster: "eu",
  useTLS: true
});



router.get('/', (req, res)=> {
    res.send('POLL')
});

router.post('/', (req, res) => {
     pusher.trigger("voting", "os-vote", {
        points: 1,
        os: req.body.os
    });

    return res.json({
        success: true,
        message: "Thank you for voting"
    });
});

module.exports = router;