import Header from './layout/Header'
import Navbar from './components/organisms/Navbar'
import Footer from './layout/Footer'

import Pages from './pages'

function App() {


  return (
    <div className='min-h-screen flex flex-col'>
      <Header />
      <Navbar />

      <div className='border flex-1 flex gap-3 p-3'>
        <Pages />
      </div>

      <Footer />
    </div>
  )
}

export default App
