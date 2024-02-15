import { useState } from 'react'
import Contador from './paginas/contador/Contador'
import Home from './paginas/home/Home'
import Tarefa from './paginas/tarefa/Tarefa'

function App() {
  return (
    <>
      <Home titulo="Esse é um componente com props"
      texto="agora ja estamos trabalhando com props - componente chamado com sucesso" />

      <Home titulo="Agora estamos testando"
      texto="esse é um texto para compovar a teroria do props"/>

      <Contador/>
      
      <Tarefa/>
    </>
  )
}

export default App
