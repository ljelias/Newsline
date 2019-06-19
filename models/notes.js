let mongoose = require("mongoose");

let Schema = mongoose.Schema;

let NotesSchema = new Schema({
  name: String,
  body:String
});


let Note = mongoose.model("Notes", NotesSchema);
module.exports = Note;