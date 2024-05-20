import { Parallax } from "react-parallax";

const Cover = ({ img, title, subtitle }) => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div className="hero h-[700px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className=" bg-black bg-opacity-30 rounded py-28 px-48">
              <h1 className="mb-5 text-5xl font-bold uppercase text-white">
                {title}
              </h1>
              <p className="mb-5 text-white">{subtitle}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
