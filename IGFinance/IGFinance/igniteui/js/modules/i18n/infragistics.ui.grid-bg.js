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
            noSuchWidget: "Следният widget не е зареден: ",
            autoGenerateColumnsNoRecords: "autoGenerateColumns е позволено, но няма записи в източника на данни за да могат да бъдат генерирани колони",
            optionChangeNotSupported: "Промяната на следната опция след инициализация на igGrid не се поддържа:",
            optionChangeNotScrollingGrid: "Промяната на следната опция след инициализация на igGrid не се поддържа, защото първоначалната ви конфигурация не е включвала scrolling и грида се нуждае от повторно рендериране:",
            noPrimaryKeyDefined: "Нямате дефиниран primary key. За да използвате features като Grid Editing, ви трябва дефиниран primary key.",
            indexOutOfRange: "Индексът на ред, който сте въвели, е извън големината на колекцията.",
            noSuchColumnDefined: "Подаденият column key не отговаря на нито един о тези на дефинираните колони.",
            columnIndexOutOfRange: "Индексът на колоната, който сте въвели, е извън големината на колекцията.",
            recordNotFound: "Записът със следното id не може да бъде намерен в колекцията от данни:",
            columnNotFound: "Колоната със следния key не може да бъде намерена:",
            colPrefix: "Колона ",
            columnVirtualizationRequiresWidth: "Имате позволена virtualization / columnVirtualization, но няма широчина, която да може да бъде  инферирана за колоните на грида. Трябва да дефинирате a) широчина, b) опцията defaultColumnWidth, c) широчина за всяка колона",
            virtualizationRequiresHeight: "Имате позволена virtualization, което изисква височината на грида да бъде дефинирана.",
            colVirtualizationDenied: "columnVirtualization се отнася само за виртуализация със мод fixed.",
            noColumnsButAutoGenerateTrue: "Имате забранено autoGenerateColumns, но нямате дефинирани колони за грида. Моля разрешете autoGenerateColumns или дефинирайте колони.",
            noPrimaryKey: "igHierarchicalGrid widget изисква дефиниран primary key.",
            //templatingEnabledButNoTemplate: "You have jQueryTemplating set to true, but there is no rowTemplate defined.",
            expandTooltip: "Отвори реда",
            collapseTooltip: "Затвори реда",
            movingNotAllowedOrIncompatible: "Преместването на съответната колона не може да бъде извършено. Колоната не е намерена или резултатът не е съвместим с оформлението на колоните.",
            allColumnsHiddenOnInitialization: "Не е възможно всички колони на мрежата да бъдат скрити. Моля настройте поне една колона да бъде видима.",
            columnVirtualizationNotSupportedWithPercentageWidth: "Виртуализация на колони не е възможна когато ширината на мрежата е зададена в процентни единици.",
            mixedWidthsNotSupported: "Не се поддържа смесени/частични настройки на ширината на колоните. Не се поддържат случаи, в които някои ширини на колоните са зададени в проценти, а други са зададени в пиксели (или изобщо не са зададени)."
        }
    });

    $.ig.GridFiltering = $.ig.GridFiltering || {};

    $.extend($.ig.GridFiltering, {
        locale: {
            startsWithNullText: "Започва с...",
            endsWithNullText: "Завършва на...",
            containsNullText: "Съдържа...",
            doesNotContainNullText: "Не съдържа...",
            equalsNullText: "Равно на...",
            doesNotEqualNullText: "Не е равно на...",
            greaterThanNullText: "По-голямо от...",
            lessThanNullText: "По-малко от...",
            greaterThanOrEqualToNullText: "По-голямо или равно на...",
            lessThanOrEqualToNullText: "По-малко или равно на...",
            onNullText: "На...",
            notOnNullText: "Не на...",
            afterNullText: "След",
            beforeNullText: "Преди",
            emptyNullText: "Празно",
            notEmptyNullText: "Не е празно",
            nullNullText: "Null",
            notNullNullText: "Не е null",
            startsWithLabel: "Започва с",
            endsWithLabel: "Завършва на",
            containsLabel: "Съдържа",
            doesNotContainLabel: "Не съдържа",
            equalsLabel: "Равно на",
            doesNotEqualLabel: "Не е равно на",
            greaterThanLabel: "По-голямо от",
            lessThanLabel: "По-малко от",
            greaterThanOrEqualToLabel: "По-голямо или равно на",
            lessThanOrEqualToLabel: "По-малко или равно на",
            trueLabel: "True",
            falseLabel: "False",
            afterLabel: "След",
            beforeLabel: "Преди",
            todayLabel: "Днес",
            yesterdayLabel: "Вчера",
            thisMonthLabel: "Този месец",
            lastMonthLabel: "Миналият месец",
            nextMonthLabel: "Следващият месец",
            thisYearLabel: "Тази година",
            lastYearLabel: "Миналата година",
            nextYearLabel: "Следващата година",
            clearLabel: "Изчисти филтърът",
            noFilterLabel: "Не",
            onLabel: "На",
            notOnLabel: "Не на",
            advancedButtonLabel: "Подробно",
            filterDialogCaptionLabel: "Подробно търсене",
            filterDialogConditionLabel1: "Покажи записите отговарящи ",
            filterDialogConditionLabel2: " на следния критерий",
            filterDialogOkLabel: "Търси",
            filterDialogCancelLabel: "Отказ",
            filterDialogAnyLabel: "Който и да е",
            filterDialogAllLabel: "Всички",
            filterDialogAddLabel: "Прибави",
            filterDialogErrorLabel: "Надхвърлен е максималният брой филтри.",
            filterSummaryTitleLabel: "Резултати от търсенето",
            filterSummaryTemplate: "${matches} отговарящи записи",
            filterDialogClearAllLabel: "Изчисти всички филтри",
            tooltipTemplate: "${condition} филтър приложен",
            // M.H. 13 Oct. 2011 Fix for bug #91007
            featureChooserText: "Скрий филтъра",
            featureChooserTextHide: "Покажи филтъра",
            // M.H. 17 Oct. 2011 Fix for bug #91007
            featureChooserTextAdvancedFilter: "Подробен филтър",
            virtualizationSimpleFilteringNotAllowed: "Когато е разрешен хоризонтален virtualization, простият филтър (filter row) не се поддържа. Моля прехвърлете в режим на подробно търсене (advanced mode) и/или забранете advancedModeEditorsVisible",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка моля реферирайте ig.ui.grid.featurechooser.js или използвайте някой от комбинираните скриптови файлове."
        }
    });

    $.ig.GridGroupBy = $.ig.GridGroupBy || {};

    $.extend($.ig.GridGroupBy, {
        locale: {
            emptyGroupByAreaContent: "Издърпайте колона до тук или {0} за да групирате",
            emptyGroupByAreaContentSelectColumns: "изберете колони",
            emptyGroupByAreaContentSelectColumnsCaption: "изберете колони",
            expandTooltip: "Отвори групирания ред",
            collapseTooltip: "Затвори групирания ред",
            removeButtonTooltip: "Премахни групирането по тази колона",
            featureChooserText: "Премахни групирането",
            featureChooserTextHide: "Групирай",
            modalDialogCaptionButtonDesc: "Натисни за сортиране в възходящ ред",
            modalDialogCaptionButtonAsc: "Натисни за сортиране в низходящ ред",
            modalDialogCaptionButtonUngroup: "Натисни за премахване на групирането",
            modalDialogGroupByButtonText: "Групирай",
            modalDialogCaptionText: 'Прибави към групирането',
            modalDialogDropDownLabel: 'Показване:',
            modalDialogClearAllButtonLabel: 'изчисти всички',
            modalDialogRootLevelHierarchicalGrid: 'Най-горно ниво',
            modalDialogDropDownButtonCaption: "Натисни за показване/скриване",
            modalDialogButtonApplyText: 'Приложи',
            modalDialogButtonCancelText: 'Отказ',
            fixedVirualizationNotSupported: 'Функцията GroupBy не работи с фиксирана виртуализация.'
        }
    });

    $.ig.GridHiding = $.ig.GridHiding || {};

    $.extend($.ig.GridHiding, {
        locale: {
            columnChooserDisplayText: "Избиране на колони",
            hiddenColumnIndicatorTooltipText: "Скрита колона/колони",
            columnHideText: "Скрий",
            columnChooserCaptionLabel: "Избиране на колони",
            columnChooserCheckboxesHeader: "покажи",
            columnChooserColumnsHeader: "колона",
            columnChooserCloseButtonTooltip: "Затвори",
            hideColumnIconTooltip: "Скрий",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове.",
            columnChooserShowText: "Покажи",
            columnChooserHideText: "Скрий",
            columnChooserResetButtonLabel: "върни към начално състояние",
            columnChooserButtonApplyText: 'Приложи',
            columnChooserButtonCancelText: 'Отказ'
        }
    });

        $.ig.GridResizing = $.ig.GridResizing || {};

        $.extend($.ig.GridResizing, {
            locale: {
            	noSuchVisibleColumn: "Не е открита видима колона с посочения идентификатор. Можете да оразмерявате само видими колони.",
            	resizingAndFixedVirtualizationNotSupported: "Функцията за настройване на размера не работи когато е включена виртуализация или виртуализация на колона чрез фиксирана стойност на опцията virtualizationMode. За да избегнете тази грешка, моля настройте virtualizationMode на 'continuous' или използвайте само rowVirtualization."
            }
        });

    $.ig.GridPaging = $.ig.GridPaging || {};

    $.extend($.ig.GridPaging, {

        locale: {
            pageSizeDropDownLabel: "Покажи ",
            pageSizeDropDownTrailingLabel: "записи",
            //pageSizeDropDownTemplate: "Show ${dropdown} records",
            nextPageLabelText: "следваща",
            prevPageLabelText: "предишна",
            firstPageLabelText: "",
            lastPageLabelText: "",
            currentPageDropDownLeadingLabel: "Страница",
            currentPageDropDownTrailingLabel: "от ${count}",
            //currentPageDropDownTemplate: "Pg ${dropdown} of ${count}",
            currentPageDropDownTooltip: "Избиране на страница",
            pageSizeDropDownTooltip: "Избиране на брой записи на страница",
            pagerRecordsLabelTooltip: "Граници на показаните записи",
            prevPageTooltip: "отиди на предишната страница",
            nextPageTooltip: "отиди на следващата страница",
            firstPageTooltip: "отиди на първата страница",
            lastPageTooltip: "отиди на последната страница",
            pageTooltipFormat: "страница ${index}",
                pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} от ${recordCount} записа",
                invalidPageIndex: "Невалиден индекс на страница - индексът трябва да бъде по-голям или равен на 0 и по-малък от общия брой на страниците"
        }
    });

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
            persistenceImpossible: "За запазване избора на състояние е нужно опцията primaryKey на igGrid да бъде настроена. За да не виждате тази грешка отново, моля, дефинирайте първичен ключ или изключете запазването."
        }
    });

    $.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

    $.extend($.ig.GridRowSelectors, {

        locale: {
            selectionNotLoaded: "igGridSelection не е инициализиран. За да не получавате тази грешка, моля добавете Selection feature за грида или променете requireSelection опцията за Row Selectors feature да бъде равна на false.",
            columnVirtualizationEnabled: "Когато виртуализация на колони е включена, igGridRowSelectors не се поддържа. За да избегнете това съобщение за грешка, моля включете само виртуализация на редове настройвайки свойството на 'rowVirtualization' на мрежата на true или настройте режима на виртуализация на 'continuous'."
        }
    });

    $.ig.GridSorting = $.ig.GridSorting || {};

    $.extend($.ig.GridSorting, {
        locale: {
            sortedColumnTooltipFormat: 'сортирано ${direction}',
            unsortedColumnTooltip: 'натиснете за да сортирате',
            ascending: 'възходящ ред',
            descending: 'низходящ ред',
            modalDialogSortByButtonText: 'сортирай по',
            modalDialogResetButton: "върни към начално състояние",
            modalDialogCaptionButtonDesc: "Натиснете, за да сортирате в низходящ ред",
            modalDialogCaptionButtonAsc: "Натиснете, за да сортирате във възходящ ред",
            modalDialogCaptionButtonUnsort: "Натиснете, за да премахнете сортирането",
            featureChooserText: "Сортиране",
            modalDialogCaptionText: "Сортиране по множество колони",
            modalDialogButtonApplyText: 'Приложи',
            modalDialogButtonCancelText: 'Отказ',
            sortingHiddenColumnNotSupport: 'Сортирането на скрити колони не се поддържа',
            featureChooserSortAsc: 'Сортирай А-Я',
            featureChooserSortDesc: 'Сортирай Я-А'
            //modalDialogButtonSlideCaption: "Click to show/hide sorted columns"
        }
    });

    $.ig.GridSummaries = $.ig.GridSummaries || {};

    $.extend($.ig.GridSummaries, {
        locale: {
            featureChooserText: "Скрий обобщение",
            featureChooserTextHide: "Покажи обобщение",
            dialogButtonOKText: 'OK',
            dialogButtonCancelText: 'Отказ',
            emptyCellText: '',
            summariesHeaderButtonTooltip: 'Покажи/Скрий обобщените стойности',
            // M.H. 13 Oct. 2011 Fix for bug 91008
            defaultSummaryRowDisplayLabelCount: 'Брой',
            defaultSummaryRowDisplayLabelMin: 'Минимум',
            defaultSummaryRowDisplayLabelMax: 'Максимум',
            defaultSummaryRowDisplayLabelSum: 'Сума',
            defaultSummaryRowDisplayLabelAvg: 'Осреднено',
            defaultSummaryRowDisplayLabelCustom: '',
            calculateSummaryColumnKeyNotSpecified: "Моля, задайте идентификатор на колона, за да изчислите обобщените стойности",
            featureChooserNotReferenced: "Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка, моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове."
        }
    });

    $.ig.GridUpdating = $.ig.GridUpdating || {};

    $.extend($.ig.GridUpdating, {
        locale: {
            doneLabel: 'Готово',
            doneTooltip: 'Излез и запази промените',
            cancelLabel: 'Отказ',
            cancelTooltip: 'Излез без да запазваш промените',
            addRowLabel: 'Пробави нов ред',
            addRowTooltip: 'Натисни, за да започнеш прибавянето на нов ред',
            deleteRowLabel: '',
            deleteRowTooltip: 'Изтрий реда',
            igEditorException: 'Манипулирането на данни в ui.igGrid изисква ui.igEditor да бъде зареден',
            igComboException: 'За да използвате combo като едитор в ui.igGrid е нужно ui.igCombo да бъде зареден',
            igRatingException: 'За да използвате igRating като едитор в ui.igGrid е нужно ui.igRating да бъде зареден',
            igValidatorException: 'Опциите за валидация в igGridUpdating изискват ui.igValidator да бъде зареден',
            noPrimaryKeyException: 'Манипулационни операции върху данни след изтриването на ред се поддържат само ако имате дефиниран "primaryKey" в опциите на грида.',
            hiddenColumnValidationException: 'Ред със скрита колона не може да бъде променян ако имате включена валидация.',
            dataDirtyException: 'Гридът има неизчистени транзакции, което може да повлияе на рендерирането на данните. За да предотвратите грешки, можете да разрешите опцията "autoCommit" в грида, или да прихванете събитието "dataDirty" от igGridUpdating и да го отмените. Докато обработвате това събитие, приложението ви може също така да извършва "commit()" на данни в грида.',
            recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
            rowEditDialogCaptionLabel: 'Редактирай данните в реда',
            unboundColumnsNotSupported: 'ColumnFixing is not supported with Unbound Columns',
            excelNavigationNotSupportedWithCurrentEditMode: "Режима Excel Navigation се поддържа само за режимите Cell Edit и Row Edit. За да избегнете тази грешка или изключете excelNavigationMode, или настройте editMode на клетки или редове."
        }
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Приложи',
            movingDialogButtonCancelText: 'Отказ',
            movingDialogCaptionButtonDesc: 'Премести надолу',
            movingDialogCaptionButtonAsc: 'Премести нагоре',
            movingDialogCaptionText: 'Премести колоните',
            movingDialogDisplayText: 'Премести колоните',
            movingDialogDropTooltipText: 'Премести тук',
            dropDownMoveLeftText: 'Премести наляво',
            dropDownMoveRightText: 'Премести надясно',
            dropDownMoveFirstText: 'Премести в началото',
            dropDownMoveLastText: 'Премести в края',
            featureChooserNotReferenced: 'Скриптът за Feature Chooser не е рефериран. За да не получавате тази грешка, моля реферирайте ig.ui.grid.featurechooser.js или използваите някой от комбинираните скриптови файлове.',
            movingToolTipMove: 'Премести',
            featureChooserSubmenuText: 'Премести'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Щракни, за да фиксираш колоната',
            headerUnfixButtonText: 'Щракни, за да освободиш колоната',
            featureChooserTextFixedColumn: 'Фиксирай колоната',
            featureChooserTextUnfixedColumn: 'Освободи колоната',
            groupByNotSupported: 'igGridGroupBy не се поддържа с ColumnFixing',
            virtualizationNotSupported: 'Опцията за виртуализация на мрежата позволява виртуализация на редове и колони. Виртуализация на колони не се поддържа с ColumnFixing. Моля настройте опцията rowVirtualization на мрежата на true.',
            columnVirtualizationNotSupported: 'Виртуализация на колони не се подържа с ColumnFixing.',
            columnMovingNotSupported: 'igGridColumnMoving не се поддържа с ColumnFixing',
            hidingNotSupported: 'igGridHiding не се поддържа с ColumnFixing',
            hierarchicalGridNotSupported: 'igHierarchicalGrid не се поддържа с ColumnFixing',
            responsiveNotSupported: 'igGridResponsive не се поддържа с ColumnFixing',
            noGridWidthNotSupported: 'Трябва да зададете широчина на грида в пиксели когато използвате ColumnFixing',
            defaultColumnWidthInPercentageNotSupported: "Широчина на колоните в % не се поддържа с ColumnFixing",
            columnsWidthShouldBeSetInPixels: 'ColumnFixing изисква всички колони да имат зададена широчина в пиксели. Проверете колона с идентификатор: ',
            unboundColumnsNotSupported: 'ColumnFixing не се поддържа с Unbound Columns.',
            excelNavigationNotSupportedWithCurrentEditMode: "Режима Excel Navigation се поддържа само за режимите Cell Edit и Row Edit. За да избегнете тази грешка или изключете excelNavigationMode, или настройте editMode на клетки или редове.",
            internalErrors: {
                none: 'Няма грешка',
                notValidIdentifier: 'Не съществува колона със зададения идентификатор.',
                fixingRefused: 'Фиксирането е отказано понеже има само една видима не фиксирана колона.',
                fixingRefusedMinVisibleAreaWidth: 'Не е позволено фиксирането на колони заради минималната ширина на видимата зона за не фиксираните колони.',
                alreadyHidden: 'Опитвате се да фиксирате/премахнете фиксиране на скрита колона.',
                alreadyUnfixed: 'Колоната, на която се опитвате да премахнете фиксирането, вече е не фиксирана.',
                alreadyFixed: 'Колоната, която се опитвате да фиксирате, вече е фиксирана.',
                unfixingRefused: 'Премахване на фиксирането е отказано защото има само една видима фиксирана колона и поне една скрита фиксирана колона.',
                targetNotFound: 'Не е намерена целевата колона със зададения целеви идентификатор.'
            }
        }
    });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
        locale: {
            loadMoreDataButtonText: 'Зареди още данни',
            appendRowsOnDemandRequiresHeight: 'Фунцкията AppendRowsOnDemand изисква задаване на височина',
            groupByNotSupported: 'igGridGroupBy не се поддържа с AppendRowsOnDemand',
            pagingNotSupported: 'igGridPaging не се поддържа с AppendRowsOnDemand',
            cellMergingNotSupported: 'igGridCellMerging не се поддържа с AppendRowsOnDemand',
            virtualizationNotSupported: 'virtualization не се поддържа с AppendRowsOnDemand'
        }
    });

    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
    	locale: {
    	    fixedVirualizationNotSupported: 'igGridResponsive не се поддържа с фиксирана виртуализация.'
    	}
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
    	locale: {
    	    multiColumnHeadersNotSupportedWithColumnVirtualization: 'Функцията Multi-column headers не се поддържа с columnVirtualization.'
    	}
    });

}
})(jQuery);
