function doPost(e) {
  var data = JSON.parse(e.postData.contents);
  var messageText = data.message.text;
  var chatId = data.message.chat.id;
 
  if (messageText == '/start') {
    sendMessage('Hello! How can I help you today?', chatId);
  } else {
    sendMessage('Sorry, I don\'t understand what you mean. Can you rephrase your question or request?', chatId);
  }
}
 
function sendMessage(message, chatId) {
  var url = 'https://api.telegram.org/bot<YOUR_BOT_TOKEN>/sendMessage';
  var options = {
    'method': 'post',
    'payload': {
      'chat_id': chatId,
      'text': message
    }
  };
  UrlFetchApp.fetch(url, options);
}
