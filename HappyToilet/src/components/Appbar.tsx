import logo from "../assets/images/logo.png";

const Appbar = () => {
  return (
    <>
      <div className="bg-purple-400 min-h-16 flex justify-start items-center p-3">
        <img src={logo} alt="Logo" className="w-12 mr-3" />
        <p className="text-white">สำนักงานเขตพื้นที่การศึกษามัธยมศึกษาบึงกาฬ</p>
      </div>
    </>
  );
};

export default Appbar;
