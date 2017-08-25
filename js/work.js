var itemsText = [
    {
        "id": 0
        , "name": "P",
        "i": 0
        , "n": "P"
    }, {
        "id": 1
        , "name": "E",
        "i": 1
        , "n": "P"
    }, {
        "id": 2
        , "name": "F",
        "i": 2
        , "n": "P"
    }, {
        "id": 3
        , "name": "P",
        "i": 3
        , "n": "P"
    }, {
        "id": 4
        , "name": "E",
        "i": 4
        , "n": "P"
    }, {
        "id": 5
        , "name": "F",
        "i": 5
        , "n": "P"
    }, {
        "id": 6
        , "name": "P",
        "i": 6
        , "n": "P"
    }, {
        "id": 7
        , "name": "E",
        "i": 7
        , "n": "P"
    }, {
        "id": 8
        , "name": "F",
        "i": 8
        , "n": "P"
    }];

function launch() {
    var urlString = window.location.search;
    var nn = urlString.substring(urlString.indexOf("=") + 1, urlString.length);
    var element;
    itemsText.forEach(function (item) {
        if (item.id == nn) {
            element = item;
        }
    });
    alert("found: " + element.id + " " + element.name + " " + element.n);
}

launch();