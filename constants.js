const MATTERMOST_SERVER_URL = '';
const BOT_SERVER_URL = '';
const CALLBACK_URL =  BOT_SERVER_URL + '/dialog/submit'; // dialog의 작성한 값을 받을 주소
const API_ENDPOINT = '/api/v4/actions/dialogs/open';
const OPEN_DIALOG = MATTERMOST_SERVER_URL + API_ENDPOINT; // API요청 주소
const TOKEN = '9mobfmfa87f1udakamrhmsmzse'; // Mattermost의 토큰

const constants = {
    MATTERMOST_SERVER_URL,
    BOT_SERVER_URL,
    CALLBACK_URL,
    API_ENDPOINT,
    OPEN_DIALOG,
    TOKEN,
}

module.exports = constants;