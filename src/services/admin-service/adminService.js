import { getRequest, postRequest } from '../https.services';

// دالة جلب قائمة المشرفين
export const fetchAdmins = async () => {
  try {

      const response = await getRequest('/admin/admins');
    return response; 
  } catch (error) {
    console.error("خطأ في جلب بيانات الأدمن:", error);
    throw error;
  }
};

// اضافة ادمن
export const createAdmin = async (formData) => {
  try {
    const response = await postRequest('/admin/admins', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    console.error("خطأ في إضافة الأدمن:", error);
    throw error;
  }
};