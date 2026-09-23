import React, { useEffect, useState } from 'react';
import { Styles } from './style';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from './card-component/CardComponent';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchActivities } from '../../store/slice/activity-slice/ActivitySlice';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCheck, FaTimes } from 'react-icons/fa';

const ManageActiviteComponent = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const { activitiesList, isLoading, hasMore, lastPage } = useSelector(
    (state) => state.activitiesData
  );

  useEffect(() => {
    dispatch(fetchActivities(currentPage));
  }, [dispatch, currentPage]);

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedType, setSelectedType] = useState("الكل");
  const [selectedStatus, setSelectedStatus] = useState("الكل");

  const [filteredActivities, setFilteredActivities] = useState([]);

  useEffect(() => {
    if (Array.isArray(activitiesList)) {
      const sortedActivities = [...activitiesList].sort(
        (a, b) => new Date(b.start_date) - new Date(a.start_date)
      );
      setFilteredActivities(sortedActivities);
    }
  }, [activitiesList]);

  const handleApplyFilter = () => {
    let result = [...activitiesList];

    if (selectedType !== "الكل") {
      result = result.filter(
        (activity) => activity.activity_type === selectedType
      );
    }

    if (selectedStatus !== "الكل") {
      result = result.filter(
        (activity) => activity.approval_status === selectedStatus
      );
    }

    if (selectedDate) {
      const year = selectedDate.getFullYear();
      const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
      const day = String(selectedDate.getDate()).padStart(2, "0");
      const formattedSelectedDate = `${year}-${month}-${day}`;

      result = result.filter((activity) => {
        const activityDate = activity.start_date?.split("T")[0];
        return activityDate === formattedSelectedDate;
      });
    }

    result.sort((a, b) => new Date(b.start_date) - new Date(a.start_date));
    setFilteredActivities(result);
  };

  const handleResetFilter = () => {
    setSelectedDate(null);
    setSelectedType("الكل");
    setSelectedStatus("الكل");
    setFilteredActivities(activitiesList);
  };

  return (
    <Styles>
      {/* الأزرار العليا */}
      <div className='container_button_review'>
        <Link to="/requirmentUnactivite">
          <button className='button button1'><b>طلبات بانتظار الموافقة</b></button>
        </Link>
        <Link to="/confirm">
          <button className="button button1">
            <b>طلبات تأكيد الحضور</b>
          </button>
        </Link>

        <Link to="/addActivite" className="button_add">
          <button className="button">
            <b>+ إضافة نشاط جديد</b>
          </button>
        </Link>
      </div>
      <h4> إدارة الانشطة والفعاليات</h4>

      {/* قسم الفلتر الديناميكي */}
      <div className='container_filter'>
        <div className='class_date'>
          <p>التاريخ</p>
          <div className='manage_date1'>
            <DatePicker
              placeholderText="هذا الشهر"
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showMonthDropdown
              showYearDropdown
              scrollableYearDropdown
              showIcon
            />
          </div>
        </div>

        <div className='class_type_activite'>
          <p>نوع النشاط</p>
          <div className='class_type'>
            <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
              <option value="الكل">الكل</option>
              <option value="initiative">مبادرة</option>
              <option value="training">تدريب</option>
              <option value="event">فعالية</option>
            </select>
          </div>
        </div>

        <div className='class_state'>
          <p>الحالة</p>
          <div className='class_state1'>
            <select value={selectedStatus} onChange={(e) => setSelectedStatus(e.target.value)}>
              <option value="الكل">الكل</option>
              <option value="pending">قيد الانتظار</option>
              <option value="completed">مكتمل</option>
              <option value="approved">معتمد</option>
            </select>
          </div>
        </div>

        <div>
          <button className='class_button_app_filter' onClick={handleApplyFilter}>
            <FaCheck style={{ color: 'green', fontSize: '20px' }} /> تطبيق الفلتر
          </button>
        </div>
        <div className='class_button_reapp_filter'>
          <button className='class_button_app_filter' onClick={handleResetFilter}>
            <FaTimes style={{ color: 'red', fontSize: '20px' }} /> إعادة التعيين
          </button>
        </div>
      </div>

      <Container className='mt-5'>
        <Row>
          {isLoading && <p className="text-center">جاري تحميل الأنشطة...</p>}

          {!isLoading && Array.isArray(filteredActivities) && filteredActivities.map((activity) => (
            <Col md={4} key={activity.id} className="mb-4">
              <div className="card_wrapper">
                <CardComponent data={activity} />
              </div>
            </Col>
          ))}

          <Col md={4}>
            <Link to="/addActivite" className="add_activity_link">
              <div className='add_activite'>
                <span className='button_add'>+</span>
                <p className='text'>إضافة نشاط جديد</p>
                <p className='description'>
                  قم بإدخال مبادرة أو تدريب أو فعالية جديدة في النظام
                </p>
              </div>
            </Link>
          </Col>
        </Row>
      </Container>

      {/* أزرار التنقل بين الصفحات */}
      <div className="d-flex justify-content-center align-items-center gap-3 my-4">
        <button
          className="class_button_app_filter"
          disabled={currentPage === 1 || isLoading}
          onClick={() => setCurrentPage((prev) => prev - 1)}
        >
          السابق
        </button>

        <span className="fw-bold">الصفحة {currentPage}</span>

        <button
          className="class_button_app_filter"
          disabled={!hasMore || currentPage >= lastPage || isLoading}
          onClick={() => setCurrentPage((prev) => prev + 1)}
        >
          التالي
        </button>
      </div>
    </Styles>
  );
};

export default ManageActiviteComponent;