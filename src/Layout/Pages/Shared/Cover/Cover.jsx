import { Parallax } from 'react-parallax';
const Cover = ({ img, pageTitle, pageText, height }) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
       <div className="hero" style={{height: `${height}` }}>
                <div className="hero-content text-center text-neutral-content  py-24 opacity-50 bg-[#151515] w-3/4">
                    <div className="">
                        <h1 style={{ textShadow: '1px 1px red' }} className="mb-2 text-6xl font-bold text-whit uppercase">{pageTitle}</h1>
                        <p className="mb-5 text-white">{pageText}</p>
                    </div>
                </div>
            </div>
    </Parallax>
);
           
};

export default Cover;