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
  
  function findEnterCodeLink() {
    return document.querySelector('a[data-se="inline-totp-add"]');
  }

  function getLink() {
    var link = findEnterCodeLink();

    if (link) {
      link.click();
    } else {
      setTimeout(getLink, 100);
    }
  }
  
  getLink();
}());
