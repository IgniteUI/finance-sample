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
 *	infragistics.ui.grid.selection.js
 */
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igTreeGridSelection",$.ui.igGridSelection,{css:{},options:{},_create:function(){this.element.data($.ui.igGridSelection.prototype.widgetName,this.element.data($.ui.igTreeGridSelection.prototype.widgetName));$.ui.igGridSelection.prototype._create.apply(this,arguments)},_getDataView:function(){return this.grid.dataSource.flatDataView()},destroy:function(){$.ui.igGridSelection.prototype.destroy.apply(this,arguments);this.element.removeData($.ui.igGridSelection.prototype.widgetName)},_injectGrid:function(){$.ui.igGridSelection.prototype._injectGrid.apply(this,arguments)}});$.extend($.ui.igTreeGridSelection,{version:"15.1.20151.1005"})})(jQuery);