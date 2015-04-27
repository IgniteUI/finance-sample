var igFinance = (function () {
    var helpers = (function () {

        function _checkTime(i) {
            if (i < 10) {
                i = "0" + i;
            }
            return i;
        }

        function _changeSeriesTypeToSplineArea() {
            _removeOldSeries();

            $("#priceChart").igDataChart("option", "series", helpers.getSplineAreaSeries("#00AADE"));
            $("#zoom").igZoombar("clone").igDataChart("option", "series", helpers.getSplineAreaSeries("#00AADE"));
        }

        function _changeSeriesTypeToLine() {
            _removeOldSeries();

            $("#priceChart").igDataChart("option", "series", _getLineSeries("#00AADE"));
            $("#zoom").igZoombar("clone").igDataChart("option", "series", _getLineSeries("#00AADE"));
        }

        function _changeSeriesTypeToFinancial(displayType) {
            _removeOldSeries();
            $("#priceChart").igDataChart("option", "series", _getFinancialSeriesWithCustom(displayType, "#00AADE"));
            $("#zoom").igZoombar("clone").igDataChart("option", "series", _getFinancialSeriesWithCustom(displayType, "#00AADE"));
        }

        function _removeOldSeries() {
            $("#priceChart").igDataChart("option", "series", [{
                name: "stockSeries",
                remove: true
            }]);

            $("#zoom").igZoombar("clone").igDataChart("option", "series", [{
                name: "stockSeries",
                remove: true
            }]);
        }

        function _getFinancialSeriesWithCustom(displayType, customOutline) {
            return [{
                type: "financial",
                displayType: displayType,
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                closeMemberPath: "Close",
                highMemberPath: "High",
                lowMemberPath: "Low",
                openMemberPath: "Open",
                showTooltip: true,
                tooltipTemplate: '<ul class="tooltip-titles"><li>' + resources.TooltipOpen + '</li><li>' + resources.TooltipHigh + '</li><li>' + resources.TooltipLow + '</li><li>' + resources.TooltipClose + '</li></ul><ul class="tooltip-values"><li>${item.Open}</li><li>${item.High}</li><li>${item.Low}</li><li>${item.Close}</li></ul>',
                outline: customOutline,
                xAxis: "xAxis",
                yAxis: "yAxis",
                brush: "rgba(0,170,222,0.3)",
                name: "stockSeries",
                title: "Price Data",
                trendLineType: "simpleAverage",
                trendLinePeriod: 50,
                resolution: 10
            }];
        }

        function _getLineSeries(customOutline) {
            return [{
                name: "stockSeries",
                type: "line",
                isHighlightingEnabled: true,
                isTransitionInEnabled: true,
                xAxis: "xAxis",
                yAxis: "yAxis",
                valueMemberPath: "High",
                showTooltip: true,
                brush: "rgba(0,170,222,0.3)",
                outline: customOutline,
                tooltipTemplate: '<ul class="tooltip-titles"><li>' + resources.TooltipOpen + '</li><li>' + resources.TooltipHigh + '</li><li>' + resources.TooltipLow + '</li><li>' + resources.TooltipClose + '</li></ul><ul class="tooltip-values"><li>${item.Open}</li><li>${item.High}</li><li>${item.Low}</li><li>${item.Close}</li></ul>',
                thickness: 3
            }];
        }

        //Format label depending on zoom level. We need to use current zoom 
        //level because we don't know the date of the next visible dot in axes
        function _formatLabel(item) {
            var chartWidth = $("#priceChart").igDataChart("option", "windowRect").width;
            var minimalWidth = 0.398;
            var ret = '';
            if (chartWidth < minimalWidth) {
                ret += item.Date.getDate();
                ret += "/";
                ret += item.Date.getMonth() + 1;
                ret += "/";
                ret += item.Date.getFullYear();
            } else {

                ret += helpers._convertNumberToMonthName(item.Date.getMonth());
            }
            return ret;
        }

        return {
            takeTimeSnapShot: function () {
                var today = new Date();
                var h = today.getHours();
                var m = today.getMinutes();
                var s = today.getSeconds();
                var day = today.getDate();
                var month = today.getMonth();
                var year = today.getFullYear();
                // add a zero in front of numbers<10
                m = _checkTime(m);
                s = _checkTime(s);
                document.getElementById('clock').innerHTML = resources.getTimeFormatted(year, month, day) + " " + h + ":" + m + ":" + s;
            },

            localize: function () {
                $("title").text(resources.Title);
                $("#indicator-period-text").text(resources.IndicatorPeriod);
                $("#indicator-type").text(resources.IndicatorType.MoneyFlow);
                $("#js-select-indicator").text(resources.SelectIndicator);
                $("#js-period-slider").text(resources.PeriodSlider);
                $("#js-valid-ticker").text(resources.ValidTicker);
                $("#info-screen").html(resources.InfoScreen);
            },

            updateDetailsDataView: function (details) {
                if (details.PercentChange == "0.00%") {
                    details.isPositive = "inactive";
                    details.marketCurrentlyClosed = resources.MarketCurrentlyClosed;
                } else if (details.PercentChange.contains("+")) {
                    details.isPositive = "true";
                    details.PercentChange = details.PercentChange.substring(1);
                    details.Change = details.Change.substring(1);
                } else {
                    details.isPositive = "false";
                    details.PercentChange = details.PercentChange.substring(1);
                    details.Change = details.Change.substring(1);
                }

                details.RangeText = resources.RangeText;
                details.WeeksText = resources.WeeksText;
                details.OpenText = resources.OpenText;
                details.VolumeText = resources.VolumeText;
                details.EbitaText = resources.EbitaText;
                details.EpsText = resources.EpsText;
                details.MktText = resources.MktText;
                details.PeText = resources.PeText;
                details.AskText = resources.AskText;
                details.BidText = resources.BidText;
                details.DailyHighText = resources.DailyHighText;
                details.DailyLowText = resources.DailyLowText;
            },

            changeChartsSeriesType: function (newType, displayType) {
                currentSeriesType = newType;
                if (newType === "area") {
                    _changeSeriesTypeToSplineArea();
                } else if (newType === "line") {
                    _changeSeriesTypeToLine();
                } else {
                    currentDisplayType = displayType;
                    _changeSeriesTypeToFinancial(displayType);
                }
            },

            getSplineAreaSeries: function (customOutline) {
                return [{
                    type: "splineArea",
                    displayType: "splineArea",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    valueMemberPath: "High",
                    brush: "rgba(0,170,222,0.3)",
                    showTooltip: true,
                    tooltipTemplate: '<ul class="tooltip-titles"><li>' + resources.TooltipOpen + '</li><li>' + resources.TooltipHigh + '</li><li>' + resources.TooltipLow + '</li><li>' + resources.TooltipClose + '</li></ul><ul class="tooltip-values"><li>${item.Open}</li><li>${item.High}</li><li>${item.Low}</li><li>${item.Close}</li></ul>',
                    outline: customOutline,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "stockSeries",
                    title: "Price Data",
                }];
            },

            getDataSchema: function () {
                return new $.ig.DataSchema("json", {
                    fields: [{
                        name: "Close",
                        type: "number"
                    }, {
                        name: "High",
                        type: "number"
                    }, {
                        name: "Low",
                        type: "number"
                    }, {
                        name: "Open",
                        type: "number"
                    }, {
                        name: "Volume",
                        type: "number"
                    }, {
                        name: "Date",
                        type: "date"
                    }],
                    searchField: "value.items"
                });
            },

            _getPeriodSliderOptions: function () {
                return {
                    slide: function (event, ui) {
                        $("#indicatorChart").igDataChart("option", "series", [{
                            name: "indicatorSeries",
                            period: ui.value
                        }]);
                        $("#period").text(ui.value);
                        document.getElementsByClassName("avt-value")[1].innerHTML = ui.value;
                    },
                    min: 1,
                    max: 25,
                    value: 14
                };
            },

            //price chart related functions
            _getPriceChartOptions: function (seriesType) {
                var desiredHeight = 0.22 * $(window).height();
                var series;
                if (seriesType === "financial") {
                    series = _getFinancialSeriesWithCustom(currentDisplayType, "#00AADE");
                } else {
                    series = helpers.getSplineAreaSeries("#00AADE");
                }
                return {
                    theme: "metro",
                    width: "100%",
                    height: desiredHeight,
                    windowResponse: "deferred",
                    horizontalZoomable: true,
                    dataSource: igFinance.getDataView(),
                    leftMargin: 0,
                    rightMargin: 30,
                    windowRectMinWidth: 0.05,
                    axes: helpers._getPriceChartAxes(),
                    series: series,
                    syncChannel: "channel1",
                    synchronizeVertically: false,
                    syncrhonizeHorizontally: false
                };
            },

            _getPriceChartAxes: function () {
                return [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    formatLabel: function (item) {
                        return _formatLabel(item);
                    }
                }, {
                    type: "numericY",
                    labelLocation: "outsideRight",
                    name: "yAxis",
                    majorStroke: "rgba(153,153,153,0.1)",
                    labelExtent: 40
                }];
            },

            //indicator chart related functions
            _getIndicatorChartOptions: function () {
                var desiredHeight = 0.18 * $(window).height();
                return {
                    width: "100%",
                    height: desiredHeight,
                    windowResponse: "deferred",
                    horizontalZoomable: true,
                    dataSource: igFinance.getDataView(),
                    leftMargin: 0,
                    rightMargin: 30,
                    windowRectMinWidth: 0.05,
                    axes: helpers._getIndicatorChartAxes(),
                    series: helpers._getIndicatorChartSeries("moneyFlowIndexIndicator"),
                    syncChannel: "channel1",
                    synchronizeVertically: false,
                    syncrhonizeHorizontally: false
                };
            },

            _getIndicatorChartAxes: function () {
                return [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    maximumValue: 1,
                    minimumValue: 0,
                    formatLabel: function (item) {
                        return _formatLabel(item);
                    }

                }, {
                    type: "numericY",
                    labelLocation: "outsideRight",
                    name: "yAxis",
                    majorStroke: "rgba(153,153,153,0.1)",
                    formatLabel: function (item) {
                        return helpers._numberFormatter(item);
                    },
                    labelExtent: 40
                }];
            },

            _getIndicatorChartSeries: function (newType) {
                return [{
                    type: newType,
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    closeMemberPath: "Close",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    volumeMemberPath: "Volume",
                    resolution: 10
                }];

            },

            _getIndicatorComboOptions: function () {
                return {
                    width: "300px",
                    enableClearButton: false,
                    dataSource: helpers._getIndicatorComboDataSource(),
                    textKey: "text",
                    valueKey: "type",
                    filteringType: "local",
                    noMatchFoundText: "No match found please try again",
                    initialSelectedItems: [{
                        index: 5
                    }],
                    selectionChanged: function (evt, ui) {
                        if (ui.items && ui.items[0]) {
                            document.getElementsByClassName("avt-value")[0].innerHTML = ui.items[0].data.text;
                            helpers._changeIndicator(ui.items[0].data.type);
                        }
                    },
                    dropDownClosed: function (evt, ui) {
                        var text = $("#indicatorCombo").igCombo("text");
                        $("#indicatorCombo").igCombo("filter", "", null);
                        $("#indicatorCombo").igCombo("text", text);
                    },
                };
            },

            _getIndicatorComboDataSource: function () {
                return [
                        { type: "averageTrueRangeIndicator", text: resources.IndicatorType.AvgTrueRange },
                        { type: "averageDirectionalIndexIndicator", text: resources.IndicatorType.AvgIndex },
                        { type: "commodityChannelIndexIndicator", text: resources.IndicatorType.CommodityIndex },
                        { type: "fastStochasticOscillatorIndicator", text: resources.IndicatorType.FastOscillator },
                        { type: "forceIndexIndicator", text: resources.IndicatorType.ForceIndex },
                        { type: "moneyFlowIndexIndicator", text: resources.IndicatorType.MoneyFlow },
                        { type: "priceChannelOverlay", text: resources.IndicatorType.PriceOverlay },
                        { type: "rateOfChangeAndMomentumIndicator", text: resources.IndicatorType.RateMomentum },
                        { type: "relativeStrengthIndexIndicator", text: resources.IndicatorType.RelativeIndex },
                        { type: "slowStochasticOscillatorIndicator", text: resources.IndicatorType.SlowOscillator },
                        { type: "stochRSIIndicator", text: resources.IndicatorType.StockRsi },
                        { type: "trixIndicator", text: resources.IndicatorType.Trix },
                        { type: "williamsPercentRIndicator", text: resources.IndicatorType.WilliamsR }
                ];
            },

            _changeIndicator: function (newIndicator) {
                $("#indicatorChart").igDataChart("option", "series", [{
                    name: "indicatorSeries",
                    remove: true
                }]);

                $("#indicatorChart").igDataChart("option", "series", helpers._getIndicatorChartSeries(newIndicator));

            },

            //volume chart related functions
            _getVolumeChartOptions: function () {
                var desiredHeight = 0.08 * $(window).height();
                return {
                    gridMode: 'none',
                    width: "100%",
                    height: desiredHeight,
                    dataSource: igFinance.getDataView(),
                    leftMargin: 0,
                    rightMargin: 15,
                    windowRectMinWidth: 0.02,
                    axes: helpers._getVolumeChartAxes(),
                    series: helpers._getVolumeChartSeries(),
                    syncChannel: "channel1",
                    synchronizeVertically: false,
                    syncrhonizeHorizontally: false
                };
            },

            _getVolumeChartAxes: function () {
                return [{
                    type: "categoryX",
                    label: "Date",
                    name: "xAxis",
                    labelVisibility: "collapsed"
                }, {
                    type: "numericY",
                    name: "yAxis",
                    majorStroke: "rgba(153,153,153,0.1)",
                    isLogarithmic: true,
                    labelLocation: "outsideRight",
                    formatLabel: function (item) {
                        return helpers._numberFormatter(item);
                    },
                    labelExtent: 40
                }];
            },

            _getVolumeChartSeries: function () {
                return [{
                    type: "column",
                    outline: "rgba(0,0,0,0)",
                    isHighlightingEnabled: true,
                    isTransitionInEnabled: true,
                    brush: "#777",
                    valueMemberPath: "Volume",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    name: "indicatorSeries",
                    title: "Financial Indicator Data",
                    showTooltip: true,
                    tooltipTemplate: 'volumeChartTooltipTemplate',
                }];
            },

            _convertNumberToMonthName: function (monthNumber) {
                var monthNames = resources.MonthNames;
                return monthNames[monthNumber];
            },

            _numberFormatter: function (number) {
                var base = Math.floor(Math.log(Math.abs(number)) / Math.log(1000));
                if (base > 0 && base < 4) {
                    var number = Math.round(number / Math.pow(1000, base));
                    number += " KMB"[base];
                }
                return number;
            },

            getSelectableOptions: function () {
                return {
                    selected: function (e, ui) {
                        var newType = $(ui.selected).data("type");
                        var displayType = $(ui.selected).data("displaytype");
                        helpers.changeChartsSeriesType(newType, displayType);
                    }
                }
            }
        };
    })();

    var ticker = "MSFT",
        ds = null,
        detailsDs = null;

    var currentDate, currentSeriesType, currentDisplayType;

    return {
        init: function () {

            currentDate = new Date();
            var previousYear = currentDate.getFullYear() - 1;
            var previousDay = currentDate.getDate() - 1;

            jQuery.support.cors = true; //IE9

            ds = new $.ig.JSONPDataSource({
                jsonp: "_callback",
                dataSource: "http://pipes.yahooapis.com/pipes/pipe.run?_id=98aa7fee9ad07efbdbde5699c53f1bcb&_render=json&s=" + ticker + "&a=" + currentDate.getMonth() + "&b=" + currentDate.getDate() + "&c=" + previousYear + "&d=" + currentDate.getMonth() + "&e=" + previousDay + "&f=" + currentDate.getFullYear() + "&g=d",
                callback: igFinance.render,
                schema: helpers.getDataSchema(),
                sorting: {
                    type: "local"
                }
            });
            ds.dataBind();
        },

        getDataView: function () {
            return ds.dataView();
        },

        getDetailsDataView: function () {
            return detailsDs.dataView()[0];
        },

        getTicker: function () {
            return ticker;
        },

        sortDataSource: function () {
            ds.sort([{ fieldName: "Date" }], "asc", false);
        },

        formatDataSourceVolume: function () {
            var newDataView = igFinance.getDataView();
            for (var i = 0; i < newDataView.length; i++) {
                newDataView[i].Volume = helpers._numberFormatter(newDataView[i].Volume);
            }
        },

        initDetailsDataSource: function () {
            //Add the additional details Info on top of the Dashboard
            detailsDs = new $.ig.JSONPDataSource({
                jsonp: "_callback",
                responseDataKey: "value.items",
                dataSource: "http://pipes.yahooapis.com/pipes/pipe.run?_id=3e1b7fc9a1a63ea0772d20ce4573d792&_render=json&symbol=" + igFinance.getTicker(),
                callback: function () {
                    if (igFinance.getDetailsDataView() == undefined) {
                        igFinance.openDialog("noData");
                        $("#noData").text(resources.NoDataFromYahooPipe);
                    } else {
                        helpers.updateDetailsDataView(igFinance.getDetailsDataView());
                        $("#stockDetails").html($.ig.tmpl($("#stockDetailsTemplate").html(), igFinance.getDetailsDataView()));
                        $("#tab1Name").html($.ig.tmpl($("#tab1Template").html(), igFinance.getDetailsDataView()));
                    }
                }
            });
            detailsDs.dataBind();
        },

        changeTicker: function (symbol) {
            var isTickerValid = symbol && symbol.length < 5;
            if (isTickerValid) {
                ticker = symbol;
                igFinance.init();
            } else {
                $("#js-invalid-ticker").text(resources.InvalidTicker);
                $("#js-invalid-ticker").css("display", "block");
            }
        },

        render: function () {
            var isDataAvailable = igFinance.getDataView().length > 0;
            var isDialogOpen = $("#dialog").hasClass("ui-igdialog-content") ? ($("#dialog").igDialog("option", "state") == "opened") : false;

            if (!isDataAvailable && isDialogOpen) {
                $("#js-invalid-ticker").text(resources.InvalidTicker);
                    $("#js-invalid-ticker").css("display", "block");
            } else if (!isDataAvailable) {
                igFinance.openDialog("noData");
                $("#noData").text(resources.NoDataFromYahooPipe);
            } else {
                if (isDialogOpen) {
                    $("#dialog").igDialog("close");
                    $("#js-invalid-ticker").css("display", "none");
                }
                igFinance.initDetailsDataSource();
                helpers.takeTimeSnapShot();
                helpers.localize();

                igFinance.sortDataSource();
                igFinance.initializeCharts();
                igFinance.formatDataSourceVolume();
            }
        },

        initializeCharts: function () {
            var priceChartOptions = helpers._getPriceChartOptions(currentSeriesType);
            $("#priceChart").igDataChart(priceChartOptions);

            var indicatorCharOptions = helpers._getIndicatorChartOptions();
            $("#indicatorChart").igDataChart(indicatorCharOptions);

            var volumeChartOptions = helpers._getVolumeChartOptions();
            $("#volumeChart").igDataChart(volumeChartOptions);

            var indicatorComboOptions = helpers._getIndicatorComboOptions();
            $("#indicatorCombo").igCombo(indicatorComboOptions);

            var periodSliderOptions = helpers._getPeriodSliderOptions();
            $("#periodSlider").slider(periodSliderOptions);

            var selectableOptions = helpers.getSelectableOptions();
            $("#selectable").selectable(selectableOptions);

            $("#indicatorCombo").igCombo("textInput").on("click", function (e) {
                $(this).select();
            });

            var desiredZoombarHeight = 0.10 * $(window).height();
            if ($("#zoom_zoombar_container").length > 0) {
                $("#zoom").igZoombar("clone").igDataChart({
                    dataSource: igFinance.getDataView()
                });
            } else {
                $("#zoom").igZoombar({
                    target: $("#priceChart"),
                    height: desiredZoombarHeight,
                    defaultZoomWindow: {
                        left: 30,
                        width: 45
                    }
                });
            }
        },
        openDialog: function (id) {
            $("#" + id).igDialog({
                state: "opened",
                draggable: false,
                resizable: false
            });

        },
         
        resizeCharts: function () {
            var windowHeight = $(window).height();
            if ($("#priceChart").children().length != 0) {
                $("#priceChart").igDataChart("option", "height", 0.22 * windowHeight);
                $("#indicatorChart").igDataChart("option", "height", 0.18 * windowHeight);
                $("#volumeChart").igDataChart("option", "height", 0.08 * windowHeight);

                if ($("#zoom_zoombar_container").length == 0) {
                    $("#zoom").igZoombar("option", "height", 0.08 * windowHeight);
                }
            }
        },

        showInfoDialog: function () {
            var element = "about-dialog";
            var ShowcaseInfo = resources.ShowCaseInfo;
            if ($("#" + element).length > 0) {
                $("#" + element).igDialog("option", "state", "opened");
            } else {
                $("body").append("<div id='" + element + "' style='display:none;'>" + ShowcaseInfo +
                "</div>");

                $("#" + element).igDialog({
                    state: "opened",
                    modal: true,
                    draggable: false,
                    resizable: false,
                    zIndex: 10000000,
                    height: "507px",
                    width: "700px",
                    dialogClass: "about-dialog"
                });

                $("#barcode").igQRCodeBarcode({
                    height: "66px",
                    width: "66px",
                    errorCorrectionLevel: "low",
                    barsFillMode: "ensureEqualSize",
                    stretch: "none",
                    data: document.URL
                });
            }
        },

        loadResources: function () {
            // private variables
            var instance;

            // private methods
            var init = function () {
                var pathToResources = [
                    config.resources.folder,
                    config.language,
                    config.resources.file
                ].join("/");

                return $.getScript(pathToResources);
            }

            if (!instance) {
                instance = init();
            }

            return instance;
        }

    }
})();

