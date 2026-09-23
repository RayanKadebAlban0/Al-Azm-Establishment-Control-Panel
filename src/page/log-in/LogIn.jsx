import React from 'react'
import LogInComponent from '../../component/log-in/LogInComponent'
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setPorfileData } from '../../store/slice/profile-slice/ProfileSlice';
import ControlPanel from '../control_panel/ControlPanel';

const LogIn = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.student2.profileData)

  const isload = useSelector((state) => state.student2.isload)
  const storedProfile = JSON.parse(localStorage.getItem('profileData'))

  useEffect(() => {
    if (storedProfile) {
      dispatch(setPorfileData(storedProfile));
    }
  }, []);

  return (
    <div>
      <LogInComponent />
    </div>
  )
}

export default LogIn