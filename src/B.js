import { useContext } from "react";
import Clicado from "./Contexto";
import React from "react";
import D from "./D";
import "./estilos.css";
import Registros from "./Registros";
export default function B() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="bb">
<span>Componente B: {botao}</span>
<button onClick={() => setBotao( )}>Clicar</button>
<D />
</div>
);
}