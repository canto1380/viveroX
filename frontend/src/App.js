import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import clienteAxios from './config/axios'

// Componentes
import Navbar from './componentes/Navbar'
import Inicio from './componentes/Inicio'
import NuevoProducto from './componentes/NuevoProducto'
import UltimasVisitas from './componentes/UltimasVisitas'
import Login from './componentes/IniciarSesion'
import Registrarse from './componentes/Registrarse'
import Productos from './componentes/Productos'

function App() {

  /** Fecha actual **/
  const date = new Date();
  let day = date.getDate()
  let month = date.getMonth() + 1
  let year = date.getFullYear()
  
  let fechaActual="";
  if (month < 10) {
    fechaActual =`${year}-0${month}-${day}`
  } else {
    fechaActual =`${year}-${month}-${day}`
  }

  const [categorias, setCategorias] = useState([])
  const [consultarCat, setConsultarCat]= useState(true)

  const [plantas, setPlantas] = useState([])
  const [consultarPlantas, setConsultarPlantas]= useState(true)

  const [plantasXCat, setPlantasXCat] = useState([])

  const [usuarios, setUsuarios] = useState([])
  const [consultarUsuarios, setConsultarUsuarios]= useState(true)


  /** Consultas **/
  useEffect(() =>{
    if(consultarCat){
      const consultarAPI =() =>{
        clienteAxios.get('categorias/listCategorias')
        .then(req =>{
          setCategorias(req.data);
          setConsultarCat(false)
        })
        .catch(err =>{
          console.log(err)
        })
      }
      consultarAPI();
      }
  }, [consultarCat])

  
  /** Consulta plantas **/
  useEffect(() =>{
    if(consultarPlantas){
      const consultarAPI =() =>{
        clienteAxios.get('plantas/listPlantas')
        .then(req =>{
          setPlantas(req.data);
          setConsultarPlantas(false)
        })
        .catch(err =>{
          console.log(err)
        })
      }
      consultarAPI();
      }
  }, [consultarPlantas])

  useEffect(() =>{
    if(consultarUsuarios){
      const consultarAPI =() =>{
        clienteAxios.get('usuarios/listUser')
        .then(req =>{
          setUsuarios(req.data);
          setConsultarUsuarios(false)
        })
        .catch(err =>{
          console.log(err)
        })
      }
      consultarAPI();
      }
  }, [consultarUsuarios])
  
  
  return (
    <Router>
      <Switch>
        <Route exact path ="/"
          component ={() => <Inicio
                              plantas={plantas}
                              
                                />}
        />

        <Route exact path ="/registrarse"
          component ={() => <Registrarse
                              
                                />}
        />
        
        <Route exact path ="/login"
          component ={() => <Login
                              
                                />}
        />

        <Route exact path ="/productos"
          component ={() => <Productos
                              categorias={categorias}
                              setConsultarCat={setConsultarCat}
                              plantas={plantas}
                              plantasXCat ={plantasXCat}
                              setPlantasXCat={setPlantasXCat}

                                />}
        />

        <Route exact path ="/prueba"
          component ={() => <NuevoProducto
                              categorias={categorias}
                              setConsultarCat={setConsultarCat}
                                />}
        />

        

      </Switch>
    </Router>
  );
}

export default App;
