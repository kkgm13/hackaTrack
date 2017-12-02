const {app, BrowserWindow} = require('electron');
const path = require('path');
const url = require('url');

let window = null;
app.once('ready', () =>{
	window = new BrowserWindow({
		width: 1024,
		height: 720
	})

	window.loadURL(url.format({
		pathname: path.join(__dirname, 'hackaTrackWeb/index.html'),
		protocol: 'file',
		slashes: true
	}))
});