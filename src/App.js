import { useState } from "react";
import A from "./A";
import B from "./B";
import Clicado from "./Contexto";
import "./estilos.css";
import React from "react";
import Registro from "./Registro";
export default function App() {
const [botao, setBotao] = useState( );
return (
<Clicado.Provider value={{ botao, setBotao }}>
<div className="app">
<span>Componente App: {botao}</span>
<button onClick={() => setBotao( )}>Clicar</button>
<A />
<B />

</div>
</Clicado.Provider>
);
}