import '../../css/Register.css';

import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import locations from '../../data/provincia-canton-distrito.json';
import NotificationContainerPopUp from '../../components/NotificationContainerPopUp';

const Register = () => {
  // Notif
  const notificationRef = useRef(null);
  
  const [provincia, setProvincia] = useState("");
  const [canton, setCanton] = useState("");
  const [distrito, setDistrito] = useState("");

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: "",
    secondname: "",
    first_lastname: "",
    second_lastname: "",
    cellphone: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    province: "",
    canton: "",
    district: "",
    address: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validaciones principales

    if (formData.password !== formData.confirmPassword) {
      notificationRef.current?.addNotification('Error', 'Las contraseñas no coinciden', 'error');
      return;
    }

    if (!locations.provincias[formData.province]?.cantones[formData.canton]?.distritos[formData.district]) {
      notificationRef.current?.addNotification('Error', 'Debe seleccionar una provincia, cantón y distrito', 'error');
      return;
    }

    if (formData.address === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar una dirección', 'error');
      return;
    }

    // Validaciones secundarias
    if (formData.firstname === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un primer nombre', 'error');
      return;
    }

    if (formData.first_lastname === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un primer apellido', 'error');
      return;
    }

    if (formData.second_lastname === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un segundo apellido', 'error');
      return;
    }

    if (formData.cellphone === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un número de teléfono', 'error');
      return;
    }

    if (formData.email === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un email', 'error');
      return;
    }

    if (formData.username === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un nombre de usuario', 'error');
      return;
    }

    if (formData.password === "") {
      notificationRef.current?.addNotification('Error', 'Debe ingresar una contraseña', 'error');
      return;
    }

    if (formData.confirmPassword === "") {
      notificationRef.current?.addNotification('Error', 'Debe repetir la contraseña', 'error');
      return;
    }

    // Validaciones de formato
    if (!formData.email.includes("@")) {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un email válido', 'error');
      return;
    }

    if (formData.cellphone.length !== 8) {
      notificationRef.current?.addNotification('Error', 'Debe ingresar un número de teléfono válido', 'error');
      return;
    }

    if (formData.password.length < 8) {
      notificationRef.current?.addNotification('Error', 'La contraseña debe tener al menos 8 caracteres', 'error');
      return;
    }

    
    
    try {
  
      const response = await axios.post("http://localhost:8000/api/user/register/", formData);
      
      if (response.status === 201) {
        notificationRef.current?.addNotification('Éxito', 'Usuario registrado correctamente', 'success');
      
        setTimeout(() => {
          navigate("/login");
        }, 6000); 
      }
    } catch (error) {
      console.error("Error al registrar el usuario:", error);
    }
  };
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };
  
  const handleProvinciaChange = (e) => {
    const newProvincia = e.target.value;
    setProvincia(newProvincia);
    setFormData(prevFormData => ({ ...prevFormData, ['province']: newProvincia }));
    if (!locations.provincias[newProvincia]?.cantones[canton]) {
      setCanton("");
    }
    setDistrito("");
  };
  
  const handleCantonChange = (e) => {
    const newCanton = e.target.value;
    setCanton(newCanton);
    setFormData(prevFormData => ({ ...prevFormData, ['canton']: newCanton }));
    if (!locations.provincias[provincia]?.cantones[newCanton]?.distritos[distrito]) {
      setDistrito("");
    }
  };
  
  const handleDistritoChange = (e) => {
    const newDistrito = e.target.value;
    setDistrito(newDistrito);
    setFormData(prevFormData => ({ ...prevFormData, ['district']: newDistrito }));
  };

  return (
    <div className="auth-container">
      <NotificationContainerPopUp ref={notificationRef} />
      <div className="auth-image"></div> 
      <div className="auth-form-container">
        <h2>Registro</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="firstname" placeholder="Primer nombre" required onChange={handleInputChange}/>
          <input type="text" name="secondname" placeholder="Segundo nombre (opcional)" onChange={handleInputChange}/>
          <input type="text" name="first_lastname" placeholder="Primer apellido" required onChange={handleInputChange}/>
          <input type="text" name="second_lastname" placeholder="Segundo apellido" required onChange={handleInputChange}/>
          <input type="text" name="cellphone" placeholder="Número de teléfono" required onChange={handleInputChange}/>
          <input type="email" name="email" placeholder="Email" required onChange={handleInputChange}/>
          <input type="text" name="username" placeholder="Nombre de usuario" required onChange={handleInputChange}/>
          <input type="password" name="password" placeholder="Contraseña" required onChange={handleInputChange}/>
          <input type="password" name="confirmPassword" placeholder="Repetir contraseña" required onChange={handleInputChange}/>

          <select value={provincia} name="province" onChange={handleProvinciaChange}>
            <option value="" disabled>Seleccione una provincia</option>
            {Object.entries(locations.provincias).map(([id, { nombre }]) => (
              <option key={id} value={id}>{nombre}</option>
            ))}
          </select>

          <select value={canton} name="canton" onChange={handleCantonChange}>
            <option value="" disabled>Seleccione un cantón</option>
            {provincia && Object.entries(locations.provincias[provincia].cantones).map(([id, { nombre }]) => (
              <option key={id} value={id}>{nombre}</option>
            ))}
          </select>

          <select value={distrito} name="district" onChange={handleDistritoChange}>
            <option value="" disabled>Seleccione un distrito</option>
            {canton && Object.entries(locations.provincias[provincia].cantones[canton].distritos).map(([id, nombre]) => (
              <option key={id} value={id}>{nombre}</option>
            ))}
          </select>

          <input 
            type="text" 
            name="address" 
            placeholder="Señas adicionales" 
            required 
            onChange={handleInputChange}
          />
          
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes una cuenta? <Link to="/login">Inicia sesión aquí</Link></p>
      </div>
    </div>
  );
};

export default Register;
