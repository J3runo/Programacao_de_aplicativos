import { app, BrowserWindow, ipcMain } from 'electron';
import Veiculo from './enty/Veiculo';
import VeiculoRepository from './repository/veiculoRepository';
import UsuarioRepository from './repository/UsuarioRepository';
import Usuario from './enty/usuarios';
import { compare, hash } from 'bcrypt';


declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;


if (require('electron-squirrel-startup')) {
  app.quit();
}

var mainWindow:BrowserWindow;
const createWindow = (): void => {

   mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
    webPreferences: {
      preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
    },
  });

  mainWindow.loadURL('http://localhost:3000/login');

  mainWindow.webContents.openDevTools();
};


app.on('ready', createWindow);


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {

  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
//---------------------------------------------------------------------------------------//
ipcMain.handle('create',async (event:any, veiculo:any) => {
  console.log(veiculo)
  const {id,modelo,cor,ano,preco,imagem} = veiculo
  const novoVeiculo = new Veiculo(modelo,cor,ano,preco,imagem,id)
  new VeiculoRepository().save(novoVeiculo)
})

ipcMain.handle('findAll', async ()=>{
 return await new VeiculoRepository().findAll()
})

ipcMain.handle('findById', async (_:any, id: any)=>{
  return await new VeiculoRepository().findById(id)
})

ipcMain.handle('deletarVeiculo', async (_:any, id:string)=>{
  await new VeiculoRepository().deletarVeiculo(id)

})

ipcMain.handle('createUsuario', async (_: any, usuario: any) => {
  const { name, data_nascimento, email, senha} = usuario;
  const passwordHash = await hash(senha, 10)
  const newUsuario = new Usuario(name,data_nascimento, email, passwordHash );
  await new UsuarioRepository().save(newUsuario);
})

ipcMain.handle('findByEmail', async (_: any, email: string) => {
  return await new UsuarioRepository().findByEmail(email);
})

ipcMain.handle('hash_password',async (_:any,credentials:any) =>{
  const {password, password_Hash } = credentials;
  return await compare (password,password_Hash);
})

ipcMain.on('change-screen', (_:any, id:string)=>{
mainWindow.loadURL(`http://localhost:3000/detalhes?id=${id}`)
  
})

ipcMain.on('change-screen-home', ()=>{
  mainWindow.loadURL('http://localhost:3000/main_window')
})

