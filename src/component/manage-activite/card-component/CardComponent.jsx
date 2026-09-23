import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// استيراد الأيقونات المطابقة لتصميم Figma
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import PeopleIcon from '@mui/icons-material/People';

import Image from "../../../assets/images/traning.png"
import { Styles } from './style';
import { AiOutlineTag } from 'react-icons/ai';




const CardComponent = ({ data }) => {


  const navigate = useNavigate();


  const getStatusLabel = (status) => {
    switch (status) {
      case 'pending': return 'قيد الانتظار';
      case 'completed': return 'مكتمل';
      case 'approved': return 'معتمد';
      default: return 'نشط';
    }
  };

 const getTypeLabel = (type) => {
  if (!type) return 'نشاط';
  
  const normalizedType = String(type).trim().toLowerCase();

  switch (normalizedType) {
    case 'initiative':
      return 'مبادرة';
    case 'training':
      return 'تدريب';
    case 'event':
      return 'فعالية';
    default:
      return 'نشاط';
  }
};

const BASE_URL = process.env.REACT_APP_API_BASEURL;

const getImageUrl = (imagePath) => {
  if (!imagePath || typeof imagePath !== "string") {
    return Image;
  }

  const cleanPath = imagePath.trim();

  if (cleanPath.startsWith("http://")) {
    return cleanPath.replace("http://", "https://");
  }

  if (cleanPath.startsWith("https://")) {
    return cleanPath;
  }

  return `${BASE_URL}/${cleanPath.replace(/^\/+/, "")}`;
};
  
  const getTargetLabel = (target) => {
    switch (target) {
      case 'youth': return 'يافعين';
      case 'volunteer': return 'متطوعين';
      case 'both': return 'الجميع';
      default: return target || 'غير محدد';
    }
  };
  console.log("Activity data:", data);
  console.log("image_url:", data?.image_url);
  console.log("image:", data?.image);
  console.log(
    "final image:",
    getImageUrl(data?.image_url || data?.image)
  );

  console.log(
    "CLEAN IMAGE URL:",
    getImageUrl(data?.image_url)
  );
  console.log("بيانات الشارة بالكامل للنشاط:", data?.badges, data?.badge, data?.badge_url);
  return (
    <Styles>
      <div className='card1'>
        <Card
          sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 700
          }}
        >
          <div style={{ position: 'relative' }}>
            
        <span className={`badge_type ${data?.activity_type}`}>
  {data?.badges?.[0]?.icon_url || data?.badge_url ? (
    <img 
      src={getImageUrl(data?.badges?.[0]?.icon_url || data?.badge_url)} 
      alt="badge" 
      style={{ width: '16px', height: '16px', borderRadius: '50%', objectFit: 'cover' }}
    />
  ) : (
    <AiOutlineTag />
  )}
  {getTypeLabel(data?.activity_type)}
</span>

          
          <CardMedia
  component="img"
  image={getImageUrl(data?.image_url)}
  alt={data?.name || "activity image"}
  className="card_media"
  onError={(e) => {
    console.error("فشل تحميل الصورة:", e.currentTarget.src);

    e.currentTarget.onerror = null;
    e.currentTarget.src = Image;
  }}
/>
            
          </div>

          <CardContent className='card_content'>
            <div className='container_title_status'>
               {/* اسم النشاط */}
              <Typography gutterBottom variant="h6" component="div" className="activity_title">
                {data?.name || "اسم النشاط"}
              </Typography>
              {/* شارة الحالة */}
                           <button className={`status_btn ${data?.approval_status}`}>
                {getStatusLabel(data?.approval_status)}
              </button>

             
            </div>

            <div className='activity_details_list'>
              <div className='detail_item'>
                <CalendarTodayIcon className='icon' />
                <span>{data?.start_date || "التاريخ غير محدد"}</span>
              </div>
            </div>

            <div className='detail_item'>
              <LocationOnIcon className='icon' />
              <span>{data?.office_name || "الموقع غير محدد"}</span>
            </div>

            <div className='detail_item points'>
              <EmojiEventsIcon className='icon' />
              <span>+{data?.completion_points ?? 0} نقاط إضافية</span>
            </div>
            <div className='detail_item target'>
              <PeopleIcon className='icon' />
              <span>الفئة المستهدفة: {getTargetLabel(data?.target_audience)}</span>
            </div>

            {/* نص الطلبات المعلقة بالأسفل */}
            <p className='pending_requests_text'><b>
              يوجد {data?.pending_requests_count ?? 0} طلبات تسجيل معلقة
            </b></p>
<CardActions className='card_action'>

  {["approved", "pending"].includes(data?.approval_status) && (
    <Link to={`/editActivite/${data?.id}`}>
      <Button className="button edit_btn">
        تعديل
      </Button>
    </Link>
  )}

  <Link to={`/DetailsActivite/${data?.id}`}>
    <Button
      className="button details_btn"
      fullWidth={data?.approval_status === "completed"}
    >
      عرض التفاصيل
    </Button>
  </Link>

</CardActions>
          </CardContent>
        </Card>
      </div>
    </Styles>
  )
}

export default CardComponent;