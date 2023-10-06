import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { Clientes } from "./pages/Clientes";
import { Funcionarios } from "./pages/Funcionarios";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="cliente" element={<Clientes />} />
            <Route path="funcionario" element={<Funcionarios />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
