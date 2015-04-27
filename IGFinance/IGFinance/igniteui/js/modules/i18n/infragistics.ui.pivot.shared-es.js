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
                invalidDataSource: "La fuente de datos pasada es cero o no se admite.",
                measureList: "Medidas",
                ok: "Aceptar",
                cancel: "Cancelar",
                addToMeasures: "Agregar a medidas",
                addToFilters: "Agregar a filtros",
                addToColumns: "Agregar a columnas",
                addToRows: "Agregar a filas"
            }
        });
    }
})(jQuery);