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
 *	infragistics.ui.grid.paging.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igTreeGridPaging",$.ui.igGridPaging,{css:{},options:{mode:"rootLevelOnly"},_create:function(){this.element.data($.ui.igGridPaging.prototype.widgetName,this.element.data($.ui.igTreeGridPaging.prototype.widgetName));$.ui.igGridPaging.prototype._create.apply(this,arguments)},destroy:function(){$.ui.igGridPaging.prototype.destroy.apply(this,arguments);this.element.removeData($.ui.igGridPaging.prototype.widgetName)},_injectGrid:function(){var ds;$.ui.igGridPaging.prototype._injectGrid.apply(this,arguments);ds=this.grid.dataSource;if(ds&&ds.settings&&ds.settings.treeDS){ds.settings.treeDS.paging.mode=this.options.mode}}});$.extend($.ui.igTreeGridPaging,{version:"15.1.20151.1005"})})(jQuery);