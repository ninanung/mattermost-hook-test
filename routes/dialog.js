var express = require('express');
var axios = require('axios');
var router = express.Router();

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json();

const constants = require('../constants');

router.get('/', jsonParser, function(req, res, next) {
    const trigger_id = req.query.trigger_id;
    const projects = [
        {value: 'you select 1', text: 'test1'},
        {value: 'you select 2', text: 'test2'},
        {value: 'you select 3', text: 'test3'},
    ]
    const payload = {
        trigger_id: trigger_id,
        url: constants.CALLBACK_URL,
        dialog: {
            title: 'dialog title',
            elements: [
                {
                    display_name: 'text display name',
                    name: 'textprops',
                    type: 'text',
                    placeholder: 'text placeholder',
                    help_text: 'some description about this',
                    optional: false,
                },
                {
                    display_name: 'select display name',
                    name: 'selectprops',
                    type: 'select',
                    placeholder: 'select placeholder',
                    help_text: 'some description about this select',
                    optional: false,
                    options: projects
                },
                {
                    display_name: 'textarea display name',
                    name: 'textareaprops',
                    type: 'textarea',
                    help_text: 'some description about this textarea',
                    optional: true,
                },
            ],
            submit_label: 'log test data',
            notify_on_cancel: false,
        }
    }
    const headers = {
        'Authorization': `Bearer ` + constants.TOKEN,
    }
    console.log(constants.OPEN_DIALOG);
    console.log(headers)
    axios({
        url: constants.OPEN_DIALOG,
        method: 'post',
        headers: headers,
        data: payload,
    })
    .then(function(response) {
        console.log(response.status)
        res.send();
    })
    .catch(function(err) {
        console.log(err.status);
    })
});

router.post('/submit', jsonParser, function(req, res, next) {
    console.log(req.body);
    res.send();
});

module.exports = router;