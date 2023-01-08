import { contextBridge, ipcRenderer } from "electron";

const API = {
    getProcesses: () => ipcRenderer.invoke('all-processes'),
    killProcess: (pid: number) => ipcRenderer.invoke('kill-process', pid)
}

contextBridge.exposeInMainWorld('api', API);