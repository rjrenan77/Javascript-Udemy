import React from "react";
import ReactDOM from "react-dom";

//componentes personalizados sempre tem letra maiuscula
//import Primeiro from "./componentes/Primeiro"
//import BomDia from "./componentes/BomDia";

/**Multiplos */
//import BoaTarde, BoaNoite from "./componentes/Multiplos";

//import Multiplos from "./componentes/Multiplos";
//import Saudacao from "./componentes/Saudacao";

import Pai from "./componentes/Pai";
import Filho from "./componentes/FIlho";


ReactDOM.render(
    <div>
        <Pai nome ="Renan" sobrenome= "Soares" />
        <Filho nome = "Sousa" sobrenome="Soares" />
    </div>
    ,document.getElementById("root")
)






// ReactDOM.render(
//     <div>
//         <Saudacao tipo="Bom dia" nome ="Renan" />
//     </div>
//     ,document.getElementById("root")
// )



// ReactDOM.render(
//     <div>
//         <Multiplos.BoaTarde nome = "Ana" />
//         <Multiplos.BoaNoite nome = "Clara" />
//     </div>
//     , document.getElementById("root")
// )

//ReactDOM.render(<Primeiro />, document.getElementById("root"));
//ReactDOM.render(<BomDia nome="Renan" idade={10} />, document.getElementById("root"));