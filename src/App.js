// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import html2canvas from "html2canvas";

function App() {
  const [imagen,setImagen] = useState();
  const [txtSpan1,setSpan1] = useState();
  const [txtSpan2,setSpan2] = useState();

  const onChangeImagen = (evento) =>{
    setImagen(evento.target.value);
  }

  const onChangeSpan1 = (evento) =>{
    setSpan1(evento.target.value);
  }

  const onChangeSpan2 = (evento) =>{
    setSpan2(evento.target.value);
  }

  const onClickExportar = () =>{
    html2canvas(document.querySelector("#meme")).then(canvas => {
      let img = canvas.toDataURL("imagen/png");
      let link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    })
  };

  return (
    <div className="App">
      <select onChange={onChangeImagen}>
        <option value="fire">Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="matrix">Matrix</option>
        <option value="philoaoraptor">Philoaoraptor</option>
        <option value="smart">Smart Guy</option>
      </select>
      <br/>
      <input type="text" placeholder='Ingrese Linea 1' onChange={onChangeSpan1}/><br/>
      <input type="text" placeholder='Ingrese Linea 1' onChange={onChangeSpan2}/>
      <button onClick={onClickExportar}>EXPORTAR</button>

      <div className='meme' id='meme'>
        <span>{txtSpan1}</span><br/>
        <span>{txtSpan2}</span><br/>
        <img src={"/img/" + imagen + ".jpg"}/>
      </div>
    </div>

    
  );
}

export default App;
