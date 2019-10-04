(function (exports) {
  function NoteController(noteList) {
    this.noteList = noteList;
  }

  NoteController.prototype.add = function (text) {
    this.noteList.list.push(new Note(text));
  };

  NoteController.prototype.createNoteListView = function() {
    this.noteListView = new NoteListView(this.noteList);
  };

  NoteController.prototype.render = function() {
    document.getElementById('app').innerHTML = this.noteListView.returnsView();
  };

  NoteController.prototype.urlShowNoteText = function() {
    window.addEventListener("hashchange", function () {
      let noteId = parseInt(window.location.hash.split("/")[1]);
      let note = noteController3.noteList.listOfNotes()[noteId];
      let noteContent = new SingleNoteView(note);
      document.getElementById('app').innerHTML = noteContent.returnsView();

    })

  };

  exports.NoteController = NoteController;
})(this);

var noteList4 = new NoteList();

noteController3 = new NoteController(noteList4);

noteController3.add("I'm testing the controller if it works");
noteController3.add("This is a backup, just in case");

noteController3.createNoteListView(noteList4);
noteController3.render();
noteController3.urlShowNoteText();