{
  isPopupOpen && (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-30 backdrop-blur-sm z-10">
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 relative">
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <FontAwesomeIcon icon={faTimes} />
        </button>
        <h2 className="text-lg font-semibold mb-4">New Collection</h2>
        <input
          type="text"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter collection name"
          value={newCollectionName}
          onChange={(e) => setNewCollectionName(e.target.value)}
        />
        <div className="flex justify-end mt-4">
          <button
            onClick={handleNewCollection}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
