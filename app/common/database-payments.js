// https://github.com/CloudBoost/developers/blob/master/tutorials/en/gettingstarted/yourfirstapp.md
const dotenv = require('dotenv').config();
const keys = require('./keys.js');
const CB = require('cloudboost');

// CB.CloudApp.init(keys.CB.id, keys.CB.secret);
CB.CloudApp.init('mvkiypiqqpzh','4f3d2d85-bb0a-43da-a283-5c4a26af7adf');

/* Set up table  */
/*
let table = new CB.CloudTable('payments');
let col_userid = new CB.Column('Userid', 'Relation', true, false);
  col_userid.relatedTo = 'User';
let col_store = new CB.Column('Store', 'Text', true, false);
let col_desc = new CB.Column('Desc', 'Text', false, false);
let col_cost = new CB.Column('Cost', 'Number', true, false);
let col_freq = new CB.Column('Freq', 'Text', true, false);
let col_date = new CB.Column('Date', 'Text', true, false);
let col_time = new CB.Column('Time', 'Number', true, false);
let col_ampm = new CB.Column('AMPM', 'Text', true, false);

table.addColumn(col_userid); 
table.addColumn(col_store); 
table.addColumn(col_desc); 
table.addColumn(col_cost); 
table.addColumn(col_freq); 
table.addColumn(col_date); 
table.addColumn(col_time); 
table.addColumn(col_ampm); 

table.save().then(function(response){
    console.log('Added table response: ', response);
},function(err){
    console.log('Nope ', err);
});
*/

/* Insert Data */
/*
let newpayment = new CB.CloudObject('payments');
newpayment.relate('Userid', 'User', 'DrtQirSQ'); 
newpayment.set('Store', 'test'); 
newpayment.set('Desc', 'test'); 
newpayment.set('Cost', 50); 
newpayment.set('Freq', 'Yearly'); 
newpayment.set('Date', '2018-03-1'); 
newpayment.set('Time', 11); 
newpayment.set('AMPM', 'AM');

newpayment.save({
  success: (response) => {
    console.log('yayy ', response);
  }, 
  error: (err) => {
    console.log('error ', err);
  }
});
*/

/* Get Data */

// let query = new CB.CloudQuery('payments');
let user = new CB.CloudUser();
user.set('username', 'testuser');
user.set('password', 'password1');
user.logIn({
  success: (user) => {
    console.log('Yayy ', user);
  },
  error: (err) => {
    console.log('Oh no ', err);
  }
});
/*user.set('username', 'testuser');
user.set('password', 'my_solid_password');
user.set('email', 'email@sample.com');
CB.CloudUser._setCurrentUser(user);

query.notEqualTo('Userid', {_id: 'DrtQirSQ'});
query.selectColumn(['Userid']);
query.find({
  success: (response) => {
    console.log('yayy ', response);
  }, 
  error: (err) => {
    console.log('error ', err);
  }
});*/


/*var eventObj = new CB.CloudEvent.track("Signup",{ 
    username: thisObj.username,
    email: thisObj.email},{
    success: function(eventObj) {
        //Gets Event Object
    },
    error: function(err) {
        //error in geting Event Object
    }});*/