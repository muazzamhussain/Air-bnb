const mongoose = require("mongoose");
const initData = require("./data.js");
const listing = require("../models/listing.js");

main()
  .then(() => console.log("Connected to DB."))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({ ...obj, owner: "682df014af8a02581e2079e2" }));
  await listing.insertMany(initData.data);
  console.log("Data saved successfully.");
};

initDB();
