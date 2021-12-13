import { useContext } from "react";
import Clicado from "./Contexto";
import "./estilos.css";
import React from "react";
import Registros from "./Registros";
export default function D() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="dd">
<span>Componente D: {botao}</span>
<button onClick={() => setBotao( )}>Clicar</button>
</div>
);
}