import './app.css'
import App from './App.svelte'
import { setserver } from './lib/api'

const IP = process.env.IP;
const PORT = process.env.PORT;
if (!IP) {
  throw new Error('IP must be specified!')
}
if (!PORT) {
  console.warn('Please specify the port in env')
}

setserver(`http://${IP}:${PORT || '9001'}`)
const app = new App({
  target: document.getElementById('app')!,
})

export default app
