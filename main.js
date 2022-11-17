const { BrowserWindow, app } = require('electron')
const server = require('./bin/www');

let mainWindow;

function main() {
    //   mainWindow = new BrowserWindow()
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        }
    })

    mainWindow.loadURL('http://localhost:3000')
    mainWindow.on('close', () => {
        mainWindow = null
    })

    mainWindow.setMenu(null);
}

app.on('ready', main);

app.on('resize', function(e,x,y){
    mainWindow.setSize(x, y);
  });

  app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
      app.quit()
    }
  })
  
  app.on('activate', function () {
    if (mainWindow === null) {
      createWindow()
    }
  })
