import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar'
import HomePage from './pages/app/homepage/homepage';
import SignUpPage from './pages/auth/signup/signup';
import LoginPage from './pages/auth/login/login';
import ForgotPasswordPage from './pages/auth/forgot/forgot';
import OTPPage from './pages/auth/otp/otp';
import ProfilePage from './pages/log/profile';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' index element={<HomePage />} />

          <Route path='/login' element={<LoginPage />} />

          <Route path='/signup' element={<SignUpPage />} />

          <Route path='/forgot-password' element={<ForgotPasswordPage />} />

          <Route path='/otp-page' element={<OTPPage />} />

          <Route path='/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
