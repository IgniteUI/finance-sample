/*!@license
* Infragistics.Web.ClientUI data source localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {

    $.ig = $.ig || {};

    if (!$.ig.DataSourceLocale) {
	    $.ig.DataSourceLocale = {};

	    $.extend($.ig.DataSourceLocale, {

		    locale: {
			    invalidDataSource: "El origen de datos proporcionado no es válido. Es de tipo escalar.",
			    unknownDataSource: "No se puede determinar el tipo de origen de datos. Especifique si son datos JSON o XML.",
			    errorParsingArrays: "Se ha producido un error al analizar los datos de matriz y aplicar el esquema de datos definido: ",
			    errorParsingJson: "Se ha producido un error al analizar los datos JSON y aplicar el esquema de datos definido: ",
			    errorParsingXml: "Se ha producido un error al analizar los datos XML y aplicar el esquema de datos definido: ",
			    errorParsingHtmlTable: "Se ha producido un error al extraer datos de la tabla HTML y aplicar el esquema: ",
			    errorExpectedTbodyParameter: "Se esperaba un tbody o una tabla como parámetro.",
			    errorTableWithIdNotFound: "No se ha encontrado la tabla HTML con el siguiente Id.: ",
			    errorParsingHtmlTableNoSchema: "Se ha producido un error al analizar el DOM de la tabla: ",
			    errorParsingJsonNoSchema: "Se ha producido un error al analizar/evaluar la cadena JSON: ",
			    errorParsingXmlNoSchema: "Se ha producido un error al analizar la cadena XML: ",
			    errorXmlSourceWithoutSchema: "El origen de datos proporcionado es un documento xml, pero no hay un esquema de datos definido ($.IgDataSchema) ",
			    errorUnrecognizedFilterCondition: " La condición de filtro especificada no ha sido reconocida: ",
			    errorRemoteRequest: "Error en la solicitud remota de recuperación de datos: ",
			    errorSchemaMismatch: "Los datos de entrada no coinciden con el esquema, no se ha podido asignar el siguiente campo: ",
			    errorSchemaFieldCountMismatch: "Los datos de entrada no coinciden con el esquema en términos de número de campos. ",
			    errorUnrecognizedResponseType: "El tipo de respuesta no se ha establecido correctamente o no ha sido posible detectarlo automáticamente. Establezca settings.responseDataType y/o settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Tablas no admitidas para HierarchicalSchema",
			    cannotBuildTemplate: "No se ha podido generar la plantilla jQuery. No hay registros presentes en el origen de datos y no hay columnas definidas.",
			    unrecognizedCondition: "Condición de filtro no reconocida en la siguiente expresión: ",
			    fieldMismatch: "La siguiente expresión contiene un campo o una condición de filtro no válidos: ",
			    noSortingFields: "No se ha especificado ningún campo. Debe especificar al menos un campo de ordenación al llamar a sort().",
			    filteringNoSchema: "No se ha especificado ningún esquema / campo. Debe especificar un esquema con definiciones y tipos de campo para poder filtrar el origen de datos."
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI common DV widget localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Chart) {
	    $.ig.Chart = {};

	    $.extend($.ig.Chart, {

		    locale: {
			    seriesName: "debe especificar la opción de nombre de la serie al establecer las opciones.",
			    axisName: "debe especificar la opción de nombre del eje al establecer las opciones.",
			    invalidLabelBinding: "No existe ningún valor para las etiquetas de enlace.",
			    close: "Cerrar",
			    overview: "Información general",
			    zoomOut: "Alejar",
			    zoomIn: "Acercar",
			    resetZoom: "Restablecer zoom"
		    }
	    });

    }
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI shared localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.SharedLocale) {
	$.ig.SharedLocale = {};

	$.extend($.ig.SharedLocale, {

		locale: {
		    
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI templating localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Templating) {
	    $.ig.Templating = {};

	    $.extend($.ig.Templating, {
		    locale: {
			    undefinedArgument: 'Se ha producido un error al intentar recuperar las propiedades del origen de datos: '
		    }
	    });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Barcode) {
	$.ig.Barcode = {
		locale: {
		    aILength: "El identificador de aplicaciones (AI) debe tener al menos 2 dígitos.",
		    badFormedUCCValue: "Los datos del código de barras UCC no están bien formados. Deben tener la estructura (AI)GTIN.",
		    code39_NonNumericError: "El carácter '{0}' no es válido para los datos CODE39. Los caracteres válidos son: {1}",
		    countryError: "Error al convertir el código de país. Debe ser un valor numérico.",
		    emptyValueMsg: "El valor de datos está vacío.",
		    encodingError: "Error de conversión. Consulte la documentación para conocer cuáles son los valores válidos para las propiedades.",
		    errorMessageText: "Valor no válido. Consulte la documentación para conocer cuál es la estructura de datos válida de los códigos de barras.",
		    gS1ExMaxAlphanumNumber: "La familia del GS1 DataBar ampliado puede codificar hasta 41 caracteres alfanuméricos.",
		    gS1ExMaxNumericNumber: "La familia del GS1 DataBar ampliado puede codificar hasta 74 caracteres numéricos.",
		    gS1Length: "El código de barras GS1 DataBar se utiliza para los códigos de barras GTIN 8, 12, 13, 14 y su longitud debe ser 7, 11, 12 o 13. El último dígito se reserva para una suma de comprobación.",
		    gS1LimitedFirstChar: "El código del GS1 DataBar limitado debe tener 0 o 1 como primer dígito. Cuando se codifican estructuras de datos GTIN-14 con un valor de indicador superior a 1, es preciso utilizar el tipo de código de barras Omnidirectional, Stacked, Stacked Omnidirectional o Truncated.",
		    i25Length: "El código de barras Interleaved2of5 debe tener un número par de dígitos. Si se trata de un número impar, puede poner un 0 delante.",
		    intelligentMailLength: "La longitud del valor de datos en el código de barras Intelligent Mail debe ser de 20, 25, 29 o 31 caracteres: código de rastreo de 20 dígitos (2 para el identificador del código de barras, 3 para el identificador del tipo de servicio, 6 o 9 para el identificador de mailer y 9 o 6 para el número de serie) y 0, 5, 9 o 11 símbolos de código postal.",
		    intelligentMailSecondDigit: "El segundo dígito debe encontrarse en el intervalo comprendido entre 0 y 4.",
		    invalidAI: "Cadenas no válidas en el elemento del identificador de aplicaciones. Asegúrese de que la cadena del identificador de aplicaciones de los datos esté bien formada.",
		    invalidCharacter: "El carácter '{0}'no es válido para el tipo de código de barras actual. Los caracteres válidos son: {1}",
		    invalidDimension: "Las dimensiones del código de barras no pueden determinarse porque se ha producido una combinación incorrecta de los valores de las propiedades Stretch, BarsFillMode y XDimension.",
		    invalidHeight: "Las líneas de cuadrícula del código de barras (número {0}) no puede adaptarse a esta altura ({1} píxeles).",
		    invalidLength: "El valor de datos del código de barras debe tener un número {0} de dígitos.",
		    invalidPostalCode: "Valor PostalCode no válido: El modo 2 codifica códigos postales de hasta 9 dígitos (código postal de EE.UU.), mientras que el modo 3 codifica códigos alfanuméricos de hasta 6 caracteres.",
		    invalidPropertyValue: "El valor de propiedad {0} debe encontrarse en un intervalo comprendido entre {1} y {2}.",
		    invalidVersion: "El número SizeVersion no genera celdas suficientes para codificar los datos con el modo de codificación y el nivel de corrección de errores actuales.",
		    invalidWidth: "Las columnas de cuadrícula del código de barras (número {0}) no puede adaptarse a esta anchura ({1} píxeles). Chequear el valor de la propiedad XDimension y/o el de WidthToHeightRatio.",
		    invalidXDimensionValue: "El valor XDimension de debe encontrarse en un intervalo comprendido entre {0} y {1} para el tipo de código de barras actual.",
		    maxLength: "La longitud {0} del texto supera el máximo codificable para el tipo actual de códigos de barras. Puede codificar como máximo {1} caracteres.",
		    notSupportedEncoding: "La codificación correspondiente bajo {0} {1} no se admite.",
		    pDF417InvalidRowsColumnsCombination: "Las palabras de código (corrección de datos y errores) son más de las que pueden codificarse en símbolos con una matriz {0}x{1}.",
		    primaryMessageError: "No se puede extraer el mensaje principal del valor de datos. Consulte la documentación para conocer la estructura.",
		    serviceClassError: "Error al convertir la clase de servicio. Debe ser un valor numérico.",
		    smallSize: "No es posible ajustar la cuadrícula en Size({0}, {1}) con la configuración Stretch definida.",
		    unencodableCharacter: "El carácter '{0}' no puede codificarse.",
		    uPCEFirstDigit: "De manera predeterminada, el primer dígito UPCE debe ser siempre cero.",
		    warningString: "Advertencia Barcode: ",
		    wrongCompactionMode: "El mensaje de datos no puede compactarse con el modo {0}.",
		    notLoadedEncoding: "La codificación {0} no se ha cargado."
		}
	};
}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Combo localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Combo) {
	    $.ig.Combo = {
		    locale: {
		        noMatchFoundText: 'No hay resultados',
		        dropDownButtonTitle: 'Mostrar lista desplegable',
		        clearButtonTitle: 'Borrar valor',
		        placeHolder: 'select...',
		        notSuported: 'Operation not supported',
		        errorNoSupportedTextsType: "Tipo de texto no admitido. Los textos de filtrado admitidos son: cadena y matriz.",
			    errorUnrecognizedHighlightMatchesMode: "Unrecognized Highlight Matches Mode. Supported values are multi, contains, startsWith, full and null."
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Dialog localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Dialog) {
	    $.ig.Dialog = {
		    locale: {
			    closeButtonTitle: "Cerrar",
			    minimizeButtonTitle: "Minimizar",
			    maximizeButtonTitle: "Maximizar",
			    pinButtonTitle: "Anclar",
			    unpinButtonTitle: "Desanclar",
			    restoreButtonTitle: "Restaurar"
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Doughnut Chart localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.igDoughnutChart) {
        $.ig.igDoughnutChart = {};

        $.extend($.ig.igDoughnutChart, {
            locale: {
                invalidBaseElement: " no se admite como elemento base. Use DIV en su lugar."
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Editors localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Editor) {
	    $.ig.Editor = {
		    locale: {
			    spinUpperTitle: 'Incrementar',
			    spinLowerTitle: 'Reducir',
			    buttonTitle: 'Mostrar lista',
			    clearTitle: 'Borrar valor',
			    datePickerButtonTitle: 'Mostrar calendario',
			    updateModeUnsupportedValue: 'La opción updateMode admite dos valores posibles: "onChange" e "immediate"'
		    }
	    };
    }
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI Grid localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "No se ha cargado ese widget: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns está habilitado, pero no hay registros en el origen de datos para determinar las columnas",
			optionChangeNotSupported: "No se admite el cambio de la siguiente opción después de crear igGrid.",
			optionChangeNotScrollingGrid: "No se puede cambiar la siguiente opción después de crear la cuadrícula porque la cuadrícula inicial no se desplaza y se necesita una re-representación total.",
			noPrimaryKeyDefined: "No se ha definido una clave principal para la cuadrícula. Para usar funciones como la edición de cuadrículas, debe definir una clave principal.",
			indexOutOfRange: "El índice de filas que ha especificado está fuera del intervalo.",
			noSuchColumnDefined: "La clave de columna especificada no coincide con ninguna de las columnas de cuadrícula definidas.",
			columnIndexOutOfRange: "El índice de columna especificado está fuera del intervalo.",
			recordNotFound: "No se ha encontrado el registro con el Id. especificado en la vista de datos.",
			columnNotFound: "No se ha encontrado una columna que coincide con la clave.",
			colPrefix: "Columna ",
			columnVirtualizationRequiresWidth: "La virtualización / columnVirtualization está establecida como Verdadero, pero no se ha podido deducir el ancho para las columnas de cuadrícula. Debe establecer uno de los siguientes parámetros: a) ancho de cuadrícula, b) defaultColumnWidth, c) ancho definido para cada columna",
			virtualizationRequiresHeight: "La virtualización está establecida como Verdadero; por tanto, también se debe establecer la altura de la cuadrícula.",
            colVirtualizationDenied: "columnVirtualization solo es aplicable a la virtualización fija",
			noColumnsButAutoGenerateTrue: "autoGenerateColumns está establecido como Falso, pero no hay columnas definidas en la cuadrícula. Establezca autoGenerateColumns como Verdadero o especifique las columnas manualmente",
			noPrimaryKey: "Se necesita una clave principal para definir el widget igHierarchicalGrid.",
			templatingEnabledButNoTemplate: "jQueryTemplating está establecido como Verdadero, pero no se ha definido ninguna rowTemplate.",
			expandTooltip: "Expandir fila",
			collapseTooltip: "Contraer fila",
			movingNotAllowedOrIncompatible: "No se ha podido desplazar la columna deseada. No se ha encontrado la columna o el resultado no era compatible con el diseño de columna.",
			allColumnsHiddenOnInitialization: "No es posible ocultar todas las columnas de cuadrícula. Permita que se muestre al menos una de las columnas.",
			columnVirtualizationNotSupportedWithPercentageWidth: "La virtualización de columnas no se admite cuando el ancho de la cuadrícula se define en unidades de porcentaje.",
			mixedWidthsNotSupported: "No se admite la configuración del ancho de columna mezclado/parcial. No se admiten los supuestos en los que algunos anchos de columna se establezcan en porcentajes y otros en píxeles (o no se establezcan)."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Empieza por...",
			endsWithNullText: "Termina con...",
			containsNullText: "Contiene...",
			doesNotContainNullText: "No contiene...",
			equalsNullText: "Igual a...",
			doesNotEqualNullText: "No igual a...",
			greaterThanNullText: "Mayor de...",
			lessThanNullText: "Menor de...",
			greaterThanOrEqualToNullText: "Mayor o igual a...",
			lessThanOrEqualToNullText: "Menor o igual a...",
			onNullText: "En...",
			notOnNullText: "No en...",
			afterNullText: "Después",
			beforeNullText: "Antes",
			emptyNullText: "Vacío",
			notEmptyNullText: "No vacío",
			nullNullText: "Nulo",
			notNullNullText: "No nulo",
			startsWithLabel: "Empieza por",
			endsWithLabel: "Termina con",
			containsLabel: "Contiene",
			doesNotContainLabel: "No contiene",
			equalsLabel: "Igual a",
			doesNotEqualLabel: "Diferente de",
			greaterThanLabel: "Mayor de",
			lessThanLabel: "Menor de",
			greaterThanOrEqualToLabel: "Mayor o igual a",
			lessThanOrEqualToLabel: "Menor o igual a",
			trueLabel: "Verdadero",
			falseLabel: "Falso",
			afterLabel: "Después",
			beforeLabel: "Antes",
			todayLabel: "Hoy",
			yesterdayLabel: "Ayer",
			thisMonthLabel: "Este mes",
			lastMonthLabel: "El mes pasado",
			nextMonthLabel: "El mes siguiente",
			thisYearLabel: "Este año",
			lastYearLabel: "El año pasado",
			nextYearLabel: "El año siguiente",
			clearLabel: "Borrar filtro",
			noFilterLabel: "No",
			onLabel: "En",
			notOnLabel: "No en",
			advancedButtonLabel: "Avanzado",
			filterDialogCaptionLabel: "BÚSQUEDA AVANZADA",
			filterDialogConditionLabel1: "Mostrar registros coincidentes ",
			filterDialogConditionLabel2: " de los siguientes criterios",
			filterDialogOkLabel: "Buscar",
			filterDialogCancelLabel: "Cancelar",
			filterDialogAnyLabel: "CUALQUIERA",
			filterDialogAllLabel: "TODOS",
			filterDialogAddLabel: "Agregar",
			filterDialogErrorLabel: "Se ha superado el número máximo de filtros.",
			filterSummaryTitleLabel: "Resultados de la búsqueda",
			filterSummaryTemplate: "${matches} registros coincidentes",
			filterDialogClearAllLabel: "Borrar TODOS",
			tooltipTemplate: "${condition} filtro aplicado",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Ocultar filtro",
			featureChooserTextHide: "Mostrar filtro",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Filtro avanzado",
			virtualizationSimpleFilteringNotAllowed: "Cuando está habilitada la virtualización horizontal, no se admite el filtro simple (fila de filtro). Establezca el modo como 'avanzado' y/o no establezca advancedModeEditorsVisible",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
			emptyGroupByAreaContent: "Arrastre una columna aquí o {0} para Agrupar por",
			emptyGroupByAreaContentSelectColumns: "seleccione columnas",
			emptyGroupByAreaContentSelectColumnsCaption: "seleccione columnas",
			expandTooltip: "Expandir fila agrupada",
			collapseTooltip: "Contraer fila agrupada",
			removeButtonTooltip: "Quitar columna agrupada",
			featureChooserText: "Desagrupar por",
			featureChooserTextHide: "Agrupar por",
			modalDialogCaptionButtonDesc: "Haga clic para ordenar de forma ascendente",
			modalDialogCaptionButtonAsc: "Haga clic para ordenar de forma descendente",
			modalDialogCaptionButtonUngroup: "Haga clic para desagrupar",
			modalDialogGroupByButtonText: "Agrupar por",
			modalDialogCaptionText: 'Agregar a Agrupar por',
			modalDialogDropDownLabel: 'Mostrando:',
			modalDialogClearAllButtonLabel: 'borrar todos',
			modalDialogRootLevelHierarchicalGrid: 'raíz',
			modalDialogDropDownButtonCaption: "Haga clic para mostrar/ocultar",
			modalDialogButtonApplyText: 'Aplicar',
			modalDialogButtonCancelText: 'Cancelar',
			fixedVirualizationNotSupported: 'La función GroupBy no funciona si la virtualización está ajustada.'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Selector de columnas",
			hiddenColumnIndicatorTooltipText: "Columna(s) oculta(s)",
			columnHideText: "Ocultar",
			columnChooserCaptionLabel: "Selector de columnas",
			columnChooserCheckboxesHeader: "ver",
			columnChooserColumnsHeader: "columna",
			columnChooserCloseButtonTooltip: "Cerrar",
			hideColumnIconTooltip: "Ocultar",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado.",
			columnChooserShowText: "Mostrar",
			columnChooserHideText: "Ocultar",
			columnChooserResetButtonLabel: "restablecer",
			columnChooserButtonApplyText: 'Aplicar',
			columnChooserButtonCancelText: 'Cancelar'
		}
	});

		$.ig.GridResizing = $.ig.GridResizing || {};

		$.extend($.ig.GridResizing, {
			locale: {
			    noSuchVisibleColumn: "No se ha encontrado ninguna columna visible con la clave especificada. Solo puede cambiar el tamaño de las columnas visibles.",
			    resizingAndFixedVirtualizationNotSupported: "La función de cambio de tamaño no funciona cuando la virtualización o la virtualización de columnas están habilitadas con virtualizationMode ajustado. Para evitar esta excepción establezca virtualizationMode en 'continuous' o utilice solo rowVirtualization."
			}
		});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Mostrar ",
			pageSizeDropDownTrailingLabel: "registros",
			//pageSizeDropDownTemplate: "Mostrar ${dropdown} registros",
			nextPageLabelText: "siguiente",
			prevPageLabelText: "anterior",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pág",
			currentPageDropDownTrailingLabel: "de ${count}",
			//currentPageDropDownTemplate: "Pág ${dropdown} de ${count}",
			currentPageDropDownTooltip: "Elegir índice de páginas",
			pageSizeDropDownTooltip: "Elegir número de registros por página",
			pagerRecordsLabelTooltip: "Intervalo de registros actuales",
			prevPageTooltip: "ir a la página anterior",
			nextPageTooltip: "ir a la página siguiente",
			firstPageTooltip: "ir a la primera página",
			lastPageTooltip: "ir a la última página",
			pageTooltipFormat: "página ${index}",
			    pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} de ${recordCount} registros",
			    invalidPageIndex: "Índice de página no válido: debería ser igual o superior a 0 e inferior al número de página"
		}
	});

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
            persistenceImpossible: "La selección persistente entre los estados requiere que se defina la opción primaryKey de igGrid. Para evitar recibir este error, defina una clave principal o desactive la persistencia."
        }
    });

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection no se ha inicializado. Para evitar recibir este mensaje de error, habilite la función de Selección para la cuadrícula o bien establezca la propiedad requireSelection de la función Selectores de Filas como Falso.",
			columnVirtualizationEnabled: "igGridRowSelectors no se admite cuando la virtualización de columnas está habilitada. Para evitar recibir este mensaje de error, habilite solo la virtualización de filas mediante la activación de la propiedad 'rowVirtualization' de la cuadrícula o la modificación del modo de virtualización a 'continuous'."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'ordenado ${direction}',
			unsortedColumnTooltip: 'haga clic para ordenar la columna',
			ascending: 'ascendente',
			descending: 'descendente',
			modalDialogSortByButtonText: 'ordenar por',
			modalDialogResetButton: "restablecer",
			modalDialogCaptionButtonDesc: "Haga clic para ordenar de forma descendente",
			modalDialogCaptionButtonAsc: "Haga clic para ordenar de forma ascendente",
			modalDialogCaptionButtonUnsort: "Haga clic para quitar criterios de ordenación",
			featureChooserText: "Ordenar en múltiples",
			modalDialogCaptionText: "Ordenar múltiples",
			modalDialogButtonApplyText: 'Aplicar',
			modalDialogButtonCancelText: 'Cancelar',
			sortingHiddenColumnNotSupport: 'La ordenación de columnas ocultas no se admite',
			featureChooserSortAsc: 'Ordenar de A a Z',
			featureChooserSortDesc: 'Ordenar de Z a A'
			//modalDialogButtonSlideCaption: "Haga clic para mostrar/ocultar columnas ordenadas"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "Ocultar resúmenes",
			featureChooserTextHide: "Mostrar resúmenes",
			dialogButtonOKText: 'Aceptar',
			dialogButtonCancelText: 'Cancelar',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Mostrar/ocultar resúmenes',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Recuento',
			defaultSummaryRowDisplayLabelMin: 'Mín.',
			defaultSummaryRowDisplayLabelMax: 'Máx.',
			defaultSummaryRowDisplayLabelSum: 'Suma',
			defaultSummaryRowDisplayLabelAvg: 'Prom.',
			defaultSummaryRowDisplayLabelCustom: 'Personalizado',
			calculateSummaryColumnKeyNotSpecified: "Especifique la clave de columna para calcular el resumen",
			featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use uno de los archivos de script combinado."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Terminado',
			doneTooltip: 'Detener edición y actualizar',
			cancelLabel: 'Cancelar',
			cancelTooltip: 'Detener edición y no actualizar',
			addRowLabel: 'Agregar fila nueva',
			addRowTooltip: 'Haga clic para agregar una nueva fila',
			deleteRowLabel: '',
			deleteRowTooltip: 'Borrar fila',
			igEditorException: 'Para actualizar ui.igGrid, ui.igEditor debe estar cargado',
			igComboException: 'Para usar el tipo combinado para ui.igGrid, ui.igCombo debe estar cargado',
			igRatingException: 'Para usar igRating como editor para ui.igGrid, ui.igRating debe estar cargado',
			igValidatorException: 'Las opciones de validación definidas en igGridUpdating necesitan que ui.igValidator esté cargado',
			noPrimaryKeyException: 'Para admitir las operaciones de actualización después de borrar una fila, la aplicación debe definir "primaryKey" en las opciones de igGrid.',
			hiddenColumnValidationException: 'No se puede editar una fila que tiene una columna oculta con validación habilitada.',
			dataDirtyException: 'La cuadrícula tiene transacciones pendientes que pueden afectar a la representación de datos. Para evitar excepciones, la aplicación puede habilitar la opción "autoCommit" de igGrid o bien debe procesar el evento "dataDirty" de igGridUpdating y devolver Falso. Al procesar ese evento, la aplicación también puede efectuar "commit()" datos en igGrid.',
			recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
			rowEditDialogCaptionLabel: 'Editar datos de fila',
			unboundColumnsNotSupported: 'ColumnFixing is not supported with Unbound Columns',
			excelNavigationNotSupportedWithCurrentEditMode: "El modo de navegación Excel solo se admite en los modos de edición de celda o de edición de fila. Para evitar este error, desactive excelNavigationMode o establezca editMode en celda o fila."
		}
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Aplicar',
            movingDialogButtonCancelText: 'Cancelar',
            movingDialogCaptionButtonDesc: 'Bajar',
            movingDialogCaptionButtonAsc: 'Subir',
            movingDialogCaptionText: 'Mover columnas',
            movingDialogDisplayText: 'Mover columnas',
            movingDialogDropTooltipText: "Mover aquí",
            dropDownMoveLeftText: 'Mover a la izquierda',
            dropDownMoveRightText: 'Mover a la derecha',
            dropDownMoveFirstText: 'Mover primero',
            dropDownMoveLastText: 'Mover último',
            featureChooserNotReferenced: "No se hace referencia al script del Selector de Funciones. Para evitar recibir este mensaje de error, incluya el archivo ig.ui.grid.featurechooser.js o bien use el cargador o uno de los archivos de script combinado.",
            movingToolTipMove: 'Mover',
            featureChooserSubmenuText: 'Mover'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Haga clic para fijar esta columna',
            headerUnfixButtonText: 'Haga clic para soltar esta columna',
            featureChooserTextFixedColumn: 'Fijar columna',
            featureChooserTextUnfixedColumn: 'Soltar columna',
            groupByNotSupported: 'igGridGroupBy no se admite con ColumnFixing',
            virtualizationNotSupported: 'La virtualización de la opción de cuadrícula permite la virtualización de filas y columnas. La virtualización de columnas no se admite con ColumnFixing. Active la opción rowVirtualization de cuadrícula',
            columnVirtualizationNotSupported: 'La virtualización de columnas no se admite con ColumnFixing',
            columnMovingNotSupported: 'igGridColumnMoving no se admite con ColumnFixing',
            hidingNotSupported: 'igGridHiding no se admite con ColumnFixing',
            hierarchicalGridNotSupported: 'igHierarchicalGrid no se admite con ColumnFixing',
            responsiveNotSupported: 'igGridResponsive no se admite con ColumnFixing',
            noGridWidthNotSupported: 'Debe especificar el ancho de la cuadrícula en píxeles cuando se utiliza ColumnFixing',
            defaultColumnWidthInPercentageNotSupported: "El ancho de columna predeterminado en porcentaje no se admite cuando se utiliza ColumnFixing",
            columnsWidthShouldBeSetInPixels: 'ColumnFixing requiere que el ancho de todas las columnas de cuadrícula esté establecido en píxeles. Compruebe la columna con la clave: ',
            unboundColumnsNotSupported: 'ColumnFixing no se admite con columnas sueltas',
            excelNavigationNotSupportedWithCurrentEditMode: "El modo de navegación Excel solo se admite en los modos de edición de celda o de edición de fila. Para evitar este error, desactive excelNavigationMode o establezca editMode en celda o fila.",
            internalErrors: {
                none: 'No hay error',
                notValidIdentifier: 'No existe ninguna columna con el identificador especificado',
                fixingRefused: 'La acción de fijar se deniega porque SOLO hay una columna suelta visible',
                fixingRefusedMinVisibleAreaWidth: 'No se permite fijar una columna debido al ancho mínimo del área visible de columnas sueltas',
                alreadyHidden: 'Está intentando fijar/soltar una columna oculta',
                alreadyUnfixed: 'La columna que está intentando soltar ya está suelta',
                alreadyFixed: 'La columna que está intentando fijar ya está fijada',
                unfixingRefused: 'La acción de soltar se deniega porque solo hay una columna fijada visible y hay al menos una columna fijada oculta.',
                targetNotFound: 'Target column is not found with the specified target identifier'
            }
        }
    });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
    	locale: {
    	    loadMoreDataButtonText: 'Cargar más datos',
    	    appendRowsOnDemandRequiresHeight: 'La función AppendRowsOnDemand necesita altura',
    	    groupByNotSupported: 'igGridGroupBy no se admite con AppendRowsOnDemand',
    	    pagingNotSupported: 'igGridPaging no se admite con AppendRowsOnDemand',
    	    cellMergingNotSupported: 'igGridCellMerging no se admite con AppendRowsOnDemand',
    	    virtualizationNotSupported: 'La virtualización no se admite con AppendRowsOnDemand'
    	}
    });

    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
    	locale: {
    	    fixedVirualizationNotSupported: 'igGridResponsive no se admite con la virtualización fijada'
    	}
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
    	locale: {
    	    multiColumnHeadersNotSupportedWithColumnVirtualization: 'La función de encabezados de columnas múltiples no se admite con columnVirtualization'
    	}
    });

}
})(jQuery);

/*!@license
* Infragistics.Web.ClientUI HTML Editor localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.HtmlEditor) {
	$.ig.HtmlEditor = {};

	$.extend($.ig.HtmlEditor, {

		locale: {
			boldButtonTitle: 'Negrita',
			italicButtonTitle: 'Cursiva',
			underlineButtonTitle: 'Subrayado',
			strikethroughButtonTitle: 'Tachado',
			increaseFontSizeButtonTitle: 'Aumentar tamaño de fuente',
			decreaseFontSizeButtonTitle: 'Disminuir tamaño de fuente',
			alignTextLeftButtonTitle: 'Alinear texto a la izquierda',
			alignTextRightButtonTitle: 'Alinear texto a la derecha',
			alignTextCenterButtonTitle: 'Centrar',
			justifyButtonTitle: 'Justificar',
			bulletsButtonTitle: 'Viñetas',
			numberingButtonTitle: 'Numeración',
			decreaseIndentButtonTitle: 'Disminuir sangría',
			increaseIndentButtonTitle: 'Aumentar sangría',
			insertPictureButtonTitle: 'Insertar imagen',
			fontColorButtonTitle: 'Color de fuente',
			textHighlightButtonTitle: 'Color de resaltado de texto',
			insertLinkButtonTitle: 'Insertar hipervínculo',
			insertTableButtonTitle: 'Tabla',
			addRowButtonTitle: 'Agregar fila',
			removeRowButtonTitle: 'Quitar fila',
			addColumnButtonTitle: 'Agregar columna',
			removeColumnButtonTitle: 'Quitar columna',
			inserHRButtonTitle: 'Insertar regla horizontal',
			viewSourceButtonTitle: 'Mostrar origen',
			cutButtonTitle: 'Cortar',
			copyButtonTitle: 'Copiar',
			pasteButtonTitle: 'Pegar',
			undoButtonTitle: 'Deshacer',
			redoButtonTitle: 'Rehacer',
			imageUrlDialogText: 'Dirección URL de la imagen:',
			imageAlternativeTextDialogText: 'Texto alternativo:',
			imageWidthDialogText: 'Ancho de la imagen:',
			imageHeihgtDialogText: 'Alto de la imagen:',
			linkNavigateToUrlDialogText: 'Navegar a la dirección URL:',
			linkDisplayTextDialogText: 'Mostrar texto:',
			linkOpenInDialogText: 'Abrir en:',
			linkTargetNewWindowDialogText: 'Nueva ventana',
			linkTargetSameWindowDialogText: 'Misma ventana',
			linkTargetParentWindowDialogText: 'Ventana primaria',
			linkTargetTopmostWindowDialogText: 'Ventana de nivel superior',
			applyButtonTitle: 'Aplicar',
			cancelButtonTitle: 'Cancelar',
			defaultToolbars: {
			    textToolbar: "text manipulation toolbar",
			    formattingToolbar: "text formatting toolbar",
			    insertObjectToolbar: "objects insertion toolbar",
			    copyPasteToolbar: "copy/paste toolbar"
			},
			fontNames: {
				win: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Lucida Console", value: "Lucida Console" },
						{ text: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
						{ text: "Palatino Linotype", value: "Palatino Linotype" },
						{ text: "Tahoma", value: "Tahoma" },
						{ text: "Trebuchet MS", value: "Trebuchet MS" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Wingdings", value: "Wingdings" },
						{ text: "MS Sans Serif", value: "MS Sans Serif" },
						{ text: "MS Serif", value: "MS Serif" }
					],
				mac: [
						{ text: "Times New Roman", value: "Times New Roman" },
						{ text: "Arial", value: "Arial" },
						{ text: "Arial Black", value: "Arial Black" },
						{ text: "Helvetica", value: "Helvetica" },
						{ text: "Comic Sans MS", value: "Comic Sans MS" },
						{ text: "Courier New", value: "Courier New" },
						{ text: "Georgia", value: "Georgia" },
						{ text: "Impact", value: "Impact" },
						{ text: "Monaco", value: "Monaco" },
						{ text: "Lucida Grande", value: "Lucida Grande" },
						{ text: "Book Antiqua", value: "Book Antiqua" },
						{ text: "Geneva", value: "Geneva" },
						{ text: "Trebuchet MS", value: "Trebuchet" },
						{ text: "Verdana", value: "Verdana" },
						{ text: "Symbol", value: "Symbol" },
						{ text: "Webdings", value: "Webdings" },
						{ text: "Zapf Dingbats", value: "Zapf Dingbats" },
						{ text: "New York", value: "New York" }
					]
			},
			fontSizes: [
				{ text: "1", value: "7.5 pt" },
				{ text: "2", value: "10 pt" },
				{ text: "3", value: "12 pt" },
				{ text: "4", value: "13.5 pt" },
				{ text: "5", value: "18 pt" },
				{ text: "6", value: "24 pt" },
				{ text: "7", value: "36 pt" }
			],
			formatsList: [
					{ text: "h1", value: "Encabezado 1" },
					{ text: "h2", value: "Encabezado 2" },
					{ text: "h3", value: "Encabezado 3" },
					{ text: "h4", value: "Encabezado 4" },
					{ text: "h5", value: "Encabezado 5" },
					{ text: "h6", value: "Encabezado 6" },
                    { text: "p", value: "Normal" }
				]
		}

	});
}
})(jQuery);
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
                invalidBaseElement: " no se admite como elemento base. Use DIV en su lugar.",
                catalog: "Catálogo",
                cube: "Cubo",
                measureGroup: "Medir grupo",
                measureGroupAll: "(Todo)",
                rows: "Filas",
                columns: "Columnas",
                measures: "Medidas",
                filters: "Filtros",
                deferUpdate: "Aplazar actualización",
                updateLayout: "Actualizar diseño",
                selectAll: "Seleccionar todo"
            }
        });
    }
})(jQuery);
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
			popoverOptionChangeNotSupported: "No se admite el cambio de la siguiente opción después de inicializar igPopover:",
			popoverShowMethodWithoutTarget: "El parámetro target de la función show es obligatorio cuando se utiliza la opción selectors"
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Rating localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Rating) {
	    $.ig.Rating = {};

	    $.extend($.ig.Rating, {
		    locale: {
			    setOptionError: 'Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: '
		    }
	    });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Splitter localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Splitter) {
	$.ig.Splitter = {};

	$.extend($.ig.Splitter, {
		locale: {
		    errorPanels: 'El número de paneles no puede ser superior a dos.',
		    errorSettingOption: 'Error al ajustar la opción.'
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tile Manager localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.TileManager) {
	$.ig.TileManager = {};

	$.extend($.ig.TileManager, {
		locale: {
		    renderDataError: "Los datos no se han recuperado o analizado correctamente.",
		    setOptionItemsLengthError: "The length of the items configurations does not match the number of the tiles."
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Toolbar localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Toolbar) {
    $.ig.Toolbar = {};

    $.extend($.ig.Toolbar, {

		locale: {
			collapseButtonTitle: 'Contraer',
			expandButtonTitle: 'Expandir'
		}

	});
}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Tree localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Tree) {
	    $.ig.Tree = {};

	    $.extend($.ig.Tree, {
		    locale: {
			    invalidArgumentType: 'El tipo de argumento proporcionado no es válido.',
			    errorOnRequest: 'Se ha producido un error al recuperar los datos: ',
			    noDataSourceUrl: 'El control igTree requiere que se proporcione una dataSourceUrl para iniciar una solicitud de datos en esa dirección URL.',
			    incorrectPath: 'No se ha encontrado un nodo en la ruta proporcionada: ',
			    incorrectNodeObject: 'El argumento proporcionado no es un elemento nodo de jQuery.',
			    setOptionError: 'Los cambios en el tiempo de ejecución no están permitidos para la siguiente opción: ',
			    moveTo: '<strong>Mover a</strong> {0}',
			    moveBetween: '<strong>Mover entre</strong> {0} y {1}',
			    moveAfter: '<strong>Mover después de</strong> {0}',
			    moveBefore: '<strong>Mover antes de</strong> {0}',
			    copyTo: '<strong>Copiar en</strong> {0}',
			    copyBetween: '<strong>Copiar entre</strong> {0} y {1}',
			    copyAfter: '<strong>Copiar después de</strong> {0}',
			    copyBefore: '<strong>Copiar antes de</strong> {0}',
			    and: 'y'
		    }
	    });

    }
})(jQuery);
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
                fixedVirtualizationNotSupported: 'Fixed virtualization is not supported. Please set virtualizationMode to continuous in order to enable row virtualization'
            }
        });
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Upload localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Upload) {
	    $.ig.Upload = {};

	    $.extend($.ig.Upload, {

		    locale: {
			    labelUploadButton: "Cargar archivo",
			    labelAddButton: "Agregar",
			    labelClearAllButton: "Borrar cargados",
			    // M.H. 13 May 2011 - fix bug 75042
			    labelSummaryTemplate: "{0} de {1} cargados",
			    labelSummaryProgressBarTemplate: "{0}/{1}",
			    labelShowDetails: "Mostrar detalles",
			    labelHideDetails: "Ocultar detalles",
			    labelSummaryProgressButtonCancel: "Cancelar",
			    // M.H. 1 June 2011 Fix bug #77532
			    labelSummaryProgressButtonContinue: "Cargar",
			    labelSummaryProgressButtonDone: "Terminado",
			    labelProgressBarFileNameContinue: "...",

			    //error messages
			    errorMessageFileSizeExceeded: "Se ha excedido el tamaño máximo de archivo.",
			    errorMessageGetFileStatus: "¡Imposible obtener el estado de archivo actual! Probablemente se ha cortado la conexión.",
			    errorMessageCancelUpload: "¡Imposible enviar comando al servidor para cancelar la carga! Probablemente se ha cortado la conexión.",
			    errorMessageNoSuchFile: "No se ha encontrado el archivo que ha solicitado. Probablemente el archivo es demasiado grande.",
			    errorMessageOther: "Error interno al cargar el archivo. Código de error: {0}.",
			    errorMessageValidatingFileExtension: "Error en la validación de extensión del archivo.",
			    errorMessageAJAXRequestFileSize: "Error de AJAX al intentar obtener el tamaño del archivo.",
			    errorMessageMaxUploadedFiles: "Se ha superado el número máximo de archivos que pueden cargarse.",
			    errorMessageMaxSimultaneousFiles: "El valor de maxSimultaneousFilesUploads es incorrecto. Debe ser superior a 0 o nulo.",
			    errorMessageTryToRemoveNonExistingFile: "Está intentando eliminar un archivo no existente con el Id. {0}.",
			    errorMessageTryToStartNonExistingFile: "Está intentando ejecutar un archivo no existente con el Id. {0}.",

			    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			    // title attributes            
			    titleUploadFileButtonInit: "Cargar archivo",
			    titleAddFileButton: "Agregar",
			    titleCancelUploadButton: "Cancelar",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSummaryProgressButtonContinue: "Cargar",
			    titleClearUploaded: "Borrar cargados",
			    titleShowDetailsButton: "Mostrar detalles",
			    titleHideDetailsButton: "Ocultar detalles",
			    titleSummaryProgressButtonCancel: "Cancelar",
			    titleSummaryProgressButtonDone: "Terminado",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSingleUploadButtonContinue: "Cargar",
			    titleClearAllButton: "Borrar cargados"
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Validator localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.Validator) {
	    $.ig.Validator = {
		    locale: {
			    defaultMessage: 'Corrija este campo',
			    selectMessage: 'Seleccione un valor',
			    rangeSelectMessage: 'Seleccione un número de elementos entre {0} como máximo y {1} como mínimo',
			    minSelectMessage: 'Seleccione {0} elementos como mínimo',
			    maxSelectMessage: 'No seleccione más de {0} elementos',
			    rangeLengthMessage: 'Escriba un valor de entre {0} y {1} caracteres',
			    minLengthMessage: 'Escriba {0} caracteres como mínimo',
			    maxLengthMessage: 'No escriba más de {0} caracteres',
			    requiredMessage: 'Este campo es obligatorio',
			    maskMessage: 'Rellene todas las posiciones obligatorias',
			    dateFieldsMessage: 'Rellene los campos de fecha',
			    invalidDayMessage: 'Día del mes no válido. Escriba el día correcto',
			    dateMessage: 'Escriba una fecha válida',
			    numberMessage: 'Escriba un número válido',
			    rangeMessage: 'Escriba un valor entre {0} y {1}',
			    minMessage: 'Escriba un valor mayor o igual a {0}',
			    maxMessage: 'Escriba un valor menor o igual a {0}'
		    }
	    };
    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Video Player localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.VideoPlayer) {
	    $.ig.VideoPlayer = {};

	    $.extend($.ig.VideoPlayer, {

		    locale: {
			    liveStream: "Vídeo en directo",
			    live: "Directo",
			    paused: "Pausado",
			    playing: "Reproduciendo",
			    play: 'Reproducir',
			    volume: "Volumen",
			    unsupportedVideoSource: "Los orígenes de vídeo actuales no contienen un formato compatible con su explorador.",
			    missingVideoSource: "No hay orígenes de vídeo compatibles.",
			    progressLabelLongFormat: "$currentTime$ / $duration$",
			    progressLabelShortFormat: "$currentTime$",
			    enterFullscreen: "Mostrar en pantalla completa",
			    exitFullscreen: "Salir de pantalla completa",
			    skipTo: "SALTAR A",
			    unsupportedBrowser: "El explorador actual no admite vídeo HTML5. <br/>Intente actualizar a una de las siguientes versiones:",
			    currentBrowser: "Explorador actual: {0}",
			    ie9: "Microsoft Internet Explorer V 9+",
			    chrome8: "Google Chrome V 8+",
			    firefox36: "Mozilla Firefox V 3.6+",
			    safari5: "Apple Safari V 5+",
			    opera11: "Opera V 11+",
			    ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			    operaDownload: "http://www.opera.com/download/",
			    chromeDownload: "http://www.google.com/chrome",
			    firefoxDownload: "http://www.mozilla.com/",
			    safariDownload: "http://www.apple.com/safari/download/",
			    buffering: 'Almacenando en búfer...',
			    adMessage: 'Anuncio: El vídeo se reanudará en $duration$ segundos.',
			    adMessageLong: 'Anuncio: El vídeo se reanudará en $duration$.',
			    adMessageNoDuration: 'Anuncio: El vídeo se reanudará después de la publicidad.',
			    adNewWindowTip: 'Anuncio: Haga clic para abrir el contenido del anuncio en una ventana nueva.',
			    nonDivException: 'El Reproductor de vídeo Infragistics HTML5 solo puede instanciarse en una etiqueta DIV.',
			    relatedVideos: 'VÍDEOS RELACIONADOS',
			    replayButton: 'Volver a reproducir',
			    replayTooltip: 'Haga clic para volver a reproducir el último vídeo.'
		    }
	    });

    }
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI Zoombar localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
$.ig = $.ig || {};

if (!$.ig.Zoombar) {
	$.ig.Zoombar = {};

	$.extend($.ig.Zoombar, {

	    locale: {
	        zoombarTargetNotSpecified: "igZoombar necesita un destino válido al que adjuntarse.",
	        zoombarTypeNotSupported: "El tipo de widget al que la barra de zoom intenta adjuntarse no se admite.",
	        optionChangeNotSupported: "No se admite cambiar la opción siguiente después de que igZoombar se haya creado:"
		}
	});

}
})(jQuery);
/*!@license
* Infragistics.Web.ClientUI common utilities localization resources 15.1.20151.1005
*
* Copyright (c) 2011-2015 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

/*global jQuery */
(function ($) {
    $.ig = $.ig || {};

    if (!$.ig.util) {
	    $.ig.util = {};

	    $.extend($.ig.util, {

		    locale: {
			    unsupportedBrowser: "El explorador actual no admite el elemento canvas de HTML5. <br/>Intente actualizar a una de las siguientes versiones:",
			    currentBrowser: "Explorador actual: {0}",
			    ie9: "Microsoft Internet Explorer V 9+",
			    chrome8: "Google Chrome V 8+",
			    firefox36: "Mozilla Firefox V 3.6+",
			    safari5: "Apple Safari V 5+",
			    opera11: "Opera V 11+",
			    ieDownload: "http://www.microsoft.com/windows/internet-explorer/default.aspx",
			    operaDownload: "http://www.opera.com/download/",
			    chromeDownload: "http://www.google.com/chrome",
			    firefoxDownload: "http://www.mozilla.com/",
			    safariDownload: "http://www.apple.com/safari/download/"
		    }
	    });

    }
})(jQuery);

