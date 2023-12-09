
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { AuthComponent } from './components/AuthComponent/AuthComponent';
import { SplashScreen } from './pages/SplashScreen';
import { HomeView } from './views/Home/HomeView';
import { DevicesView } from './views/Devices/DevicesView';
import { GatewaysView } from './views/Gateways/GatewaysView';
import { FunctionsView } from './views/FunctionsView';
import { ApplicationsView } from './views/ApplicationsView';
import { GroupsView } from './views/GroupsView';
import { ProfilesView } from './views/ProfilesView';
import { EventsView } from './views/EventsView';
import { DocumentationView } from './views/DocumentationView';
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
          <Route path='app' element={<HomePage />}>

            <Route index element={<HomeView />} />
            <Route path='devices' element={<DevicesView />} />
            <Route path='gateways' element={<GatewaysView />} />
            <Route path='functions' element={<FunctionsView />} />
            <Route path='applications' element={<ApplicationsView />} />
            <Route path='groups' element={<GroupsView />} />
            <Route path='profiles' element={<ProfilesView />} />
            <Route path='events' element={<EventsView />} />
            <Route path='documentation' element={<DocumentationView />} />

          </Route>



          <Route path='loading' element={<SplashScreen />} />

        </Route>

        {/* Login  */}
        <Route path='login' element={<LoginPage />} />


      </Routes>
    </BrowserRouter>
  );
}

export default App;