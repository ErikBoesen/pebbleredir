chrome.webRequest.onBeforeRequest.addListener(function(frame) {
    console.log(frame);  // debug
    var split_url = frame.url.split('/');
    split_url.splice(2, 0, 'developer.rebble.io');
    split_url.pop();
    split_url.push('index.html');
    return { redirectUrl: split_url.join('/') };
},
{
    urls: [
        "*://developer.getpebble.com/*",
        "*://developer.pebble.com/*"
    ],
    types: ["main_frame"]
},
["blocking"]
);
