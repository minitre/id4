const db = require("./db");

const wish = db.model("wish", {
    name:      String,
    product:      String,
    info:      String,
});

module.exports = wish;