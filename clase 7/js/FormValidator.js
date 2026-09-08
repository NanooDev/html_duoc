export const getBySelector = (selector) => document.querySelector(selector);

class Mensaje {
  constructor(formSelector) {
    this.mensaje = getBySelector(formSelector);
  }
  agregarTexto(texto) {
    this.mensaje.innerHTML = texto;
  }
}

export class FormValidator {
  constructor(formSelector) {
    this.form = getBySelector(formSelector);
    this.mensaje = new Mensaje("#mensaje");
  }

  init() {
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log("Validando formulario...");
      this.getJSONToForm();
    });
  }

  getJSONToForm() {
    const formData = new FormData(this.form);
    formData.append("password", "1234");
    
    // Default
    const json = {
      newsletter: false,
    };

    formData.forEach((value, key) => {
      json[key] = this.transformValue(key, value);
    });

    // Validamos y recibimos el estado y los errores
    const validacion = this.validate(json);
    
    if (validacion.isValid) {
      // Si todo es válido, mostramos mensaje de éxito
      this.mensaje.mensaje.classList.remove("has-text-danger");
      this.mensaje.mensaje.classList.add("has-text-success"); // Letra verde de Bulma
      this.mensaje.agregarTexto("¡Formulario validado y enviado correctamente!");
      console.log("Enviando datos...", json);
    } else {
      // Si hay errores, los mostramos en rojo
      this.mensaje.mensaje.classList.remove("has-text-success");
      this.mensaje.mensaje.classList.add("has-text-danger");
      
      // Unimos todos los errores encontrados con un salto de línea
      this.mensaje.agregarTexto(validacion.errores.join("<br>"));
      console.log("Errores detectados:", validacion.errores);
    }
    return json;
  }

  transformValue(key, value) {
    switch (key) {
      case "newsletter":
        return Boolean(value);
      case "age":
        return Number(value || 0);
      default:
        return value;
    }
  }

  validate(json) {
    let isValid = true;
    let errores = []; // Arreglo para guardar múltiples errores

    // 1. Validación de edad
    if (json.age < 18) {
      isValid = false;
      errores.push("❌ Debe ser mayor a 18 años.");
    }

    // 2. Validación de nombre de usuario (ejemplo: mínimo 4 letras)
    if (!json.username || json.username.trim().length < 4) {
      isValid = false;
      errores.push("❌ El nombre de usuario debe tener al menos 4 caracteres.");
    }

    // 3. Validación de correo (Solo duocuc.cl, gmail.com, outlook.com)
    if (json.email) {
      const dominiosPermitidos = ['duocuc.cl', 'gmail.com', 'outlook.com'];
      // split('@') separa mariano@gmail.com en ['mariano', 'gmail.com']
      const partesCorreo = json.email.split('@'); 
      const dominio = partesCorreo[1]; 

      if (!dominiosPermitidos.includes(dominio)) {
        isValid = false;
        errores.push("❌ El correo debe terminar en @duocuc.cl, @gmail.com o @outlook.com.");
      }
    }

    // Devolvemos un objeto con ambas cosas: si pasó la prueba y los mensajes
    return { isValid, errores };
  }
}