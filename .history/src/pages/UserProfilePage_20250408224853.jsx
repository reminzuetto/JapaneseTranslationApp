import React from "react";

const user = {
  avatar: "https://i.pravatar.cc/150?img=3", // bạn thay bằng user.avatar
  username: "Nguyễn Văn Duyệt",
  email: "duyet@example.com",
};

const UserProfilePage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md">
      <div className="flex items-center gap-4">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-16 h-16 rounded-full object-cover"
        />
        <div className="min-w-0">
          <p className="text-xl font-semibold truncate">{user.username}</p>
          <p className="text-gray-500 break-all text-sm">{user.email}</p>
        </div>
      </div>

      <div className="mt-6 flex justify-end">
        <button className="text-blue-600 hover:underline text-sm font-medium">
          Chỉnh sửa hồ sơ
        </button>
      </div>
    </div>
  );
};

export default UserProfilePage;
