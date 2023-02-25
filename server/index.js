require('dotenv').config()
const express = require("express");
const bodyparser =  require("body-parser");
const ejs =  require("ejs");
const mongoose = require("mongoose");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate');

const app=express();

app.use(bodyparser.urlencoded({extended:true}));
// app.set('view engine', 'ejs');
// app.use(express.static("public"));

app.use(session({
  secret:"this is our test",
  resave: false,
  saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/info",
    userProfileURL: "https://www.googleapis.com/oauth2/v2/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));

// LinkedInStrategy start

const LinkedInStrategy = require("passport-linkedin-oauth2").Strategy;
passport.use(new LinkedInStrategy({
  clientID: "77x8gvcpdy6i9s",
  clientSecret: "g7klG683oe7vJknr",
  callbackURL: "https://localhost:3000/auth/linkedin/info",
  scope: ['r_emailaddress', 'r_liteprofile'],
}, function(accessToken, refreshToken, profile, done) {
  // asynchronous verification, for effect...
  process.nextTick(function () {
    // To keep the example simple, the user's LinkedIn profile is returned to
    // represent the logged-in user. In a typical application, you would want
    // to associate the LinkedIn account with a user record in your database,
    // and return that user instead.
    return done(null, profile);
  });
}));
app.get('/auth/linkedin',
  passport.authenticate('linkedin', { state: 'SOME STATE'  }),
  function(req, res){
    // The request will be redirected to LinkedIn for authentication, so this
    // function will not be called.
  });
  app.get('/auth/linkedin/info', passport.authenticate('linkedin', {
  successRedirect: '/info',
  failureRedirect: '/login'
}));
app.get("/info", function(req,res){
  // res.sendFile(__dirname + "callback.html")
  // res.render("info")
  res.status(201).json({ message: "user  registered successfuly"});
});

// LinkedInStrategy ends


mongoose.connect("mongodb+srv://priyanshurajroy02659:Hail9898@cluster0.tgdszbr.mongodb.net/userDB");

const userSchema = new mongoose.Schema ({
  name:String,
  password:String,
  googleId:String,
  phone:String,
  startupname:String,
  problem:String,
  share:String,
  about:String,
  panno:String,
  additionalinfo:String,
  username:String,
  ureview:String,
  ask:String,
  experience:String,
  country:String,
  tier:String,
  patent:String

});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


const User = new mongoose.model("User" ,userSchema);

passport.use(User.createStrategy());

passport.serializeUser(function(user, done){
    done(null, user.id);
});

passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        done(err, user);
    });
});


app.get("/", function(req,res){
  res.render("home")
});

app.get("/register", function(req,res){
  res.render("register")
});


app.get("/auth/google",
  passport.authenticate('google' , {
    scope: [ 'profile' , 'email']
  })
);

app.get("/auth/google/info",
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    // res.redirect('/info');
    res.status(201).json({ message: "user  registered successfuly"});
  });


  app.get("/login", function(req,res){
    // res.render("login")
    res.status(201).json({ message: "user  registered successfuly"});
  });


  app.post("/register",function(req,res){
  User.register({username:req.body.username,name:req.body.name,phone:req.body.phone},req.body.password,function(err,user){
    if (err) {
      console.log(err);
    } else {
      passport.authenticate("local")(req,res,function(){
        res.redirect("/iinfo");
        // res.status(201).json({ message: "user  registered successfuly"});
      });
    }
  });
  });

  // app.post('/api/login', passport.authenticate('local'), (req, res) => {
  //   // If authentication is successful, return the user object
  //   res.json(req.user);
  // });

  app.post("/login",(req,res)=>{

  const user = new User ({
    username:req.body.username,
    password:req.body.password
  })
    req.login(user,function(err){
      if (err) {
        console.log(err);
      } else {
        passport.authenticate("local"), (req,res,function(){
          res.redirect("/info");
          // res.status(201).json({ message: "user registered successfuly" });
        });
      }
    });
});

app.get("/info", function(req,res){
  // res.render("info")
  res.status(201).json({ message: "user info  rendered successfuly"});
});

app.get("/review", function(req,res){
  // res.render("review")
  res.status(201).json({ message: "review1 registered successfuly"});
});

const Review = new mongoose.model("Review", userSchema )

app.post("/review", function(req,res){

 const review = new Review ({
   username:req.body.username,
   ureview:req.body.ureview
 })

 review.save(function(err){
   if(!err){
     res.redirect("/post")
   }
 });
  });

  app.get("/post", function(req,res){

    Review.find({},function(err,posts){
    res.render("post", {posts:posts})
  })
 });

 app.get("/post", function(req,res){
   // res.render("post")
   res.status(201).json({ message: "user 2 registered successfuly" });

 });

 app.get("/success", function(req,res){
   // res.render("success")
   res.status(201).json({ message: "user 3 registered successfuly" });
 });

 app.get("/finfo", function(req,res){
   // res.render("finfo")
   res.status(201).json({ message: "user 3 registered successfuly" });
 });

 const Finfo = mongoose.model("Finfo", userSchema);

 app.post("/finfo", function(req,res){

  const finfo = new Finfo ({
    startupname:req.body.startupname,
    problem:req.body.problem,
    ask:req.body.ask,
    about:req.body.about,
    additionalinfo:req.body.additionalinfo,
    panno:req.body.panno,
    patent:req.body.patent
  })

  finfo.save(function(err){
    if(!err){
      // res.redirect("/success")
      res.status(201).json({ message: "user 4 registered successfuly" });
    }
  });
});

app.get("/iinfo", function(req,res){
  // res.render("iinfo")
  res.status(201).json({ message: "user 5 registered successfuly" });
});

const Iinfo = mongoose.model("Iinfo", userSchema);

app.post("/iinfo", function(req,res){

 const iinfo = new Iinfo ({
   experience:req.body.experience,
   country:req.body.country,
   tier:req.body.tier,
   income:req.body.income,
   panno:req.body.panno
 })

 iinfo.save(function(err){
   if(!err){
     // res.redirect("/success")
     res.status(201).json({ message: "user 5 registered successfuly" });
   }
 });
});








app.listen(8000,function(){
  console.log("server initiated on port 8000")
});
