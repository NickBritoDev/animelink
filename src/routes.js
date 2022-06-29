import {BrowserRouter, Routes, Route} from 'react-router-dom'

//paginas que vão ser roteadas
import Log from './Pages/Log'
import Home from './Pages/Home'
import Links from './Pages/Links'

//configuração das rotas
function RoutesApp(){
    return(
        //rotas do navegador
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Log/>} />
            <Route path='/Home' element={<Home/>} />
            <Route path='/Links' element={<Links/>} />
        </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp