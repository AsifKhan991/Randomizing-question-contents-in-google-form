var packs = [
  ["Yes", [1, 1.25, 1.5], [[800, 820], [870, 890], [940, 960]], 30],
  ["Yes", [1, 1.25, 1.5], [[400, 420], [470, 490], [540, 560]], 15],
  ["No", [5, 5.25, 5.5], [[600, 620], [670, 690], [740, 760]], 30],
  ["Yes", [5, 5.25, 5.5], [[1050, 1070], [1120, 1140], [1190, 1210]], 30],
  ["No", [5, 5.25, 5.5], [[300, 320], [370, 390], [440, 460]], 15],
  ["Yes", [5, 5.25, 5.5], [[570, 590], [640, 660], [710, 730]], 15],
  ["Yes", [12, 13, 14], [[1400, 1420], [1470, 1490], [1540, 1560]], 30],
  ["No", [12, 13, 14], [[950, 970], [1020, 1040], [1090, 1110]], 30],
  ["Yes", [30, 31, 32], [[2200, 2220], [2270, 2290], [2340, 2360]], 30]
]


function redefineques() {
  var FILE = SpreadsheetApp.openById("your spread-sheet id");
  var CONTENT = FILE.getSheetByName("Sheet1");

  var form = FormApp.openById('your form id')
  var formResponses = form.getResponses();
  form.setAcceptingResponses(false)
  for (var i = 0; i < formResponses.length; i++) {
    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    for (var j = 0; j < itemResponses.length; j++) {
      var itemResponse = itemResponses[j];
      var data = itemResponse.getItem().getTitle() + itemResponse.getResponse()

      var lastRow = CONTENT.getLastRow();
      var cell = CONTENT.getRange("A" + (lastRow + 1).toString());
      cell.setValue(data);

      //cell.setValue(itemResponse.getItem().getTitle()+itemResponse.getResponse());

    }
  }

  var items = form.getItems();

  while (items.length > 0) {
    form.deleteItem(items.pop());
  }

  var item = form.addMultipleChoiceItem();
  item = item.setRequired(true);
  item.setTitle('Are you a student?')
    .setChoices([
      item.createChoice('yes'),
      item.createChoice('no')
    ])
    .showOtherOption(false);


  var item = form.addMultipleChoiceItem();
  item = item.setRequired(true);
  item.setTitle('Select your age range:')
    .setChoices([
      item.createChoice('Below 25'),
      item.createChoice('25-50'),
      item.createChoice('50+')
    ])
    .showOtherOption(false);

  form.setAcceptingResponses(true);

  for (var i = 0; i < 9; i++) {
    var props = process_pack(packs[i]);

    var item = form.addMultipleChoiceItem();
    item = item.setRequired(true);
    item.setTitle('Do you prefer this pack?\nSize: ' + props[1].toString() + ' GB\n  Unlimited talk and text: ' + props[0].toString() + '\nDuration: ' + props[3].toString() + ' Days\nPrice: ' + props[2].toString() + ' BDT')
      .setChoices([
        item.createChoice('yes'),
        item.createChoice('no')
      ])
      .showOtherOption(false);
  }
  form.setAcceptingResponses(true);

}

function process_pack(arr) {
  var pack_index = randomInteger(0, 2);
  var size = arr[1][pack_index];
  var price = randomInteger(arr[2][pack_index][0], arr[2][pack_index][1]);
  return [arr[0], size, price, arr[3]];
}

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
