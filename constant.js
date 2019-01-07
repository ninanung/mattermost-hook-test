const MATTERMOST_SERVER_URL = 'http://localhost:8065';
const BOT_SERVER_URL = 'http://192.168.1.162:3000';
const CALLBACK_URL =  BOT_SERVER_URL + '/dialog/submit';
const API_ENDPOINT = '/api/v4/actions/dialogs/open';
const OPEN_DIALOG = MATTERMOST_SERVER_URL + API_ENDPOINT;
const TOKEN = '9mobfmfa87f1udakamrhmsmzse';

const constants = {
    MATTERMOST_SERVER_URL,
    BOT_SERVER_URL,
    CALLBACK_URL,
    API_ENDPOINT,
    OPEN_DIALOG,
    TOKEN,
}

module.exports = constants;