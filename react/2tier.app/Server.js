let express = require("express");
let cors = require("cors");
let app = express();
app.use(cors());

app.get("/teamindia", (req, res) => {
  let teamindiaarr = [
    "viratkohli",
    "rohit",
    "kl rahul",
    "ishan kishan",
    "siraj",
    "bhumrah",
    "hardik pandya",
    "jadeja",
    "shami",
    "kuldeep yadav",
    "chahal",
  ];

  res.json(teamindiaarr);
});
app.get("/teamengland", (re, res) => {
  let teamenglandarr = ["jos butler", "ben stockes", "malan", "joe root"];
  res.json(teamenglandarr);
});

app.get("/players", (req, res) => {
  let virat = {
    name: "virat kohi",
    nation: "India",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg/220px-Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg",
  };
  let butler = {
    name: "jos butler",
    nation: "england",
    pic: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Jos_Buttler_2017.jpg/220px-Jos_Buttler_2017.jpg",
  };

  let playersarr = [virat, butler];
  res.json(playersarr);
});

app.listen(2001, () => {
  console.log("listening to port");
});
