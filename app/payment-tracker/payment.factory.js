angular.module('paymentTracker')
.factory('PaymentService', function PaymentService(){
	CB.CloudApp.init('mvkiypiqqpzh','4f3d2d85-bb0a-43da-a283-5c4a26af7adf');
	let query = new CB.CloudQuery('User');
	let user = {};
	let uid = 'GxB4mDDO';
	query.get(uid, {
		success: (response)=>{
			user = response;
			console.log('Got user from cloud ', user);
		},
		error: (err)=>{
			console.log('Unable to get user + error ', err);
		}
	});

	return {
		getPayments: ()=>{
			if(!user){ return ;}
			let blockuser = {};
			let payments = [];
			let blockuserquery = new CB.CloudQuery('User');
			blockuserquery.get('GxB4mDDO', {
				success: (r)=>{ 
					blockuser = r;
					console.log('blockuser', blockuser);
					let query = new CB.CloudQuery('payments');
					query.equalTo('userid', blockuser);
					query.find({
						success: (response)=>{
							console.log('Got payments from cloud for ', blockuser, response);
							payments = response.map((i)=>i.document);
						},
						error: (err)=>{
							console.log('Unable to get payments + error ', err);
						}
					});
				}
			});
			// let payments = [];
			// let query = new CB.CloudQuery('payments');
			// // query.equalTo('userid', user);
			// query.equalTo('userid', blockuser);
			// query.find({
			// 	success: (response)=>{
			// 		console.log('Got payments from cloud for ', blockuser, response);
			// 		payments = response.map((i)=>i.document);
			// 	},
			// 	error: (err)=>{
			// 		console.log('Unable to get payments + error ', err);
			// 	}
			// });
			return payments;
		},

		subscribePayments: (f)=>{
			if(!f){ f = getPayments(); }
			CB.CloudObject.on('payments', 'created', f);
			CB.CloudObject.on('payments', 'updated', f);
			CB.CloudObject.on('payments', 'deleted', f);
			return console.log('Subscribed to payment updates');
		},

		updatePayment: (payment, key, val)=>{
			if(!user || !payment._id){ return ;}
			let obj = new CB.CloudObject('payments', payment._id);
			obj.set(key, val);
			obj.save({
				success: (response)=>{
					console.log('Updated payment ', response);
				},
				error: (err)=>{
					console.log('Unable to update payment + error ', err);
				}
			});
		},

		deletePayment: (payment)=>{
			if(!user || !payment._id){ return ;}
			let obj = new CB.CloudObject('payments', payment._id);
			obj.delete({
				success: (response)=>{
					console.log('Deleted payment ', response);
				},
				error: (err)=>{
					console.log('Unable to delete payment + error ', err);
				}
			});
			
		},

		addPayment: (payment)=>{
			if(!user || !payment){ return ;}
			let newid;
			let obj = new CB.CloudObject('payments');
			obj.relate('Userid', 'User', user.id); 
			obj.set('Store', payment.store); 
			obj.set('Desc',  payment.desc); 
			obj.set('Cost',  payment.cost); 
			obj.set('Freq',  payment.freq); 
			obj.set('Date',  payment.date); 
			obj.set('Time',  payment.time); 
			obj.set('AMPM',  payment.ampm);
			obj.save({
				success: (response) => {
					newid = response.document._id;
					console.log('New payment saved ', response);
				}, 
				error: (err) => {
					console.log('Not able to save new payment + error ', err);
				}
			});
			return newid;
		}
	}
});