import { useState } from 'react'
import { MantineProvider ,Slider,Notification} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUpPage from './Pages/SignUpPage';
import { Notifications } from '@mantine/notifications';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Notifications position="top-center" zIndex={1000}/>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/signup' element={<SignUpPage/>}/>
        <Route path='/login' element={<SignUpPage/>}/>


        <Route path='*' element={<Homepage/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
</MantineProvider>
  )
}

export default App
