// Google Apps Script code

function doGet() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getDataRange();
  var dataValues = dataRange.getValues();
  var headers = dataValues[0];
  var jsonData = [];

  for (var i = 1; i < dataValues.length; i++) {
    var row = dataValues[i];
    var rowData = {};

    for (var j = 0; j < headers.length; j++) {
      rowData[headers[j]] = row[j];
    }

    jsonData.push(rowData);
  }
  console.log(typeof(ContentService.createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON)))
  return ContentService.createTextOutput(JSON.stringify(jsonData))
    .setMimeType(ContentService.MimeType.JSON);
}
