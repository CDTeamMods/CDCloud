/**
 * TODO:
 * - Fazer sidebar
 * - Melhorar documentação
 */
import { ipcMain, app, BrowserWindow, nativeTheme, Menu } from "electron/main"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/**
 * @description
 * Criador da primeira tela do programa
 * @returns {void}
 * @example
 * createWindowDefualt()
 */
function createWindowDefualt() {
  nativeTheme.themeSource = "system"
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    titleBarStyle: "hidden",
    webPreferences: {
      preload: path.join(__dirname, "preload.mjs"),
    },
  })

  win.loadFile("src/views/index.html")
}

// Lançar a tela principal após estiver tudo pronto
app.whenReady().then(() => {
  createWindowDefualt()

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindowDefualt()
    }
  })
})
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})
