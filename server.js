//Load HTTP module
const express = require("express");
const app = express();
const PORT= 8080;


//listen for request on port 4000
app.get("/api/numeriCasuali", (req, res) => {
    const numeri = [];
        for (let i = 0; i < 100; i++) { //riempio array
          //let tomorrow = new Date( today.setDate(today.getDate() + 1));
          //timestap[i] = tomorrow.getMonth()+'/'+tomorrow.getDate() ;
          numeri.push(Math.floor(Math.random()*90));
        }
    res.json(numeri);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
  });