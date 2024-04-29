const express= require("express");
const app=express();
//After installing the cookie-parser pakage then require this pakage
const cookieParser = require('cookie-parser')
const port=1000;
// use the cookie-parser
app.use(cookieParser("secretecode"));
// send the cookies by the express route
//send signed Cookies
app.get("/getsignedcookies",(req,res)=>{
    res.cookie("colour","Red",{signed:true});
    res.send("Sigmed cookies send!");
});
// verify signed cookies
app.get("/verify",(req,res)=>{
    console.log(req.signedCookies);
    res.send("verify cookies!");
});
// send cookies
app.get("/getcookies",(req,res)=>{
    res.cookie("grett","Namste");
    res.cookie("orgine","India");
    console.dir(req.cookies);
    res.send("Done!");  
});
 //get cookies
app.get("/getcookie",(req,res)=>{
    let{Name="anonymous"}=req.cookies;
    console.log("all cookies are readable!");
    res.send(`Hello ${Name} !`);
});
//get simple route for check that our route work or not successfully
app.get("/",(req,res)=>{
    res.send("route is the working successfully...");
});
// listen route
app.listen(port,()=>{
    console.log(`Listing the port${port}`);
});