import { Navbar } from "../component/Navbar"
import { Sidebar } from "../component/Sidebar"
import { Outlet } from 'react-router-dom'

function Home() {

  return (

    <div className="layout-wrapper layout-content-navbar">
      <div className="layout-container">
        <Sidebar />
        <div className="layout-page">
          <Navbar />
          <div className="content-wrapper">
            <div className="container-xxl d-flex align-items-stretch flex-grow-1 p-0">
              <div className="flex-shrink-1 flex-grow-1 container-p-x container-p-y">
                <Outlet />
              </div>
            </div>
            <footer className="content-footer footer bg-footer-theme">
              <div className="mb-2 mb-md-0">
                © <script>
                  document.write(new Date().getFullYear())

                </script>
                , made by <a href="#" className="footer-link fw-medium">M2 SIGL</a>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home