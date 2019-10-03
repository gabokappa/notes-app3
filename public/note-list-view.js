(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnsView = function () {
    let output = '<ul>';
    this.noteList.list.forEach(function (note) {
      output += `<div> <a href='#notes/${note.id}'>${note.text.slice(0,20)}...</a> </div>`;
    });
    output += '</ul>';
  console.log(output);
    return output
  };
  exports.NoteListView = NoteListView;
})(this);

