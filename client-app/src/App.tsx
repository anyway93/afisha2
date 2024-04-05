import { Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login";
import { Messenger } from './pages/messenger'

function RegistrationForm() {
  return (
    <div className='container'>
      <div className='circle'>
        <div className="form">
          <h1 className='form-title'>Регистрация</h1>
          <div className="form-field">
            <input type="text" placeholder='Никнейм' />
            <input type="text" placeholder='Почта' />
            <input type="text" placeholder='Пароль' />
            <input type="text" placeholder='Подтверждение пароля' />
          </div>
          <div className="form-buttons">
            <Link to="/messenger" className='button-reg'>Зарегистрироваться</Link>
            <div className="divider">или</div>
            <Link to="/login" className='button-log'>Войти</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/registration" element={<RegistrationForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/messenger" element={<Messenger />} />
      </Routes>
    </>
  );
}

export default App;














































// import { Routes, Route, Link } from "react-router-dom";

// import { Login } from "./pages/login";
// import { Messenger } from './pages/messenger'

// function App() {
//   return (
//     <><div className='container'>
//       <div className='circle'>
//         <div className="form">
//           <h1 className='form-title'>Регистрация</h1>
//           <div className="form-field">
//             <input type="text" placeholder='Никнейм' />
//             <input type="text" placeholder='Почта' />
//             <input type="text" placeholder='Пароль' />
//             <input type="text" placeholder='Подтверждение пароля' />
//           </div>
//           <div className="form-buttons">
//             <Link to="/messenger" className='button-reg'>Зарегестрироваться</Link>
//             <div className="divider">или</div>
//             <Link to="/login" className='button-log'>Войти</Link>
//           </div>
//         </div>
//       </div>
//     </div>
//     <Routes>
//       <Route path="/registration" element={<App />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/messenger" element={<Messenger />} />
//     </Routes></>
//   )
  
// }

// export default App;


 