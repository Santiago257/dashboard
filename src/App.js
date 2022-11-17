import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/listaUsuarios/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import NewProduct from "./pages/newProducts/NewProduct";
import ListProductos from "./pages/listaProductos/List";
import ListPedidos from './pages/listaPedidos/List'
import NewPedido from './pages/newPedido/New'
import Actividades from "./pages/actividades/Actividades";
import NewActividad from "./pages/newActividad/New";
import ListCompras from "./pages/listaCompras/List";
import NewCompra from "./pages/newCompra/New";
import ListVentas from "./pages/listaVentas/List";
import NewVenta from "./pages/newVenta/New";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Esta es la ruta principal*/}
          <Route path="/">
            {/*Aqui colocamos las diferentes paginas que tendremos, el path indica la direccion despues del  /*/}
            {/*Ruta por defecto, por eso se llama index*/}
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            {/*Ruta de users*/}
            <Route path="users">
              {/*Ruta principal de users*/}
              <Route index element={<List />} />
              {/*Ruta que tendra el escribir un numero definido de usuario, ejemplo: users/18021742 */}
              <Route path=":userId" element={<Single />} />
              {/*Ruta nueva*/}
              <Route path="new" element={<New />} />
            </Route>
            <Route path="products">
              <Route index element={<ListProductos/>} />
              <Route path=":productId" element={<Single/>} />
              <Route path="new" element={<NewProduct/>}/>
            </Route>
            <Route path="pedidos">
                <Route index element={<ListPedidos/>} />
                <Route path="new" element={<NewPedido/>}/>
            </Route>
            <Route path="actividades">
                <Route index element={<Actividades/>} />
                <Route path="new" element={<NewActividad/>}/>
            </Route>
            <Route path="compras">
                <Route index element={<ListCompras/>}  />
                <Route path="new" element={<NewCompra/>}/>
            </Route>
            <Route path="ventas">
                <Route index element={<ListVentas/>} />
                <Route path="new" element={<NewVenta/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