//First time init
$(window).load(function () {
    igFinance.loadResources().done(function () {
        igFinance.init();
    });
});

//Document listeners
$(function () {
    $("#tabs").tabs();
});

$(window).resize(function () {
    igFinance.resizeCharts();
});

$("#js-chart-switch").click(function () {
    $("#seriesSwitch").toggle("fast");
});

$("#js-info").click(function () {
    $("#info-screen").toggle("fast");
});

$("#js-about").click(function () {
    igFinance.showInfoDialog();
});

$(document).click(function (e) {
    var isSeriesSwitcherOpen = e.target.id != 'seriesSwitch' && !e.target.className.contains('icon-chart-switch') && $("#seriesSwitch")[0].style.display != "none";
    var isInfoWindowOpen = e.target.id != 'info-screen' && !e.target.className.contains('icon-info') && $("#info-screen")[0].style.display != "none";

    if (isSeriesSwitcherOpen) {
        $("#seriesSwitch").toggle("fast");
    }
    if (isInfoWindowOpen) {
        $("#info-screen").toggle("fast");
    }
});

$("#ticker").change(function () {
    igFinance.changeTicker($(this).val());
});

$("#js-indicator-period").click(function () {
    igFinance.openDialog('indicatorDialog');
});

$(document).on("click", "#js-change-ticker-button", function () {
    igFinance.openDialog('dialog');
});