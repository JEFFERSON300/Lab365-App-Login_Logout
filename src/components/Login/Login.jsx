import "./Login.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const emailInputElement = useRef();
  const passwordInputElement = useRef();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      email: emailInputElement.current?.value,
      password: passwordInputElement.current?.value,
    };

    const getDataLocal = JSON.parse(localStorage.getItem("user"));

    if (JSON.stringify(getDataLocal) === JSON.stringify(data)) {
      navigate("/Logout");
    } else {
      localStorage.setItem("user", JSON.stringify(data));
      navigate("/");
    }
  };

  return (
    <div className="login">
      <div className="logincontainer">
        <h1>Tela de Login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            E-mail:
            <input
              ref={emailInputElement}
              type="email"
              id="credencial"
              placeholder="Digite o seu e-mail"
            />
          </label>

          <label htmlFor="">
            Senha:
            <input
              ref={passwordInputElement}
              type="password"
              id="senha"
              placeholder="Digite sua senha"
            />
          </label>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
