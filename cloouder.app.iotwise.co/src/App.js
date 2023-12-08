
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AuthComponent } from './components/AuthComponent/AuthComponent';
import { SplashScreen } from './pages/SplashScreen';
import "bootstrap/dist/css/bootstrap.min.css"

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
          <Route path='loading' element={<SplashScreen />} />

        </Route>

        {/* Login  */}
        <Route path='login' element={<LoginPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;