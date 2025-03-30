import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Popup = ({ setIsOpenPopup, title, children }) => {
  return (
    <div
      onClick={() => setIsOpenPopup(false)}
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.6)",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(5px)",
        zIndex: 10,
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "320px",
          padding: "20px 15px",
          animation: "dropTop .3s linear",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* Header */}
        <div style={{ paddingBottom: "10px" }}>
          <h2 style={{ margin: 0, fontSize: "18px", fontWeight: "bold" }}>
            {title}
          </h2>
          <div
            onClick={() => setIsOpenPopup(false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <AiOutlineClose size={20} color="gray" />
          </div>
        </div>

        {/* Body */}
        <div style={{ marginTop: "10px" }}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
