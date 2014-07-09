'use strict';

chrome.runtime.onInstalled.addListener(function (details) {
    console.log('previousVersion', details.previousVersion);
});

chrome.tabs.onUpdated.addListener(function (tabId) {
    chrome.pageAction.show(tabId);
});

chrome.contextMenus.create({
    title: "This is your chrome extension menu!",
    id:'selectFromContextMenu',
    contexts: ["page"]
  }, function() {
      var error = chrome.runtime.lastError;
      if(error) {
        console.log(error);
      }
      else {
        console.log('Context menu created');
      }
  });

chrome.contextMenus.onClicked.addListener(function(tab) {
      alert('Hello world');
});

console.log('Comb Out! Background');
