const express = require("express");
const userRouter = require("./routes/user");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Back End Home")
});

const PORT = 4000;
app.use("/api/user", userRouter);

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::ROUTES:::::::::::::::::::::::::::::::::::::::
//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::






//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

app.listen(PORT, ()=>{
  console.log(`PORT ${PORT} IS ON`);
});
