let bcrypt   = require('bcrypt');

let mongoose = require('mongoose');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
let MONGODB= 'mongodb+srv://Herokumongodb-svgame:quanphan102@cluster0.aogv1ny.mongodb.net/?retryWrites=true&w=majority';
let configDB = require('./mgo');
mongoose.connect(MONGODB, configDB.options); // kết nối tới database
username='abi123456';
username = username.toLowerCase();

password='12345678';
name='aBi';
let txtTH = new Date()+'';
//let token = bcrypt.hashSync(txtTH, bcrypt.genSaltSync(12), null);
let User      = require('./us');
let UserInfo  = require('./cl');
let bpassword = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(12), null)
}
User.create({'local.username':username, 'local.password':bpassword(password), 'local.regDate': new Date()}, function(err, user){
let client= user._id.toString();
UserInfo.create({'id':client, 'name':name, 'joinedOn':new Date(),'red':999999999999,'rights':'1'}, function(errC, user){

});
});
console.log("OK");
