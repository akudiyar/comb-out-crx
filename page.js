/**
 * Created by Alexey Kuzin on 13.01.14.
 */

/**
 * Creates a file using jsPDF and starts a download for it
 * @param source id of DOM element being converted
 * @param specialElementHeaders functions used to convert some special elements. A function should return 'true' if an element must be bypassed.
 * @param fileName is used to create a file in Downloads
 */
function saveAsPDF(source, specialElementHeaders, fileName) {
    var pdf = new jsPDF('p','mm','a4');
    pdf.fromHTML(
        source // HTML string or DOM elem ref.
        , 15 // x coord
        , 15 // y coord
        , {
            'width': 210 - 2*15 // max width of content on PDF
            , 'height': 297 - 2*15 //max height
            , 'elementHandlers': specialElementHandlers
        }
    );

    fileName = fileName && fileName !== '' ? fileName : 'Test.pdf';
    pdf_datauristr = pdf.output('datauristring');
    chrome.downloads.download( {
            "url": pdf_datauristr,
            "filename": fileName,
            "conflictAction": 'uniquify',
            "saveAs": true
        }
    );
}

var cm_parent = chrome.contextMenus.create({
    "title": "Comb Out",
    "contexts": ["page"]
});

var cm_saveAsPDF = chrome.contextMenus.create({
    "title": "Save as PDF",
    "parentId": parent,
    "onclick": saveAsPDF(collect_rows)
});

