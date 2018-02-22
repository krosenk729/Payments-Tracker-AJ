angular.module('paymentTracker')
.component('paymentAdder', {
	templateUrl: 'payment-adder/payment-adder.template.html',
	bindings: {
		payment: '<',
		addPayment: '&'
	},
	controller: function PaymentAdderController($http){
		this.freqoptions = [];
		this.ampmoptions = [];
		$http.get('common/data-options.json').then((data) => {
			this.freqoptions = data.data.freqoptions;
			this.ampmoptions = data.data.ampmoptions;
		});
		this.payment = {};

		this.add = ()=>{
			// Need to add validation for fields
			this.addPayment({payment: this.payment});
			this.payment = {
				'store': '',
				'cost': '',
				'freq': 'Monthly',
				'date': new Date(),
				'time': 11, 
				'ampm': 'AM'
			};
		}

		this.$onInit = ()=>{
			this.payment = {
				'store': '',
				'cost': '',
				'freq': 'Monthly',
				'date': new Date(),
				'time': 10, 
				'ampm': 'AM'
			};
		}
	}
});