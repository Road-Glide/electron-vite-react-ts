import { ipcRenderer, contextBridge } from 'electron'
import { IPC_CHANNELS } from './ipc'

// --------- Expose some API to the Renderer process ---------
contextBridge.exposeInMainWorld('electronAPI', {
	openExternal: (url: string) => ipcRenderer.invoke(IPC_CHANNELS.OPEN_EXTERNAL, url),
})
