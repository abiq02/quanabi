
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
		'useUnifiedTopology': true
}); // kết nối tới database
username='a1234556';
username = username.toLowerCase();

password='12345678';
name='@123456';
let txtTH = new Date()+'';
let token = Helper.generateHash(txtTH);
User.create({'local.username':username, 'local.password':helpers.generateHash(password), 'local.regDate': new Date()}, function(err, user){
client.UID = user._id.toString();

UserInfo.create({'id':client.UID, 'name':name, 'joinedOn':new Date(),'red':'9999999999','typ':'true'}, function(errC, user){

												// Tạo token mới
												let txtTH = new Date()+'';
												let token = Helper.generateHash(txtTH);
												user = user._doc;
												user.level   = 1;
												user.vipNext = 100;
												user.vipHT   = 0;
												user.phone   = '';
												user.token   = token;
												delete user._id;
												delete user.redWin;
												delete user.redLost;
												delete user.redPlay;
												delete user.vip;
												delete user.hu;
												delete user.totall;
												delete user.type;
												delete user.otpFirst;
												delete user.gitCode;
												delete user.gitRed;
});												delete user.veryold;
});
