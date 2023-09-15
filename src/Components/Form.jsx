import { useReducer } from "react";
import formReducer from "./utils/formReducer";
import "./Form.css";

const initialState = {
  nombre: "",
  email: "",
  nombreError: "",
  emailError: "",
  isSubmitted: false,
};

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_FIELD",
      fieldName: name,
      fieldValue: value,
    });

    // Limpiar errores al editar un campo
    dispatch({
      type: "CLEAR_ERROR",
      errorField: `${name}Error`,
    });
  };

  const validarDatos = () => {
    let valid = true;
    const nombreRegex = /^[A-Za-z]{3,}$/;

    if (state.nombre.trim() === "") {
      dispatch({
        type: "SET_ERROR",
        errorField: "nombreError",
        errorMessage: "El nombre es obligatorio",
      });
      valid = false;
    }
    if (!nombreRegex.test(state.nombre)) {
      dispatch({
        type: "SET_ERROR",
        errorField: "nombreError",
        errorMessage:
          "El nombre debe contener al menos 3 caracteres y solo letras.",
      });

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(state.email)) {
        dispatch({
          type: "SET_ERROR",
          errorField: "emailError",
          errorMessage: "El correo electrónico no es válido",
        });
        valid = false;
      }
    }
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const areDatosValidos = validarDatos();
    if (areDatosValidos) {
      // Mostrar mensaje de éxito
      dispatch({
        type: "SET_SUBMITTED",
      });
      document.querySelector(".success-message").classList.add("active");
    }
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          placeholder="Jhon Doe"
          value={state.nombre}
          onChange={handleChange} /*  */
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="example@mail.com"
          value={state.email}
          onChange={handleChange}
        />

        <button type="submit">Send</button>
      </form>
      <div className="messages">
        <p className={`error-message ${state.nombreError && "active"}`}>
          {state.nombreError}
        </p>
        <p className={`error-message ${state.emailError && "active"}`}>
          {state.emailError}
        </p>

        {state.isSubmitted && (
          <p className="success-message">Formulario enviado correctamente</p>
        )}
      </div>
    </div>
  );
};

export default Form;
