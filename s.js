
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
let token = Helper.generateHash(txtTH);
let User      = require('./us');
let UserInfo  = require('./cl');
