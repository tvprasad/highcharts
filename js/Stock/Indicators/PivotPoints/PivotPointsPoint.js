/* *
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* *
 *
 *  Imports
 *
 * */
import BaseSeries from '../../../Core/Series/Series.js';
var SMAIndicator = BaseSeries.seriesTypes.sma;
import PivotPointsIndicator from './PivotPointsIndicator';
import U from '../../../Core/Utilities.js';
var extend = U.extend;
/* eslint-disable valid-jsdoc */
/**
 * @private
 */
function destroyExtraLabels(point, functionName) {
    var props = point.series.pointArrayMap, prop, i = props.length;
    BaseSeries.seriesTypes.sma.prototype.pointClass.prototype[functionName].call(point);
    while (i--) {
        prop = 'dataLabel' + props[i];
        // S4 dataLabel could be removed by parent method:
        if (point[prop] && point[prop].element) {
            point[prop].destroy();
        }
        point[prop] = null;
    }
}
/* eslint-enable valid-jsdoc */
/* *
 *
 *  Class
 *
 * */
var PivotPointsPoint = /** @class */ (function (_super) {
    __extends(PivotPointsPoint, _super);
    function PivotPointsPoint() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PivotPointsPoint.prototype.destroyElements = function () {
        destroyExtraLabels(this, 'destroyElements');
    };
    // This method is called when removing points, e.g. series.update()
    PivotPointsPoint.prototype.destroy = function () {
        destroyExtraLabels(this, 'destroyElements');
    };
    return PivotPointsPoint;
}(SMAIndicator.prototype.pointClass));
extend(PivotPointsIndicator.prototype, {
    pointClass: PivotPointsPoint
});
/* *
 *
 *  Default Export
 *
 * */
export default PivotPointsPoint;