let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let ArticleSchema = new Schema({
  title:{
    type: String,
    required: true,
    unique: true
    },
  link:{
    type: String,
    required: true
    },
  brief:{
      type: String,
    },
  saved: {
      type: Boolean,
      default: false
    },
  notes:{
        type: Schema.Types.ObjectId,
        ref: "Notes"
        }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
