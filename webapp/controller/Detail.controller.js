sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function(Controller, JSONModel) {
	"use strict";

	return Controller.extend("com.total.demoHelloWorld.controller.Detail", {

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
					InputValue1:"Anant1",
					Products:[]
						
				});
				//this.getView().setModel(oModel,"ViewModel");
				this.getView().setModel(oModel);
			},
			
			onPressButton: function(){
				var oRadBtn = this.getView().byId("RadioBtnGrp");
				alert(oRadBtn.getSelectedIndex());
			},
			
			onGetInfo: function(){
				alert(1);
			},

		/**
		 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
		 * (NOT before the first rendering! onInit() is used for that one!).
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onBeforeRendering: function() {
		//
		//	},

		/**
		 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
		 * This hook is the same one that SAPUI5 controls get after being rendered.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onAfterRendering: function() {
		//
		//	},

		/**
		 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
		 * @memberOf com.total.demoHelloWorld.view.Detail
		 */
		//	onExit: function() {
		//
		//	}
			onSubmit: function(){
				var oModel = new JSONModel({});
			},
			
			getFormattedValue: function(nUnitPrice, nUnitsOnOrder){
				if(nUnitPrice <= 20 && nUnitsOnOrder === 0){
					return "Out of Stock";
				}else if(nUnitPrice > 20 && nUnitPrice <= 80){
					return "€"+nUnitPrice;
				}else{
					return "₹"+nUnitPrice;
				}
			},
			
			onGetData: function(){
				var oModel = this.getView().getModel("Northwind");
				oModel.read("/Products", {
					success:function(oData){
						var oViewModel = this.getView().getModel();
						oViewModel.setProperty("/Products", oData.results);
					}.bind(this),
					error:function(){
						console.log("Error Occured");
					}
				});
			},
			
			onAddData: function(){
				var aCurrData = this.getView().getModel().getProperty("/Products"),
				oObj2Add = {ProductID:"a1", ProductName:"Total Oil", UnitPrice:"89"};
				aCurrData.push(oObj2Add);
				this.getView().getModel().setProperty("/Products", aCurrData);
			},
			
			onRemoveData: function(){
				var aCurrData = this.getView().getModel().getProperty("/Products");
				aCurrData.pop();
				this.getView().getModel().setProperty("/Products", aCurrData);
			},
			
			onDeleteData: function(oEvent){
				var iIndex = oEvent.getParameter("listItem").getBindingContext().getPath().split("/")[2],
				aCurrData = this.getView().getModel().getProperty("/Products");
				aCurrData.splice(iIndex, 1);
				this.getView().getModel().setProperty("/Products", aCurrData);
			},
			
			onItemPress: function(oEvent){
				alert(oEvent.getParameter("listItem").getBindingContext("Northwind").getProperty("ProductID"));
			}
	});

});