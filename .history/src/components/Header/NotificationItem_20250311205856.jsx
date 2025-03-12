const NotificationItem = ({ id, title, time, seen, onMarkAsSeen }) => {
  const handleClick = () => {
    if (!seen) {
      onMarkAsSeen(id);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`py-3 px-4 border-b border-gray-200 cursor-pointer hover:bg-gray-100 ${
        seen ? "text-gray-500" : "font-bold"
      }`}
    >
      <div className="text-sm">{title}</div>
      <div className="text-xs text-gray-400">{time}</div>
    </div>
  );
};

export default NotificationItem;
