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
 *	infragistics.ui.grid.sorting.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igTreeGridSorting",$.ui.igGridSorting,{css:{},options:{fromLevel:0,toLevel:-1},_create:function(){this.element.data($.ui.igGridSorting.prototype.widgetName,this.element.data($.ui.igTreeGridSorting.prototype.widgetName));$.ui.igGridSorting.prototype._create.apply(this,arguments)},isColumnSorted:function(columnKey){var i,se=this.grid.dataSource.settings.sorting.expressions;if(!se||!columnKey||!se.length){return false}for(i=0;i<se.length;i++){if(se[i].fieldName===columnKey){return se[i].isSorting}}return false},_rowExpanded:function(){var i,j,colKey,cs,col,found;for(i=0;i<this.options.columnSettings.length;i++){j=0;found=false;cs=this.options.columnSettings[i];colKey=cs.columnKey;for(j=0;j<this.grid._visibleColumns().length;j++){if(this.grid._visibleColumns()[j].key===colKey){col=$("#"+this.grid.element[0].id+"_"+colKey);if(this.isColumnSorted(colKey)&&this.options.applySortedColumnCss!==false){this._applySortStyles(col,col.data("columnIndex"),colKey)}break}}}},destroy:function(){$.ui.igGridSorting.prototype.destroy.apply(this,arguments);this.element.removeData($.ui.igGridSorting.prototype.widgetName)},_injectGrid:function(){var ds;$.ui.igGridSorting.prototype._injectGrid.apply(this,arguments);ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.treeDS.sorting.fromLevel=this.options.fromLevel;ds.settings.treeDS.sorting.toLevel=this.options.toLevel}}});$.extend($.ui.igTreeGridSorting,{version:"15.1.20151.1005"})})(jQuery);