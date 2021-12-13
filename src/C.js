import { useContext } from "react";
import Clicado from "./Contexto";
import "./estilos.css";
import React from "react";
import Registros from "./Registros";
export default function C() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="cc">
<span>Componente C: {botao}</span>
<button onClick={() => setBotao( )}>Clicar</button>
</div>
);
}