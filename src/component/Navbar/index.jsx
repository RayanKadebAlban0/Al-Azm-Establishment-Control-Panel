import React, { useState } from 'react'
import { Styles } from './style'
import { Link } from 'react-router-dom'
// import ReviewOrders from '../manage-activite/review_orders/ReviewOrders';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";

import face from "../../assets/images/face.jpg"
import Alazem from "../../assets/images/Alazem.jpg"
const Navbar = ({ issidebar, marginRight }) => {
  const [display, setDisplay] = useState(false);
  const handleClose = () => {
    setDisplay(false)
  }
  const [search, setSearch] = useState("");


  return (
    <Styles  >
      <ul className='class-ul'>
        <div className='part1'>
          <li className="class_logo">
            <div className="class_img_logo "><img src={Alazem} alt="logo"></img></div>
            <h3>مؤسسة العزم</h3>
          </li>
          <li>
            <div className="class_search">
              <LiaSearchSolid className='class_search_icon' />
              <input
                type="text"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                placeholder="بحث في الموقع "
                className='class_search_input'
              />
              <div className='class_search_container_p'> <p className='class_search_p'>بحث</p></div>
            </div>
            
          </li>
        </div>

        <div className='part2'>
        <li>
          <div className='class_nav_section_left'>
            <div className='class_nav_icon'>
              <IoSettingsOutline className='class_nav_icon_setting' />
              <button onClick={() => { setDisplay(true) }} className='button_notifi'>
                < IoMdNotificationsOutline />
              </button>

              </div>
            <Link to="/ViewFileUser">
            <div className='class_nav_image'>
              <img src={face} alt="photoProfile"></img>
                </div>
                </Link>
          </div>
          </li>
          </div>
      </ul>

  
    </Styles>
  )
}

export default Navbar
