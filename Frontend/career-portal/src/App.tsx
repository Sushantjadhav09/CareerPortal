import { useState } from 'react'
import { MantineProvider ,Slider} from '@mantine/core'
import './App.css'
import '@mantine/core/styles.css'
import '@mantine/carousel/styles.css';
import Homepage from './Pages/Homepage'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MantineProvider>
      <BrowserRouter>
      <Routes>
        <Route path='*' element={<Homepage/>} />
      </Routes>
      </BrowserRouter>
</MantineProvider>
  )
}

export default App
