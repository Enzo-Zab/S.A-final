import React from 'react';
import Img2 from '../img/w.jpeg';
import '../App.css'; // img src={Logo} alt="Logo" style={{ width: '550px', height: 'auto' }}

function Sobre() {
    return (
      <>
      <div className="aling">
        <h1>Nós estamos ansiosos para te ter aqui!</h1>
        <img src={Img2} alt="Logo" style={{ width: '700px', height: 'auto' }}/>
        
        <h1>Sobre</h1>
        <p>
          A pousada Quinta do Ypuã oferece ao seus clientes um recanto de aconchego e lazer, em ambiente rústico e agradável. Ideal para quem gosta de fugir da rotina e procura um local de paz para descansar e curtir a natureza.
          "O Ypuã tem tudo a ver com a natureza, dá para sentir a energia do lugar. Eu me preocupo se você vai comer bem, dormir bem e se vai se sentir em casa. Vou te mostrar onde encontrar os melhores frutos do mar, onde curtir a melhor praia e as melhores ondas. Mas se você não quiser fazer nada eu também conheço o melhor lugar."
          <br /><br />— Heitor, Anfitrião da pousada
        </p>
      </div>
      </>
    );
}

export default Sobre;