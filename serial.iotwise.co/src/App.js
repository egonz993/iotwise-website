import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SerialPortScreen } from './components/SerialPort/SerialPortScreen';
import { LoginPage } from './pages/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  return (
    <BrowserRouter>
    <Routes>
      {/* Index */}
      <Route path="/" element={<SerialPortScreen />} />

      {/* Login  */}
      <Route path='login' element={<LoginPage />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;