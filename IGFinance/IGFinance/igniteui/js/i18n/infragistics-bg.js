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
			    invalidDataSource: "Подаденият източник на данни е невалиден.",
			    unknownDataSource: "Типът на източника на данни не може да бъде определен. Моля дефинирайте дали данните са в JSON или XML формат.",
			    errorParsingArrays: "Грешка при парсирането на масива от данни и при прилагането на дефинираната schema: ",
			    errorParsingJson: "Грешка при парсирането на JSON обекта от данни и при прилагането на дефинираната schema: ",
			    errorParsingXml: "Грешка при парсирането на XML обекта от данни и при прилагането на дефинираната schema: ",
			    errorParsingHtmlTable: "Грешка при извличането на данни от HTML таблицата и при прилагането на дефинираната schema: ",
			    errorExpectedTbodyParameter: "Очакваният параметър трябва да е от тип table или tbody.",
			    errorTableWithIdNotFound: "Не е намерена HTML таблица с ID: ",
			    errorParsingHtmlTableNoSchema: "Грешка при парсиране на табличния DOM: ",
			    errorParsingJsonNoSchema: "Грешка при парсиране на JSON string: ",
			    errorParsingXmlNoSchema: "Грешка при парсиране на XML string: ",
			    errorXmlSourceWithoutSchema: "Подаденият източник на данни е XML документ, но няма дефинирана schema за данните ($.IgDataSchema).",
			    errorUnrecognizedFilterCondition: "Неразпознато условие за филтриране: ",
			    errorRemoteRequest: "Неуспешно завършено външно поискване на данни: ",
			    errorSchemaMismatch: "Входните данни не отговарят на подадената schema; съответното поле не може да бъде попълнено успешно: ",
			    errorSchemaFieldCountMismatch: "Входните данни не отговарят на подадената схема като брой полета. ",
			    errorUnrecognizedResponseType: "Типът на доставените данни не е деклариран правилно или не е било възможно типът да бъде определен автоматично. Моля попълнете settings.responseDataType и/или settings.responseContentType.",
			    hierarchicalTablesNotSupported: "Таблици не се поддържат от HierarchicalSchema",
			    cannotBuildTemplate: "Шаблонът не може да бъде построен. Източника на данни няма записи и не са дефинирани колони.",
			    unrecognizedCondition: "Неразпознато условие за филтриране: ",
			    fieldMismatch: "Изразът съдържа невалидно поле или условие за филтриране: ",
			    noSortingFields: "Моля задайте поне едно поле при извикване на sort().",
			    filteringNoSchema: "Нямате зададени schema / fields. Нужно е да зададете schema с field дефиниция и типове, за да можете да филтрирате източника на данни."
		    }
	    });

    }
})(jQuery);
/*
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
			    seriesName: "трябва да попълните series name в зададените от вас опции.",
			    axisName: "трябва да попълните axis name в зададените от вас опции.",
			    invalidLabelBinding: "Не съществува такава стойност, с която да се обвържат етикетите.",
			    close: "Затвори",
			    overview: "Преглед",
			    zoomOut: "Отдалечи",
			    zoomIn: "Увеличи",
			    resetZoom: "Рестартирай увеличението"
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
			    undefinedArgument: 'Грешка при опит да се вземе стойността на следното свойство от източника на данни: '
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
			    aILength: "AI трябва да се състои от поне 2 цифри.",
			    badFormedUCCValue: "Данните за UCC баркода не са зададени коректно. Трябва да имат следния формат: (AI)GTIN.",
			    code39_NonNumericError: "Символът '{0}' не е валиден за CODE39 данни. Валидните символи са: {1}",
			    countryError: "Грешка при конвертирането на кода на страната. Трябва да е числова стойност.",
			    emptyValueMsg: "Стойността на Data е празна.",
			    encodingError: "Грешка при конвертирането. Направете справка в документацията за валидните стойности на свойствата.",
			    errorMessageText: "Невалидна стойност! Направете справка в документацията за валидната структура на данните за баркода.",
			    gS1ExMaxAlphanumNumber: "GS1 DataBar Expanded семейството може да кодира до 41 буквено-цифрови знаци.",
			    gS1ExMaxNumericNumber: "GS1 DataBar Expanded семейството може да кодира до 74 цифрови знаци.",
			    gS1Length: "Data свойството на GS1 DataBar се използва за GTIN - 8, 12, 13, 14 и дължината му трябва да бъде 7, 11, 12 or 13. Последната цифра е резервирана за контролна сума.",
			    gS1LimitedFirstChar: "Първата цифра на GS1 DataBar Limited трябва да е 0 или 1. При кодиране на GTIN-14 Data Structures със стойност на Indicator по-голяма от 1, трябва да се използва един от следните типове баркод: Omnidirectional, Stacked, Stacked Omnidirectional или Truncated.",
			    i25Length: "Interleaved2of5 баркодът трябва да има четен брой цифри. Може да се сложи 0 в началото, ако броят им е нечетен.",
			    intelligentMailLength: "Дължината на данните на Intelligent Mail баркода трябва да е 20, 25, 29 или 31 знака - 20 цифри за кода за проследяване (2 за баркод идентификатор, 3 за идентификатор на типа на услугата, 6 или 9 за идентификатор на системата за изпращане и 9 или 6 за сериен номер) и 0, 5, 9 или 11 пощенски код символи.",
			    intelligentMailSecondDigit: "Втората цифра трябва да е между 0 и 4 включително.",
			    invalidAI: "Невалидни низове за елементите на Application Identifier. Проверете дали низът от данни е правилно форматиран.",
			    invalidCharacter: "Знакът '{0}' е невалиден за текущия тип баркод. Валидните символи са: {1}",
			    invalidDimension: "Размерите на баркода не могат да бъдат определени поради невалидна комбинация на стойностите на Stretch, BarsFillMode и XDimension свойствата.",
			    invalidHeight: "Даденият брой редове на баркод мрежата ({0}) не могат да се поместят в дадената височина ({1} пиксели).",
			    invalidLength: "В Data на баркода трябва да има {0} цифри.",
			    invalidPostalCode: "Невалидна стойност на PostalCode - в режим 2 могат да бъдат кодирани пощенски кодове с максимум 9 цифри (пощенски кодове от САЩ), докато в режим 3 могат да се кодират максимум 6 буквено-цифрови знака.",
			    invalidPropertyValue: "Стойността на свойството {0} трябва да е между {1} и {2} включително.",
			    invalidVersion: "Числото, зададено в SizeVersion не позволява да се генерират достатъчно клетки, за да се кодират данните с текущия режим на кодиране и ниво на корекция на грешките.",
			    invalidWidth: "Даденият брой колони на баркод мрежата ({0}) не могат да се поместят в дадената широчина ({1} пиксели). Провери стойността на свойствата XDimension и/или WidthToHeightRatio.",
			    invalidXDimensionValue: "Стойността на XDimension трябва да е от {0} до {1} за текущия тип баркод.",
			    maxLength: "Дължината {0} на текста надхвърля максималното допустимо за кодиране при текущия тип баркод. Може да кодира мсксимум {1} знака.",
			    notSupportedEncoding: "Кодирането съответстващо на {0} {1} не се поддържа.",
			    pDF417InvalidRowsColumnsCombination: "Думите за кодиране (данни и корекция на грешки) надвишават допустимото количество, което може да бъде кодирано със символна матрица {0}x{1}.",
			    primaryMessageError: "Невъзможно е да се извлече основното съобщение от стойността в Data. Направете справка в документацията за правилната структура.",
			    serviceClassError: "Грешка при конвертиране на сървис класа. Трябва да е числова стойност.",
			    smallSize: "Невъзможно е да се вмести мрежа със Size({0}, {1}) при зададените Stretch настройки.",
			    unencodableCharacter: "Знакът '{0}' не може да бъде кодиран.",
			    uPCEFirstDigit: "Първата UPCE цифра трябва винаги да бъде нула според спецификацията.",
			    warningString: "Баркод предупреждение: ",
			    wrongCompactionMode: "Съобщението в Data не може да бъде уплътнено в режим {0}.",
                notLoadedEncoding: "Кодирането {0} не е заредено."
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
		        noMatchFoundText: 'Няма намерени резултати',
		        dropDownButtonTitle: 'Покажи падащото меню',
		        clearButtonTitle: 'Изчисти стойността',
		        placeHolder: 'избери...',
		        notSuported: 'Операцията не се поддържа',
		        errorNoSupportedTextsType: "Няма поддържани текстови типове. Поддържаните филтър текстови типове са String и Array.",
		        errorUnrecognizedHighlightMatchesMode: "Неразпознат Highlight Matches режим. Поддържаните стойности са  multi, contains, startsWith, full и null."
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
			    closeButtonTitle: "Затвори",
			    minimizeButtonTitle: "Минимизирай",
			    maximizeButtonTitle: "Максимизирай",
			    pinButtonTitle: "Закачи",
			    unpinButtonTitle: "Откачи",
			    restoreButtonTitle: "Възстанови"
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
                invalidBaseElement: " не се поддържа като основен елемент. Използвай DIV вместо това."
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
			    spinUpperTitle: 'Инкрементирай',
			    spinLowerTitle: 'Декрементирай',
			    buttonTitle: 'Покажи списъка',
			    clearTitle: 'Изчисти стойността',
			    datePickerButtonTitle: 'Покажи календара',
			    updateModeUnsupportedValue: 'Опцията updateMode поддържа две възможни стойности - "onChange" и "immediate"'
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
			boldButtonTitle: 'Получер',
			italicButtonTitle: 'Курсив',
			underlineButtonTitle: 'Подчертано',
			strikethroughButtonTitle: 'Зачеркнат',
			increaseFontSizeButtonTitle: 'Увеличи размера на шрифта',
			decreaseFontSizeButtonTitle: 'Намали размера на шрифта',
			alignTextLeftButtonTitle: 'Подравняване на текст отляво',
			alignTextRightButtonTitle: 'Подравняване на текст отдясно',
			alignTextCenterButtonTitle: 'Центрирано',
			justifyButtonTitle: 'Двустранно подравняване',
			bulletsButtonTitle: 'Водещи символи',
			numberingButtonTitle: 'Номериране',
			decreaseIndentButtonTitle: 'Намали отстъпа',
			increaseIndentButtonTitle: 'Увеличи отстъпа',
			insertPictureButtonTitle: 'Вмъкване на картина',
			fontColorButtonTitle: 'Цвят на шрифт',
			textHighlightButtonTitle: 'Цвят на осветяване на текст',
			insertLinkButtonTitle: 'Вмъкване на хипервръзка',
			insertTableButtonTitle: 'Таблица',
			addRowButtonTitle: 'Прибави ред',
			removeRowButtonTitle: 'Премахни ред',
			addColumnButtonTitle: 'Прибави колона',
			removeColumnButtonTitle: 'Премахни колона',
			inserHRButtonTitle: 'Insert Horizontal Rule',
			viewSourceButtonTitle: 'Покажи сорс кода',
			cutButtonTitle: 'Изрежи',
			copyButtonTitle: 'Копирай',
			pasteButtonTitle: 'Постави',
			undoButtonTitle: 'Undo',
			redoButtonTitle: 'Redo',
			imageUrlDialogText: 'URL на картината:',
			imageAlternativeTextDialogText: 'Алтернативен текст:',
			imageWidthDialogText: 'Широчина на изображението:',
			imageHeihgtDialogText: 'Височина на изображението:',
			linkNavigateToUrlDialogText: 'Навигирай към URL:',
			linkDisplayTextDialogText: 'Текст:',
			linkOpenInDialogText: 'Отвори във:',
			linkTargetNewWindowDialogText: 'Нов прозорец',
			linkTargetSameWindowDialogText: 'Съшият прозорец',
			linkTargetParentWindowDialogText: 'Майчиният прозорец',
			linkTargetTopmostWindowDialogText: 'Най-горният прозорец',
			applyButtonTitle: 'Изпълни',
			cancelButtonTitle: 'Отказ',
			defaultToolbars: {
			    textToolbar: "лентата с инструменти за манипулация на текст",
			    formattingToolbar: "лентата с инструменти за форматиране на текст",
			    insertObjectToolbar: "лентата с инструменти за вмъкване на обекти",
			    copyPasteToolbar: "лентата с инструменти за копиране/поставяне"
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
					{ text: "h1", value: "Заглавие 1" },
					{ text: "h2", value: "Заглавие 2" },
					{ text: "h3", value: "Заглавие 3" },
					{ text: "h4", value: "Заглавие 4" },
					{ text: "h5", value: "Заглавие 5" },
					{ text: "h6", value: "Заглавие 6" },
                    { text: "p", value: "Нормално" }
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
                invalidDataSource: "Подаденият източник на данни е или нулев, или не се поддържа.",
                measureList: "Мерки",
                ok: "ОК",
                cancel: "Отказ",
                addToMeasures: "Добави към мерките",
                addToFilters: "Добави към филтрите",
                addToColumns: "Добави към колоните",
                addToRows: "Добави към редовете"
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
                invalidBaseElement: " не се поддържа като основен елемент. Използвай DIV вместо това.",
                catalog: "Каталог",
                cube: "Куб",
                measureGroup: "Група от мерки",
                measureGroupAll: "(Всичко)",
                rows: "Редове",
                columns: "Колони",
                measures: "Мерки",
                filters: "Филтри",
                deferUpdate: "Отложи актуализацията",
                updateLayout: "Актуализирай оформлението",
                selectAll: "Избери всичко"
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
                filtersHeader: "Пусни филтърните полета тук",
                measuresHeader: "Пусни данните тук",
                rowsHeader: "Пусни полетата за редове тук",
                columnsHeader: "Пусни полетата за колони тук",
                disabledFiltersHeader: "Полета за филтриране",
                disabledMeasuresHeader: "Данни",
                disabledRowsHeader: "Полета за редове",
                disabledColumnsHeader: "Полета за колони",
                noSuchAxis: "Няма такава ос"
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
			popoverOptionChangeNotSupported: "Промяната на следната опция след инициализация на igPopover не се поддържа:",
			popoverShowMethodWithoutTarget: "Целевият параметър на функцията show е задължителен, когато се използва опцията за селектори."
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
			    setOptionError: 'Стойността на следната опция не може да бъде променяна след инициализация: '
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
		        errorPanels: 'Броят на панелите не може да надвишава два.',
		        errorSettingOption: 'Грешка в настройката на опцията.'
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
		    renderDataError: "Извличането или парсирането на данните е неуспешно.",
		    setOptionItemsLengthError: "Дължината на подадената items конфигурация не отговаря на броя на плочките."
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
			collapseButtonTitle: 'Прибери',
			expandButtonTitle: 'Отвори'
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
			    invalidArgumentType: 'Подаденият аргумент е от невалиден тип.',
			    errorOnRequest: 'Проблем при извличане на данните: ',
			    noDataSourceUrl: 'igTree изисква опцията dataSourceUrl да бъде попълнена, за да се оправят заявки за данни.',
			    incorrectPath: 'Връх със следната пътека не беше намерен: ',
			    incorrectNodeObject: 'Подаденият аргумент не е jQuery елемент.',
			    setOptionError: 'Стойността на следната опция не може да бъде променяна след инициализация: ',
			    moveTo: '<strong>Премести върху</strong> {0}',
			    moveBetween: '<strong>Премести между</strong> {0} и {1}',
			    moveAfter: '<strong>Премести след</strong> {0}',
			    moveBefore: '<strong>Премести преди</strong> {0}',
			    copyTo: '<strong>Копирай върху</strong> {0}',
			    copyBetween: '<strong>Копирай между</strong> {0} и {1}',
			    copyAfter: '<strong>Копирай след</strong> {0}',
			    copyBefore: '<strong>Копирай преди</strong> {0}',
			    and: 'и'
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
                fixedVirtualizationNotSupported: 'Не се поддържа фиксирана виртуализация. Моля настройте virtualizationMode на "continuous" за да включите виртуализирането на редове.'
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
			    labelUploadButton: "Качи файл",
			    labelAddButton: "Прибави",
			    labelClearAllButton: "Изчисти качените",
			    // M.H. 13 May 2011 - fix bug 75042
			    labelSummaryTemplate: "{0} от {1} качени",
			    labelSummaryProgressBarTemplate: "{0}/{1}",
			    labelShowDetails: "Покажи детайлите",
			    labelHideDetails: "Скрий детайлите",
			    labelSummaryProgressButtonCancel: "Отказ",
			    // M.H. 1 June 2011 Fix bug #77532
			    labelSummaryProgressButtonContinue: "Качи",
			    labelSummaryProgressButtonDone: "Готово",
			    labelProgressBarFileNameContinue: "...",

			    //error messages
			    errorMessageFileSizeExceeded: "Максималната големина на файла е надхвърлена.",
			    errorMessageGetFileStatus: "Състоянието на файла не може да бъде взето! Вероятно е връзката да е прекъснала.",
			    errorMessageCancelUpload: "Командата за отмяна на качването е неуспешно изпратена! Вероятно е връзката да е прекъснала.",
			    errorMessageNoSuchFile: "Файлът не може да бъде намерен. Вероятно файлът е твърде голям.",
			    errorMessageOther: "Грешка при качването на файла. Код на грешката: {0}.",
			    errorMessageValidatingFileExtension: "Неуспешно валидиране на разширението на файла.",
			    errorMessageAJAXRequestFileSize: "Грешка в AJAX заявката при опит да се вземе големината на файла.",
			    errorMessageMaxUploadedFiles: "Надхвърлен е максималният брой на качените файлове.",
			    errorMessageMaxSimultaneousFiles: "Стойността на опцията maxSimultaneousFilesUploads е невалидна. Трябва да е по-голяма от 0 или null.",
			    errorMessageTryToRemoveNonExistingFile: "Опитвате премахване на несъществуващ файл с id {0}.",
			    errorMessageTryToStartNonExistingFile: "Опитвате стартиране на качване на несъществуващ файл с id {0}.",

			    // M.H. 12 May 2011 - fix bug 74763: add title to all buttons
			    // title attributes            
			    titleUploadFileButtonInit: "Качи файл",
			    titleAddFileButton: "Прибави",
			    titleCancelUploadButton: "Отказ",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSummaryProgressButtonContinue: "Качи",
			    titleClearUploaded: "Изчисти качените",
			    titleShowDetailsButton: "Покажи детайлите",
			    titleHideDetailsButton: "Скрий детайлите",
			    titleSummaryProgressButtonCancel: "Отказ",
			    titleSummaryProgressButtonDone: "Готово",
			    // M.H. 1 June 2011 Fix bug #77532
			    titleSingleUploadButtonContinue: "Качи",
			    titleClearAllButton: "Изчисти качените"
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
			    defaultMessage: 'Невалидна стойност',
			    selectMessage: 'Моля изберете стойност',
			    rangeSelectMessage: 'Моля изберете между {0} и {1} елемента',
			    minSelectMessage: 'Моля изберете най-малко {0} елемента',
			    maxSelectMessage: 'Моля изберете повече от {0} елемента',
			    rangeLengthMessage: 'Моля въведете стойност между {0} и {1} символа',
			    minLengthMessage: 'Моля въведете {0} символа или повече',
			    maxLengthMessage: 'Моля въведете по-малко от {0} символа',
			    requiredMessage: 'Това поле е задължително',
			    maskMessage: 'Моля попълнете всички задължителни полета',
			    dateFieldsMessage: 'Моля попълнете стойности в полетата за дата',
			    invalidDayMessage: 'Невалиден ден от месеца. Моля попълнете валиден ден',
			    dateMessage: 'Моля попълнете валидна дата',
			    numberMessage: 'Моля попълнете валидно число',
			    rangeMessage: 'Моля попълнете стойност между {0} и {1}',
			    minMessage: 'Моля попълнете стойност по-голяма или равна на {0}',
			    maxMessage: 'Моля попълнете стойност по-малка или равна на {0}'
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
			    liveStream: "Видео на живо",
			    live: "На живо",
			    paused: "Паузирано",
			    playing: "В прогрес",
			    play: 'Пусни',
			    volume: "Сила на звука",
			    unsupportedVideoSource: "Подадените видео източници не съдържат формат поддържан от вашия браузър.",
			    missingVideoSource: "Липсват видео източници.",
			    progressLabelLongFormat: "$currentTime$ / $duration$",
			    progressLabelShortFormat: "$currentTime$",
			    enterFullscreen: "Цял екран",
			    exitFullscreen: "Излез от цял екран",
			    skipTo: "Отиди до",
			    unsupportedBrowser: "Вашият браузър не поддържа HTML5 видео. <br/>Моля обновете до някоя от следните версии:",
			    currentBrowser: "Вашият браузър: {0}",
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
			    buffering: 'Буфериране...',
			    adMessage: 'Реклама: Видеото ще продължи след $duration$ секунди.',
			    adMessageLong: 'Реклама: Видеото ще продължи след $duration$.',
			    adMessageNoDuration: 'Реклама: Видеото ще продължи след рекламите.',
			    adNewWindowTip: 'Реклама: Натиснете тук, за да отворите съдържанието в нов прозорец.',
			    nonDivException: 'Infragistics HTML5 Video Player може да бъде инстанциран само на DIV елемент.',
			    relatedVideos: 'Подобни видея',
			    replayButton: 'Започни отначало',
			    replayTooltip: 'Натиснете тук, за да пуснете видеото отначало.'
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
	            zoombarTargetNotSpecified: "igZoombar изисква валидна цел, към която да се прикрепи!",
	            zoombarTypeNotSupported: "Видът на компонента, към който igZoombar се опитва да се прикрепи не се поддържа!",
	            optionChangeNotSupported: "Промяната на следната опция след инициализация на igZoombar не се поддържа:"
		    }
	    });

    }
})(jQuery);
/*
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
			    unsupportedBrowser: "Браузърът ви не поддържа HTML5 canvas елемент. <br/>Моля обновете до някоя от следните версии:",
			    currentBrowser: "Вашият браузър: {0}",
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

