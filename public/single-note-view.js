(function (exports) {
    function SingleNoteView(note) {
      this.note = note
    }

    SingleNoteView.prototype.returnsView = function() {
        output = `<ul><li><div>${this.note.text}</div></li></ul>`
        return output
    };
  
    exports.SingleNoteView = SingleNoteView
  })(this);