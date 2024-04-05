import { Link } from "react-router-dom";

function Login() {
  return (
    <div className='container'>
      <div className='circle'>
        <div className="form">
          <h1 className='form-title'>Вход</h1>
          <div className="form-field">
            <input type="text" placeholder='Никнейм' />
            <input type="text" placeholder='Пароль' />
          </div>
          <div className="form-buttons">
            <Link to="/messenger" className='button-log'>Войти</Link>
            <div className="divider">или</div>
            <Link to="/registration" className='button-reg'>Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;