var app = angular.module('reportingApp', []);

app.controller('ScreenshotReportController', function ($scope) {
    $scope.searchSettings = Object.assign({
        description: '',
        allselected: true,
        passed: true,
        failed: true,
        pending: true,
        withLog: true
    }, {}); // enable customisation of search settings on first page hit

    var initialColumnSettings = undefined; // enable customisation of visible columns on first page hit
    if (initialColumnSettings) {
        if (initialColumnSettings.displayTime !== undefined) {
            // initial settings have be inverted because the html bindings are inverted (e.g. !ctrl.displayTime)
            this.displayTime = !initialColumnSettings.displayTime;
        }
        if (initialColumnSettings.displayBrowser !== undefined) {
            this.displayBrowser = !initialColumnSettings.displayBrowser; // same as above
        }
        if (initialColumnSettings.displaySessionId !== undefined) {
            this.displaySessionId = !initialColumnSettings.displaySessionId; // same as above
        }
        if (initialColumnSettings.displayOS !== undefined) {
            this.displayOS = !initialColumnSettings.displayOS; // same as above
        }
        if (initialColumnSettings.inlineScreenshots !== undefined) {
            this.inlineScreenshots = initialColumnSettings.inlineScreenshots; // this setting does not have to be inverted
        }

    }


    $scope.inlineScreenshots = false;
    this.showSmartStackTraceHighlight = true;

    this.chooseAllTypes = function () {
        var value = true;
        $scope.searchSettings.allselected = !$scope.searchSettings.allselected;
        if (!$scope.searchSettings.allselected) {
            value = false;
        }

        $scope.searchSettings.passed = value;
        $scope.searchSettings.failed = value;
        $scope.searchSettings.pending = value;
        $scope.searchSettings.withLog = value;
    };

    this.isValueAnArray = function (val) {
        return isValueAnArray(val);
    };

    this.getParent = function (str) {
        var arr = str.split('|');
        str = "";
        for (var i = arr.length - 2; i > 0; i--) {
            str += arr[i] + " > ";
        }
        return str.slice(0, -3);
    };

    this.getSpec = function (str) {
        return getSpec(str);
    };


    this.getShortDescription = function (str) {
        return str.split('|')[0];
    };

    this.convertTimestamp = function (timestamp) {
        var d = new Date(timestamp),
            yyyy = d.getFullYear(),
            mm = ('0' + (d.getMonth() + 1)).slice(-2),
            dd = ('0' + d.getDate()).slice(-2),
            hh = d.getHours(),
            h = hh,
            min = ('0' + d.getMinutes()).slice(-2),
            ampm = 'AM',
            time;

        if (hh > 12) {
            h = hh - 12;
            ampm = 'PM';
        } else if (hh === 12) {
            h = 12;
            ampm = 'PM';
        } else if (hh === 0) {
            h = 12;
        }

        // ie: 2013-02-18, 8:35 AM
        time = yyyy + '-' + mm + '-' + dd + ', ' + h + ':' + min + ' ' + ampm;

        return time;
    };


    this.round = function (number, roundVal) {
        return (parseFloat(number) / 1000).toFixed(roundVal);
    };


    this.passCount = function () {
        var passCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.passed) {
                passCount++;
            }
        }
        return passCount;
    };


    this.pendingCount = function () {
        var pendingCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (result.pending) {
                pendingCount++;
            }
        }
        return pendingCount;
    };


    this.failCount = function () {
        var failCount = 0;
        for (var i in this.results) {
            var result = this.results[i];
            if (!result.passed && !result.pending) {
                failCount++;
            }
        }
        return failCount;
    };

    this.passPerc = function () {
        return (this.passCount() / this.totalCount()) * 100;
    };
    this.pendingPerc = function () {
        return (this.pendingCount() / this.totalCount()) * 100;
    };
    this.failPerc = function () {
        return (this.failCount() / this.totalCount()) * 100;
    };
    this.totalCount = function () {
        return this.passCount() + this.failCount() + this.pendingCount();
    };

    this.applySmartHighlight = function (line) {
        if (this.showSmartStackTraceHighlight) {
            if (line.indexOf('node_modules') > -1) {
                return 'greyout';
            }
            if (line.indexOf('  at ') === -1) {
                return '';
            }

            return 'highlight';
        }
        return true;
    };


    var results = [
    {
        "description": "should navigate to NCL web page and check the title|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": true,
        "pending": false,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Passed.",
        "trace": "",
        "browserLogs": [
            {
                "level": "WARNING",
                "message": "https://www.ncl.com/ 4 The value \"device-320\" for key \"width\" is invalid, and has been ignored.",
                "timestamp": 1545881505338,
                "type": ""
            }
        ],
        "screenShotFile": "images/00b50084-0014-00cc-00a4-0039006e0076.png",
        "timestamp": 1545881505084,
        "duration": 4905
    },
    {
        "description": "should click on Shop our Cruise Deals and check Text of Sign up to never miss a cruise deal!|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00de0055-00a1-00a7-00f4-006500b7004a.png",
        "timestamp": 1545881510986,
        "duration": 0
    },
    {
        "description": "should check if Free Airfare Offers is present|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00e80070-007e-0007-00f1-00d400d7007f.png",
        "timestamp": 1545881511069,
        "duration": 0
    },
    {
        "description": "should be able to click on discover Harvest Caye and click on details.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00b000e3-001e-000b-0048-006200ef008e.png",
        "timestamp": 1545881511075,
        "duration": 0
    },
    {
        "description": "should see Harvest Caye Highlights, and Display text.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00620048-009b-00cb-00e3-000e001e0024.png",
        "timestamp": 1545881511082,
        "duration": 1
    },
    {
        "description": "should click on Hawaii Cruises & Cruise-tours and get price of the tour.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00e50066-008a-00c3-006c-001800d50085.png",
        "timestamp": 1545881511089,
        "duration": 0
    },
    {
        "description": " should click on Norwegian Joy and get Ship Information.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00f20023-0085-0032-00af-00d900870001.png",
        "timestamp": 1545881511096,
        "duration": 0
    },
    {
        "description": "should choose a vacation.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00cf0047-0013-006d-0091-0061007600b9.png",
        "timestamp": 1545881511101,
        "duration": 0
    },
    {
        "description": "should switch to pop up window and get curent URL and vacation prices.|Pop up window.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Pending",
        "browserLogs": [],
        "screenShotFile": "images/004d003a-0035-001f-0040-009500c0009a.png",
        "timestamp": 1545881511107,
        "duration": 1
    },
    {
        "description": "should switch back to previews page.|Pop up window.|Check Shop Our Cruise Deals & Discover Horvest Caye buttons.",
        "passed": false,
        "pending": true,
        "os": "Mac OS X",
        "instanceId": 63935,
        "browser": {
            "name": "chrome",
            "version": "71.0.3578.98"
        },
        "message": "Temporarily disabled with xit",
        "browserLogs": [],
        "screenShotFile": "images/00360087-001c-001a-0034-00a300a200e4.png",
        "timestamp": 1545881511113,
        "duration": 0
    }
];

    this.sortSpecs = function () {
        this.results = results.sort(function sortFunction(a, b) {
    if (a.sessionId < b.sessionId) return -1;else if (a.sessionId > b.sessionId) return 1;

    if (a.timestamp < b.timestamp) return -1;else if (a.timestamp > b.timestamp) return 1;

    return 0;
});
    };

    this.sortSpecs();
});

