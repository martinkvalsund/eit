import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import IdeaPage from './pages/IdeaPAge'
import InfoPage from './pages/InfoPage'
import OurSuggestionsPage from './pages/OurSuggestionsPage'

function App() {
  return (
    <>
      <Router>
        <div className='container'>
          <Header />
          <Routes>
            <Route path='/idea' element={<IdeaPage />} />
            <Route path='/' element={<InfoPage />} />
            <Route path='/suggestions' element={<OurSuggestionsPage />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App
