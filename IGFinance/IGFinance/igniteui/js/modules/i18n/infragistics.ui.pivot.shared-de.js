/*!@license
* Infragistics.Web.ClientUI Pivot Shared localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotShared) {
        $.ig.PivotShared = {};

        $.extend($.ig.PivotShared, {
            locale: {
                invalidDataSource: "Die angegebene Datenquelle ist entweder Null oder wird nicht unterstützt.",
                measureList: "Measures",
                ok: "OK",
                cancel: "Abbrechen",
                addToMeasures: "Zu Measures hinzufügen",
                addToFilters: "Zu Filtern hinzufügen",
                addToColumns: "Zu Spalten hinzufügen",
                addToRows: "Zu Zeilen hinzufügen"
            }
        });
    }
})(jQuery);