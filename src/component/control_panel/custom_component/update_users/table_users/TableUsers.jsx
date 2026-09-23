import React from 'react'
import BaseDataTable from  "../../../../common/tabel/base_data_table/BaseDataTable"
import GetActivityId from '../../../../../services/control-panel/get-activity-id/GetActivityId';
import { useState } from 'react';
import { useEffect } from 'react';

const TableUsers = ({data}) => {
  const [activities, setActivities] = useState([]);
  const [selectRow,setSelectRow]=useState("")
useEffect(() => {
  const fetchActivities = async () => {
    const map = {};

    for (const row of data) {
      const response = await GetActivityId(row.activity_id);
      map[row.activity_id] = response.name;
    }

    setActivities(map||[]);
  };

  fetchActivities();
}, [data]);
const columns = [
  {
    name: "المستخدم",
   
    selector: (row) => row.المستخدم,
    cell: (row)=>(
      <div style={{display:'flex',justifyContent:'center',direction:'ltr'}}>
        <b >{row.user.name}</b>
            <div className='container_image' >
              <img src={row.user.image} alt={row.user.name} className='img_table'/>
    
            </div>


      </div>
   
 )
    ,
  },
  {
    name: "النشاط",
  cell: (row) => (
    <span>{activities[row.activity_id]}</span>
  )
   ,
  }
   ,
  {
    name: "التاريخ",
    selector: (row) => row.date,
  }
  ,
  {
    name: "الحالة",
    selector: (row) => row.status,
  }
];
      const customStyles={
        rows:{
          style:{
          
paddingTop: '20px',
paddingBottom: '20px',

borderTopStyle: 'none',
      },
        
        },
        headCells:{
          style:{

 paddingLeft: "30px",
            paddingRight: "30px",

          },
        },
        cells:{
          style:{
            paddingLeft: "30px",
            paddingRight: "30px",
          
          },
        }

      }
  return (
    <div className="update_user_table">
      <p className='view_record'>عرض السجل الكامل</p>
       <BaseDataTable
           columns={columns}
           data={data}
           
           onSelectedRowsChange={(state) => setSelectRow(state.selectedRows)}
           customStyles={customStyles}
          
          className="dataTable"
         /></div>
   
  )
}

export default TableUsers
