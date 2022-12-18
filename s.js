let bcrypt   = require('bcrypt');

let mongoose = require('mongoose');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
let MONGODB= 'mongodb+srv://Herokumongodb-svgame:quanphan102@cluster0.aogv1ny.mongodb.net/?retryWrites=true&w=majority';
let configDB = require('./mgo');
mongoose.connect(MONGODB, configDB.options); // kết nối tới database
username='a1234556';
username = username.toLowerCase();

password='12345678';
name='@123456';
let txtTH = new Date()+'';
//let token = bcrypt.hashSync(txtTH, bcrypt.genSaltSync(12), null);
let User      = require('./us');
let UserInfo  = require('./cl');

User.create({'local.username':username, 'local.password':password, 'local.regDate': new Date()}, function(err, user){
client= '1'//user._id.toString();

UserInfo.create({'id':client, 'name':name, 'joinedOn':new Date()}, function(errC, user){

});
});
console.log("OK");
