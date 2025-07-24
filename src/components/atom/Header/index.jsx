const Header = ({ txt }) => {
  return (
    <div className="w-full">
      <div className="mt-6">
        <p className="mb-4 mt-0 text-center">
          <span className="text-[40px]">
            <strong className="font-extrabold text-[#181818]">{txt}</strong>
          </span>
        </p>
      </div>
    </div>
  );
};

export default Header;
