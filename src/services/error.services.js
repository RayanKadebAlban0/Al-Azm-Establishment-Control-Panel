// src/services/error.services.js

// القاموس العام للحقول الشائعة في التطبيق
const FIELD_NAMES = {
  location_name: "اسم الموقع",
  title: "العنوان",
  description: "الوصف",
  time: "الوقت",
  date: "التاريخ",
  phone: "رقم الهاتف",
  email: "البريد الإلكتروني",
  password: "كلمة المرور",
  name: "الاسم",
  // أضف أي حقل جديد هنا فقط عند الحاجة
};

/**
 * دالة ذكية لمسح وتحويل اسم الحقل غير المعرف
 */
const formatFieldName = (field) => {
  if (FIELD_NAMES[field]) return FIELD_NAMES[field];
  
  // في حال لم يكن الحقل معرفاً، يتم استبدال _ بمسافة ليكون مقروءاً للمستخدم
  return field.replace(/_/g, " ");
};

export const handleApiError = (error) => {
  if (!error.response) {
    return "تعذر الاتصال بالسيرفر، يرجى التأكد من الاتصال بالإنترنت.";
  }

  const status = error.response.status;
  const data = error.response.data;

  // أخطاء التثبت من البيانات (Validation Errors)
  if (status === 422 || status === 400) {
    const errorSource = data.errors || data;

    if (typeof errorSource === "object" && errorSource !== null) {
      const messages = [];

      Object.keys(errorSource).forEach((field) => {
        const translatedField = formatFieldName(field);
        const fieldErrors = errorSource[field];

        if (Array.isArray(fieldErrors)) {
          fieldErrors.forEach((msg) => {
            if (msg.includes("must be a string")) {
              messages.push(`• حقل (${translatedField}) يجب أن يكون نصاً.`);
            } else if (msg.includes("required")) {
              messages.push(`• حقل (${translatedField}) مطلوب ولا يمكن تركه فارغاً.`);
            } else if (msg.includes("taken") || msg.includes("already exists")) {
              messages.push(`• قيمة (${translatedField}) مستخدمة من قبل.`);
            } else {
              messages.push(`• ${translatedField}: ${msg}`);
            }
          });
        } else if (typeof fieldErrors === "string") {
          messages.push(`• ${translatedField}: ${fieldErrors}`);
        }
      });

      if (messages.length > 0) {
        return messages.join("\n");
      }
    }

    if (data.message) return data.message;
  }

  if (status === 401) return "انتهت جلسة التسجيل، يرجى إعادة تسجيل الدخول.";
  if (status === 403) return "ليس لديك الصلاحية الكافية للقيام بهذا الإجراء.";
  if (status === 404) return "العنصر المطلوب غير موجود.";
  if (status === 500) return "حدث خطأ في السيرفر، يرجى المحاولة لاحقاً.";

  return "حدث خطأ غير متوقع، يرجى المحاولة مرة أخرى.";
};