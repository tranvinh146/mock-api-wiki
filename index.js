const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const oneDay = 86400000; // milisecond

const data = [
  {
    id: 1,
    title: "How to Upgrade to React 18",
    chapter_id: 1,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 0.5,
    status: "created",
    author: {
      id: 1,
      name: "Đức Trần",
      avatar:
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/290458177_1473051189801448_1215153013758150269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iTqkFuA1oXMAX-pN5lR&tn=z_y3qabHBJvss03G&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT9OhsOOs98qi0GiZgc8Ft1-UlJOOYn0TgCpH4XdrHQKjg&oe=62D23A1D",
    },
  },
  {
    id: 2,
    title: "Incrementally Adopting Next.js",
    chapter_id: 1,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.2,
    status: "updated",
    author: {
      id: 2,
      name: "Phong Trần",
      avatar:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t1.6435-9/120731165_351843689563238_3270164734603652813_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=eJNHFJstb7IAX_IMhiL&tn=yqbKCW8fI8WL0tWm&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT84Q1I-un1lohJbHTuZtcsrW9NX8m3ALORwRLZX6Cex6g&oe=62F45DE7",
    },
  },
  {
    id: 3,
    title: "Delightful React File/Directory Structure",
    chapter_id: 1,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay,
    status: "updated",
    author: {
      id: 3,
      name: "Hiếu Nguyễn",
      avatar:
        "https://scontent.xx.fbcdn.net/v/t1.15752-9/292259582_3234549730126210_1710296646516134531_n.jpg?stp=dst-jpg_s280x280&_nc_cat=110&ccb=1-7&_nc_sid=aee45a&_nc_ohc=5SlFRscrj4cAX-a7oCV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIGjN7DudAIr_lNy83qenukZlPzxfoDln5qR7gUKhSXMw&oe=62F3E395",
    },
  },
  {
    id: 4,
    chapter_id: 1,
    title: "Animated Sparkles in React",
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.8,
    status: "created",
    author: {
      id: 4,
      name: "Phong Nguyễn",
      avatar:
        "https://scontent.fsgn5-13.fna.fbcdn.net/v/t1.6435-9/48399013_597340754039167_2205736096162119680_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_ohc=9TtI3ZfTCXwAX9doAXL&_nc_ht=scontent.fsgn5-13.fna&oh=00_AT9QNcO2-oRR_edhsRvUE-Tf_C0vG3CXqqjR9hI6LPicrQ&oe=62F371EF",
    },
  },
  // chapter_id = 2
  {
    id: 5,
    title:
      "Eliminating Redundancy with NestJS CLI Plugins. Comments Introspection",
    chapter_id: 2,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 0.2,
    status: "created",
    author: {
      id: 1,
      name: "Trần Vinh",
      avatar:
        "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-1/120956730_2854084888157617_8284394165454952957_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=FcX5ltcycSgAX_oY3Ss&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT-bnGtLPHbt8hr0oYl_w3oaJUQ2_5RNerxpuIbI04HTKQ&oe=62F19ADC",
    },
  },
  {
    id: 6,
    chapter_id: 2,
    title: "TypeORM: Object-relational mapping with Node.js",
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.8,
    status: "updated",
    author: {
      id: 2,
      name: "Quân Trần",
      avatar:
        "https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.6435-1/146824639_2601441946815911_1188450292684094447_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Wlwecn7oDLYAX8HF3pm&_nc_ht=scontent.fsgn5-3.fna&oh=00_AT8ZJw1Bf9Ja6t5zYtty3OkJ01Qapp52D-4tuHR9ztAu1Q&oe=62F3729F",
    },
  },
  {
    id: 7,
    chapter_id: 2,
    title:
      "New TOAST in town: the “pluggable TOAST API” concept and what it means for the community",
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.4,
    status: "updated",
    author: {
      id: 6,
      name: "Tú Hồ",
      avatar:
        "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/275977069_3113760348939393_2459947977713419153_n.jpg?stp=c0.0.240.240a_dst-jpg_p240x240&_nc_cat=103&ccb=1-7&_nc_sid=7206a8&_nc_ohc=CAr1bVmI47EAX-oD0bg&tn=gPVEPqVsIrNWTzJi&_nc_ht=scontent.fsgn5-12.fna&oh=00_AT_CKT9S61fscpzGjtOTOEfj8H_ud54zDvsSnmyLXTRohQ&oe=62D2064A",
    },
  },
  // chapter_id = 3
  {
    id: 8,
    chapter_id: 3,
    title: "10 Best Product Analytics Tools & Software For Product Teams",
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.75,
    status: "created",
    author: {
      id: 8,
      name: "Nhân Lê",
      avatar:
        "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-6/273123831_10220754003656304_4294504128792029664_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=wQriHBy4lPEAX-mVBbK&_nc_ht=scontent.fsgn5-14.fna&oh=00_AT9UsNHuQ-fmgjNHil5xqfKU_GOg5eUsc4E7PFTTclf87Q&oe=62D182D6",
    },
  },
  // chapter_id = 4
  {
    id: 9,
    title: "Digital design is now a real job",
    chapter_id: 4,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.8,
    status: "created",
    author: {
      id: 1,
      name: "Naomi Tran",
      avatar:
        "https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/290458177_1473051189801448_1215153013758150269_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=iTqkFuA1oXMAX-pN5lR&tn=z_y3qabHBJvss03G&_nc_ht=scontent.fsgn5-9.fna&oh=00_AT9OhsOOs98qi0GiZgc8Ft1-UlJOOYn0TgCpH4XdrHQKjg&oe=62D23A1D",
    },
  },
  // chapter_id = 5
  {
    id: 10,
    title: "MobX for State Management in Flutter Apps",
    chapter_id: 5,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 0.25,
    status: "updated",
    author: {
      id: 10,
      name: "Nhân Lê",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/3nwqdr6a3by9zejzk66oq4h1yc/image?_=1653962595168",
    },
  },
  {
    id: 11,
    title: "11 Talent Acquisition Strategies to Find the Best Employees",
    chapter_id: 7,
    link: "https://wiki.geekup.vn/books/wiki-introduction/page/h%C6%B0%E1%BB%9Bng-d%E1%BA%ABn-s%E1%BB%AD-d%E1%BB%A5ng-wiki",
    time: new Date().getTime() - oneDay * 1.5,
    status: "updated",
    author: {
      id: 11,
      name: "Uyen Phan",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/oyx87kj7z3bti8mowp5ooebjnr/image?_=1585670421636",
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
