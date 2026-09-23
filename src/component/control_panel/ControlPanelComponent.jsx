import React, { useEffect, useState } from 'react'
import CardComponent from '../common/card_component/CardComponent'
import { Styles } from "./style";
import GetHourSubmissions from '../../services/get-hour-submissions/GetHourSubmissions';
import GetActivities from '../../services/activity/get-activities/GetActivities';
import { Link } from 'react-router-dom';
import { IoMdTrendingUp } from "react-icons/io";
import { IoMdTrendingDown } from "react-icons/io";
import TableUsers from './custom_component/update_users/table_users/TableUsers';
import PendingRequests from './custom_component/update_users/pending requests/PendingRequests';
import getUsers from '../../services/user/get-users/GetUsers';
import GetDashboard from '../../services/dashboard/GetDashboard';


const ControlPanelComponent = () => {
  const [request, setRequest] = useState([])
  const [initiativeApproved, setInitiativeApproved] = useState([]);
  const [initiativeNonApproved, setInitiativeNonApproved] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [data, setData] = useState([]);
  const [totalPoints, setTotalPoint] = useState(0)

  const responseUsers = async () => {
    const response = await getUsers();

    setTotalUsers(response?.total)

    setData(response?.data);

  };
  const responseDashboard = async () => {
    const response = await GetDashboard();
    const point = response?.data?.reduce((acc, user) => acc + (user.total_points || 0), 0);

    setTotalPoint(point)
  }

  useEffect(() => {

    responseDashboard()
  }, []);


  const activeUsersCount = data?.filter(user => user.is_active === true).length;
  const activeRequest = request?.filter(request => request.status === "approved").length;


  useEffect(() => {
    responseUsers();
    // responseSummary();
  }, []);



  const getActivityPending = async () => {
    const response = await GetHourSubmissions()
    setRequest(response?.data ?? []);
    console.log("request :", response?.data)
  }
  const getInitiative = async () => {

    const response = await GetActivities()

    const newInitiative = response?.data?.filter((item, index) => {
      const items = item.activity_type === "initiative" && item.approval_status === "approved"

      return item && items
    })
    const newNonInitiative = response?.data?.filter((item, index) => {
      const items = item.activity_type === "initiative" && item.approval_status !== "approved"

      return item && items
    })
    setInitiativeApproved(newInitiative || []);
    setInitiativeNonApproved(newNonInitiative || [])
    console.log("initiative:", newInitiative)
    console.log(" non initiative:", newNonInitiative)

  }
  useEffect(() => {
    getActivityPending()
    getInitiative()
  }, []);
  const requestPending = request?.filter(item => {
    const pending = item.status === "pending" ? true : false;

    return pending;
  })

  const dataCard = [
    {
      title: " إجمالي المستخدمين",
      descrition1: `${totalUsers} مستخدم `,
      descrition2: `+${activeUsersCount} مستخدم `,
      icon: <IoMdTrendingUp className='icon_increase' />
    },
    {
      title: " المبادارات النشطة",
      descrition1: `${initiativeApproved.length} مبادرات `,
      descrition2: `-${initiativeNonApproved.length} مبادرات `,
      icon: <IoMdTrendingDown className='icon_decrease' />
    }
    ,
    {
      title: " النقاط الممنوحة",
      descrition1: `${totalPoints}   نقطة `,
      descrition2: "+3 نقطة",
      icon: <IoMdTrendingUp className='icon_increase' />
    }
    ,
    {
      title: " طلبات معلقة",
      descrition1: `${request.length} طلبات `,
      descrition2: `+${activeRequest || 0} طلبات`,
      icon: <IoMdTrendingUp className='icon_increase' />
    }];

  return (
    <Styles>


      <div className='container_card'>
        {dataCard.map((item, index) => { return <CardComponent key={index} data={item} /> })}</div>
      <p style={{ fontSize: "1.5rem" }}>آخر التحديثات :</p>
      <div className='update_user'>

        <TableUsers data={request} />
        <div className="update_user_requests">
          <div className="header_requests">
            <div>
              {" "}
              <h6>طلبات معلقة:</h6>
              <p>إجمالي الطلبات المعلقة :0 طلبات</p>
            </div>
            <div>
              <Link to="/notificaton" className="link_view_all_requests">
                <b> عرض المزيد</b>
              </Link>
            </div>



          </div>
          {requestPending.map((item, index) => {
            return !item.crippling ? (
              <PendingRequests key={index} data={item} />) : (<></>)
          })
          }
        </div>



      </div>

    </Styles>

  )
}

export default ControlPanelComponent;
