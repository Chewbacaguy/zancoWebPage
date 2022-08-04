import React, { useState } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/home/Materials.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function Materials() {
    const [sliderRef, setSliderRef] = useState(null)

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    const cards = [
        {
            img: '/img/huacales.png',
            material: lang.materialsCrates
        },
        {
            img: '/img/foam_slider.png',
            material: lang.materialsFoams
        },
        {
            img: '/img/emplaye.png',
            material: lang.materialsPlastics
        },
        {
            img: '/img/cartones.png',
            material: lang.materialsCardboards
        },
    ]

    return (
        <div className={styles.flex__container}>
            <div className={styles.container}>
                <div className={styles.grid__title__arrows}>
                    <span className={styles.title}>{lang.materialsTitle}</span>
                    <div className={styles.grid__arrows}>
                        <button className={styles.arrow} onClick={() => sliderRef?.slickPrev()}> {'<'} </button>
                        <button className={styles.arrow} onClick={() => sliderRef?.slickNext()}> {'>'} </button>
                    </div>
                </div>
                <Slider className="mt-3" ref={setSliderRef} {...settings}>
                    {
                        cards.map((card, i) => {
                            return (<_SliderImage img={card.img} key={i} material={card.material}></_SliderImage>)
                        })
                    }
                </Slider>
                <div className='text-center my-4'>
                    {
                        cards.map((card, i) => {
                            return (<button className={styles.button__material} key={i} onClick={() => sliderRef?.slickGoTo(i)}>{card.material}</button>)
                        })
                    }
                </div>
            </div >
        </div>
    );
}

function _SliderImage({ img, material }) {
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div>
            <div className={styles.img__fill}>
                <img src={img} />
                <div className={styles.material}>
                    {material}
                </div>
                <div className={styles.button}>
                    <button>{lang.materialsSeeMore}</button>
                </div>
            </div>
        </div>

    )
}