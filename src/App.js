import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import SendMsgService from "./services/send_msg/send_msg.service";

function App() {
  const [msg, setMsg] = useState('')
  const [values, setValues] = useState({
    to: "",
    msg: "",
  });

  const handlerSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    const response = await SendMsgService.postSendMsg(values);
    if(response?.is_successful){
      setMsg('Mensaje enviado exitosamente!')
    }else{
      setMsg('No fue posible enviar el mensaje intente mas tarde!')
    }
    setValues({
      to: "",
      msg: "",
    });
  };

  const handlerChange = (e) => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    })
  };

  return (
    <div className="App">
      <div className="App-container">
        <header className="App-header">Twilio SMS Client</header>
        <form onSubmit={(e) => handlerSubmit(e)} className={"form"}>
          <div className={"form-item"}>
            <label>El numero de telefono:</label>
            <input type={"text"} name="to" className="form-control" value={values.to} onChange={(e)=>handlerChange(e)} placeholder="+50375528789"/>
          </div>
          <div className={"form-item"}>
            <label>Tu mensaje:</label>
            <textarea name="msg" className="textarea form-control" value={values.msg} onChange={(e)=>handlerChange(e)} placeholder="Escribe tu msg, maximo de 4000 caracteres!"/>
          </div>
          <div className={"form-item"}>
            <span>{msg}</span>
          </div>
          <div className={"form-item"}>
            <input type={"submit"} value={"Enviar mensaje"} className='btn'/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
