import { useContext } from "react";
import Clicado from "./Contexto";
import C from "./C";
import "./estilos.css";
import React from "react";
import registros from "./Registros";
export default function A() {
const { botao, setBotao } = useContext(Clicado);
return (
<div className="aa">
<span>Componente A: {botao}</span>
<button onClick={() => setBotao( )}>Clicar</button>
<C />
</div>
);
}