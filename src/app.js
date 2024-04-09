const mongoose = require("mongoose");
//connection creation
mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("connection successful....."))
  .catch((err) => console.log(err));

//schema-camelCase
const playlistSchema = new mongoose.Schema({
  name: String,
  type: String,
  Videos: Number,
  author: String,
  active: Boolean,
  date: {
    type: Date,
    defult: Date.now,
  },
});
//models or collection creation-Pascalcase
const Playlist = new mongoose.model("Playlist", playlistSchema);
const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "React",
      type: "Front End",
      Videos: 49,
      active: true,
    });
    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};
createDocument();
