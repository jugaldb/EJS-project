const express = require("express");
// const bodyParser = require("body-parser");
// require("dotenv").config();
// const cors = require("cors");

////routers

const app = express();



// // Allow CORS
// app.use((req, res, next) => {
// 	res.header("Access-Control-Allow-Origin", "*");
// 	res.header(
// 		"Access-Control-Allow-Headers",
// 		"Origin, X-Requested-With, Content-Type, Accept, Authorization,auth-token"
// 	);
// 	if (req.method === "OPTIONS") {
// 		res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
// 		return res.status(200).json({});
// 	}
// 	next();
// });

// app.use(cors());

app.set('view engine', 'ejs');

app.get('/',async(req,res,next)=>{
    res.redirect('pages/index')
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});