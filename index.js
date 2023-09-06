const express = require("express");
const app = express();
const port = 3000;

// view engine
app.set("views", "./public/views");
app.set("view engine", "ejs");

// Folder Access
app.use(express.static("./public"));

// JSON
app.use(express.json());
const videos = require("./public/data/videoData.json");

// Routing
app.get("/", (req, res) => {
  res.render("index", { videos, curVidID });
});

let curVidID = 0;

app.get("/video/:id", (req, res) => {
  const randomNumbers = [];
  curVidID = parseInt(req.params.id);
  for (let i = 0; randomNumbers.length < 3; i++) {
    let num = Math.floor(Math.random() * videos.length);
    if (randomNumbers.includes(num));
    else {
      if (curVidID - 1 === num) {
        true;
      } else randomNumbers.push(num);
    }
  }
  let video = videos.find((video) => video.id === curVidID);
  res.render("video", { video, videos, randomNumbers });
});

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});
