const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
const LocalStrategy = require("passport-local");
const ThisUser = require("../models/thisuser-model");
const bcrypt = require("bcrypt");

passport.serializeUser((user, done) => {
  console.log("serializeUser 使用者....");
  done(null, user._id); //將mongodb的id,存在session並且將id簽名後,以cookie的形式給使用者...
});
passport.deserializeUser(async (_id, done) => {
  console.log("deserializeUser 使用者.....");
  let foundUser = await ThisUser.findOne({ _id }).exec();
  done(null, foundUser); //將req.user 這個屬性設定為founduser
});

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL:
        "https://project-google-oauth.onrender.com/auth/google/redirect",
    },
    async (accessToken, refreshToken, profile, done) => {
      let foundUser = await ThisUser.findOne({ googleID: profile.id }).exec();
      if (foundUser) {
        console.log("使用者已經註冊過了.無須存入資料庫內.");
        done(null, foundUser);
      } else {
        console.log("偵測到新用戶.須將資料存入資料庫內");
        let newUser = new ThisUser({
          name: profile.displayName,
          googleID: profile.id,
          thumbnail: profile.photos[0].value,
          email: profile.emails[0].value,
        });
        let savedUser = await newUser.save();
        console.log("成功創建新用戶");
        done(null, savedUser);
      }
    }
  )
);
passport.use(
  new LocalStrategy(async (username, password, done) => {
    let foundUser = await ThisUser.findOne({ email: username }).exec();
    console.log(foundUser);
    if (foundUser) {
      let result = await bcrypt.compare(password, foundUser.password);
      if (result) {
        done(null, foundUser);
      } else {
        done(null, false);
      }
    } else {
      done(null, false);
    }
  })
);
