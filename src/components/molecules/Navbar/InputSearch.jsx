const InputSearch = () => {
  return (
    <div className="h-12  relative">
      <form className="h-full">
        <input
          className="h-full font-medium text-[14px] focus:border-gray-500 hover:border-gray-500 focus:outline-none border-1 px-10 border-gray-700"
          placeholder="Cari Produk Puma.com"
          type="text"
        />
        <button className="absolute top-3 start-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            fill="#fff"
            viewBox="0 0 256 256"
          >
            <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
