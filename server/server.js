const express = require ('express')
const app = express()

app.get("/api",(re,res) =>{
    res.json(
        {
            "users": ["userOne", "userTwo", "userThree", "userFour", "userFive", "userSix", "userSeven", "userEight", "userNine"]
        }
    )
})

app.listen(5000,() => {console.log("server started on port 5000")})