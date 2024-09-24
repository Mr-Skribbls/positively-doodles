import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import ErrorPage from './errorPage'
import SharedLayout from './pages/sharedLayout'
import Home from './pages/home/home.page'
import MeetOurDogs from './pages/meetOurDogs/meetOurDogs.page'
import Moms from './pages/meetOurDogs/moms/moms.page'
import Dads from './pages/meetOurDogs/dads/dads.page'
import Dog from './pages/meetOurDogs/dog/dog.page'
import Gallery from './pages/gallery/gallery.page'
import Contact from './pages/contact/contact.page'
import AvailablePuppies from './pages/availablePuppies/availablePuppies.page'
import Litter from './pages/availablePuppies/litter/litter.page'
import AboutBernedoodles from './pages/aboutBernedoodles/aboutBernedoodles.page'
import BaxterAndBella from './pages/baxterAndBella/baxterAndBella'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path='meet-our-dogs' element={<MeetOurDogs />} />
          <Route path='moms' element={<Moms />} />
          <Route path='dads' element={<Dads />} />
          <Route path='dog/:name' element={<Dog />} />
          <Route path='gallery/:imageFilters' element={<Gallery />} />
          <Route path='contact' element={<Contact />} />
          <Route path='available-puppies' element={<AvailablePuppies />} />
          <Route path='litter/:id' element={<Litter />} />
          <Route path='about-bernedoodles' element={<AboutBernedoodles />} />
          <Route path='baxter-and-bella' element={<BaxterAndBella />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
