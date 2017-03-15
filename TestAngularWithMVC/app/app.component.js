"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var products_1 = require('./products');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'Angular';
        this.gridData = products_1.products;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n            <kendo-grid [data]=\"gridData\" [height]=\"370\">\n            <kendo-grid-column field=\"ProductID\" title=\"ID\" width=\"40\"></kendo-grid-column>\n            <kendo-grid-column field=\"ProductName\" title=\"Name\" width=\"250\"></kendo-grid-column>\n            <kendo-grid-column field=\"Category.CategoryName\" title=\"Category\"></kendo-grid-column>\n            <kendo-grid-column field=\"UnitPrice\" title=\"Price\" width=\"80\"></kendo-grid-column>\n            <kendo-grid-column field=\"UnitsInStock\" title=\"In stock\" width=\"80\"></kendo-grid-column>\n            <kendo-grid-column field=\"Discontinued\" title=\"Discontinued\" width=\"120\">\n                <template kendoGridCellTemplate let-dataItem>\n                    <input type=\"checkbox\" [checked]=\"dataItem.Discontinued\" disabled />\n                </template>\n            </kendo-grid-column>\n            </kendo-grid>\n            ",
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map