import React from 'react'
import ReactDOM from 'react-dom/client'
import {PrimerComponente} from './PrimerComponente'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente titulo={'Primer Componente'} subtitulo={'Subtitulo del primer componente'}/>
  </React.StrictMode>,
)
