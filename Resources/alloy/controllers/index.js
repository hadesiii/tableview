function Controller() {
    function newTimeMessage(messageText) {
        var lbTimeMessage = Ti.UI.createLabel({
            text: messageText,
            top: 1,
            right: 60
        });
        return lbTimeMessage;
    }
    function newMyMessage(messageText) {
        var lbTimeMessage = Ti.UI.createLabel({
            text: messageText,
            top: 10,
            right: "20%",
            width: "70%",
            left: "10%"
        });
        return lbTimeMessage;
    }
    function newFrMessage(messageText) {
        var lbTimeMessage = Ti.UI.createLabel({
            text: messageText,
            top: 10,
            left: "20%",
            width: "70%",
            right: "10%"
        });
        return lbTimeMessage;
    }
    function newMyAvatar() {
        var imageAvatar = Ti.UI.createImageView({
            image: IMG_BASE + "custom_tableview/user.png",
            right: 10,
            top: 5,
            width: 50,
            height: 50
        });
        return imageAvatar;
    }
    function newAvatar() {
        var imageAvatar = Ti.UI.createImageView({
            image: IMG_BASE + "custom_tableview/user.png",
            left: 10,
            top: 5,
            width: 50,
            height: 50
        });
        return imageAvatar;
    }
    function createRowMyMessage(time, messageText) {
        var rowMyMessage = Ti.UI.createTableViewRow({
            className: "rowMyMessage",
            selectedBackgroundColor: "white"
        });
        var imageAvatar = newMyAvatar();
        var lbTimeMessage = newTimeMessage(time);
        rowMyMessage.add(newMyMessage(messageText));
        rowMyMessage.add(imageAvatar);
        rowMyMessage.add(lbTimeMessage);
        return rowMyMessage;
    }
    function createRowFrMessage(time, messageText) {
        var rowMyMessage = Ti.UI.createTableViewRow({
            className: "rowFrMessage",
            selectedBackgroundColor: "white"
        });
        var imageAvatar = newAvatar();
        var lbTimeMessage = newTimeMessage(time);
        rowMyMessage.add(newFrMessage(messageText));
        rowMyMessage.add(imageAvatar);
        rowMyMessage.add(lbTimeMessage);
        return rowMyMessage;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Basic Rows",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.__alloyId6 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId6"
    });
    var __alloyId7 = [];
    __alloyId7.push($.__views.__alloyId6);
    $.__views.__alloyId8 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        text: "Xin chao tat ca cac ban. Toi la 1 nghe si. Xin chao tat ca cac ban. Toi la 1 nghe si. Xin chao tat ca cac ban. Toi la 1 nghe si.",
        id: "__alloyId8"
    });
    $.__views.__alloyId6.add($.__views.__alloyId8);
    $.__views.__alloyId9 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId9"
    });
    __alloyId7.push($.__views.__alloyId9);
    $.__views.__alloyId10 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Row 2",
        id: "__alloyId10"
    });
    $.__views.__alloyId9.add($.__views.__alloyId10);
    $.__views.__alloyId11 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId11"
    });
    __alloyId7.push($.__views.__alloyId11);
    $.__views.__alloyId12 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Row 3",
        id: "__alloyId12"
    });
    $.__views.__alloyId11.add($.__views.__alloyId12);
    $.__views.__alloyId13 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId13"
    });
    __alloyId7.push($.__views.__alloyId13);
    $.__views.__alloyId14 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Row 4",
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    $.__views.__alloyId15 = Ti.UI.createTableViewRow({
        height: Ti.UI.SIZE,
        id: "__alloyId15"
    });
    __alloyId7.push($.__views.__alloyId15);
    $.__views.__alloyId16 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "32dp",
            fontWeight: "bold"
        },
        text: "Row 5",
        id: "__alloyId16"
    });
    $.__views.__alloyId15.add($.__views.__alloyId16);
    $.__views.__alloyId1 = Ti.UI.createTableView({
        data: __alloyId7,
        id: "__alloyId1"
    });
    $.__views.index.add($.__views.__alloyId1);
    $.__views.__alloyId3 = Ti.UI.createView({
        backgroundColor: "#a00",
        height: "50dp",
        id: "__alloyId3"
    });
    $.__views.__alloyId1.headerView = $.__views.__alloyId3;
    $.__views.__alloyId5 = Ti.UI.createView({
        backgroundColor: "#0a0",
        height: "50dp",
        id: "__alloyId5"
    });
    $.__views.__alloyId1.footerView = $.__views.__alloyId5;
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.UI.setBackgroundColor("#000");
    var IMG_BASE = "https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/";
    var tin1 = createRowMyMessage("6h30", "Xin chao ban");
    var tin2 = createRowFrMessage("7h00", "Vang chao ban");
    var tin3 = createRowMyMessage("20h30", "The simplest approach is to pass dictionaries of TableViewRow properties, such as backgroundColor, color, ");
    var tableData = [];
    tableData.push(tin1);
    tableData.push(tin2);
    tableData.push(tin3);
    var tableView = Ti.UI.createTableView({
        backgroundColor: "white",
        data: tableData
    });
    tableView.addEventListener("click", function(e) {
        Ti.API.info("info: " + JSON.stringify(e));
        Ti.API.info("source text: " + JSON.stringify(e.source.text));
        Ti.API.info("Datarow: " + JSON.stringify(e.rowData));
    });
    $.index.add(tableView);
    $.index.open();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;