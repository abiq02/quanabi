console.log("aBi");
let bcrypt   = require('bcrypt');

let mongoose = require('mongoose');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
let MONGODB= 'mongodb+srv://Herokumongodb-svgame:quanphan102@cluster0.aogv1ny.mongodb.net/?retryWrites=true&w=majority';
let configDB = require('./mgo');
mongoose.connect(MONGODB, configDB.options); // kết nối tới database
let bpassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)
}
let client= " aBi ";
let bot = [52];
       let txtTH = new Date()+'';
       let token = bpassword(txtTH);

function taobot(i){
       username='gameid' + i;
       username = username.toLowerCase();
       let User      = require('./us');
       let UserInfo  = require('./cl');

       password='12345678';
       name='botgame' + i;
       User.create({'local.username':username, 'local.password':bpassword(password), 'local.regDate': new Date()}, function(err, user){
          if (!!user){
           client= user._id.toString();
           bot[i] = client
           console.log("OK " + client);}
                 });
       
       console.log("OK "+i +bot[i]);
       time();
}
function usinfo(i){
name='botgame' + i;
UserInfo.create({'id':bot[i], 'name':name, 'joinedOn':new Date(),'red':999999999999,'type':true}, function(errC, user){
             console.log("OK name" + name +errC);
      });
}
function time(){
console.log("sleep");
}
for(let i=0;i<= 52;i++){
      taobot(i);
      usinfo(i);
}

