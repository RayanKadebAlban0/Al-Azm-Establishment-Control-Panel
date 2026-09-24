import React, { useState, useEffect } from 'react';
import { Styles } from './style';
import { Link } from 'react-router-dom';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { LiaSearchSolid } from "react-icons/lia";
import axios from 'axios';

import face from "../../assets/images/face.jpg";
import Alazem from "../../assets/images/Alazem.jpg";

const Navbar = ({ issidebar, marginRight }) => {
  // قراءة معرّف الأدمن الفعلي المسجل دخول
  const currentAdminId = localStorage.getItem("adminId") || localStorage.getItem("userId") || 6;

  const [display, setDisplay] = useState(false);
  const [search, setSearch] = useState("");
  const [userImage, setUserImage] = useState(null);

  const rawBaseUrl = process.env.REACT_APP_API_BASEURL || 'https://azem.46.224.99.67.nip.io';
  const cleanBaseUrl = rawBaseUrl.replace(/\/api\/?$/, '').replace(/\/$/, '');

  useEffect(() => {
    const fetchAdminAvatar = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${cleanBaseUrl}/api/admin/admins/${currentAdminId}`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        const data = response.data?.data;
        if (data && data.image) {
          setUserImage(data.image);
        }
      } catch (error) {
        console.error("فشل جلب صورة المشرف في النافبار:", error);
      }
    };

    if (currentAdminId) {
      fetchAdminAvatar();
    }
  }, [currentAdminId, cleanBaseUrl]);

  return (
    <Styles>
      <ul className='class-ul'>
        <div className='part1'>
          <li className="class_logo">
            <div className="class_img_logo"><img src={Alazem} alt="logo" /></div>
            <h3>مؤسسة العزم</h3>
          </li>
          <li>
            <div className="class_search">
              <LiaSearchSolid className='class_search_icon' />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="بحث في الموقع "
                className='class_search_input'
              />
              <div className='class_search_container_p'>
                <p className='class_search_p'>بحث</p>
              </div>
            </div>
          </li>
        </div>

        <div className='part2'>
          <li>
            <div className='class_nav_section_left'>
              <div className='class_nav_icon'>
                <IoSettingsOutline className='class_nav_icon_setting' />
                <button onClick={() => setDisplay(true)} className='button_notifi'>
                  <IoMdNotificationsOutline />
                </button>
              </div>
              <Link to={`/viewprofile/${currentAdminId}`}>
                <div className='class_nav_image'>
                  <img
                    src={userImage || face}
                    alt="photoProfile"
                    onError={() => setUserImage(face)}
                  />
                </div>
              </Link>
            </div>
          </li>
        </div>
      </ul>
    </Styles>
  );
};

export default Navbar;