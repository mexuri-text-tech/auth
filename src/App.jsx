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
          <Route path='/auth' index element={<HomePage />} />

          <Route path='/auth/login' element={<LoginPage />} />

          <Route path='/auth/signup' element={<SignUpPage />} />

          <Route path='/auth/forgot-password' element={<ForgotPasswordPage />} />

          <Route path='/auth/otp-page' element={<OTPPage />} />

          <Route path='/auth/profile' element={<ProfilePage />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
