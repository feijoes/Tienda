import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



export function RegisterApp() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({"Entidad":"Persona"});

    const handleChange = (event) => {
        
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }
    const handleSubmit = () => {
    
        let csrftoken = document.cookie;
        csrftoken = csrftoken.split('=')[1].split(';')[0];
        fetch('/api/user/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
    
            },
            body: JSON.stringify(inputs)
        })
    .then(res => {if (res.ok == true) { 
        navigate("/");
        
    } else {console.log(res)};
    })}
    

    return (<div>
                  <div className="formularioRe" id="sesion">
                      <form className="form1" >
                          <label >Nombre:</label><br />
                              <input type="text" name="username" value={inputs.username || ""} onChange={handleChange}/><br />
                          <label >DNI:</label><br />
                              <input type="text" name="DNI" value={inputs.DNI || ""} onChange={handleChange}/><br />
                          <label className="col-sm-2 control-label" >Entidad</label><br />
                              <select className="form-control" id="slcNacionalidad" name="Entidad" value={inputs.Entidad} onChange={handleChange}>
                                  <option value="Persona">Persona</option>
                                   <option value="Empresa">Empresa</option>
                            </select><br />
                          <label >Telefono:</label><br />
                              <input type="text" name="Telefono" value={inputs.Telefono || ""} onChange={handleChange}/><br />
                          <label >Direccion:</label><br />
                              <textarea placeholder="Escribe tu direccion" name='Direccion' value={inputs.Direccion || ""} onChange={handleChange}></textarea><br />
                          <label >Contraseña:</label><br />
                             <input type="password" name="password" value={inputs.password || ""} onChange={handleChange}/><br />
                             <button type='button' onClick={handleSubmit}>Entrar</button><br />
                          <a href="" >Ya tengo cuenta Iniciar Sesion</a>
                      </form>
                      <script src="{% static 'js/registro.js' %}"></script>
                  </div>
              </div>
        );
}