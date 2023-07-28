import Navbar from "./components/Navbar"
import Events from "./components/Events"



function App() {

  return (
    <div id="website-container" className='px-10 pt-2 min-w-[371px]'>
      <div id="nabvar-container" className='py-4 my-3'>
      <Navbar/>
      </div>

      <div id="events-container">
        <Events/>
      </div>
      
    </div>
  )
}

export default App
