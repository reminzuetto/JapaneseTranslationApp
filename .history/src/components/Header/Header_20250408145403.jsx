import React from "react";
import useClickOutside from "../../hooks/useClickOutside";
import notificationsData from "/src/Data.js";
import NotificationItem from "../Header/NotificationItem";
import { Link } from "react-router-dom";

const Header = ({ user, setUser }) => {
  const { show, setShow, nodeRef } = useClickOutside();
  const [notifications, setNotifications] = React.useState(notificationsData);

  const markAsSeen = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, seen: true } : item))
    );
  };

  return (
    <header className="flex items-center justify-end p-4 bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="flex items-center gap-4">
        {user ? (
          <div className="relative" ref={nodeRef}>
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              <img
                src={user.avatar}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <span>{user.username}</span>
            </div>

            {show && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg p-4 z-50">
                <p className="font-medium">{user.username}</p>
                <p className="text-sm text-gray-500">{user.email}</p>
                <hr className="my-2" />
                <button
                  onClick={() => {
                    setShow(false);
                    if (typeof user.setUser === "function") user.setUser(null);
                  }}
                  className="w-full text-left text-red-500 hover:underline"
                >
                  Log out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <Link to="/signin">
              <button className="px-4 py-2 text-white bg-blue-300 rounded-lg hover:bg-blue-500">
                Sign in
              </button>
            </Link>
            <Link to="/signup">
              <button className="px-4 py-2 text-blue bg-gray-200 rounded-lg hover:bg-blue-500 hover:text-white">
                Sign up
              </button>
            </Link>
          </>
        )}
        {/* Thông báo */}
        <div className="relative" ref={nodeRef}>
          <div
            className="relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer"
            onClick={() => setShow(!show)}
          >
            🔔
            {notifications.some((item) => !item.seen) && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </div>

          {show && (
            <div className="absolute top-full -left-2 min-w-[250px] translate-x-[-100%] mt-2 bg-white shadow-lg rounded-lg border border-gray-200">
              {notifications.length > 0 ? (
                notifications.map((item) => (
                  <NotificationItem
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    time={item.time}
                    seen={item.seen}
                    onMarkAsSeen={markAsSeen}
                  />
                ))
              ) : (
                <div className="p-4 text-center text-gray-400">
                  Không có thông báo mới
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
