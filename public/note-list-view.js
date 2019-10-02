(function (exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  }

  NoteListView.prototype.returnsView = function () {
    let output = '<ul>'
    this.noteList.list.forEach(function (note) {
      output += `<li><div>${note.text}</div></li>`
    })
    output += '</ul>'
    return output
  }
  exports.NoteListView = NoteListView
})(this)
