import React, { useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { FiCamera, FiEye, FiEyeOff } from 'react-icons/fi';
import axios from 'axios';
import { Styles } from './style';

const ViewProfileAdmin = () => {
  const { id } = useParams();
  const adminId = id || localStorage.getItem('adminId') || localStorage.getItem('userId') || 2;

  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    role: '',
    position: '',
    joinDate: '',
    password: '************',
    image: null,
  });

  const rawBaseUrl = process.env.REACT_APP_API_BASEURL || 'https://azem.46.224.99.67.nip.io';
  const cleanBaseUrl = rawBaseUrl.replace(/\/api\/?$/, '').replace(/\/$/, '');

  const fetchAdminData = useCallback(async () => {
    if (!adminId) return;
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const requestUrl = `${cleanBaseUrl}/api/admin/admins/${adminId}`;

      const response = await axios.get(requestUrl, {
        headers: token ? { Authorization: `Bearer ${token}` } : {}
      });

      const data = response.data?.data;

      if (data) {
        let primaryRole = 'super-admin';
        if (Array.isArray(data.roles) && data.roles.length > 0) {
          primaryRole = typeof data.roles[0] === 'object' ? data.roles[0].name : data.roles[0];
        } else if (typeof data.roles === 'string') {
          primaryRole = data.roles;
        }

        setFormData({
          username: data.username || '',
          email: data.email || '',
          phone: data.phone || '',
          role: primaryRole,
          position: data.position || 'manager',
          joinDate: data.created_at
            ? new Date(data.created_at).toLocaleDateString('ar-EG')
            : '25/4/2026',
          password: '************',
          image: data.image || null,
        });

        if (data.image) {
          setImagePreview(data.image);
        } else {
          setImagePreview(null);
        }
      }
    } catch (error) {
      console.error(' حدث خطأ أثناء جلب البيانات:', error.response || error);
    } finally {
      setLoading(false);
    }
  }, [adminId, cleanBaseUrl]);

  // تنفيذ طلب البيانات فور تغيّر adminId في الرابط
  useEffect(() => {
    fetchAdminData();
  }, [adminId, fetchAdminData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      const dataToSend = new FormData();

      dataToSend.append('username', formData.username);
      dataToSend.append('email', formData.email);
      dataToSend.append('phone', formData.phone);

      if (formData.image instanceof File) {
        dataToSend.append('image', formData.image);
      }

      const response = await axios.post(
        `${cleanBaseUrl}/api/admin/admins/${adminId}`,
        dataToSend,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            ...(token && { Authorization: `Bearer ${token}` })
          }
        }
      );

      if (response.data?.status === 'Success' || response.status === 200) {
        alert('تم حفظ التعديلات بنجاح!');
        if (response.data?.data?.image) {
          setImagePreview(response.data.data.image);
        }
      }
    } catch (error) {
      console.error('Error updating admin profile:', error);
      alert('حدث خطأ أثناء حفظ التعديلات.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Styles>
      <h1 className="title">التفاصيل الشخصية</h1>
      <p className="subtitle">
        يمكنك تعديل البيانات الشخصية من هنا. تأكد من دقة المعلومات المدخلة لضمان وصولها بشكل صحيح.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="form-layout">
          <div className="fields-container">
            <div className="row-full">
              <div className="form-group">
                <label>اسم المشرف الكامل</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="اسم المشرف"
                  />
                </div>
              </div>
            </div>

            <div className="row-full">
              <div className="form-group disabled">
                <label>اسم المستخدم (لا يمكن تغييرها)</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    value={formData.username}
                    disabled
                  />
                </div>
              </div>
            </div>

            <div className="row-two-columns">
              <div className="form-group disabled">
                <label>المنصب الوظيفي (لا يمكن تغييرها)</label>
                <div className="input-wrapper">
                  <select disabled value={formData.position || 'manager'}>
                    <option value="manager">مدير الأنشطة</option>
                    <option value="supervisor">مشرف</option>
                    <option value="admin">مسؤول نظام</option>
                  </select>
                </div>
              </div>

              <div className="form-group disabled">
                <label>تاريخ الأنضمام (لا يمكن تغييرها)</label>
                <div className="input-wrapper">
                  <input type="text" value={formData.joinDate} disabled />
                </div>
              </div>
            </div>

            <div className="row-two-columns">
              <div className="form-group">
                <label>البريد الإلكتروني</label>
                <div className="input-wrapper">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>رقم الهاتف</label>
                <div className="input-wrapper">
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="row-full">
              <div className="form-group">
                <label>كلمة السر</label>
                <div className="input-wrapper">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.password}
                    readOnly
                  />
                  <span
                    className="icon-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                  </span>
                </div>
                <button
                  type="button"
                  className="change-password-btn"
                  onClick={() => alert('تغيير كلمة السر')}
                >
                  أنقر هنا لتغيير كلمة السر
                </button>
              </div>
            </div>
          </div>

          <label htmlFor="avatar-upload">
            <div className="image-upload-box">
              <div className="icon-wrapper">
                {imagePreview ? (
                  <img 
                    src={imagePreview} 
                    alt="Admin Avatar" 
                    onError={() => {
                      setImagePreview(null);
                    }}
                  />
                ) : (
                  <FiCamera size={24} />
                )}
              </div>
              <span className="upload-text">رفع صورة (اختياري)</span>
              <input
                id="avatar-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
              />
            </div>
          </label>
        </div>

        <div className="roles-section">
          <div className="section-title">
            الصلاحيات الممنوحة : (لا يمكن تغييرها)
          </div>
          <div className="roles-grid">
            <div
              className={`role-card ${
                formData.role === 'volunteer-admin' ? 'selected' : ''
              }`}
            >
              <div className="radio-circle" />
              <div className="role-name">مشرف متطوعين</div>
              <div className="role-desc">
                إدارة شؤون المتطوعين من القبول وتوزيع المهام واعتماد الساعات وتقييم الأداء
              </div>
            </div>

            <div
              className={`role-card ${
                formData.role === 'youth-admin' ? 'selected' : ''
              }`}
            >
              <div className="radio-circle" />
              <div className="role-name">مشرف يافعين</div>
              <div className="role-desc">
                التخطيط للأنشطة الموجهة لليافعين، الإشراف على تنفيذها ميدانياً، ومتابعة حضور المستفيدين
              </div>
            </div>

            <div
              className={`role-card ${
                formData.role === 'super-admin' || formData.role === 'admin'
                  ? 'selected'
                  : ''
              }`}
            >
              <div className="radio-circle" />
              <div className="role-name">مشرف عام</div>
              <div className="role-desc">
                إدارة إعدادات المنصة، التحكم بصلاحيات المشرفين، والرقابة الشاملة على التقارير والبيانات
              </div>
            </div>
          </div>
        </div>

        <div className="submit-area">
          <button type="submit" disabled={loading}>
            {loading ? 'جاري الحفظ...' : 'حفظ التعديل'}
          </button>
        </div>
      </form>
    </Styles>
  );
};

export default ViewProfileAdmin;