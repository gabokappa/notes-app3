function returnsListOfNotes() {
  nameOfFunc = arguments.callee.toString().match(/function\s+([^\s\(]+)/);
  noteList = new NoteList();
  noteList.createNote("This is my new note - remember to water the plants");
  noteList.createNote("This is the second note - remember to feed the dog and cat");
  noteListView = new NoteListView(noteList);
  assert.isTrue(noteListView.returnsView() === "<ul><div> <a href='#notes/4'>This is my new note ...</a> </div><div> <a href='#notes/5'>This is the second n...</a> </div></ul>", nameOfFunc[1]);}

returnsListOfNotes();
