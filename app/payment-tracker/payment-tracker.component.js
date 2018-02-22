angular.module('paymentTracker')
.component('paymentTracker', {
	templateUrl: 'payment-tracker/payment-tracker.template.html',
	controller: ['$http', '$routeParams', 'PaymentService',
	function PaymentTracerController($http, $routeParams, PaymentService){
			this.uid = $routeParams.uid;
			this.payments = [];
			$http.get('common/mock-payments.json').then((data) => {
				this.payments = data.data;
				console.log('this.payments ', this.payments);
			});

			this.addPayment = (payment)=>{
				console.log('add payment', payment);
				return '';
			}

			this.updatePayment = (payment, col, val)=>{
				console.log('update payment', payment);
				PaymentService.updatePayment(payment, col, val);
			}
			this.deletePayment = (payment)=>{
				console.log('... parent delete payment', payment);
				PaymentService.deletePayment(payment);
			}

			this.$onInit = ()=>{
				this.payments = PaymentService.getPayments();
			}

		}
	]
});