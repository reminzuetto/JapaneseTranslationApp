import React, { useState } from "react";

interface NotificationProps {
  id: number;
  title: string;
  content: string;
  time: string;
  seen: boolean;
  onMarkAsSeen: (id: number) => void;
}

const NotificationItem: React.FC<NotificationProps> = ({
  id,
  title,
  content,
  time,
  seen,
  onMarkAsSeen,
}) => {
  const [touched, setTouched] = useState(false);

  const handleClick = () => {
    setTouched(true);
    if (!seen) {
      onMarkAsSeen(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
        seen || touched ? "text-gray-500" : "font-bold"
      }`}
    >
      <div className="text-sm">{title}</div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
};

export default NotificationItem;
