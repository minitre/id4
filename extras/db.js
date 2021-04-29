// db.js
const mongoose = require("mongoose");
mongoose.set("useUnifiedTopology", true);


mongoose.connect("mongodb+srv://steven:jesus2000@king.u1p3q.mongodb.net/wishlist?authSource=admin&replicaSet=atlas-7u4ux4-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true", 



   { useNewUrlParser: true });



module.exports = mongoose;