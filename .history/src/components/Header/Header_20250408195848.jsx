import React from "react";
import notificationsData from "/src/Data.js";
import NotificationItem from "../Header/NotificationItem";
import { Link } from "react-router-dom";
import useClickOutside from "/src/hooks/useClickOutside.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

const Header = ({ user, setUser }) => {
  const [notifications, setNotifications] = React.useState(notificationsData);

  const {
    show: showUserDropdown,
    setShow: setShowUserDropdown,
    nodeRef: userDropdownRef,
  } = useClickOutside(".user-toggle");

  const {
    show: showNotifications,
    setShow: setShowNotifications,
    nodeRef: notiDropdownRef,
  } = useClickOutside(".noti-toggle");

  const markAsSeen = (id) => {
    setNotifications((prev) =>
      prev.map((item) => (item.id === id ? { ...item, seen: true } : item))
    );
  };

  return (
    <header className="flex items-center justify-end p-4 bg-white shadow-md top-0 left-0 w-full z-50">
      <div className="flex items-center gap-4">
        {/* User */}
        {user ? (
          <div className="relative" ref={userDropdownRef}>
            <div
              className="user-toggle flex items-center gap-2 cursor-pointer"
              onClick={() => {
                setShowUserDropdown(!showUserDropdown);
                setShowNotifications(false);
              }}
            >
              <img
                src={user?.avatar || "/src/assets/avatarDefaultPicture.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              {/* <span>{user.username}</span> */}
            </div>

            {showUserDropdown && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg p-2 z-50">
                <div className="flex gap-2 items-center hover:bg-gray-300 rounded-lg p-2 cursor-pointer">
                  <img
                    src={user.avatar}
                    alt="avatar"
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium">{user.username}</p>
                    {/* <p className="text-sm text-gray-500">{user.email}</p> */}
                  </div>
                </div>
                {/* <div className="flex items-end justify-end text-gray-500 mr-2 mb-2 cursor-pointer hover:text-blue-300 rounded-lg">
                  <FontAwesomeIcon icon={faPenToSquare} className="mr-2" />
                  <p className="text-sm mt-2">Edit profile</p>
                </div> */}
                <button
                  onClick={() => {
                    setShowUserDropdown(false);
                    setUser(null);
                  }}
                  className="w-full text-left text-red-500 hover:underline mt-2 cursor-pointer rounded-lg flex items-end gap-2 p-2"
                >
                  <FontAwesomeIcon
                    icon={faArrowRightFromBracket}
                    className="mr-2"
                  />
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

        {/* Notifications */}
        <div className="relative" ref={notiDropdownRef}>
          <div
            className="noti-toggle relative p-2 rounded-full bg-blue-200 hover:bg-blue-400 cursor-pointer"
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserDropdown(false);
            }}
          >
            🔔
            {notifications.some((item) => !item.seen) && (
              <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full"></span>
            )}
          </div>

          {showNotifications && (
            <div className="absolute top-full -left-2 min-w-[250px] translate-x-[-100%] mt-2 bg-white shadow-lg rounded-lg border border-gray-200 z-50">
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
