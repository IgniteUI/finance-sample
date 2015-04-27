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
			    noSuchWidget: "Kein solches Widget geladen: ",
			    autoGenerateColumnsNoRecords: "autoGenerateColumns ist aktiviert, aber es gibt keine Datensätze in der Datenquelle, um die Spalten zu bestimmen",
			    optionChangeNotSupported: "Die Änderung der folgenden Option nach der Erstellung von igGrid wird nicht unterstützt:",
			    optionChangeNotScrollingGrid: "Die folgende Option kann nach der Erstellung des Rasters nicht geändert werden, da das anfängliche Raster nicht abrollt und ein komplettes erneutes Rendering notwendig ist:",
			    noPrimaryKeyDefined: "Es wurde kein Primärschlüssel für das Raster definiert. Um Features wie Grid Editing verwenden zu können, muss ein Primärschlüssel definiert werden.",
			    indexOutOfRange: "Der angegebene Zeilenindex liegt außerhalb des zulässigen Bereichs.",
			    noSuchColumnDefined: "Der angegebene Spaltenschlüssel stimmt mit keiner der angegebenen Rasterspalten überein.",
			    columnIndexOutOfRange: "Der angegebene Spaltenindex liegt außerhalb des zulässigen Bereichs.",
			    recordNotFound: "Der Datensatz der angegebenen ID konnte in der Datenansicht nicht gefunden werden:",
			    columnNotFound: "Es wurde keine mit dem Schlüssel übereinstimmende Spalte gefunden:",
			    colPrefix: "Spalte ",
			    columnVirtualizationRequiresWidth: "Virtualisierung / columnVirtualization ist auf True festgelegt, es konnte jedoch keine Breite für die Rasterspalten abgeleitet werden. Legen Sie entweder a) Rasterbreite oder b) defaultColumnWidth fest oder c) definieren Sie die Breite für jede Spalte",
			    virtualizationRequiresHeight: "Virtualisierung ist auf True festgelegt, daher muss auch die Rasterhöhe festgelegt werden.",
                colVirtualizationDenied: "columnVirtualization gilt nur für feste Virtualisierung",
			    noColumnsButAutoGenerateTrue: "autoGenerateColumns ist auf False festgelegt, im Raster sind jedoch keine Spalten definiert. Bitte legen Sie autoGenerateColumns auf True fest oder geben Sie manuell Spalten an",
			    noPrimaryKey: "Für das igHierarchicalGrid Widget muss ein Primärschlüssel definiert werden.",
			    templatingEnabledButNoTemplate: "jQueryTemplating ist auf True festgelegt, es ist jedoch kein rowTemplate definiert.",
			    expandTooltip: "Zeile erweitern",
			    collapseTooltip: "Zeile reduzieren",
			    movingNotAllowedOrIncompatible: "Das Verschieben der angeforderten Spalte konnte nicht abgeschlossen werden. Die Spalte wurde nicht gefunden oder das Ergebnis war nicht mit dem Spaltenlayout kompatibel.",
			    allColumnsHiddenOnInitialization: "Es können nicht alle Rasterspalten ausgeblendet werden. Bitte stellen Sie mindestens eine der Spalten so ein, dass sie angezeigt wird.",
			    columnVirtualizationNotSupportedWithPercentageWidth: "Die Spaltenvirtualisierung wird nicht unterstützt wenn die Rasterbreite in der Einheit Prozent angegeben wird.",
			    mixedWidthsNotSupported: "Gemischte/partielle Einstellungen der Spaltenbreite werden nicht unterstützt. Es werden keine Szenarien unterstützt, bei denen einige Spaltenbreiten in Prozent eingestellt sind, während andere in Pixel eingestellt sind (oder gar nicht angegeben werden)."
		    }
	    });

	    $.ig.GridFiltering = $.ig.GridFiltering || {};

	    $.extend($.ig.GridFiltering, {
		    locale: {
			    startsWithNullText: "Beginnt mit...",
			    endsWithNullText: "Endet mit...",
			    containsNullText: "Enthält...",
			    doesNotContainNullText: "Enthält nicht...",
			    equalsNullText: "Gleich...",
			    doesNotEqualNullText: "Nicht gleich...",
			    greaterThanNullText: "Größer als...",
			    lessThanNullText: "Kleiner als...",
			    greaterThanOrEqualToNullText: "Größer als oder gleich...",
			    lessThanOrEqualToNullText: "Kleiner als oder gleich...",
			    onNullText: "Am...",
			    notOnNullText: "Nicht am...",
			    afterNullText: "Nach",
			    beforeNullText: "Vor",
			    emptyNullText: "Leer",
			    notEmptyNullText: "Nicht leer",
			    nullNullText: "Null",
			    notNullNullText: "Nicht Null",
			    startsWithLabel: "Beginnt mit",
			    endsWithLabel: "Endet mit",
			    containsLabel: "Enthält",
			    doesNotContainLabel: "Enthält nicht",
			    equalsLabel: "Gleich",
			    doesNotEqualLabel: "Nicht gleich",
			    greaterThanLabel: "Größer als",
			    lessThanLabel: "Kleiner als",
			    greaterThanOrEqualToLabel: "Größer als oder gleich",
			    lessThanOrEqualToLabel: "Kleiner als oder gleich",
			    trueLabel: "Wahr",
			    falseLabel: "Falsch",
			    afterLabel: "Nach",
			    beforeLabel: "Vor",
			    todayLabel: "Heute",
			    yesterdayLabel: "Gestern",
			    thisMonthLabel: "Dieser Monat",
			    lastMonthLabel: "Letzter Monat",
			    nextMonthLabel: "Nächster Monat",
			    thisYearLabel: "Dieses Jahr",
			    lastYearLabel: "Letztes Jahr",
			    nextYearLabel: "Nächstes Jahr",
			    clearLabel: "Filter löschen",
			    noFilterLabel: "Kein",
			    onLabel: "Am",
			    notOnLabel: "Nicht am",
			    advancedButtonLabel: "Erweitert",
			    filterDialogCaptionLabel: "ADVANCED SEARCH",
			    filterDialogConditionLabel1: "Datensätze anzeigen, die übereinstimmen mit ",
			    filterDialogConditionLabel2: " der folgenden Kriterien",
			    filterDialogOkLabel: "Suchen",
			    filterDialogCancelLabel: "Abbrechen",
			    filterDialogAnyLabel: "ANY",
			    filterDialogAllLabel: "ALL",
			    filterDialogAddLabel: "Hinzufügen",
			    filterDialogErrorLabel: "Maximale Filterzahl überschritten",
			    filterSummaryTitleLabel: "Suchergebnisse",
			    filterSummaryTemplate: "${matches} übereinstimmende Datensätze",
			    filterDialogClearAllLabel: "ALL löschen",
			    tooltipTemplate: "${condition} Filter angewendet",
			    // M.H. 13 Oct. 2011 Fix for bug #91007
			    featureChooserText: "Filter ausblenden",
			    featureChooserTextHide: "Filter anzeigen",
			    // M.H. 17 Oct. 2011 Fix for bug #91007
			    featureChooserTextAdvancedFilter: "Erweiterter Filter",
			    virtualizationSimpleFilteringNotAllowed: "Wenn die horizontale Virtualisierung aktiviert ist, wird die einfache Filterung (Filterzeile) nicht unterstützt. Bitte legen Sie den Modus auf 'erweitert' fest und/oder aktivieren Sie advancedModeEditorsVisible nicht",
			    featureChooserNotReferenced: "Featureauswahl-Skript ist nicht referenziert. Um den Erhalt dieser Fehlermeldung zu vermeiden, schließen Sie bitte die Datei ig.ui.grid.featurechooser.js ein oder verwenden Sie das Ladeprogramm oder eine der kombinierten Skript-Dateien."
		    }
	    });

	    $.ig.GridGroupBy = $.ig.GridGroupBy || {};

	    $.extend($.ig.GridGroupBy, {
		    locale: {
			    emptyGroupByAreaContent: "Ziehen Sie eine Spalte hierher oder {0} zu Gruppiert nach",
			    emptyGroupByAreaContentSelectColumns: "Spalten auswählen",
			    emptyGroupByAreaContentSelectColumnsCaption: "Spalten auswählen",
			    expandTooltip: "Gruppierte Zeile erweitern",
			    collapseTooltip: "Gruppierte Zeile reduzieren",
			    removeButtonTooltip: "Gruppierte Spalte entfernen",
			    featureChooserText: "Gruppieren aufheben nach",
			    featureChooserTextHide: "Gruppieren nach",
			    modalDialogCaptionButtonDesc: "Klicken, um aufsteigend zu sortieren",
			    modalDialogCaptionButtonAsc: "Klicken, um absteigend zu sortieren",
			    modalDialogCaptionButtonUngroup: "Klicken, um Gruppierung aufzuheben",
			    modalDialogGroupByButtonText: "Gruppieren nach",
			    modalDialogCaptionText: 'Zu Gruppieren nach hinzufügen',
			    modalDialogDropDownLabel: 'Anzeige:',
			    modalDialogClearAllButtonLabel: 'Alle löschen',
			    modalDialogRootLevelHierarchicalGrid: 'Stamm',
			    modalDialogDropDownButtonCaption: "Klicken, um anzuzeigen/auszublenden",
			    modalDialogButtonApplyText: 'Übernehmen',
			    modalDialogButtonCancelText: 'Abbrechen',
			    fixedVirualizationNotSupported: 'Die GroupBy-Funktion funktioniert nicht bei der fixierten Virtualisierung.'
		    }
	    });

	    $.ig.GridHiding = $.ig.GridHiding || {};

	    $.extend($.ig.GridHiding, {
		    locale: {
		        columnChooserDisplayText: "Spaltenwahl",
			    hiddenColumnIndicatorTooltipText: "Ausgeblendete Spalte(n)",
			    columnHideText: "Ausblenden",
			    columnChooserCaptionLabel: "Spaltenauswahl",
			    columnChooserCheckboxesHeader: "Ansicht",
			    columnChooserColumnsHeader: "Spalte",
			    columnChooserCloseButtonTooltip: "Schließen",
			    hideColumnIconTooltip: "Ausblenden",
			    featureChooserNotReferenced: "Featureauswahl-Skript ist nicht referenziert. Um den Erhalt dieser Fehlermeldung zu vermeiden, schließen Sie bitte die Datei ig.ui.grid.featurechooser.js ein oder verwenden Sie eine der kombinierten Skript-Dateien.",
			    columnChooserShowText: "Anzeigen",
			    columnChooserHideText: "Ausblenden",
			    columnChooserResetButtonLabel: "Zurücksetzen",
			    columnChooserButtonApplyText: 'Übernehmen',
			    columnChooserButtonCancelText: 'Abbrechen'
		    }
	    });

		$.ig.GridResizing = $.ig.GridResizing || {};

		$.extend($.ig.GridResizing, {
			locale: {
			    noSuchVisibleColumn: "Mit dem angegebenen Schlüssel konnte keine sichtbare Spalte gefunden werden. Sie können nur die Größe sichtbarer Spalten ändern.",
			    resizingAndFixedVirtualizationNotSupported: "Die Funktion zur Größenänderung funktioniert nicht, wenn bei fixiertem virtualizationMode entweder die Virtualisierung oder die Spaltenvirtualisierung aktiviert ist. Um diese Ausnahme zu verhindern stellen Sie virtualizationMode bitte auf 'continuous' oder verwenden Sie nur rowVirtualization."
			}
		});

	    $.ig.GridPaging = $.ig.GridPaging || {};

	    $.extend($.ig.GridPaging, {

		    locale: {
			    pageSizeDropDownLabel: "Anzeigen ",
			    pageSizeDropDownTrailingLabel: "Datensätze",
			    //pageSizeDropDownTemplate: "${dropdown} Datensätze anzeigen",
			    nextPageLabelText: "Weiter",
			    prevPageLabelText: "Zurück",
			    firstPageLabelText: "",
			    lastPageLabelText: "",
			    currentPageDropDownLeadingLabel: "S.",
			    currentPageDropDownTrailingLabel: "von ${count}",
			    //currentPageDropDownTemplate: "S. ${dropdown} von ${count}",
			    currentPageDropDownTooltip: "Seitenindex auswählen",
			    pageSizeDropDownTooltip: "Anzahl der Datensätze pro Seite auswählen",
			    pagerRecordsLabelTooltip: "Aktueller Datensatzbereich",
			    prevPageTooltip: "Zur vorherigen Seite wechseln",
			    nextPageTooltip: "Zur nächsten Seite wechseln",
			    firstPageTooltip: "Zur ersten Seite wechseln",
			    lastPageTooltip: "Zur letzten Seite wechseln",
			    pageTooltipFormat: "Seite ${index}",
			    pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} von ${recordCount} Datensätzen",
			    invalidPageIndex: "Ungültiger Seitenindex - er sollte größer oder gleich 0 und niedriger als die Seitenzahl sein"
		    }
	    });

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
            persistenceImpossible: "Für die dauerhafte Auswahl zwischen Zuständen ist es erforderlich, dass die igGrid's primaryKey-Option eingestellt ist. Um den Erhalt dieses Fehlers zu vermeiden definieren Sie bitte einen primary key oder deaktivieren Sie die Dauerhaftigkeit."
        }
    });

	    $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	    $.extend($.ig.GridRowSelectors, {

		    locale: {
			    selectionNotLoaded: "igGridSelection ist nicht initialisiert. Um den Erhalt dieser Fehlermeldung zu vermeiden, aktivieren Sie bitte das Feature Selection für das Raster oder legen Sie die Eigenschaft requireSelection property der Funktion Row Selectors auf False fest.",
			    columnVirtualizationEnabled: "igGridRowSelectors wird bei aktivierter Spaltenvirtualisierung nicht unterstützt. Um das Erhalten dieser Fehlermeldung zu vermeiden, aktivieren Sie die Zeilenvirtualisierung bitte nur durch Aktivieren der Eigenschaft 'rowVirtualization' des Rasters oder durch Ändern des Virtualisierungsmodus auf 'continuous'."
		    }
	    });

	    $.ig.GridSorting = $.ig.GridSorting || {};

	    $.extend($.ig.GridSorting, {
		    locale: {
			    sortedColumnTooltipFormat: 'sortiert ${direction}',
			    unsortedColumnTooltip: 'Klicken, um Spalte zu sortieren',
			    ascending: 'aufsteigend',
			    descending: 'absteigend',
			    modalDialogSortByButtonText: 'Sortieren nach',
			    modalDialogResetButton: "Zurücksetzen",
			    modalDialogCaptionButtonDesc: "Klicken, um absteigend zu sortieren",
			    modalDialogCaptionButtonAsc: "Klicken, um aufsteigend zu sortieren",
			    modalDialogCaptionButtonUnsort: "Klicken, um Sortierung zu entfernen",
			    featureChooserText: "Mehrere sortieren",
			    modalDialogCaptionText: "Mehrere sortieren",
			    modalDialogButtonApplyText: 'Übernehmen',
			    modalDialogButtonCancelText: 'Abbrechen',
			    sortingHiddenColumnNotSupport: 'Sortierung von ausgeblendeten Spalten wird nicht unterstützt',
			    featureChooserSortAsc: 'Aufsteigend sortieren',
			    featureChooserSortDesc: 'Absteigend sortieren'
			    //modalDialogButtonSlideCaption: "Klicken, um sortierte Spalten anzuzeigen/auszublenden"
		    }
	    });

	    $.ig.GridSummaries = $.ig.GridSummaries || {};

	    $.extend($.ig.GridSummaries, {
		    locale: {
		        featureChooserText: "Übersicht ausblenden",
		        featureChooserTextHide: "Übersicht anzeigen",
			    dialogButtonOKText: 'OK',
			    dialogButtonCancelText: 'Abbrechen',
			    emptyCellText: '',
			    summariesHeaderButtonTooltip: 'Zusammenfassungen anzeigen/ausblenden',
			    // M.H. 13 Oct. 2011 Fix for bug 91008
			    defaultSummaryRowDisplayLabelCount: 'Anzahl',
			    defaultSummaryRowDisplayLabelMin: 'Min',
			    defaultSummaryRowDisplayLabelMax: 'Max',
			    defaultSummaryRowDisplayLabelSum: 'Summe',
			    defaultSummaryRowDisplayLabelAvg: 'Durchschnitt',
			    defaultSummaryRowDisplayLabelCustom: 'Benutzerdefiniert',
			    calculateSummaryColumnKeyNotSpecified: "Bitte geben Sie den Spaltenschlüssel für die Berechnung der Zusammenfassung an",
			    featureChooserNotReferenced: "Featureauswahl-Skript ist nicht referenziert. Um den Erhalt dieser Fehlermeldung zu vermeiden, schließen Sie bitte die Datei ig.ui.grid.featurechooser.js ein oder verwenden Sie eine der kombinierten Skript-Dateien."
		    }
	    });

	    $.ig.GridUpdating = $.ig.GridUpdating || {};

	    $.extend($.ig.GridUpdating, {
		    locale: {
			    doneLabel: 'Fertig',
			    doneTooltip: 'Bearbeitung beenden und aktualisieren',
			    cancelLabel: 'Abbrechen',
			    cancelTooltip: 'Bearbeitung beenden und nicht aktualisieren',
			    addRowLabel: 'Neue Zeile hinzufügen',
			    addRowTooltip: 'Klicken, um eine neue Zeile hinzuzufügen',
			    deleteRowLabel: '',
			    deleteRowTooltip: 'Zeile löschen',
			    igEditorException: 'Für die Aktualisierung von ui.igGrid muss ui.igEditor geladen werden',
			    igComboException: 'Um den Kombinationstyp für ui.igGrid zu verwenden, muss ui.igCombo geladen werden',
			    igRatingException: 'Um igRating als Editor für ui.igGrid zu verwenden, muss ui.igRating geladen werden',
			    igValidatorException: 'Für die in igGridUpdating definierten Überprüfungsoptionen muss ui.igValidator geladen werden',
			    noPrimaryKeyException: 'Um Aktualisierungsvorgänge zu unterstützen, nachdem eine Zeile gelöscht wurde, muss die Anwendung "primaryKey" in Optionen von igGrid definieren.',
			    hiddenColumnValidationException: 'Eine Zeile mit ausgeblendeter Spalte mit aktivierter Überprüfung kann nicht bearbeitet werden.',
			    dataDirtyException: 'Raster hat ausstehende Transaktionen, die das Rendern der Daten beeinflussen können Um eine Ausnahme zu vermeiden, kann die Anwendung die Option "autoCommit" von igGrid aktivieren oder sie muss das Ereignis "dataDirty" von igGridUpdating verarbeiten und False zurückgeben. Bei der Verarbeitung dieses Ereignisses kann die Anwendung auch "commit()" Daten in igGrid durchführen.',
			    recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
			    rowEditDialogCaptionLabel: 'Zeilendaten bearbeiten',
			    unboundColumnsNotSupported: 'Bei ungebundenen Spalten wird ColumnFixing nicht unterstützt',
			    excelNavigationNotSupportedWithCurrentEditMode: "Der Excel-Navigationsmodus wird nur für die Modi zur Bearbeitung der Zellen und der Zeilen unterstützt. Um diesen Fehler zu verhindern deaktivieren Sie excelNavigationMode oder stellen Sie den editMode auf Zelle oder Zeile ein."
		    }
        });

        $.ig.ColumnMoving = $.ig.ColumnMoving || {};

        $.extend($.ig.ColumnMoving, {
            locale: {
                movingDialogButtonApplyText: 'Übernehmen',
                movingDialogButtonCancelText: 'Abbrechen',
                movingDialogCaptionButtonDesc: 'Nach unten verschieben',
                movingDialogCaptionButtonAsc: 'Nach oben verschieben',
                movingDialogCaptionText: 'Spalten verschieben',
                movingDialogDisplayText: 'Spalten verschieben',
                movingDialogDropTooltipText: "Hierher verschieben",
                dropDownMoveLeftText: 'Nach links verschieben',
                dropDownMoveRightText: 'Nach rechts verschieben',
                dropDownMoveFirstText: 'Erste verschieben',
                dropDownMoveLastText: 'Letzte verschieben',
                featureChooserNotReferenced: "Featureauswahl-Skript ist nicht referenziert. Um den Erhalt dieser Fehlermeldung zu vermeiden, schließen Sie bitte die Datei ig.ui.grid.featurechooser.js ein oder verwenden Sie das Ladeprogramm oder eine der kombinierten Skript-Dateien.",
                movingToolTipMove: 'Verschieben',
                featureChooserSubmenuText: 'Verschieben'
            }
        });
    
        $.ig.ColumnFixing = $.ig.ColumnFixing || {};

        $.extend($.ig.ColumnFixing, {
            locale: {
                headerFixButtonText: 'Klicken, um diese Spalte zu binden',
                headerUnfixButtonText: 'Klicken, um diese Spalte zu lösen',
                featureChooserTextFixedColumn: 'Spalte befestigen',
                featureChooserTextUnfixedColumn: 'Spalte lösen',
                groupByNotSupported: 'igGridGroupBy wird nicht von ColumnFixing unterstützt',
                virtualizationNotSupported: 'Die Optionsvirtualisierung des Rasters ermöglicht die Virtualisierung von Zeilen und Spalten. Bei ColumnFixing wird die Spaltenvirtualisierung nicht unterstützt. Bitte aktivieren Sie die Option rowVirtualization des Rasters',
                columnVirtualizationNotSupported: 'Bei ColumnFixing wird die Spaltenvirtualisierung nicht unterstützt',
                columnMovingNotSupported: 'igGridColumnMoving wird nicht von ColumnFixing unterstützt',
                hidingNotSupported: 'igGridHiding wird nicht von ColumnFixing unterstützt',
                hierarchicalGridNotSupported: 'igHierarchicalGrid wird nicht von ColumnFixing unterstützt',
                responsiveNotSupported: 'igGridResponsive wird nicht von ColumnFixing unterstützt',
                noGridWidthNotSupported: 'Sie müssen beim Verwenden von ColumnFixing die Rasterbreite in Pixeln angeben',
                defaultColumnWidthInPercentageNotSupported: "Bei der Verwendung von ColumnFixing wird die standardmäßige Spaltenbreite in Prozent nicht unterstützt",
                columnsWidthShouldBeSetInPixels: 'Für ColumnFixing muss bei allen Rasterspalten die Breite in Pixeln eingestellt sein. Prüfen Sie die Spalte mit dem Schlüssel: ',
                unboundColumnsNotSupported: 'Bei ungebundenen Spalten wird ColumnFixing nicht unterstützt',
                excelNavigationNotSupportedWithCurrentEditMode: "Der Excel-Navigationsmodus wird nur für die Modi zur Bearbeitung der Zellen und der Zeilen unterstützt. Um diesen Fehler zu verhindern deaktivieren Sie excelNavigationMode oder stellen Sie den editMode auf Zelle oder Zeile ein.",
                internalErrors: {
                    none: 'Kein Fehler',
                    notValidIdentifier: 'Es gibt keine Spalte mit dem angegebenen Bezeichner',
                    fixingRefused: 'Das Fixieren wird verweigert, da es nur EINE sichtbare gelöste Spalte gibt',
                    fixingRefusedMinVisibleAreaWidth: 'Aufgrund der Mindestbreite des sichtbaren Bereichs für gelöste Spalten ist das Fixieren der Spalte nicht erlaubt',
                    alreadyHidden: 'Sie versuchen, eine ausgeblendete Spalte zu fixieren oder zu lösen',
                    alreadyUnfixed: 'Die Spalte, die Sie lösen wollen, ist bereits gelöst',
                    alreadyFixed: 'Die Spalte, die Sie fixieren wollen, ist bereits fixiert',
                    unfixingRefused: 'Das Lösen wird verweigert, da es nur eine sichtbare fixierte Spalte und mindestens eine ausgeblendete fixierte Spalte gibt.',
                    targetNotFound: 'Target column is not found with the specified target identifier'
                }
            }
        });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
            locale: {
                loadMoreDataButtonText: 'Mehr Daten laden',
            appendRowsOnDemandRequiresHeight: 'Die Funktion AppendRowsOnDemand erfordert Höhe',
            groupByNotSupported: 'igGridGroupBy wird nicht mit AppendRowsOnDemand unterstützt',
            pagingNotSupported: 'igGridPaging wird nicht mit AppendRowsOnDemand unterstützt',
            cellMergingNotSupported: 'igGridCellMerging wird nicht mit AppendRowsOnDemand unterstützt',
            virtualizationNotSupported: 'Virtualisierung wird nicht mit AppendRowsOnDemand unterstützt'
            }
    });

    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
    	locale: {
    	    fixedVirualizationNotSupported: 'Bei der fixierten Virtualisierung wird igGridResponsive nicht unterstützt'
    	}
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
    	locale: {
    	    multiColumnHeadersNotSupportedWithColumnVirtualization: 'Bei columnVirtualization wird die Funktion für mehrspaltige Kopfzeilen nicht unterstützt'
    	}
    });

    }
})(jQuery);
