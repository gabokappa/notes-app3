
var note = new Note("My favourite language is JavaScript");
function checkNewNoteInstantiated() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  let expectation = "My favourite language is JavaScript";
  let actual = note.text
  assert.isTrue(actual === expectation, nameOfFunc[1]);
}
checkNewNoteInstantiated();

function checkReturnText() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  let expectation = "My favourite language is JavaScript";
  let actual = note.returnText()
  assert.isTrue(actual === expectation, nameOfFunc[1]);
}
checkReturnText();

function checkNoteId() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);

  let note = new Note('remember to drink water');
  assert.isTrue(note.id === 0, nameOfFunc[1]);
}
checkNoteId();
