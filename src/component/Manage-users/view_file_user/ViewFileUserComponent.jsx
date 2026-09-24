import React from "react";
import pngegg from "../../../assets/images/pngegg.png";
import BaseDataTable from "../../common/tabel/base_data_table/BaseDataTable";
import CustomButton from "../../common/custom-button/CustomButton";
import CustomChecked from "../../common/custom-checked/CustomChecked";
import AddCross from "../add-cross/AddCross";
import getUser from "../../../services/user/get-user/GetUser";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { Styles } from "./style";
import { useState } from "react";
import { Formik } from "formik";
import * as yup from "yup";
import { FaRegAddressCard } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { HiCalendarDateRange } from "react-icons/hi2";
import { RxClock } from "react-icons/rx";
import { LiaMedalSolid } from "react-icons/lia";
import { GiFeather } from "react-icons/gi";
import { IoMdPaper } from "react-icons/io";
// import { HiMiniFire } from "react-icons/hi2";
// import { PiAirplaneTiltFill } from "react-icons/pi";
// import { HiOutlineKey } from "react-icons/hi";
// import { FaRegHandshake } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { BsTelephone } from "react-icons/bs";
import { LiaHandHoldingHeartSolid } from "react-icons/lia";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import { BlockUser } from "../../../services/user/block-user/BlockUser"
import GetHourSubmissions from "../../../services/get-hour-submissions/GetHourSubmissions";
// import GetActivity from "../../../services/activity/get-activity/GetActivity"
import ShowActivity from "../../../services/activity/show-activity/ShowActivity";
const ViewFileUserComponent = () => {
  const [data, setData] = useState("")

  const [informationContact, setInformationContact] = useState(false);
  const [addValuation, setAddValuation] = useState(true);
  const [addNote, setAddNote] = useState(false);
  const [addCross, setAddCross] = useState(false);
  const [disabledBlock, setDisabledBlock] = useState(false)
  const [showAllBadges, setShowAllBadges] = useState(false);

  const [request, setRequest] = useState([])
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    const response = async () => {
      const res = await getUser(id)
      console.log('response get user :', res)
      setData(res.data)

    }
    response()
  }, [id]);
  const responseRequest = async () => {
    const request = await GetHourSubmissions();
    setRequest(request.data)
    console.log("request :", request)
  }

  useEffect(() => {
    responseRequest();
  }, [])

  const requestUser = request?.filter((item) => {

    return item?.user?.id && String(item.user.id) === String(id);;
  })
  const requestUserActivityId = requestUser?.map((item) => {
    return item.activity_id
  })

  const requestActivity = requestUserActivityId?.map(async (item) => {
    const result = await ShowActivity(item);

    return result.data
  })
  const badges = requestActivity?.flatMap((activity) =>
    activity?.badges?.map((badge) => badge) || []
  );

  const uniqueBadges = Array.from(
    new Map(badges?.map(badge => [badge.name, badge])).values()
  );

  const badgeCounts = Object.values(
    (badges ?? []).reduce((acc, badge) => {
      if (!acc[badge.name]) {
        acc[badge.name] = { name: badge.name, count: 0 };
      }
      acc[badge.name].count += 1;
      return acc;
    }, {})
  );
  const totalBadges = badges?.length;

  const badgePercentages = badgeCounts?.map((badge) => ({
    name: badge.name,
    count: badge.count,
    percentage: ((badge.count / totalBadges) * 100).toFixed(2)
  }));
  const displayedBadges = showAllBadges
    ? uniqueBadges
    : uniqueBadges.slice(0, 4);

  //  const validationSchema = yup.object({
  //            name: yup
  //              .string()
  //              .required("ادخل اسم الشارة")

  //              })




  const buttons = [
    { id: 0, title: "إرسال إشعار", icon: "", link: "" },
    { id: 1, title: "تعديل", icon: "", link: `/editUser/${id}` },
    { id: 2, title: "تعطيل الحساب", icon: "", link: "#" },
  ];


  const handleBlock = async () => {
    const response = await BlockUser(id)
    setDisabledBlock(true)
    alert("تم تعطيل الحساب بنجاح")
    console.log(`block user id${id}`, response)
  }
  const handleSendNotification = async () => {
    navigate("/manageNotification", { state: { target: "users", user_id: id } })
  }
  const handleCloseAddCross = () => {

    setAddCross(false)
  }
  // const handleAddvaluation = () => {
  //   setAddValuation(true);
  //   setAddNote(false);
  // };
  // const handleAddNote = () => {
  //   setAddNote(true);
  //   setAddValuation(false);
  // };

  const customStyles = {
    rows: {
      style: {
        paddingTop: "20px",
        paddingBottom: "20px",

        borderTopStyle: "none",
      },
    },
    headCells: {
      style: {
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingLeft: "30px",
        paddingRight: "30px",
      },
    },
    cells: {
      style: {
        paddingLeft: "30px",
        paddingRight: "30px",
      },
    },
  };
  // const columnNote = [
  //   {
  //     name: "التاريخ",
  //     selector: (row) => row.التاريخ,
  //   },
  //   {
  //     name: "اسم النشاط",
  //     selector: (row) => row.اسم,
  //   },
  //   {
  //     name: "الملاحظات",
  //     selector: (row) => row.الملاحظات,
  //   },
  // ];

  const columns = [
    {
      name: "اسم النشاط",
      selector: (row) => row.name,
    },
    {
      name: "نوع النشاط",
      selector: (row) => row.activity_type,
    },
    {
      name: "الساعات",
      selector: (row) => row.start_time,
    },
    {
      name: "التاريخ",
      selector: (row) => row.start_date,
    },
    {
      name: "حالة النشاط",
      selector: (row) => row.approval_status,
    },
  ];

  return (

    <Styles addCross={addCross}>
      <div className="top_container">
        <div className="container">
          <img src={data.image || pngegg} alt="photo" lazy className="img" />
          <div className="content">
            <b> {data.name}</b>
            <div className="container_pargraph">
              <small ><LiaHandHoldingHeartSolid />
                <pr style={{ padding: "5px" }}>
                  {data.role}

                </pr>                 </small>
              <small><AiOutlineMail />
                <pr style={{ padding: "5px" }}>
                  {data.email}
                </pr>
              </small>
              <small ><BsTelephone />
                <pr style={{ padding: "5px" }}>
                  {data.phone}
                </pr>
              </small>
            </div>
            <div className="details">
              <div className="container_row">
                <HiCalendarDateRange className="icon" />
                <div className="container_column">
                  <label>تاريخ الأنظمام</label>
                  <b className="value">{data.created_at ? String(data.created_at).split("T")[0] : "—"}</b>
                </div>
              </div>
              <div className="container_row">
                <FaRegAddressCard className="icon" />
                <div className="container_column">
                  <label>الرقم الوظيفي</label>
                  <b className="value">{data.id}</b>
                </div>
              </div>
              <div className="container_row">
                <IoLocationOutline className="icon" />
                <div className="container_column">
                  <label>المكتب</label>
                  <b className="value">{data.offices?.length
                    ? data.offices.map(o => o.name==="Office 1"?"المكتب الرئيسي":o.name==="Office 2"?"المكتب الإعلامي":"المكتب التدريبي ").join(", ")
                    : "لا يوجد مكتب"}</b>
                </div>
              </div>
            </div>
          </div>
        </div>

        {data.role === "volunteer" && !informationContact && (
          <button
            className="view_information_contact"
            onClick={() => setInformationContact(true)}
          >
            عرض معلومات التواصل
          </button>
        )}

        {informationContact && (
          <div className="container_information_contact">
            <p>معلومات التواصل:</p>

            <div className="information_contact">
              <p>رقم الجوال: {data.phone}</p>
              <p>رقم واتساب: {data.whatsaap_phone ?? "غير متوفر"}</p>
              <p>رقم احتياطي: {data.backup_phone ?? "غير متوفر"}</p>
            </div>

            <p>معلومات التواصل مع الأهل:</p>

            <div className="information_contact_with_parents">
              <div className="container_row">
                <p className="parent">اسم الأب: {data.father_name}</p>
                <p>رقم الجوال: {data.father_phone ?? "غير متوفر"}</p>
                <p>رقم واتساب: {data.father_phone ?? "غير متوفر"}</p>
              </div>

              <div className="container_row">
                <p className="parent">اسم الأم: {data.mother_full_name}</p>
                <p>رقم الجوال: {data.mother_phone ?? "غير متوفر"}</p>
                <p>رقم واتساب: {data.mother_phone ?? "غير متوفر"}</p>
              </div>
            </div>

            <button
              className="hidden_information_contact"
              onClick={() => setInformationContact(false)}
            >
              إخفاء معلومات التواصل
            </button>
          </div>
        )}

      </div>
      <hr className="hr"></hr>
      <div className="record_activite">
        <h4 className="title"> سجل الأنشطة:</h4>
        <div className="container_row">
          <LiaMedalSolid className="icon" />
          <div className="container_column">
            <b>إجمالي الشارات</b>
            <p className="value">{badges?.length || 0}</p>
          </div>
        </div>
        <div className="container_row">
          <RxClock className="icon" />
          <div className="container_column">
            <b>إجمالي الساعات</b>
            <p className="value">{requestUser?.user?.total_hours || 0}</p>
          </div>
        </div>
        <div className="container_row">
          <GiFeather className="icon_feather" />
          <IoMdPaper className="icon" />

          <div className="container_column">
            <b>إجمالي الأنشطة</b>
            <p className="value">{requestUser?.length || 0}</p>
          </div>
        </div>
      </div>
      <BaseDataTable
        columns={columns}
        data={requestActivity}
        className="table_activite"
        customStyles={customStyles}
      />
  

      <div className="bottom_container">
        <div className="container_row">
          <h4>
            <LiaMedalSolid className="icon_title" />
            الشارات المحققة:
          </h4>
          <button className="button" onClick={() => {
            setAddCross(true);

          }}>
            <span>+</span>
            <b> إضافة شارة جديدة</b>
          </button>
        </div>
        {addCross ? (<div className="container_add_crose"><AddCross handleClose={handleCloseAddCross} id={id} /></div>) : (<></>)}

        <div className="container_column content_all">
          {!showAllBadges && uniqueBadges.length > 4 && (
            <button className="view_all" onClick={() => setShowAllBadges(true)}>
              عرض الكل
            </button>
          )}

          <div className="content">
            {displayedBadges?.map((item, index) => {
              const percentage = badgePercentages?.find(
                (count) => count?.name === item?.name
              )?.percentage;
              return <div className="container_column">
                <CircularProgressbarWithChildren
                  value={parseFloat(percentage)}
                  styles={{
                    path: { stroke: "black" },
                    trail: { stroke: "rgb(163, 160, 160)", strokeWidth: "1" },
                  }}
                  counterClockwise={true}
                  className="circular"
                >
                  <img src={item.icon_url} alt={item.name}
                    style={{ width: "30px", height: "30px", borderRadius: "8px" }} />
                </CircularProgressbarWithChildren>

                <b>{item.name}</b>
                <b>{percentage}</b>
              </div>
            })}
            {/* <div className="container_column">
              <CircularProgressbarWithChildren
                value={nsba.fire}
                styles={{
                  path: { stroke: "black" },
                  trail: { stroke: "rgb(163, 160, 160)", strokeWidth: "1" },
                }}
                counterClockwise={true}
                className="circular"
              >
                <HiMiniFire className="icon" />
              </CircularProgressbarWithChildren>

              <b>مثابر</b>
              <b>100%</b>
            </div>

            <div className="container_column">
              <CircularProgressbarWithChildren
                value={nsba.plane}
                counterClockwise={true}
                styles={{
                  path: { stroke: "black" },
                  trail: { stroke: "rgb(163, 160, 160)", strokeWidth: "1" },
                }}
                className="circular"
              >
                <PiAirplaneTiltFill className="icon" />
              </CircularProgressbarWithChildren>

              <b>إنجاز سريع</b>
              <b>100%</b>
            </div>
            <div className="container_column">
              <CircularProgressbarWithChildren
                value={nsba.key}
                styles={{
                  path: { stroke: "black" },
                  trail: { stroke: "rgb(163, 160, 160)", strokeWidth: "1" },
                }}
                counterClockwise={true}
                className="circular"
              >
                <HiOutlineKey className="icon" />
              </CircularProgressbarWithChildren>

              <b>مفتاح النجاح</b>
              <b>{nsba.key}%</b>
            </div>
            <div className="container_column">
              <CircularProgressbarWithChildren
                value={nsba.hand}
                styles={{
                  path: { stroke: "black" },
                  trail: { stroke: "rgb(163, 160, 160)", strokeWidth: "1" },
                }}
                counterClockwise={true}
                className="circular"
              >
                <FaRegHandshake className="icon" />
              </CircularProgressbarWithChildren>

              <b>خبير تعاوني</b>
              <b>{nsba.hand}%</b>
            
          </div>
         */}
          </div>
        </div>

      </div>

      <div className="container_buttons">
        {buttons.map((item, index) => {
          return item.id === 2 ? (
            <button key={index} disabled={disabledBlock} onClick={handleBlock} className="button_block">
              {item.title}
            </button>
          ) : (item.id === 0 ? (<button key={index} onClick={handleSendNotification} className="button_block">
            {item.title}
          </button>) : (<CustomButton key={index} data={item} id={id} />)

          );
        })}
      </div>


    </Styles>

  );
};

export default ViewFileUserComponent;
