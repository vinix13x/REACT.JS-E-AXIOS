import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import{createBrowserRouter, RouterProvider, Route} from "react-router-dom"
//ESTOU IMPORTANDO  COISA DO PACOTE "react-router-dom"//
      //paginas
      import Home from './Routes/Home.jsx'
      import NewPost from './Routes/NewPost.jsx'

import './index.css'
const router = createBrowserRouter  ([
//OBJETO DE CONFIGURAÇÃO DE ROTEAMENTO 

{
  
  element: <App/>, //SEMPRE SERÁ EXIBIDO NAS PAGINAS COMO MENU, HEADER E FOOTER. E SÓ SERÁ ESTILIZADO O MEIO DO CONTEUDO.
  children: [ //SÃO AS ROTAS
    {
      path: "/", //ROTA HOME Carrega todos os posts
      element: <Home/>, //DEFININDO O ELEMENTO DE CADA PAGINA 
    },


    {
      path: "/new", //CRIA UM POST
      element: <NewPost/>, //DEFININDO O ELEMENTO DE CADA PAGINA      
    },

  ],
},

]) //ARRAY DE OBJETOS


 //colocando router como objeto principal  
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
