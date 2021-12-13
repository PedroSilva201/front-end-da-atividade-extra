import React from "react";
import App from "./App";
import A from "./A";
import B from "./B";
import C from "./C";
import D from "./D";

 function resultado() {

	// Obtém a data/hora atual
    var data = new Date();

    // Guarda cada parte em uma variável
    var dia = data.getDate(); // 1-31
    var dia_sem = data.getDay(); // 0-6 (zero=domingo)
    var mes = data.getMonth(); // 0-11 (zero=janeiro)
    var ano4 = data.getFullYear(); // 4 dígitos
    var hora = data.getHours(); // 0-23
    var min = data.getMinutes(); // 0-59
    var seg = data.getSeconds(); // 0-59

    // Formata a data e a hora (note o mês + 1)
    var data_atual = dia + '/' + (mes+1) + '/' + ano4;
    var hora_atual = hora + ':' + min + ':' + seg;

    // Mostra resultado no id = "demo"
    var x = document.getElementById("demo");
    x.innerHTML = 'Hoje é ' + data_atual + ' às ' + hora_atual;
    x.style.color = "#0000FF";
}
