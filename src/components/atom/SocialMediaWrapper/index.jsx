const SocialMediaWrapper = ({ children }) => {
  return (
    <div className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border border-slate-300 text-slate-300 hover:border-black hover:bg-white hover:text-black">
      {children}
    </div>
  );
};

export default SocialMediaWrapper;
