let User      = require('./app/Models/Users');
let UserInfo  = require('./app/Models/UserInfo');
username='a1234556';
password='12345678';
name='@123456';
let txtTH = new Date()+'';
let token = Helper.generateHash(txtTH);
User.create({'local.username':username, 'local.password':helpers.generateHash(password), 'local.regDate': new Date()}, function(err, user){
client.UID = user._id.toString();
}); 
UserInfo.create({'id':client.UID, 'name':name, 'joinedOn':new Date(),'red':'9999999999','typ':'true'});
