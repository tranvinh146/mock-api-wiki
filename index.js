const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  const oneDay = 86400000; // milisecond
  const docs = [
    {
      id: 1,
      title: "The doc 1",
      link: "https://www.google.com/",
      time: new Date().getTime() - oneDay,
      status: "created",
      author: {
        id: 1,
        name: "doraemon",
        avatar:
          "https://ecdn.game4v.com/g4v-content/uploads/2021/06/game4v-doraemon-bao-boi-khong-tri-giac-4.png",
      },
    },
    {
      id: 2,
      title: "The doc 2",
      link: "https://www.youtube.com/",
      time: new Date().getTime() - oneDay * 3,
      status: "updated",
      author: {
        id: 2,
        name: "pikachu",
        avatar:
          "https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg",
      },
    },
    {
      id: 3,
      title: "The doc 3",
      link: "https://www.facebook.com/",
      time: new Date().getTime() - oneDay,
      status: "updated",
      author: {
        id: 3,
        name: "nobita",
        avatar:
          "https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png",
      },
    },
    {
      id: 2,
      title: "The doc 4",
      link: "https://www.npmjs.com/package/axios",
      time: new Date().getTime() - oneDay * 3,
      status: "created",
      author: {
        id: 4,
        name: "songoku",
        avatar:
          "https://cdn.tgdd.vn/GameApp/4/251495/Screentshots/tai-dragon-ball-z-kakarot-game-hanh-dong-doi-khang-25-09-2021-1.jpg",
      },
    },
  ];
  res.status(200).json(docs);
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
