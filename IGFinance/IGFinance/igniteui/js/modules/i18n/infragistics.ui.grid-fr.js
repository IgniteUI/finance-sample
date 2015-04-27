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
			noSuchWidget: "Aucun widget similaire chargé : ",
			autoGenerateColumnsNoRecords: "L'option autoGenerateColumns est activée, mais il n'y a aucune archive dans la source de données permettant de déterminer les colonnes",
			optionChangeNotSupported: "La modification de l'option suivante après la création de igGrid n'est pas prise en charge :",
			optionChangeNotScrollingGrid: "L'option suivante ne peut pas être modifiée après la création de la grille, car votre grille initiale ne défile pas et le re-rendering complet est nécessaire :",
			noPrimaryKeyDefined: "Aucune clé principale n'est définie pour la grille. Pour utiliser les fonctions telles que Grid Editing, vous devez définir une clé principale.",
			indexOutOfRange: "L'index des lignes que vous avez spécifié est hors plage.",
			noSuchColumnDefined: "La clé de colonne spécifiée ne coïncide avec aucune des colonnes définies de la grille.",
			columnIndexOutOfRange: "L'index de colonne spécifié est hors plage.",
			recordNotFound: "Impossible de trouver l'archive avec l'id spécifié dans la vue des données :",
			columnNotFound: "Aucune colonne coïncidant avec la clé :",
			colPrefix: "Colonne ",
			columnVirtualizationRequiresWidth: "Virtualisation / columnVirtualization est défini sur vrai, mais aucune largeur n'a pu être déduite pour les colonnes de la grille. Choisissez l'un des réglages a) largeur grille, b) defaultColumnWidth, c) définir largeur pour chaque colonne",
			virtualizationRequiresHeight: "Virtualisation est définie sur vrai, ce qui nécessite de définir également la hauteur de la grille.",
            colVirtualizationDenied: "columnVirtualization est applicable à la virtualisation fixe uniquement",
			noColumnsButAutoGenerateTrue: "L'option autoGenerateColumns est définie sur faux, mais aucune colonne du tableau n'est définie. Définissez l'option autoGenerateColumns sur vrai ou spécifiez des colonnes manuellement",
			noPrimaryKey: "Le widget igHierarchicalGrid nécessite la définition d'une clé principale.",
			templatingEnabledButNoTemplate: "L'option jQueryTemplating est définie sur vrai, mais aucun rowTemplate n'est défini.",
			expandTooltip: "Étendre la ligne",
			collapseTooltip: "Réduire la ligne",
			movingNotAllowedOrIncompatible: "Impossible de déplacer la colonne demandée. La colonne n'a pas été trouvée ou le résultat n'était pas compatible avec la disposition des colonnes.",
			allColumnsHiddenOnInitialization: "Impossible de masquer toutes les colonnes de la grille. Veuillez définir au moins une des colonnes à afficher.",
			columnVirtualizationNotSupportedWithPercentageWidth: "La virtualisation de colonne n'est pas prise en charge lorsque la largeur de grille est définie en unités de pourcentage.",
			mixedWidthsNotSupported: "Les paramètres de largeur de colonne mélangés/partiels ne sont pas pris en charge. Les scénarios dans lesquels certaines largeurs de colonne sont définies en pourcentage tandis que d'autres sont définies en pixels (ou ne sont pas du tout définies) ne sont pas pris en charge."
		}
	});

	$.ig.GridFiltering = $.ig.GridFiltering || {};

	$.extend($.ig.GridFiltering, {
		locale: {
			startsWithNullText: "Commence par...",
			endsWithNullText: "Finit par...",
			containsNullText: "Contient...",
			doesNotContainNullText: "Ne contient pas...",
			equalsNullText: "Est égal à...",
			doesNotEqualNullText: "Est différent de...",
			greaterThanNullText: "Supérieur à...",
			lessThanNullText: "Inférieur à...",
			greaterThanOrEqualToNullText: "Supérieur ou égal à...",
			lessThanOrEqualToNullText: "Inférieur ou égal à...",
			onNullText: "Le...",
			notOnNullText: "Pas le...",
			afterNullText: "Après",
			beforeNullText: "Avant",
			emptyNullText: "Vide",
			notEmptyNullText: "Pas vide",
			nullNullText: "Nul",
			notNullNullText: "Pas nul",
			startsWithLabel: "Commence par",
			endsWithLabel: "Finit par",
			containsLabel: "Contient",
			doesNotContainLabel: "Ne contient pas",
			equalsLabel: "Est égal à",
			doesNotEqualLabel: "Est différent de",
			greaterThanLabel: "Supérieur à",
			lessThanLabel: "Inférieur à",
			greaterThanOrEqualToLabel: "Supérieur ou égal à",
			lessThanOrEqualToLabel: "Inférieur ou égal à",
			trueLabel: "Vrai",
			falseLabel: "Faux",
			afterLabel: "Après",
			beforeLabel: "Avant",
			todayLabel: "Aujourd'hui",
			yesterdayLabel: "Hier",
			thisMonthLabel: "Ce mois",
			lastMonthLabel: "Mois précédent",
			nextMonthLabel: "Mois suivant",
			thisYearLabel: "Cette année",
			lastYearLabel: "Année précédente",
			nextYearLabel: "Année suivante",
			clearLabel: "Effacer le filtre",
			noFilterLabel: "Non",
			onLabel: "Le",
			notOnLabel: "Pas le",
			advancedButtonLabel: "Avancé",
			filterDialogCaptionLabel: "RECHERCHE AVANCEE",
			filterDialogConditionLabel1: "Afficher les rangées concordantes ",
			filterDialogConditionLabel2: " avec les critères suivants",
			filterDialogOkLabel: "Chercher",
			filterDialogCancelLabel: "Annuler",
			filterDialogAnyLabel: "N'IMPORTE LEQUEL",
			filterDialogAllLabel: "TOUS",
			filterDialogAddLabel: "Ajouter",
			filterDialogErrorLabel: "Nombre de filtres maximum excédé.",
			filterSummaryTitleLabel: "Résultats de la recherche",
			filterSummaryTemplate: "${matches} rangées concordantes",
			filterDialogClearAllLabel: "Effacer tous",
			tooltipTemplate: "${condition} filtre appliqué",
			// M.H. 13 Oct. 2011 Fix for bug #91007
			featureChooserText: "Masquer le filtre",
			featureChooserTextHide: "Afficher le filtre",
			// M.H. 17 Oct. 2011 Fix for bug #91007
			featureChooserTextAdvancedFilter: "Filtre avancé",
			virtualizationSimpleFilteringNotAllowed: "Le filtrage simple (filtre ligne) n'est pas pris en compte si la virtualisation horizontale est activée. Placez le mode sur 'avancé' et/ou n'activez pas advancedModeEditorsVisible",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grid.featurechooser.js ou utiliser le chargeur ou utiliser l'un des fichiers de script combiné."
		}
	});

	$.ig.GridGroupBy = $.ig.GridGroupBy || {};

	$.extend($.ig.GridGroupBy, {
		locale: {
		    emptyGroupByAreaContent: "Glissez une colonne ici ou {0} pour créer des groupes",
			emptyGroupByAreaContentSelectColumns: "sélectionnez les colonnes",
			emptyGroupByAreaContentSelectColumnsCaption: "sélectionnez les colonnes",
			expandTooltip: "Etendre ligne groupée",
			collapseTooltip: "Réduire ligne groupée",
			removeButtonTooltip: "Supprimer colonne groupée",
			featureChooserText: "Dégrouper par",
			featureChooserTextHide: "Grouper par",
			modalDialogCaptionButtonDesc: "Trier dans l'ordre croissant",
			modalDialogCaptionButtonAsc: "Trier dans l'ordre décroissant",
			modalDialogCaptionButtonUngroup: "Cliquez pour dégrouper",
			modalDialogGroupByButtonText: "Grouper par",
			modalDialogCaptionText: 'Ajouter à Grouper par',
			modalDialogDropDownLabel: 'Affichage :',
			modalDialogClearAllButtonLabel: 'Effacer tous',
			modalDialogRootLevelHierarchicalGrid: 'racine',
			modalDialogDropDownButtonCaption: "Afficher/Masquer",
			modalDialogButtonApplyText: 'Appliquer',
			modalDialogButtonCancelText: 'Annuler',
			fixedVirualizationNotSupported: 'La fonction GroupBy ne fonctionne pas avec la virtualisation verrouillée.'
		}
	});

	$.ig.GridHiding = $.ig.GridHiding || {};

	$.extend($.ig.GridHiding, {
		locale: {
			columnChooserDisplayText: "Choix de colonnes",
			hiddenColumnIndicatorTooltipText: "Colonnes masquées",
			columnHideText: "Masquer",
			columnChooserCaptionLabel: "Choix de colonnes",
			columnChooserCheckboxesHeader: "vue",
			columnChooserColumnsHeader: "colonne",
			columnChooserCloseButtonTooltip: "Fermer",
			hideColumnIconTooltip: "Masquer",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grille.choixfonctionnalité.js ou utiliser l'un des fichiers de script combiné.",
			columnChooserShowText: "Afficher",
			columnChooserHideText: "Masquer",
			columnChooserResetButtonLabel: "Réinitialiser",
			columnChooserButtonApplyText: 'Appliquer',
			columnChooserButtonCancelText: 'Annuler'
		}
	});

		$.ig.GridResizing = $.ig.GridResizing || {};

		$.extend($.ig.GridResizing, {
			locale: {
			    noSuchVisibleColumn: "Aucune colonne visible correspondant à la clé spécifiée n'a été trouvée. Vous pouvez uniquement redimensionner les colonnes visibles.",
			    resizingAndFixedVirtualizationNotSupported: "La fonction de redimensionnement ne fonctionne pas lorsque la virtualisation ou bien la virtualisation de colonne est activée avec le virtualizationMode verrouillé. Pour empêcher cette exception, veuillez définir virtualizationMode sur 'continuous' ou utiliser uniquement rowVirtualization."
			}
		});

	$.ig.GridPaging = $.ig.GridPaging || {};

	$.extend($.ig.GridPaging, {

		locale: {
			pageSizeDropDownLabel: "Afficher ",
			pageSizeDropDownTrailingLabel: "rangées",
			//pageSizeDropDownTemplate: "Afficher les rangées ${dropdown}",
			nextPageLabelText: "suiv",
			prevPageLabelText: "préc",
			firstPageLabelText: "",
			lastPageLabelText: "",
			currentPageDropDownLeadingLabel: "Pg",
			currentPageDropDownTrailingLabel: "de ${count}",
			//currentPageDropDownTemplate: "Pg ${dropdown} de ${count}",
			currentPageDropDownTooltip: "Choisir la page",
			pageSizeDropDownTooltip: "Choisir le nombre de rangées par page",
			pagerRecordsLabelTooltip: "Plage de rangées actuelle",
			prevPageTooltip: "Aller à la page précédente",
			nextPageTooltip: "Aller à la page suivante",
			firstPageTooltip: "Aller à la première page",
			lastPageTooltip: "Aller à la dernière page",
			pageTooltipFormat: "page ${index}",
			    pagerRecordsLabelTemplate: "${startRecord} - ${endRecord} de ${recordCount} rangées",
			    invalidPageIndex: "Index de page non valide - il doit être supérieur ou égal à 0 et doit être inférieur au nombre de pages"
		}
	});

    $.ig.GridSelection = $.ig.GridSelection || {};

    $.extend($.ig.GridSelection, {
        locale: {
            persistenceImpossible: "L'option primaryKey d'igGrid doit être définie pour pouvoir réaliser une sélection persistante entre les états. Pour éviter d'obtenir cette erreur, veuillez définir une clé primaire ou désactiver la persistance."
        }
    });

	$.ig.GridRowSelectors = $.ig.GridRowSelectors || {};

	$.extend($.ig.GridRowSelectors, {

		locale: {
			selectionNotLoaded: "igGridSelection n'est pas initialisé. Pour éviter de recevoir ce message d'erreur, veuillez activer la fonctionnalité Sélection pour la grille ou définir la propriété requireSelection de la fonction de Sélectionneurs de lignes sur faux.",
			columnVirtualizationEnabled: "igGridRowSelectors n'est pas pris en charge lorsque la virtualisation de colonne est activée. Pour éviter de recevoir ce message d'erreur, veuillez activer uniquement la virtualisation de ligne en réglant la propriété 'rowVirtualization' de la grille sur vrai ou en changeant le mode de virtualisation sur 'continuous'."
		}
	});

	$.ig.GridSorting = $.ig.GridSorting || {};

	$.extend($.ig.GridSorting, {
		locale: {
			sortedColumnTooltipFormat: 'trié ${direction}',
			unsortedColumnTooltip: 'Cliquez pour trier la colonne',
			ascending: "dans l'ordre croissant",
			descending: "dans l'ordre décroissant",
			modalDialogSortByButtonText: 'trier par',
			modalDialogResetButton: "réinitialiser",
			modalDialogCaptionButtonDesc: "Trier dans l'ordre décroissant",
			modalDialogCaptionButtonAsc: "Trier dans l'ordre croissant",
			modalDialogCaptionButtonUnsort: "Annuler le tri",
			featureChooserText: "Trier selon Multiple",
			modalDialogCaptionText: "Trier Multiple",
			modalDialogButtonApplyText: 'Appliquer',
			modalDialogButtonCancelText: 'Annuler',
			sortingHiddenColumnNotSupport: "Le tri de la colonne masquée n'est pas pris en charge",
			featureChooserSortAsc: 'Trier de A à Z',
			featureChooserSortDesc: 'Trier de Z à A'
			//modalDialogButtonSlideCaption: "Afficher/Masquer les colonnes triées"
		}
	});

	$.ig.GridSummaries = $.ig.GridSummaries || {};

	$.extend($.ig.GridSummaries, {
		locale: {
		    featureChooserText: "Masquer synthèse",
		    featureChooserTextHide: "Afficher synthèse",
			dialogButtonOKText: 'OK',
			dialogButtonCancelText: 'Annuler',
			emptyCellText: '',
			summariesHeaderButtonTooltip: 'Afficher/Masquer la synthèse',
			// M.H. 13 Oct. 2011 Fix for bug 91008
			defaultSummaryRowDisplayLabelCount: 'Nombre',
			defaultSummaryRowDisplayLabelMin: 'Min',
			defaultSummaryRowDisplayLabelMax: 'Max',
			defaultSummaryRowDisplayLabelSum: 'Total',
			defaultSummaryRowDisplayLabelAvg: 'Moy',
			defaultSummaryRowDisplayLabelCustom: 'Personnalisé',
			calculateSummaryColumnKeyNotSpecified: "Indiquez la clé de colonne pour calculer la synthèse",
			featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier g.ui.grid.featurechooser.js ou utiliser l'un des fichiers de script combiné."
		}
	});

	$.ig.GridUpdating = $.ig.GridUpdating || {};

	$.extend($.ig.GridUpdating, {
		locale: {
			doneLabel: 'Terminé',
			doneTooltip: "Arrêter l'édition et mettre à jour",
			cancelLabel: 'Annuler',
			cancelTooltip: "Arrêter l'édition et ne pas mettre à jour",
			addRowLabel: 'Ajouter une ligne',
			addRowTooltip: 'Cliquez pour ajouter une ligne',
			deleteRowLabel: '',
			deleteRowTooltip: 'Supprimer une ligne',
			igEditorException: 'La mise à jour de ui.igGrid nécessite de charger ui.igEditor',
			igComboException: 'Pour utiliser le type combo pour ui.igGrid, ui.igCombo doit être chargé',
			igRatingException: 'Pour utiliser le igRating comme éditeur pour ui.igGrid, ui.igRating doit être chargé',
			igValidatorException: 'Les options de validation définies dans igGridUpdating requièrent de charger ui.igValidator',
			noPrimaryKeyException: "Pour la prise en charge des opérations de mise à jour après la suppression d'une ligne, l'application doit définir la 'primaryKey' dans les options de igGrid.",
			hiddenColumnValidationException: "Impossible d'éditer une ligne contenant une colonne masquée avec la validation activée.",
			dataDirtyException: "La grille contient des transactions en cours qui peuvent affecter le rendu des données. Pour éviter l'exception, l'application peut activer l'option 'autoCommit' d'igGrid ou elle doit traiter l'événement 'dataDirty' d'igGridUpdating et retourner la mention faux. Tout en traitant cet événement, l'application peut aussi 'archiver()' les données dans igGrid.",
			recordOrPropertyNotFoundException: 'The specified record or property was not found in the data source.',
			rowEditDialogCaptionLabel: 'Editer les données de ligne', 
            unboundColumnsNotSupported: "ColumnFixing n'est pas pris en charge avec les colonnes indépendantes",
            excelNavigationNotSupportedWithCurrentEditMode: "Le mode de navigation Excel est pris en charge uniquement pour les modes Modification cellule et Modification ligne. Pour prévenir cette erreur, désactivez excelNavigationMode ou bien définissez editMode sur cellule ou ligne."
		}
    });

    $.ig.ColumnMoving = $.ig.ColumnMoving || {};

    $.extend($.ig.ColumnMoving, {
        locale: {
            movingDialogButtonApplyText: 'Appliquer',
            movingDialogButtonCancelText: 'Annuler',
            movingDialogCaptionButtonDesc: 'Descendre',
            movingDialogCaptionButtonAsc: 'Monter',
            movingDialogCaptionText: 'Déplacer les colonnes',
            movingDialogDisplayText: 'Déplacer les colonnes',
            movingDialogDropTooltipText: "Déplacer ici",
            dropDownMoveLeftText: 'Déplacer vers la gauche',
            dropDownMoveRightText: 'Déplacer vers la droite',
            dropDownMoveFirstText: 'Déplacer en premier',
            dropDownMoveLastText: 'Déplacer en dernier',
            featureChooserNotReferenced: "Le script de choix de fonctionnalité n'est pas référencé. Pour éviter de recevoir ce message d'erreur, veuillez inclure le fichier ig.ui.grid.featurechooser.js ou utiliser le chargeur ou utiliser l'un des fichiers de script combiné.",
            movingToolTipMove: 'Déplacer',
            featureChooserSubmenuText: 'Déplacer'
        }
    });

    $.ig.ColumnFixing = $.ig.ColumnFixing || {};

    $.extend($.ig.ColumnFixing, {
        locale: {
            headerFixButtonText: 'Cliquer pour verrouiller cette colonne',
            headerUnfixButtonText: 'Cliquer pour déverrouiller cette colonne',
            featureChooserTextFixedColumn: 'Verrouiller colonne',
            featureChooserTextUnfixedColumn: 'Détacher colonne',
            groupByNotSupported: "igGridGroupBy n'est pas pris en charge avec ColumnFixing",
            virtualizationNotSupported: "L'option de virtualisation de la grille permet la virtualisation de ligne et de colonne. La virtualisation de colonne n'est pas prise en charge avec ColumnFixing. Veuillez définir l'option rowVirtualization de la grille sur vrai",
            columnVirtualizationNotSupported: "La virtualisation de colonne n'est pas prise en charge avec ColumnFixing",
            columnMovingNotSupported: "igGridColumnMoving n'est pas pris en charge avec ColumnFixing",
            hidingNotSupported: "igGridHiding n'est pas pris en charge avec ColumnFixing",
            hierarchicalGridNotSupported: "igHierarchicalGrid n'est pas pris en charge avec ColumnFixing",
            responsiveNotSupported: "igGridResponsive n'est pas pris en charge avec ColumnFixing",
            noGridWidthNotSupported: "Vous devez spécifier la largeur de grille en pixels lors de l'utilisation de ColumnFixing",
            defaultColumnWidthInPercentageNotSupported: "La largeur de colonne par défaut en pourcentage n'est pas prise en charge lors de l'utilisation de ColumnFixing",
            columnsWidthShouldBeSetInPixels: 'La largeur de toutes les colonnes de la grille doit être définie en pixels pour ColumnFixing. Vérifier colonne avec la clé : ',
            unboundColumnsNotSupported: "ColumnFixing n'est pas pris en charge avec les colonnes indépendantes",
            excelNavigationNotSupportedWithCurrentEditMode: "Le mode de navigation Excel est pris en charge uniquement pour les modes Modification cellule et Modification ligne. Pour prévenir cette erreur, désactivez excelNavigationMode ou bien définissez editMode sur cellule ou ligne.",
            internalErrors: {
                none: 'Aucune erreur',
                notValidIdentifier: "Il n'existe aucune colonne avec l'identifiant spécifié",
                fixingRefused: 'Verrouillage refusé car il existe UNIQUEMENT une colonne non verrouillée visible',
                fixingRefusedMinVisibleAreaWidth: "Le verrouillage de colonne n'est pas autorisé, en raison de la largeur minimale de la zone visible des colonnes non verrouillées",
                alreadyHidden: 'Vous essayez de verrouiller/déverrouiller une colonne masquée',
                alreadyUnfixed: 'La colonne que vous essayez de déverrouiller est déjà déverrouillée',
                alreadyFixed: 'La colonne que vous essayez de verrouiller est déjà verrouillée',
                unfixingRefused: "Le déverrouillage est refusé car il n'existe qu'une seule colonne verrouillée visible et car il existe au moins une colonne verrouillée masquée.",
                targetNotFound: 'Target column is not found with the specified target identifier'
            }
        }
    });

    $.ig.GridAppendRowsOnDemand = $.ig.GridAppendRowsOnDemand || {};

    $.extend($.ig.GridAppendRowsOnDemand, {
    	locale: {
    		loadMoreDataButtonText: "Charger d'autres données",
    		appendRowsOnDemandRequiresHeight: "La fonction AppendRowsOnDemand requiert une hauteur",
    		groupByNotSupported: "igGridGroupBy n'est pas pris en charge avec AppendRowsOnDemand",
    		pagingNotSupported: "igGridPaging n'est pas pris en charge avec AppendRowsOnDemand",
    		cellMergingNotSupported: "igGridCellMerging n'est pas pris en charge avec AppendRowsOnDemand",
    		virtualizationNotSupported: "La virtualisation n'est pas prise en charge avec AppendRowsOnDemand"
    	}
    });


    $.ig.igGridResponsive = $.ig.igGridResponsive || {};

    $.extend($.ig.igGridResponsive, {
    	locale: {
    		fixedVirualizationNotSupported: "igGridResponsive n'est pas pris en charge avec la virtualisation verrouillée"
    	}
    });

    $.ig.igGridMultiColumnHeaders = $.ig.igGridMultiColumnHeaders || {};

    $.extend($.ig.igGridMultiColumnHeaders, {
    	locale: {
    		multiColumnHeadersNotSupportedWithColumnVirtualization: "La fonction d'en-têtes de colonnes multiples n'est pas prise en charge avec columnVirtualization"
    	}
    });

}
})(jQuery);
