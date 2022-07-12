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
      name: "Hiếu Nguyễn",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/dgygmeunrfgztprfgzxuwi7jno/image?_=1654848453800",
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
      name: "Duy Quân",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/ijsjxmkdybropjxspzbbi9puhw/image?_=1624032009634",
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
      name: "Phong Trần",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/5qzcqdirxbdszj5i49wi34xcor/image?_=1654848482112",
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
      name: "Phong Trần",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/5qzcqdirxbdszj5i49wi34xcor/image?_=1654848482112",
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
        "https://nexion.geekup.vn/api/v4/users/zthfwu6fk3f73n6a8egochjooc/image?_=1654848503731",
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
      name: "Phát Cù",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/dh6btmzhabg6inwu8df5j34rdh/image?_=1622563209918",
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
      name: "Andie",
      avatar:
        "https://nexion.geekup.vn/api/v4/users/4woqjy97b3r87rnn5bpchaju6w/image?_=1620662409983",
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
        "https://nexion.geekup.vn/api/v4/users/yw6x9rmsgig5ze5mmm9kpmaiwy/image?_=1626105612448",
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
