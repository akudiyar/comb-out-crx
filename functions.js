/**
 * Created by Alexey Kuzin on 14.01.14.
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

/**
 * Collects selected rows, sends them to supplied data filter/formatter and return clean html source string
 * @param table_xpath XPath URI pointing to table to select rows from
 */
function collectRows(table_xpath, datafilter) {
    var collected_rows = [];
    $('input.comb-out-checkbox:checked').each(function(index, element){
        collected_rows.push($( this ).parents( "div.item" )[0]);
    });
    return datafilter(collected_rows);
}