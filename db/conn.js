const mongoose = require("mongoose");

async function main() {
  await mongoose.connect("mongodb://localhost:27017/getpetdb");
  console.log("Concectou ao mongoose!");
}

main().catch((error) => console.log(error));

module.exports = mongoose;
