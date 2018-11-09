chrome.webRequest.onBeforeRequest.addListener(function(frame) {
    console.log(frame);  // debug
    return { redirectUrl: "" };
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
