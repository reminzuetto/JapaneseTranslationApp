import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-white shadow-md">
      {/* Logo */}
      <div className="text-xl font-bold">MyApp</div>

      {/* Phần bên phải: Thông báo + Đăng nhập/Đăng ký */}
      <div className="flex items-center gap-4">
        {/* Nút Đăng nhập / Đăng ký */}
        <button className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
          Sign in
        </button>
        <button className="px-4 py-2 text-blue bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
          Sign up
        </button>
        {/* Icon thông báo */}
        <button className="relative p-2 rounded-full  bg-blue-200 hover:bg-gray-400">
          🔔
          {/* <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span> */}
        </button>
      </div>
    </header>
  );
};

export default Header;
