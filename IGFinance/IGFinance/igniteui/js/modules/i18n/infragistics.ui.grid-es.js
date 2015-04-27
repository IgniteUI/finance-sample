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
