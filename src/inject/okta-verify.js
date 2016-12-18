(function() {
  function findPushNotifButton() {
    return document.querySelector('input[value="Send Push"]');
  }

  function findSendSMSButton() {
    return document.querySelector('[data-se=sms-send-code]');
  }

  function getButton() {
    var button = findPushNotifButton() || findSendSMSButton();

    if (button) {
      button.click();
    } else {
      setTimeout(getButton, 100);
    }
  }

  getButton();
}());
