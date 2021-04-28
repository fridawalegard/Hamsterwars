const getDatabase = require('../database.js')
const db = getDatabase()


const express = require('express')
const router = express.Router()



// GET /matchWinners/:id 
router.get('/:id', async (req, res) => {
	

    const id = req.params.id;
    const winnerRef = db.collection('matches');
    const snapshot = await winnerRef.where('winnerId', '==', `${id}`).get();
    
    if(snapshot.empty){
        res.sendStatus(404);
        return;
    }
    matchwinners = [];

    snapshot.forEach(doc =>{
        const data = doc.data();
        matchwinners.push(data);
    })
     res.send(matchwinners);
	
});



/*router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const snapshot = await db.collection("matches").get();

  if (snapshot.empty) {
    res.status(404);
    return;
  }

  let matches = [];
  snapshot.forEach((doc) => {
    if (doc.data().winnerId === id) {
      matches.push(doc.data());
    }
  });

  if (matches.length === 0) {
    res.status(404).send(`The hamster with id: ${id} has not won any matches.`);
  }

  res.send(matches);
});
*/ 
module.exports = router;


