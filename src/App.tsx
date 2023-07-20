import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Signin, Landing, Error, ProtectedRoute } from './pages'
import {
  AllSales,
  NewSale,
  Profile,
  Sale,
  SharedLayout,
} from './pages/dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={
            <ProtectedRoute>
              <SharedLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<NewSale />} />
          <Route path='all-sales' element={<AllSales />} />
          <Route path='sales/:id' element={<Sale />} />
          <Route path='profile' element={<Profile />} />
        </Route>
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/landing' element={<Landing />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
