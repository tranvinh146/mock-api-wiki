const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const oneDay = 86400000; // milisecond

const data = [
  {
    id: 1,
    title: "The doc 1",
    chapter_id: 1,
    link: "https://www.google.com/",
    time: new Date().getTime() - oneDay * 1.5,
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
    chapter_id: 1,
    link: "https://www.youtube.com/",
    time: new Date().getTime() - oneDay * 2,
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
    chapter_id: 1,
    link: "https://www.facebook.com/",
    time: new Date().getTime() - oneDay,
    status: "updated",
    author: {
      id: 3,
      name: "nobita",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png",
    },
  },
  {
    id: 4,
    chapter_id: 1,
    title: "The doc 4",
    link: "https://www.npmjs.com/package/axios",
    time: new Date().getTime() - oneDay * 2.75,
    status: "created",
    author: {
      id: 4,
      name: "songoku",
      avatar:
        "https://cdn.tgdd.vn/GameApp/4/251495/Screentshots/tai-dragon-ball-z-kakarot-game-hanh-dong-doi-khang-25-09-2021-1.jpg",
    },
  },
  // chapter_id = 2
  {
    id: 5,
    title: "The doc 5",
    chapter_id: 2,
    link: "https://www.google.com/",
    time: new Date().getTime() - oneDay * 1.5,
    status: "created",
    author: {
      id: 1,
      name: "doraemon",
      avatar:
        "https://ecdn.game4v.com/g4v-content/uploads/2021/06/game4v-doraemon-bao-boi-khong-tri-giac-4.png",
    },
  },
  {
    id: 6,
    chapter_id: 2,
    title: "The doc 6",
    link: "https://www.youtube.com/",
    time: new Date().getTime() - oneDay * 2,
    status: "updated",
    author: {
      id: 2,
      name: "pikachu",
      avatar:
        "https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg",
    },
  },
  {
    id: 7,
    chapter_id: 2,
    title: "The doc 7",
    link: "https://www.facebook.com/",
    time: new Date().getTime() - oneDay,
    status: "updated",
    author: {
      id: 3,
      name: "nobita",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png",
    },
  },
  {
    id: 8,
    chapter_id: 2,
    title: "The doc 8",
    link: "https://www.npmjs.com/package/axios",
    time: new Date().getTime() - oneDay * 1.75,
    status: "created",
    author: {
      id: 4,
      name: "songoku",
      avatar:
        "https://cdn.tgdd.vn/GameApp/4/251495/Screentshots/tai-dragon-ball-z-kakarot-game-hanh-dong-doi-khang-25-09-2021-1.jpg",
    },
  },
  {
    id: 9,
    title: "The doc 9",
    chapter_id: 2,
    link: "https://www.google.com/",
    time: new Date().getTime() - oneDay * 1.8,
    status: "created",
    author: {
      id: 1,
      name: "doraemon",
      avatar:
        "https://ecdn.game4v.com/g4v-content/uploads/2021/06/game4v-doraemon-bao-boi-khong-tri-giac-4.png",
    },
  },
  {
    id: 10,
    title: "The doc 10",
    chapter_id: 2,
    link: "https://www.youtube.com/",
    time: new Date().getTime() - oneDay * 2.25,
    status: "updated",
    author: {
      id: 2,
      name: "pikachu",
      avatar:
        "https://genk.mediacdn.vn/k:thumb_w/640/2016/photo-1-1473821552147/top6suthatcucsocvepikachu.jpg",
    },
  },
  {
    id: 11,
    title: "The doc 11",
    chapter_id: 2,
    link: "https://www.facebook.com/",
    time: new Date().getTime() - oneDay * 2.5,
    status: "updated",
    author: {
      id: 3,
      name: "nobita",
      avatar: "https://upload.wikimedia.org/wikipedia/vi/2/2c/Nobita.png",
    },
  },
  {
    id: 12,
    chapter_id: 2,
    title: "The doc 12",
    link: "https://www.npmjs.com/package/axios",
    time: new Date().getTime() - oneDay * 3.5,
    status: "created",
    author: {
      id: 4,
      name: "songoku",
      avatar:
        "https://cdn.tgdd.vn/GameApp/4/251495/Screentshots/tai-dragon-ball-z-kakarot-game-hanh-dong-doi-khang-25-09-2021-1.jpg",
    },
  },
];

app.use(cors());
app.use(express.json());

app.get("/:id", (req, res) => {
  const response = data.filter((doc) => doc.chapter_id == req.params.id);
  res.status(200).json(response);
});

app.use("*", (req, res) => {
  res.status(404).json({ error: "not found" });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
