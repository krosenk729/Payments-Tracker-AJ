angular.module('paymentTracker')
.component('paymentDetail', {
	templateUrl: 'payment-detail/payment-detail.template.html',
	bindings: {
		payment: '=',
		onDelete: '&',
		onUpdate: '&'
	},
	controller: function PaymentDetailController($http){
		this.freqoptions = [];
		this.ampmoptions = [];
		$http.get('common/data-options.json').then((data) => {
			this.freqoptions = data.data.freqoptions;
			this.ampmoptions = data.data.ampmoptions;
		});

		this.delete = ()=>{
			console.log('child delete press...', this.payment);
			this.onDelete({payment: this.payment});
		}

		this.update = (col, val)=>{
			console.log('child update...', col, val, this.payment);
			this.onUpdate({payment: this.payment, col: col, val: val});
		}
	}
});