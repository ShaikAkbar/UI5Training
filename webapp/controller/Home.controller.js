sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.total.demoHelloWorld.controller.Home", {
				/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
			onInit: function() {
				var oModel = new JSONModel({
					TraineeList:[
						{FName: 'Akbar', LName: 'Shaik', EmpId:'12345' },
						{FName: 'Kishan', LName: 'Panara', EmpId:'12346' },
						{FName: 'Rajat', LName: 'Chaurasia', EmpId:'12347' },
						{FName: 'Anant', LName: 'Pai', EmpId:'12348' }
						],
					InputValue:"Anant",
					InputValue1:"Anant1"
						
				});
				//this.getView().setModel(oModel,"ViewModel");
				this.getView().setModel(oModel);
			},
			
			onGetDetails: function(){
				alert(1);
			}
	});
});