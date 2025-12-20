import { useState } from 'react'
import { MantineProvider ,Slider,Notification, Divider} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import FindJobs from './Pages/FindJobs';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import SignUpPage from './Pages/SignUpPage';
import { Notifications } from '@mantine/notifications';
import FindTalentPage from './Pages/FindTalentPage';
import TalentProfilePage from './Pages/TalentProfilePage';
import PostJobPage from './Pages/PostJobPage';
import JobDescPage from './Pages/JobDescPage';
import ApplyJobPage from './Pages/ApplyJobPage';
import PostedJobPage from './Pages/PostedJobPage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider defaultColorScheme='dark'>
      <Notifications position="top-center" zIndex={1000}/>
      <BrowserRouter>
      <Header/>
      <Divider size="xs" mx="md"/>
      <Routes>
        <Route path='/find-jobs' element={<FindJobs/>}/>
        <Route path='/find-talents' element={<FindTalentPage/>}/>
        <Route path='/talent-profile' element={<TalentProfilePage/>}/>
        <Route path='/jobs/:id' element={<JobDescPage/>}/>
        <Route path='/apply-job/:id' element={<ApplyJobPage/>}/>
        <Route path='/post-job' element={<PostJobPage/>}/>
        <Route path='/posted-jobs' element={<PostedJobPage/>}/>
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
