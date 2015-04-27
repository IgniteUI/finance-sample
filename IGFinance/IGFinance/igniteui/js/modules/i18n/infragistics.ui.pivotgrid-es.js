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
                filtersHeader: "Soltar campos de filtro aquí",
                measuresHeader: "Soltar elementos de datos aquí",
                rowsHeader: "Soltar campos de fila aquí",
                columnsHeader: "Soltar campos de columna aquí",
                disabledFiltersHeader: "Campos de filtro",
                disabledMeasuresHeader: "Elementos de datos",
                disabledRowsHeader: "Campos de fila",
                disabledColumnsHeader: "Campos de columna",
                noSuchAxis: "No hay tal eje"
            }
        });
    }
})(jQuery);