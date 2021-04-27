const express = require("express");
const router = express.Router();

const getDatabase = require("../database.js");
const db = getDatabase();



router.get("/", async (req, res) => {

  const snapshot = await db.collection("matches").get();

  if (snapshot.empty) {
    res.status(404);
    return;
  }

  let winnersId = [];
  snapshot.forEach((doc) => {
    winnersId.push(doc.data().winnerId);
  });


 res.send(winnersId)
  



//  loopa winnersId.length  count++ ?
// .sort() 
// loopa ut < 5 


});


module.exports = router;