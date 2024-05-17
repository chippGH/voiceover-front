import './app.css'
import App from './App.svelte'
import { setserver } from './lib/api'

setserver('http://37.72.71.19:8080')
const app = new App({
  target: document.getElementById('app')!,
})

export default app
