/**
 * Created by Alexey Kuzin on 13.01.14.
 */

var cm_parent = chrome.contextMenus.create({
    "title": "Comb Out",
    "contexts": ["page"]
});

var cm_saveAsPDF = chrome.contextMenus.create({
    "title": "Save as PDF",
    "parentId": parent,
    "onclick": saveAsPDF(collectRows)
});

