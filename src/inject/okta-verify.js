(function() {
  console.log('2');
  var pushToDeviceSupported = false;
  var factorSelector = document.getElementById('factor_selector');
  if (factorSelector) {
    console.log('factorSelector.options', factorSelector.options);
    for (var i = 0; i < factorSelector.options.length; i++) {
      if (factorSelector.options[i].value === 'OKTA_SOFT_TOKEN') {
        factorSelector.value = 'OKTA_SOFT_TOKEN';
        factorSelector.dispatchEvent(new Event('change'));
        pushToDeviceSupported = true;
      }
    }
  }

  function getButton(pushToDeviceSupported) {
    console.log('getButton', pushToDeviceSupported);

    var button;

    if (pushToDeviceSupported) {
      button = document.getElementById('send-push');
    } else {
      button = document.getElementById('send-sms');
    }

    if (button) {
      console.log('button', button);
      button.click();
    } else {
      setTimeout(getButton, 100, pushToDeviceSupported);
    }
  }

  getButton(pushToDeviceSupported);
}());

console.log('1');
