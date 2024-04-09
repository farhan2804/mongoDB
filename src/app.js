const mongoose = require("mongoose");
//connection creation
mongoose
  .connect("mongodb://localhost:27017/testDB")
  .then(() => console.log("connection successful....."))
  .catch((err) => console.log(err));

// schema-camelCase
const playlistSchema = new mongoose.Schema({
  name: String,
  type: String,
  Videos: Number,
  active: Boolean,
  date: {
    type: Date,
    defult: Date.now,
  },
});
// models or collection creation-Pascalcase
const Playlist = new mongoose.model("Playlist", playlistSchema);
// const createDocument = async () => {
//   try {
//     const javaPlaylist = new Playlist({
//       name: "Java",
//       type: "Front End",
//       Videos: 69,
//       active: true,
//     });
//     const javascriptPlaylist = new Playlist({
//       name: "JavaScript",
//       type: "Front End",
//       Videos: 99,
//       active: false,
//     });
//     const nodePlaylist = new Playlist({
//       name: "NodeJS",
//       type: "Back End",
//       Videos: 29,
//       active: true,
//     });
//     const SQLPlaylist = new Playlist({
//       name: "SQL",
//       type: "Database",
//       Videos: 59,
//       active: true,
//     });
//     const result = await Playlist.insertMany([
//       javaPlaylist,
//       javascriptPlaylist,
//       nodePlaylist,
//       SQLPlaylist,
//     ]);
//     console.log(result);
//   } catch (err) {
//     console.log(err);
//   }
// };
// createDocument();

//read operation
const getData = async () => {
  try {
    const result = await Playlist.find({
      $and: [{ type: "Front End" }, { active: true }],
    })
      // .select({
      //   name: 1,
      // })
      .countDocuments();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getData();
