import 'babel-polyfill'
import bootstrap from './bootstrap'

bootstrap().then(() => { console.log('called bootstrap') })