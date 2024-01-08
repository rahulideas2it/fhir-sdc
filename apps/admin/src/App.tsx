import {
  DashboardTemplate,
  MUIThemeProvider,
} from '@rahulideas2it/fhir-sdc-ui/core'
import './App.css'
import Dashboard from './pages/dashboard'

function App() {
  return (
    <>
      <MUIThemeProvider>
        <DashboardTemplate>
          <Dashboard />
        </DashboardTemplate>
      </MUIThemeProvider>
    </>
  )
}

export default App
