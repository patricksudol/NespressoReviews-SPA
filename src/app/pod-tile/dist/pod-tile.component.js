"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PodTileComponent = void 0;
var core_1 = require("@angular/core");
var PodTileComponent = /** @class */ (function () {
    function PodTileComponent() {
    }
    PodTileComponent.prototype.ngOnInit = function () {
    };
    PodTileComponent.prototype.onRate = function ($event) {
        alert("Old Value:" + $event.oldValue + ",\n      New Value: " + $event.newValue + ",\n      Checked Color: " + $event.starRating.checkedcolor + ",\n      Unchecked Color: " + $event.starRating.uncheckedcolor);
    };
    PodTileComponent = __decorate([
        core_1.Component({
            selector: 'app-pod-tile',
            templateUrl: './pod-tile.component.html',
            styleUrls: ['./pod-tile.component.scss']
        })
    ], PodTileComponent);
    return PodTileComponent;
}());
exports.PodTileComponent = PodTileComponent;
