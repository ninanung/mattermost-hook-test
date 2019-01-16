var express = require('express');
var router = express.Router();
const axios = require('axios');

const constants = require('../constants');

router.get('/', function(req, res, next) {
  console.log(req.query);
  res.send({
    "response_type": "in_channel",
    "attachments": [
      {
        "pretext": "This is the attachment pretext.",
         "text": "This is the attachment text.",
        "actions": [
          {
            "name": "number 1",
            "integration": {
              "url": constants.BOT_SERVER_URL + '/test/button',
              "context": {
                "number": 1,
              }
            }
          }, 
          {
            "name": "number 2",
            "integration": {
              "url": constants.BOT_SERVER_URL + '/test/button',
              "context": {
                "number": 2,
              }
            }
          }
        ]
      }
    ]
  })
});

router.post('/outgoing', function(req, res, next) {
  console.log(req.body);
});

router.get('/incoming', function(req, res, next) {
  const headers = {
    'Content-Type': 'applicate/json'
  }
  const url = constants.MATTERMOST_SERVER_URL + '/hooks/sk39yj7kkj8r3piyms51cq7mmh';
  const data = {
    "attachments": [
      {
        "fallback": "test",
        "color": "#FF8000",
        "pretext": "This is optional pretext that shows above the attachment.",
        "text": "This is the text of the attachment. It should appear just above an image of the Mattermost logo. The left border of the attachment should be colored orange, and below the image it should include additional fields that are formatted in columns. At the top of the attachment, there should be an author name followed by a bolded title. Both the author name and the title should be hyperlinks.",
        "author_name": "Mattermost",
        "author_icon": "http://www.mattermost.org/wp-content/uploads/2016/04/icon_WS.png",
        "author_link": "http://www.mattermost.org/",
        "title": "Example Attachment",
        "title_link": "http://docs.mattermost.com/developer/message-attachments.html",
        "fields": [
          {
            "short": false,
            "title": "Long Field",
            "value": "Testing with a very long piece of text that will take up the whole width of the table. And then some more text to make it extra long."
          },
          {
            "short": true,
            "title": "Column One",
            "value": "Testing"
          },
          {
            "short": true,
            "title": "Column Two",
            "value": "Testing"
          },
          {
          "short": false,
          "title": "Another Field",
          "value": "Testing"
          }
        ],
        "image_url": "https://imgflip.com/s/meme/Leonardo-Dicaprio-Cheers.jpg"
      }
    ]
  }

  axios({
    url,
    method: 'post',
    headers,
    data,
  })
  .then(function(response) {
    console.log(response.status);
    res.send('good');
  })
  .catch(function(err) {
    console.log(err);
  })
});

router.post('/button', function(req, res, next) {
  console.log(req.body);
});

module.exports = router;
