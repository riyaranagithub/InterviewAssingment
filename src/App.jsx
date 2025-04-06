import SideBarLeft from './components/SideBarLeft'
import SideBarRight from './components/SideBarRight'
import DashBoard from './pages/DashBoard'

function App() {

  return (
    <>
      <div className="flex">
        <div className="absolute left-0">
          <SideBarLeft />
        </div>
        <div className="flex-1 ml-56 mr-72">
          <DashBoard />
        </div>
        <div className="absolute right-0">
          <SideBarRight />
        </div>
      </div>
    </>
  )
}

export default App
