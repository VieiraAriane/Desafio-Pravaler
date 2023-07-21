import Comparador from "./Pages/Comparador/Comparador"
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import  Cadastro  from "./Pages/Cadastro/Cadastro"
import PaginaInicial from "./Pages/Pagina inicial/pagina-inicial"

const Rotas = createBrowserRouter([
  {
    path: "/",
    element: <PaginaInicial/>,
  },
  {
    path: "/comparador",
    element: <Comparador/>,
  },
  {
    path: "/cadastro",
    element: <Cadastro/>,
  },
]);

function App() {
  return (
  <RouterProvider router={Rotas} />
  );
}
export default App;