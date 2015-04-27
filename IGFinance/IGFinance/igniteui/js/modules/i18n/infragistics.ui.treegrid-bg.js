/*!@license
* Infragistics.Web.ClientUI Tree Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.TreeGrid) {
        $.ig.TreeGrid = {};

        $.extend($.ig.TreeGrid, {
            locale: {
                fixedVirtualizationNotSupported: 'Не се поддържа фиксирана виртуализация. Моля настройте virtualizationMode на "continuous" за да включите виртуализирането на редове.'
            }
        });
    }
})(jQuery);