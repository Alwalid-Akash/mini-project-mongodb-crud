const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection is successful");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allchat = [
  {
    from: "neha",
    to: "sneha",
    msg: "hi, nice to meet you",
    created_at: new Date(),
  },
  {
    from: "rahul",
    to: "priya",
    msg: "how are you?",
    created_at: new Date(),
  },
  {
    from: "amit",
    to: "rohan",
    msg: "let's meet tomorrow",
    created_at: new Date(),
  },
  {
    from: "sara",
    to: "john",
    msg: "please call me",
    created_at: new Date(),
  },
  {
    from: "karan",
    to: "riya",
    msg: "project completed",
    created_at: new Date(),
  },
];

Chat.insertMany(allchat)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });