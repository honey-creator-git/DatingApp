import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import Header from './Header'
import Content from './Content'
import ProfileA from '../Navigation/ProfileA'
import ProfileB from '../Navigation/ProfileB'
import ProfileC from '../Navigation/ProfileC'
import Sidebar from '../Admin/sidebar/Sidebar'
import HeaderAdmin from '../Admin/header/Header'
import AdminFooter from '../Admin/footer/Footer'
import RightSidebar from '../Admin/rightSidebar/RightSidebar'
import AdminContent from '../Admin/content/AdminContent'

export default function Layout({ onClick, appComponent }) {
  const [toggle, setToggle] = useState(false)
  const [adminSideBar, setAdminSideBar] = useState(false)
  const [adminDetail, setAdminDetail] = useState(false)
  const [admin, setAdmin] = useState(false)

  const toggleSideBar = () => {
    setToggle(!toggle)
    console.log("Toggle => ", toggle);
  }

  const handleAdminSideBarToggle = () => {
    setAdminSideBar(!adminSideBar)
  }

  const location = useLocation();
  const path = location.pathname;

  useEffect(() => {
    setAdmin(path.includes("/admin"));
    setAdminDetail(path.includes("/detail"));
  }, []);

  return (
    <div className='flex flex-col justify-center items-start'>
        { 
          (admin == false && (path.includes('/date-guard') == true) || path.includes('/user') == true) ?
          <div className="datting-layout mx-auto bg-[#040C50]">
            <ProfileB toggleStatus={toggle} />
            <div onClick={() => setToggle(false)} className={`fixed top-0 left-0 w-[100vw] h-[100vh] sideBarOverlay ${toggle == true ? 'custom-opacity-1' : ''}`}></div>
            <Header onClick={() => toggleSideBar()} />
            <Content contentComponent={appComponent}/>
          </div>
          :
          (admin == false && (path.includes('/date-guard') == false) && (path.includes('/user') == false)) ?
          <div className="datting-layout mx-auto">
            {/* <ProfileA toggleStatus={toggle} /> */}
            <ProfileB toggleStatus={toggle} />
            {/* <ProfileC toggleStatus={toggle} /> */}
            <div onClick={() => setToggle(false)} className={`fixed top-0 left-0 w-[100vw] h-[100vh] sideBarOverlay ${toggle == true ? 'custom-opacity-1' : ''}`}></div>
            <Header onClick={() => toggleSideBar()} />
            <Content contentComponent={appComponent}/>
          </div>
          :
          <div className='h-[100vh] bg-[#040C50] admin-custom-contianer overflow-auto'>
            <Sidebar sideBarStatus={adminSideBar} />
            <div onClick={() => setAdminSideBar(false)} className={`fixed top-0 left-0 w-[100vw] h-[100vh] sideBarOverlay ${adminSideBar == true ? 'custom-opacity-1' : ''}`}></div>
            <HeaderAdmin onClick={() => handleAdminSideBarToggle()} />
            <RightSidebar detail={adminDetail} />
            <AdminContent contentComponent={appComponent} />
            <AdminFooter />
          </div>
        }
    </div>
  )
}
