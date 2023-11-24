
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import "bootstrap/dist/css/bootstrap.min.css"
import { AuthComponent } from './components/AuthComponent/AuthComponent';
import { TerminalScreen } from './components/Terminal/TerminalScreen';

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

          {/* Terminal  */}
          <Route path='terminal' element={<TerminalScreen />} />

        </Route>

        {/* Login  */}
        <Route path='login' element={<LoginPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;