export default function validateField(field, value, password) {
  if (!value) return "این فیلد الزامی است";

  switch (field) {
    case "email":
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return "ایمیل معتبر نیست";
      return "";
    case "password":
      if (value.length < 6) return "رمز عبور باید حداقل ۶ کاراکتر باشد";
      return "";
    case "confirmPassword":
      if (value !== password) return "رمز عبورها مطابقت ندارند";
      return "";
    default:
      return "";
  }
}