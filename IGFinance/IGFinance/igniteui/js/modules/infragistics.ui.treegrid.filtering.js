/*!@license
 * Infragistics.Web.ClientUI Tree Grid 15.1.20151.1005
 *
 * Copyright (c) 2011-2015 Infragistics Inc.
 *
 * http://www.infragistics.com/
 *
 * Depends on:
 *	jquery-1.4.4.js
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	infragistics.dataSource.js
 *	infragistics.ui.shared.js
 *	infragistics.ui.treegrid.js
 *	infragistics.util.js
 *	infragistics.ui.grid.framework.js
 *	infragistics.ui.grid.filtering.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){var _aNull=function(val){return val===null||val===undefined};$.widget("ui.igTreeGridFiltering",$.ui.igGridFiltering,{css:{recordMatchFiltering:"ig-igtreegrid-filter-matching-row",cellMatchFiltering:"ig-igtreegrid-filter-matching-cell",recordNotMatchFiltering:"ui-igtreegrid-record-not-matchfiltering"},options:{fromLevel:0,toLevel:-1,displayMode:"showWithAncestors",matchFiltering:"__matchFiltering"},_create:function(){this.element.data($.ui.igGridFiltering.prototype.widgetName,this.element.data($.ui.igTreeGridFiltering.prototype.widgetName));$.ui.igGridFiltering.prototype._create.apply(this,arguments)},_transformCss:function(cssClass,dataRow){var matchFiltering,grid=this.grid,ds=grid.dataSource;if(this._gridTransformCssCallback){cssClass=this._gridTransformCssCallback.apply(grid,arguments)}if(this._filteringApplied()){matchFiltering=ds.settings.treeDS.filtering.matchFiltering;if(cssClass!==""){cssClass+=" "}if(!_aNull(matchFiltering)){if(dataRow[matchFiltering]){cssClass+=this.css.recordMatchFiltering}else{cssClass+=this.css.recordNotMatchFiltering}}}return cssClass},_filteringApplied:function(){var ds=this.grid.dataSource,expr=ds.settings.filtering.expressions;if(this.options.type==="local"){return ds._filter}return expr&&expr.length},getFilteringMatchesCount:function(){var o=this.options,ds=this.grid.dataSource,matches;if(o.type==="local"||o.type==="remote"&&ds.hasTotalRecordsCount()===false){if(ds._filter){matches=ds.getFilteredRecordsCount()}else{matches=ds.flatDataView().length}}else{matches=ds.totalRecordsCount()}return matches},destroy:function(){$.ui.igGridFiltering.prototype.destroy.apply(this,arguments);this.element.removeData($.ui.igGridFiltering.prototype.widgetName)},_injectGrid:function(gridInstance,isRebind){var ds,fDSSettings=this.options;$.ui.igGridFiltering.prototype._injectGrid.apply(this,arguments);if(!isRebind){if(this.grid._transformCssCallback){this._gridTransformCssCallback=this.grid._transformCssCallback}this.grid._transformCssCallback=$.proxy(this._transformCss,this)}ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.filtering.enabled=true;ds.settings.treeDS.filtering.fromLevel=fDSSettings.fromLevel;ds.settings.treeDS.filtering.toLevel=fDSSettings.toLevel;ds.settings.treeDS.filtering.displayMode=fDSSettings.displayMode;ds.settings.treeDS.filtering.matchFiltering=fDSSettings.matchFiltering}}});$.extend($.ui.igTreeGridFiltering,{version:"15.1.20151.1005"})})(jQuery);