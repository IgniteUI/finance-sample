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
		        noMatchFoundText: 'Результатов нет',
		        dropDownButtonTitle: 'Показать список',
		        clearButtonTitle: 'Очистить значение',
		        placeHolder: 'select...',
		        notSuported: 'Operation not supported',
		        errorNoSupportedTextsType: "Тип текста не поддерживается. Для фильтрации поддерживается текст типов Строка и Массив.",
			    errorUnrecognizedHighlightMatchesMode: "Unrecognized Highlight Matches Mode. Supported values are multi, contains, startsWith, full and null."
		    }
	    };
    }
})(jQuery);