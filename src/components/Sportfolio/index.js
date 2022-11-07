import React from 'react';
import Slider from 'react-slick';
import traveler from '../../assets/travler.gif'
import portfolio from '../../assets/portfolio.gif'
import fooddelivery from '../../assets/fooddelivery.gif'
function Sportfolio(props) {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const { screenMode } = props;
    const data = [
        {
            name: "My Portfolio",
            des: "My Portfolio deployed on Vercel. You can see all my information and contact me here !",
            img: portfolio,
            demo: "https://portfolio-dzt1.vercel.app/",
            source: "https://github.com/hieulechanhkk/Portfolio"
        },
        {
            name: "Traveler",
            des: "This is the app that helps people buy train tickets convenient, anytime, anywhere from right on your phone or laptop.",
            img: traveler,
            demo: "https://portfolio-dzt1.vercel.app/",
            source: "https://github.com/hieulechanhkk/Portfolio"
        },
        {
            name: "Bella Onojie's Food",
            des: "Food delivery Website, with ui components and animated interactions. Responsive all devices.",
            img: fooddelivery,
            demo: "https://exercise-one-naver-byeq.vercel.app/",
            source: "https://github.com/hieulechanhkk/ExerciseOne-Naver"
        },
        {
            name: "Avion Ecommerce",
            des: "My Portfolio deployed on Vercel. You can see all my information and contact me here !",
            img: portfolio,
            demo: "https://portfolio-dzt1.vercel.app/",
            source: "https://github.com/hieulechanhkk/Portfolio"
        }
    ]
    const printProjects = data.map((item, index) => {
        return (
            <div className='portfolio-item'>
                    <img className='portfolio-gif' src={item?.img}></img>
                    <div className='portfolio-information'>
                        <h3>{item?.name}</h3>
                        <p className = {screenMode === "dark" ? "" : "text--light"}>{item?.des}</p>
                        <div className={`portfolio-btn`}>
                            <a href={item?.demo} className={`${screenMode === "dark" ? "" : "light"}`} target='_blank'>Demo</a>
                            <a href={item?.source} className={`${screenMode === "dark" ? "" : "light"}`} target='_blank'>Source</a>
                        </div>
                    </div>
                </div>
        )
    });
    return (
        <div id='portfolio' className={`portfolio ${screenMode === "dark" ? "" : "second--Light"}`}
            data-aos="fade-down"
            data-aos-duration="1050">
            <h1>Portfolio</h1>
            <div className='under-line'></div>
            <Slider className='slider' {...settings}>
                {printProjects}
            </Slider>
        </div>
    );
}

export default Sportfolio;