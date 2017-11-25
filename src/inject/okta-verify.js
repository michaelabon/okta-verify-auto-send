(function() {
  function findPushNotifButton() {
    return document.querySelector('input[value="Send Push"]');
  }

  function findSendSMSButton() {
    return document.querySelector('[data-se=sms-send-code]');
  }

  function findDoNotChallengeMeCheckbox() {
    return document.querySelector('[data-se-for-name="rememberDevice"]');
  }

  function getButton() {
    var button = findPushNotifButton() || findSendSMSButton();

    if (button) {
      var checkbox = findDoNotChallengeMeCheckbox();

      checkbox.click();
      button.click();
    } else {
      setTimeout(getButton, 100);
    }
  }

  getButton();
}());
