let User      = require('Users');
let UserInfo  = require('cl');
let mongoose = require('mongoose');
require('mongoose-long')(mongoose); // INT 64bit
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex',   true);
mongoose.connect(process.env.MONGODB_URL, {
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
