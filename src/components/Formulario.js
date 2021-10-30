import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import "./Formulario.css";

const Formulario = () => {
  const [SendForm, setSendForm] = useState(false);

  return (
    <Formik
      // VALORES
      initialValues={{
        email: "",
        password: "",
      }}
      //VALIDACION
      validate={(valores) => {
        let errores = {};

        //validacion para el email
        if (!valores.email) {
          errores.email = "Por favor Ingrese un email";
        } else if (
          !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
            valores.email
          )
        ) {
          errores.email =
            "El correo solo puede contener letras, puntos, guiones o guion bajo.";
        }
        //validacion para la password /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
        if (!valores.password) {
          errores.password = "Por favor Ingrese una contraseña";
        }

        return errores; //retorna los errores para mostrar posteriormente mensajes
      }}
      //
      onSubmit={(valores, { resetForm }) => {
        resetForm();
        console.log("formulario enviado");
        console.log(valores);
        setSendForm(true);
        setTimeout(() => setSendForm(false), 3500);
      }}
    >
      {({ errors }) => (
        <div className="formprincipal">
          <h1 className="formtitle">Bienvenido a Superhero!</h1>
          <Form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <Field
                name="email"
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <ErrorMessage
                name="email"
                component={() => <div className="error">{errors.email}</div>}
              />
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <ErrorMessage
                  name="password"
                  component={() => (
                    <div className="error">{errors.password}</div>
                  )}
                />
              </div>
            </div>
            <button type="submit" className="btn btn-dark buttonsubmit">
              Login
            </button>
          </Form>
          {SendForm && (
            <p className="exito">El formulario se envio con exito!</p>
          )}
        </div>
      )}
    </Formik>
  );
};

export default Formulario;
