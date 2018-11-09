chrome.webNavigation.onBeforeNavigate.addListener(function(frame) {
    console.log(frame);  // debug
    console.log(frame.url);
    chrome.tabs.update(frame.tabId, {url: 'https://google.com'});
});
