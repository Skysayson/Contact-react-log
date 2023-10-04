import ContactLog from "./Contact-log";

function CrudButtons() 
{
  return (
    <div className="flex justify-evenly pt-[2rem]">
      <div className="flex">
        <button
          onClick={ContactLog}
          type="button"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Add Contact
        </button>
      </div>

      <div className="flex">
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Update Contact
        </button>
      </div>

      <div className="flex">
        <button
          type="submit"
          class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Delete Contact
        </button>
      </div>
    </div>
  );
}

export default CrudButtons;
