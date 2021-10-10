var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/main");

var app = express();
app.use(express.json());  //req.body 사용할 때 
app.use(express.urlencoded({extends: true}));

// Schema 연결
var { User } = require("./models/User");
var { Board} = require("./models/board");

// Router 연결
var {boardRouter}  = require("./routes/boardRoute");
var {userRouter} = require("./routes/userRoute");
var {commentRouter} = require("./routes/commentRoute");

app.use("/board", boardRouter);
app.use("/user", userRouter);
app.use("/board/:boardId/comment", commentRouter);

app.listen(3000, () => {

    try{
        console.log("server conneted");
    }catch(err)
    {
        console.log("disconneted");
    }
});




