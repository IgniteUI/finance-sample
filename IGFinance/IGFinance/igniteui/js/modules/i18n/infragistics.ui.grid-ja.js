/*!@license
* Infragistics.Web.ClientUI Grid localization resources 13.2.20132.1010
*
* Copyright (c) 2011-2013 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/

$.ig = $.ig || {};

if (!$.ig.Grid) {
	$.ig.Grid = {};

	$.extend($.ig.Grid, {

		locale: {
			noSuchWidget: "ウィジェットは読み込まれていません: ",
			autoGenerateColumnsNoRecords: "autoGenerateColumns が有効ですが、データ ソースに列を決定するレコードがありません。",
			optionChangeNotSupported: "igGrid が作成された後のこのオプションを変更はサポートされません: ",
			optionChangeNotScrollingGrid: "最初のグリッドのスクロールが無効で、すべて再描画する必要があるため、グリッドを作成した後にこのオプションは変更できません: ",
			noPrimaryKeyDefined: "グリッドのプライマリ キーがありません。グリッド編集などの機能を使用するためには、プライマリ キーを定義する必要があります。",
			indexOutOfRange: "指定した行インデックスは範囲外です。",
			noSuchColumnDefined: "指定した列キーは定義したグリッド列と一致しません。",
			columnIndexOutOfRange: "指定した列インデックスは範囲外です。",
			recordNotFound: "指定した ID のレコードがデータ ビューで見つかりませんでした。",
			columnNotFound: "このキーと一致する列が見つかりませんでした: ",
			colPrefix: "列 ",
			columnVirtualizationRequiresWidth: "仮想化または columnVirtualization を True に設定しましたが、グリッド列の幅が推論できません。グリッドの幅、defaultColumnWidth、または各列の幅を設定する必要があります。",
			virtualizationRequiresHeight: "仮想化を True に設定する場合、グリッドの高さも設定する必要があります。",
			colVirtualizationDenied: "columnVirtualization は固定仮想化にのみ適用できます。",
			noColumnsButAutoGenerateTrue: "autoGenerateColumns は False に設定されていますが、グリッドに列が定義されていません。autoGenerateColumns を True に設定するか、手動的に列を指定する必要があります。",
			noPrimaryKey: "igHierarchicalGrid ウィジェットで定義されたプライマリ キーが必要です。",
			templatingEnabledButNoTemplate: "jQueryTemplating は True に設定されていますが、rowTemplate が定義されていません。",
			expandTooltip: "行の展開",
			collapseTooltip: "行の縮小",
			movingNotAllowedOrIncompatible: "要求した列の移動を実行できません。列が見つからないか、結果が列レイアウトと互換性のない可能性があります。"
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {

		locale: {
			startsWithNullText: "～で始まる",
			endsWithNullText: "～で終わる",
			containsNullText: "含む",
			doesNotContainNullText: "含まない",
			equalsNullText: "等しい",
			doesNotEqualNullText: "等しくない",
			greaterThanNullText: "～より大きい",
			lessThanNullText: "～より小さい",
			greaterThanOrEqualToNullText: "以上",
			lessThanOrEqualToNullText: "以下",
			onNullText: "指定日",
			notOnNullText: "指定日以外",
			emptyNullText: "空",
			notEmptyNullText: "空以外",
			nullNullText: "null 値",
			notNullNullText: "null 値以外",
			startsWithLabel: "～で始まる",
			endsWithLabel: "～で終わる",
			containsLabel: "含む",
			doesNotContainLabel: "含まない",
			equalsLabel: "等しい",
			doesNotEqualLabel: "等しくない",
			greaterThanLabel: "～より大きい",
			lessThanLabel: "～より小さい",
			greaterThanOrEqualToLabel: "以上",
			lessThanOrEqualToLabel: "以下",
			trueLabel: "True",
			falseLabel: "False",
			afterLabel: "～の後",
			beforeLabel: "～の前",
			todayLabel: "今日",
			yesterdayLabel: "昨日",
			thisMonthLabel: "今月",
			lastMonthLabel: "先月",
			nextMonthLabel: "翌月",
			thisYearLabel: "今年",
			lastYearLabel: "昨年",
			nextYearLabel: "来年",
			clearLabel: "フィルターをクリア",
			noFilterLabel: "0",
			onLabel: "指定日",
			notOnLabel: "指定日以外",
			advancedButtonLabel: "詳細",
			filterDialogCaptionLabel: "詳細検索",
			filterDialogConditionLabel1: "以下の条件の",
			filterDialogConditionLabel2: "と一致するレコードを表示",
			filterDialogOkLabel: "OK",
			filterDialogCancelLabel: "キャンセル",
			filterDialogAnyLabel: "いずれか",
			filterDialogAllLabel: "すべて",
			filterDialogAddLabel: "追加",
			filterDialogErrorLabel: "最大フィルター数を超えました。",
			filterSummaryTitleLabel: "検索結果",
			filterSummaryTemplate: "一致するレコード: ${matches}",
			filterDialogClearAllLabel: "すべてクリア",
			tooltipTemplate: "${condition} フィルターを適用しています",
			featureChooserText: "フィルターの非表示",
			featureChooserTextHide: "フィルターの表示",
			featureChooserTextAdvancedFilter: "フィルター",
			virtualizationSimpleFilteringNotAllowed: "水平方向の仮想化が有効な場合、簡易のフィルタリング (フィルター行) はサポートされません。モードを「advanced」に設定するか、advancedModeEditorsVisible を無効にしてください。",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。"
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {

		locale: {
			emptyGroupByAreaContent: "グループ化するには、列をここへドラッグするか、{0}します。",
			emptyGroupByAreaContentSelectColumns: "列を選択",
			emptyGroupByAreaContentSelectColumnsCaption: "列を選択",
			expandTooltip: "グループ化された行を展開する",
			collapseTooltip: "グループ化された行を縮小する",
			removeButtonTooltip: "列のグループ化を解除する",
			featureChooserText: "グループ化の解除",
			featureChooserTextHide: "グループ化",
			modalDialogCaptionButtonDesc: "クリックして昇順に並べ替える",
			modalDialogCaptionButtonAsc: "クリックして降順に並べ替える",
			modalDialogCaptionButtonUngroup: "クリックしてグループ化を解除する",
			modalDialogGroupByButtonText: "グループ化",
			modalDialogCaptionText: 'グループ化に追加する',
			modalDialogDropDownLabel: '表示: ',
			modalDialogClearAllButtonLabel: 'すべてクリア',
			modalDialogRootLevelHierarchicalGrid: 'ルート',
			modalDialogDropDownButtonCaption: "クリックして表示状態を切り替える",
			modalDialogButtonApplyText: '適用',
			modalDialogButtonCancelText: 'キャンセル'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "列の選択",
			hiddenColumnIndicatorTooltipText: "非表示列",
			columnHideText: "非表示",
			columnChooserCaptionLabel: "列の選択",
			columnChooserCheckboxesHeader: "ビュー",
			columnChooserColumnsHeader: "列",
			columnChooserCloseButtonTooltip: "閉じる",
			hideColumnIconTooltip: "非表示",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。",
			columnChooserShowText: "表示",
			columnChooserHideText: "非表示",
			columnChooserResetButtonLabel: "リセット",
			columnChooserButtonApplyText: '適用',
			columnChooserButtonCancelText: 'キャンセル'
		}
	});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "表示: ",
			pageSizeDropDownTrailingLabel: "レコード",
			//pageSizeDropDownTemplate: "${dropdown} レコードの表示",
			nextPageLabelText: "次へ",
			prevPageLabelText: "前へ",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "ページ",
			currentPageDropDownTrailingLabel: " / ${count}",
			//currentPageDropDownTemplate: "ページ ${dropdown} / ${count}",
			currentPageDropDownTooltip: "ページ インデックスの選択",
			pageSizeDropDownTooltip: "ページのレコード数の選択",
			pagerRecordsLabelTooltip: "現在のレコード範囲",
			prevPageTooltip: "前ページに移動",
			nextPageTooltip: "次ページに移動",
			firstPageTooltip: "最初のページに移動",
			lastPageTooltip: "最後のページに移動",
			pageTooltipFormat: "ページ ${index}",
			pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} / ${recordCount} レコード"
		}
	});

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection は初期化されていません。このエラー メッセージを回避するには、グリッドの選択機能を有効にするか、行セレクター機能の requireSelection プロパティを false に設定してください。"
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {

		locale: {
			sortedColumnTooltipFormat: '${direction}に並べ替え',
			unsortedColumnTooltip: '列を並べ替える',
			ascending: '昇順',
			descending: '降順',
			modalDialogSortByButtonText: '並べ替える',
			modalDialogResetButton: "リセット",
			modalDialogCaptionButtonDesc: "クリックして降順に並べ替える",
			modalDialogCaptionButtonAsc: "クリックして昇順に並べ替える",
			modalDialogCaptionButtonUnsort: "クリックして並べ替えを解除する",
			featureChooserText: "並べ替え",
			modalDialogCaptionText: "複数列の並べ替え",
			modalDialogButtonApplyText: '適用',
			modalDialogButtonCancelText: 'キャンセル',
			sortingHiddenColumnNotSupport: '非表示の列の並べ替えはサポートされません。',
			featureChooserSortAsc: '昇順',
			featureChooserSortDesc: '降順'
			//modalDialogButtonSlideCaption: "クリックして並べ替えた列の表示状態を切り替える"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
			featureChooserText: "集計非表示",
			featureChooserTextHide: "集計の表示",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'キャンセル',
			emptyCellText: '',
			summariesHeaderButtonTooltip: '集計の表示/非表示',
			defaultSummaryRowDisplayLabelCount: 'カウント',
			defaultSummaryRowDisplayLabelMin: '最小値',
			defaultSummaryRowDisplayLabelMax: '最大値',
			defaultSummaryRowDisplayLabelSum: '合計',
			defaultSummaryRowDisplayLabelAvg: '平均',
			defaultSummaryRowDisplayLabelCustom: 'カスタム',
			calculateSummaryColumnKeyNotSpecified: "集計を計算するには、列キーを指定してください。",
			featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。"
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'OK',
			doneTooltip: '編集を終了して更新します',
			cancelLabel: 'キャンセル',
			cancelTooltip: '更新せずに編集を終了します',
			addRowLabel: '新規行の追加',
			addRowTooltip: 'クリックすると、新しい行を追加します',
			deleteRowLabel: '',
			deleteRowTooltip: '行の削除',
			igEditorException: 'ui.igGrid の更新は ui.igEditor を読み込む必要があります。',
			igComboException: 'ui.igGrid のコンボ タイプを使用するには、ui.igCombo を読み込む必要があります。',
			igRatingException: 'ui.igGrid で igRating をエディターとして使用するには、ui.igRating を読み込む必要があります。',
			igValidatorException: 'igGridUpdating で定義された検証オプションは ui.igValidator を読み込む必要があります。',
			noPrimaryKeyException: '行が削除された後に更新操作をサポートするには、アプリケーションの igGrid のオプションで primaryKey を定義する必要があります。',
			hiddenColumnValidationException: '検証が有効な非表示の列がある行は編集できません。',
			dataDirtyException: 'グリッドに保留中のトランザクションがあります。データのレンダリングに影響する場合があります。例外を回避するには、アプリケーションで igGrid の autoCommit オプションを有効にするか、igGridUpdating の dataDirty イベントを処理して false を返す必要があります。イベントを処理する際に、アプリケーションで igGrid のデータを commit() することができます。',
			rowEditDialogCaptionLabel: '行データの編集'
		}
	});

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: '適用',
            movingDialogButtonCancelText: 'キャンセル',
            movingDialogCaptionButtonDesc: '下へ移動',
            movingDialogCaptionButtonAsc: '上へ移動',
            movingDialogCaptionText: '列の移動',
            movingDialogDisplayText: '列の移動',
            dropDownMoveLeftText: '左へ移動',
            dropDownMoveRightText: '右へ移動',
            dropDownMoveFirstText: '最初へ移動',
            dropDownMoveLastText: '最後へ移動',
            featureChooserNotReferenced: "機能選択スクリプトは参照されていません。このエラー メッセージを回避するには、ig.ui.grid.featurechooser.js ファイルを含むか、結合されたスクリプト ファイルを使用してください。",
            movingToolTipMove: '移動',
            featureChooserSubmenuText: '移動'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'クリックしてこの列を固定',
            headerUnfixButtonText: 'クリックしてこの列の固定を解除',
            featureChooserTextFixedColumn: '列の固定',
            featureChooserTextUnfixedColumn: '列の固定解除',
            groupByNotSupported: 'igGridGroupBy が ColumnFixing とサポートされていません。',
            virtualizationNotSupported: '仮想化は ColumnFixing でサポートされていません。',
            columnMovingNotSupported: 'igGridColumnMoving が ColumnFixing とサポートされていません。',
            hidingNotSupported: 'igGridHiding が ColumnFixing とサポートされていません。',
            hierarchicalGridNotSupported: 'igHierarchicalGrid が ColumnFixing とサポートされていません。',
            responsiveNotSupported: 'igGridResponsive が ColumnFixing とサポートされていません。',
            noGridWidthHeightNotSupported: 'グリッドの幅および高さが設定されない場合、ColumnFixing はサポートされていません。'
        }
    });

    $.ig.GridLoadOnDemand = $.ig.GridLoadOnDemand || {};

    $.extend($.ig.GridLoadOnDemand, {
    	locale: {
    	    loadMoreDataButtonText: 'その他のデータを読み込む',
    	    loadOnDemandRequiresHeight: 'ロードオンデマンド機能を使用するには高さを設定する必要があります。',
    	    groupByNotSupported: 'igGridGroupBy は LoadOnDemand でサポートされていません。',
    	    pagingNotSupported: 'igGridPaging は LoadOnDemand でサポートされていません。',
    	    cellMergingNotSupported: 'igGridCellMerging は LoadOnDemand でサポートされていません。',
    	    virtualizationNotSupported: '仮想化は LoadOnDemand でサポートされていません。'
    	}
    });
}
