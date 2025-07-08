import { useState } from "react";

export default function App() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-pink-100 p-4">
      <div className="max-w-2xl mx-auto mt-10">
        <div className="rounded-2xl shadow-xl bg-white p-8 space-y-6">
          <h1 className="text-3xl font-bold text-center text-pink-700">
            Đăng ký lớp học tiếng Anh
          </h1>
          <p className="text-center text-gray-600">
            Lớp học kết hợp học & chơi – giúp bé yêu thích tiếng Anh từ sớm!
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Họ và tên phụ huynh"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
              <input
                name="email"
                type="email"
                placeholder="Email hoặc SĐT liên hệ"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded p-2"
              />
              <textarea
                name="message"
                placeholder="Thông tin thêm về bé hoặc câu hỏi (nếu có)"
                value={form.message}
                onChange={handleChange}
                className="w-full border rounded p-2"
              />
              <button type="submit" className="w-full bg-pink-600 text-white p-2 rounded hover:bg-pink-700">
                Gửi đăng ký
              </button>
            </form>
          ) : (
            <div className="text-center text-green-600 font-medium">
              Cảm ơn bạn đã đăng ký! Chúng tôi sẽ liên hệ lại sớm nhất 💌
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
