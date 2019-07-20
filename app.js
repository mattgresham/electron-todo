const electron = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
require('./api');

const { app } = electron;
const { BrowserWindow } = electron;
let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({ width: 1000, height: 700 });
  mainWindow.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, 'ui/build/index.html')}`
  );
  if (isDev) mainWindow.webContents.openDevTools();
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', () => {
  createWindow();
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