app.filter('bySearchSettings', function () {
    return function (items, searchSettings) {
        var filtered = [];
        var prevItem = null;

        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            item.displaySpecName = false;

            countLogMessages(item);

            var hasLog = searchSettings.withLog && item.browserLogs && item.browserLogs.length > 0;
            if (searchSettings.description === '' ||
                (item.description && item.description.toLowerCase().indexOf(searchSettings.description.toLowerCase()) > -1)) {

                if (searchSettings.passed && item.passed || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.failed && !item.passed && !item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                } else if (searchSettings.pending && item.pending || hasLog) {
                    checkIfShouldDisplaySpecName(prevItem, item);
                    filtered.push(item);
                    prevItem = item;
                }

            }
        }

        return filtered;
    };
});

var isValueAnArray = function (val) {
    return Array.isArray(val);
};

var checkIfShouldDisplaySpecName = function (prevItem, item) {
    if (!prevItem) {
        item.displaySpecName = true;
        return;
    }

    if (getSpec(item.description) != getSpec(prevItem.description)) {
        item.displaySpecName = true;
        return;
    }
};

var getSpec = function (str) {
    var describes = str.split('|');
    return describes[describes.length - 1];
};

var countLogMessages = function (item) {
    if ((!item.logWarnings || !item.logErrors) && item.browserLogs && item.browserLogs.length > 0) {
        item.logWarnings = 0;
        item.logErrors = 0;
        for (var logNumber = 0; logNumber < item.browserLogs.length; logNumber++) {
            var logEntry = item.browserLogs[logNumber];
            if (logEntry.level === 'SEVERE') {
                item.logErrors++;
            }
            if (logEntry.level === 'WARNING') {
                item.logWarnings++;
            }
        }
    }
};
