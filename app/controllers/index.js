Ti.UI.setBackgroundColor('#000');
function newTimeMessage(messageText) {
	var lbTimeMessage = Ti.UI.createLabel({
		text : messageText,
		top : 1,
		right: 60
	});
	return lbTimeMessage;
}
function newMyMessage(messageText) {
	var lbTimeMessage = Ti.UI.createLabel({
		text : messageText,
		top : 10,
		right: "20%",
		width: "70%",
		left: "10%"
	});
	return lbTimeMessage;
}
function newFrMessage(messageText) {
	var lbTimeMessage = Ti.UI.createLabel({
		text : messageText,
		top : 10,
		left: "20%",
		width: "70%",
		right: "10%"
	});
	return lbTimeMessage;
}


var IMG_BASE = 'https://github.com/appcelerator/titanium_mobile/raw/master/demos/KitchenSink/Resources/images/';

function newMyAvatar(){
	var imageAvatar = Ti.UI.createImageView({
		image : IMG_BASE + 'custom_tableview/user.png',
		right : 10,
		top : 5,
		width : 50,
		height : 50
	});
	return imageAvatar;
}
function newAvatar(){
	var imageAvatar = Ti.UI.createImageView({
		image : IMG_BASE + 'custom_tableview/user.png',
		left : 10,
		top : 5,
		width : 50,
		height : 50
	});
	return imageAvatar;
}

function createRowMyMessage(time, messageText) {
	var rowMyMessage = Ti.UI.createTableViewRow({
		className : 'rowMyMessage',
		selectedBackgroundColor : 'white'
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
		className : 'rowFrMessage',
		selectedBackgroundColor : 'white'
	});
	var imageAvatar = newAvatar();
	var lbTimeMessage = newTimeMessage(time);
	rowMyMessage.add(newFrMessage(messageText));
	rowMyMessage.add(imageAvatar);
	rowMyMessage.add(lbTimeMessage);
	return rowMyMessage;
}

var tin1 = createRowMyMessage("6h30", "Xin chao ban");
var tin2 = createRowFrMessage("7h00", "Vang chao ban");
var tin3 = createRowMyMessage("20h30", "The simplest approach is to pass dictionaries of TableViewRow properties, such as backgroundColor, color, ");
var tableData = [];
tableData.push(tin1);
tableData.push(tin2);
tableData.push(tin3);
var tableView = Ti.UI.createTableView({
	backgroundColor : 'white',
	data : tableData
});
tableView.addEventListener("click", function(e){
	Ti.API.info("info: "+JSON.stringify(e));
	Ti.API.info("source text: "+JSON.stringify(e.source.text));
	Ti.API.info("Datarow: "+JSON.stringify(e.rowData));
});
$.index.add(tableView);
//win.open();
$.index.open(); 