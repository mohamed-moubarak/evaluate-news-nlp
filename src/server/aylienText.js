var AYLIENTextAPI = require('aylien_textapi');

var textapi = new AYLIENTextAPI({
    application_id: process.env.AYLIEN_API_ID,
    application_key: process.env.AYLIEN_API_KEY
});

const sentimentAnalysis = (text, callback) => {
    textapi.sentiment({
        'text': text
    }, (error, response) => {
        if (!error) {
            callback(response);
        } else {
            console.log('error from AYLIEN: ', error);
            return;
        }
    });
}

module.exports = sentimentAnalysis