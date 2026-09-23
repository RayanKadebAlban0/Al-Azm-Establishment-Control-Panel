import React, { useState, useEffect } from 'react';
import { Styles } from './style';
import getUsers from '../../services/user/get-users/GetUsers';
import { Link } from 'react-router-dom';
import { CgToggleSquare } from "react-icons/cg";
import { CgToggleSquareOff } from "react-icons/cg";
import { LiaSearchSolid } from "react-icons/lia";
import { IoMdTrendingUp, IoMdTrendingDown } from "react-icons/io";
import GetDashboard from '../../services/dashboard/GetDashboard';
import CardComponent from '../common/card_component/CardComponent';
import BaseDataTable from '../common/tabel/base_data_table/BaseDataTable';
import { useNavigate } from "react-router-dom";




function ManageUsersComponent() {

  const [page, setPage] = useState(1);


  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalPoints, setTotalPoint] = useState(0)
  const [totalHours, setTotalHours] = useState(0)

  const [selectedOffice, setSelectedOffice] = useState("")
  const [selectRole, setSelectRole] = useState("");
  const [selectState, setSelectState] = useState("");

  const responseUsers = async (pageNumber) => {
    const response = await getUsers(pageNumber);
    setTotalUsers(response.total)


    setData(response.data);


  };
  const handlePageChange = (pageNumber) => {
    setPage(pageNumber);
  };

  const responseDashboard = async () => {
    const response = await GetDashboard();
    const point = response.data.reduce((acc, user) => acc + (user.total_points || 0), 0);

    setTotalPoint(point)
    const hourse = response.data.reduce((acc, user) => acc + (user.total_hours || 0), 0);
    setTotalHours(hourse)
  }
  const activeUsersCount = data.filter(user => user.is_active === true).length;

  useEffect(() => {
    responseUsers(page);
  }, [page]);
  useEffect(() => {

    responseDashboard()
  }, []);

  const newData = data.filter(item => {
    const matchRole = selectRole ? item.role.toLowerCase() === selectRole : true;
    const matchState = selectState ? String(item.is_active).toLowerCase() === selectState : true;
    const matchOffice = selectedOffice ? item.offices.some(o => o.id === Number(selectedOffice)) : true;
    const matchName = search ? item.username.toLowerCase().includes(search.toLowerCase()) : true;
    console.log(matchOffice)

    return matchRole && matchState && matchOffice && matchName;
  }

  )
  const columns = [
    {
      name: "المستخدم", cell: (row) => (
        <div style={{ display: 'flex', justifyContent: 'center', direction: 'ltr' }}>
          {row.name}
          <div className='container_image' >
            <img src={row.image} alt={row.name} className='img_table' />

          </div>
        </div>
      )

    },
    {
      name: "اسم المستخدم",
      selector: (row) => row.username


    },
    { name: "الإيميل", selector: (row) => row.email },
    { name: "رقم الجوال", selector: (row) => row.phone },
    {
      name: "المكتب", selector: (row) => row.offices?.length
        ? row.offices.map(o => o.name).join(", ")
        : "لا يوجد مكتب"
    },
    // { name: "التاريخ", selector:  (row) => row.created_at ? row.created_at.split("T")[0] : "—"},
    {
      name: "الحالة", cell: (row) => (
        <div >
          {row.is_active ? (
            <CgToggleSquareOff style={{ fontSize: '2.5rem', color: 'green' }} />
          ) : (
            <CgToggleSquare style={{ fontSize: '2.5rem', color: 'red' }} />
          )}
        </div>
      )
    },
  ];

  const dataCard = [
    {
      title: "إجمالي المستخدمين",
      descrition1: ` ${totalUsers}  مستخدم  `,
      descrition2: activeUsersCount,
      icon: <IoMdTrendingUp className='icon_increase' />
    },
    {
      title: "مستخدمين قيد الأنتظار",
      descrition1: "5 طلبات",
      descrition2: "-2 مبادرات",
      icon: <IoMdTrendingDown className='icon_decrease' />
    },
    {
      title: "إجمالي الساعات",
      descrition1: `${totalHours}`,
      descrition2: `+${totalPoints} نقطة`,
      icon: <IoMdTrendingUp className='icon_increase' />
    },
    {
      title: "إجمالي النشط",
      descrition1: ` ${totalUsers}  مستخدم  `,
      descrition2: `+${totalPoints} نقطة`,
      icon: <IoMdTrendingUp className='icon_increase' />
    }
  ];


  const customStyles = {
    rows: {
      style: {

        paddingTop: '20px',
        paddingBottom: '20px',

        borderTopStyle: 'none',
      },

    },
    headCells: {
      style: {

        paddingLeft: "30px",
        paddingRight: "30px",

      },
    },
    cells: {
      style: {
        paddingLeft: "30px",
        paddingRight: "30px",

      },
    }
    ,

  }




  return (
    <Styles>

      <div className='class_title-and-adduser'>
        <h4>إدارة المستخدم</h4>
        <Link to="/addUser" className='class_add_user'>
          + اضافة مستخدم
        </Link>
      </div>

      <div className='container_card'>
        {dataCard.map((item, index) => (
          <CardComponent key={index} data={item} />
        ))}
      </div>

      <div className="table_users"> <BaseDataTable
        subHeader
        subHeaderComponent={
          <div className='container_sub_header'>
            <div className='container_count_user'>
              <b>قائمة المستخدمين</b>
              <small className='count_users'>{totalUsers} مستخدم</small>
            </div>



            <div className='header_content'>
              <div className="class_search">
                <LiaSearchSolid className='class_search_icon' />
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="ابحث عن مستخدم"

                  className='class_search_input'
                />
              </div>

              <select value={selectRole} onChange={(e) => { setSelectRole(e.target.value) }} className='class_select'>
                <option value="" className='option_placeholder' >النوع</option>
                <option value="volunteer">متطوع</option>
                <option value="youth"> يافع </option>
                {/* <option > أدمن يافعين</option>
                   <option> أدمن متطوعين</option>
              */}
              </select>

              <select onChange={(e) => { setSelectState(e.target.value) }} className='class_select'>
                <option value="" className='option_placeholder'>الحالة</option>
                <option value="true">نشط</option>
                <option value="false">غير نشط</option>
              </select>

              <select className='class_select' onChange={(e) => { setSelectedOffice(e.target.value) }}>
                <option className='option_placeholder'>المكتب</option>
                <option value="1" >مكتب الرئيسي</option>
                <option value="2">مكتب الإعلامي</option>
                <option value="3" >مكتب التدريبي</option>

              </select>
            </div>
          </div>
        }
        columns={columns}
        data={newData}
        customStyles={customStyles}
        pagination
        paginationServer
        paginationTotalRows={totalUsers}
        onChangePage={handlePageChange}
        onRowClicked={(row) => navigate(`/viewFileUser/${row.id}`)}



      /></div>


    </Styles>
  );
}

export default ManageUsersComponent;
