/*!@license
* Infragistics.Web.ClientUI Pivot Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.PivotGrid) {
        $.ig.PivotGrid = {};

        $.extend($.ig.PivotGrid, {
            locale: {
                filtersHeader: "Перенесите поля для фильтрования сюда",
                measuresHeader: "Перенесите данные сюда",
                rowsHeader: "Перенесите поля для рядов сюда",
                columnsHeader: "Перенесите поля для колонок сюда",
                disabledFiltersHeader: "Поля для фильтрования",
                disabledMeasuresHeader: "Данные",
                disabledRowsHeader: "Поля для рядов",
                disabledColumnsHeader: "Поля для колонок",
                noSuchAxis: "Ось не существует"
            }
        });
    }
})(jQuery);