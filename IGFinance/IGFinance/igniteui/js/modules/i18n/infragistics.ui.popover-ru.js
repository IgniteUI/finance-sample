/*!@license
* Infragistics.Web.ClientUI Popover localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Popover) {
	$.ig.Popover = {};

	$.extend( $.ig.Popover, {
		locale: {
			popoverOptionChangeNotSupported: "Изменение этой опции невозможно после инициализации igPopover:",
			popoverShowMethodWithoutTarget: "Параметр target функции show обязателен, когда используется опция selectors"
		}
	});

}
})(jQuery);