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
    var checkbox = findDoNotChallengeMeCheckbox();
    
    if (button && checkbox) {
      checkbox.click();
    }

    if (button) {
      button.click();
    } else {
      setTimeout(getButton, 100);
    }
  }

  getButton();
}());
