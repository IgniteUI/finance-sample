/*!@license
* Infragistics.Web.ClientUI Pivot Data Selector localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotDataSelector) {
        $.ig.PivotDataSelector = {};

        $.extend($.ig.PivotDataSelector, {
            locale: {
                invalidBaseElement: " wird nicht als Basiselement unterstützt. Stattdessen DIV verwenden.",
                catalog: "Katalog",
                cube: "Cube",
                measureGroup: "Measuregruppe",
                measureGroupAll: "(Alle)",
                rows: "Zeilen",
                columns: "Spalten",
                measures: "Measures",
                filters: "Filter",
                deferUpdate: "Aktualisierung verzögern",
                updateLayout: "Layout aktualisieren",
                selectAll: "Alle auswählen"
            }
        });
    }
})(jQuery);