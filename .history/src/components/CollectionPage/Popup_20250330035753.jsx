import { AiOutlineCloseSquare } from "react-icons/ai";
const Popup = ({ setIsOpenPopup }) => {
  return (
    <div
      onClick={setIsOpenPopup.bind(this, false)}
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
      }}
    >
      {/* Content */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          background: "white",
          borderRadius: "8px",
          width: "250px",
          padding: "20px 10px",
          animation: "dropTop .3s linear",
        }}
      >
        {/* Header */}
        <div
          style={{ borderBottom: "1px solid lightgray", paddingBottom: "10px" }}
        >
           <div className="grid grid-cols-4 gap-8">
        <button
          onClick={() => setIsOpenPopup(true)}
          className="bg-blue-500 rounded-lg flex justify-center items-center text-white hover:bg-blue-600 cursor-pointer shadow-lg p-3 h-[100px]"
        >
          <FontAwesomeIcon icon={faPlus} className="mr-2" />
          New collection
        </button>
          <div
            onClick={setIsOpenPopup.bind(this, false)}
            style={{
              cursor: "pointer",
              position: "absolute",
              top: 10,
              right: 10,
            }}
          >
            <AiOutlineCloseSquare />
          </div>
        </div>
        {/* Body */}
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter collection name"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        {/* Footer */}
        <footer
          style={{ borderTop: "1px solid lightgray", paddingTop: "10px" }}
        >
          <div className="flex justify-end mt-4">
            <button
              onClick={handleNewCollection}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Create
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
export default Popup;
