
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
import { useDebounce } from './hooks/useDebounce';
import { databaseSync } from './helpers/databeseSync';
import { useState } from 'react';
import { Database } from './services/firebase/database.service';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [loading, setLoading] = useState(true)
  const [devices, setDevices] = useState([])
  const [gateways, setGateways] = useState([])

  useDebounce(async () => {
    await databaseSync()

    /* Devices */
    Database.onValue('cloouder/devices', (data) => {
      let latitude = 0
      let longitude = 0

      data = data.map((x, idx) => {
        return {
          latitude,
          longitude,
          ...x,
          id: idx+1
        }
      })

      setDevices(data)
    })

    /* Gateways */
    Database.onValue('cloouder/gateways', (data) => {

      data = data.map((x, idx) => {
        return {
          ...x,
          id: idx+1
        }
      })
      setGateways(data)
    })

    setLoading(false)
  })


  return (
    loading ? <SplashScreen /> : 
    <BrowserRouter>
      <Routes>

        {/* Index */}
        <Route path="/" element={<AuthComponent />}>

          {/* Index */}
          <Route path="/"  element={<Navigate redirect to="app" />} />

          {/* Console  */}
          
          <Route path='app' element={<HomePage />}>

            <Route index element={<HomeView devices={devices} gateways={gateways} />} />
            <Route path='devices' element={<DevicesView devices={devices} />} />
            <Route path='gateways' element={<GatewaysView gateways={gateways} />} />
            <Route path='functions' element={<FunctionsView />} />
            <Route path='applications' element={<ApplicationsView />} />
            <Route path='groups' element={<GroupsView />} />
            <Route path='profiles' element={<ProfilesView />} />
            <Route path='events' element={<EventsView />} />
            <Route path='documentation' element={<DocumentationView />} />

          </Route>

        </Route>

        {/* Login  */}
        <Route path='login' element={<LoginPage />} />


      </Routes>
    </BrowserRouter>

  );
}

export default App;