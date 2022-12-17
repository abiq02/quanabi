
let UserInfo  = require('./cl');
let mongoose = require('mongoose');
let User      = require('./us');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
let MONGODB= 'mongodb+srv://Herokumongodb-svgame:quanphan102@cluster0.aogv1ny.mongodb.net/?retryWrites=true&w=majority';
mongoose.connect(MONGODB, {
		'dbName': 'RVIP', // red
		'useNewUrlParser': true,
		'useUnifiedTopology': true,
}); // kết nối tới database
username='a1234556';
username = username.toLowerCase();

password='12345678';
name='@123456';
let txtTH = new Date()+'';
let token = Helper.generateHash(txtTH);
User.create({'local.username':username, 'local.password':helpers.generateHash(password), 'local.regDate': new Date()}, function(err, user){
client.UID = user._id.toString();
}); 
UserInfo.create({'id':client.UID, 'name':name, 'joinedOn':new Date(),'red':'9999999999','typ':'true'});
