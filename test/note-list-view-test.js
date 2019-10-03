function returnsListOfNotes() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteList = new NoteList();
  noteList.createNote("This is my new note - remember to water the plants");
  noteList.createNote("This is the second note - remember to feed the dog and cat");
  noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnsView() === '<ul><li><div>This is my new note ...</div></li><li><div>This is the second n...</div></li></ul>', nameOfFunc[1]);
}

returnsListOfNotes();
