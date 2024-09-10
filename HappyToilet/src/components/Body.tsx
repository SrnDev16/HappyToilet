import SchoolLink from "../data/LinkClip";
import toilet from "../assets/images/toilet.jpg";

const Body = () => {
  return (
    <>
      <div className="md:max-w-3xl mx-auto  p-2">
        <div className="flex justify-center items-center my-2">
          <img src={toilet} alt="" className="w-10 mr-2" />
          <p>
            รวม Link video โครงการ "สุขาดี มีความสุข" โรงเรียนในสังกัด
            สพม.บึงกาฬ
          </p>
        </div>
        <div className="table table-fixed w-full">
          <div className="table-header-group">
            <div className="table-row">
              <div className="table-cell text-center border text-xl p-1">
                โรงเรียน
              </div>
              <div className="table-cell text-center border text-xl p-1">
                Link
              </div>
            </div>
          </div>
          <div className="table-row-group">
            {SchoolLink.map((data, index) => (
              <div className="table-row" key={index}>
                <div
                  className={`table-cell border p-1 ${
                    index % 2 === 0 ? "bg-slate-200" : "bg-white"
                  }`}
                >
                  {data.name}
                </div>
                <div
                  className={`table-cell border p-1 ${
                    index % 2 === 0 ? "bg-slate-200" : "bg-white"
                  }`}
                >
                  <p className="truncate underline text-blue-400">
                    <a href={data.linkVideo} target="_blank">
                      {data.linkVideo}
                    </a>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
