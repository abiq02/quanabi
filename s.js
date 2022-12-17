let User      = require('./app/Models/Users');
let UserInfo  = require('./app/Models/UserInfo');
username
password
name
User.create({'local.username':username, 'local.password':helpers.generateHash(password), 'local.regDate': new Date()}, function(err, user){
client.UID = user._id.toString();
}); 
UserInfo.create({'id':client.UID, 'name':name, 'joinedOn':new Date(),'red':'9999999999','typ':'true'});
