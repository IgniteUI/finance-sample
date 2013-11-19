var resources = (function () {
    return {
        Title: "IG Finance",
        NoDataFromYahooPipe: "Although the sample functions as it is designed, there may be situations that the data source for the sample is temporarily out of service or not in service.  Please try the sample again later.",
        ShowCaseInfo: "<div class='ui-dialog-wrap'><h1>About <img src='assets/images/logo.png'></h1><p>The Finance Dashboard sample demonstrates the data chart, tree map, and zoom bar controls for the Financial Services industry. The data chart is optimized for high-speed financial charting. This sample uses large datasets with millions of data points and real-time updates. The data chart enables key statistical and technical indicators and comparisons to key competitors.</p><h1>Controls Used</h1><div class='control-sprite-wrap'><span class='dialog-sprite ds-combo'></span><span>Combo</span><span class='dialog-sprite ds-chart'></span><span>Chart</span><span class='dialog-sprite ds-dialog'></span><span>Dialog</span><span class='dialog-sprite ds-zoombar'></span><span>Zoombar</span></div><a href='http://infragistics.com/downloads/generate/00000000-0000-0000-0000-000000004273?thankYouEmailContentId=11129'>Download Source Code<span class='icon-down ui-sprite'></span></a><span class='dialog-qr'><span>Scan to view on your mobile device!</span><div id='barcode'></div></span></div><div class='dialog-igniteui'><img src='assets/images/igniteui.png'></div><div class='dialog-infragistics'><img src='assets/images/infragistics.png'></div>",
        MarketCurrentlyClosed: "Market Currently Closed.",
        RangeText: "Range",
        WeeksText: "52 Weeks",
        OpenText: "Open",
        VolumeText: "Volume",
        EbitaText: "EBITA",
        EpsText: "EPS",
        MktText: "Mkt Cap",
        PeText: "P/E",
        AskText: "Ask",
        BidText: "Bid",
        DailyHighText: "Daily High",
        DailyLowText: "Daily Low",
        TooltipOpen: "Open:",
        TooltipLow: "Low:",
        TooltipHigh: "High:",
        TooltipClose: "Close:",
        IndicatorPeriod: "Indicator/Period: ",
        IndicatorType: {
            AvgTrueRange: "Average True Range",
            AvgIndex: "Average Directional Index",
            CommodityIndex: "Commodity Channel Index",
            FastOscillator: "Fast Stochastic Oscillator",
            ForceIndex: "Force Index",
            MoneyFlow: "Money Flow Index",
            PriceOverlay: "Price Channel Overlay",
            RateMomentum: "Rate Of Change And Momentum",
            RelativeIndex: "Relative Strength Index",
            SlowOscillator: "Slow Stochastic Oscillator",
            StockRsi: "Stoch RSI",
            Trix: "Trix",
            WilliamsR: "Williams Percent R",
        },

        SelectIndicator: "Select Indicator:",
        PeriodSlider: "Period slider:",
        ValidTicker: "Enter a valid stock ticker symbol (eg. INTC)",
        InfoScreen: "<p>You can change the stock ticker to any valid symbol .</p><p>The Stock chart can be switched between Area, Candlestick, OHLC and Line display mode and is zoomable and the other charts will be kept in sync (Hint: Hold shift to pan instead). The chart resolution is set to 10. Zoom in for details.</p><p>You can also customize the indicators below.</p>",
        MonthNames: ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"],
        //This should not be transpated its for time formating
        getTimeFormatted: function (year, month, day) { return month + 1 + "/" + day + "/" + year; }

    }
})();