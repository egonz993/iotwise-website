
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthComponent } from './components/AuthComponent/AuthComponent';
import { SerialPortScreen } from './components/SerialPort/SerialPortScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Index */}
        <Route path="/" element={<AuthComponent />}>

          {/* Index */}
          <Route path="/"  element={<Navigate redirect to="app" />} />

          {/* Console  */}
          <Route path='app' element={<HomePage />} />

          {/* SerialPort  */}
          <Route path='serialport' element={<SerialPortScreen />} />

        </Route>

        {/* Login  */}
        <Route path='login' element={<LoginPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;