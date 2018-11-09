chrome.webRequest.onBeforeRequest.addListener(function(frame) {
    console.log(frame);  // debug
    return {cancel: true};
    return {redirectUrl: "https://github.com/"};
    chrome.tabs.update({url: 'https://google.com'});
},
{
    urls: [
        "*://developer.getpebble.com/*",
        "*://developer.pebble.com/*",
        "*://erikboesen.com/*"
    ],
    types: ["main_frame"]
},
["blocking"]
);
/*const filter = {
  urls: [
    '*://news.ycombinator.com/*',
  ],
}

const webRequestFlags = [
  'blocking',
];
window.chrome.webRequest.onBeforeRequest.addListener(
  page => {
    console.log('page blocked - ' + page.url);

    return {
      cancel: true,
    };
  },
  filter,
  webRequestFlags,
);
*/
