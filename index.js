import { app, BrowserWindow, globalShortcut } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    autoHideMenuBar: true,
  });

  if (process.env.NODE_ENV === "development") {
    globalShortcut.register("f5", () => {
      win.reload();
    });

    win.webContents.openDevTools();
  }

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
