import React, { useState, useEffect } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import styles from '../../styles/home/Materials.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function Materials() {
    const [sliderRef, setSliderRef] = useState(null)
    const [width, setWidth] = useState(0);
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    
    useEffect(() => {
        window.addEventListener('load', () => {
            setWidth(window.innerWidth);
        });

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    });

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

            {/* MODAL FLOORING */}
            <div className="modal fade" id="formModalFlooring" tabIndex="-1" aria-labelledby="formModalFlooringLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalFlooringLabel">Información Huacales/Tarimas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 className="modal-main-title">Tarimas/Huacales</h1>
                            <div className="modal-inner-info">
                                <p> Una tarima industrial es una estructura de transporte plana que soporta mercancías de
                                    manera estable mientras son levantadas por un montacargas, cargador frontal, grúa o grúa
                                    vertical. Las tarimas industriales son la base estructural de las unidades de carga y permiten un
                                    transporte y almacenamiento eficientes. Los contenedores de carga o envío generalmente se
                                    envían en paletas aseguradas con correas, envoltura de goma o envoltura retráctil. Desde su
                                    invención en el siglo XX, su uso ha suplantado en gran medida las formas de caja más antiguas,
                                    como cajas y barriles, y los envases modernos, como las cajas de cartón corrugado y los
                                    contenedores intermodales, comúnmente utilizados para el transporte de carga a granel.
                                </p>

                                <div> 
                                    <img className= "img1_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img3_huacal" src="/img/huacal_img_big.png" />
                                </div>

                                <p>
                                Una tarima industrial de madera está formada por tres o cuatro vigas longitudinales que
                                soportan varias paletas sobre las que se coloca la mercancía. Una tarima cuadrada o casi
                                cuadrada ayuda a evitar que la carga se vuelque. Las tarimas tienen la cualidad de que se pueden
                                mover fácilmente dentro de los edificios, son apilables entre sí mismas, accesibles para
                                montacargas y elevadores hidráulicos, y funcionan dentro de almacenes automatizados. Las
                                tarimas deben embalarse de forma segura en contenedores intermodales o furgonetas para
                                evitar el transporte aéreo.
                                </p>
                                <div> 
                                    <img className= "img3_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img1_huacal" src="/img/huacal2_img_big.png" />
                                </div>

                                <p>
                                Una tarima industrial estándar de madera (122 cm × 102 cm × 15 cm) con una capacidad
                                de carga estática de 3 toneladas cortas (2,7 toneladas largas; 2,7 t) y 1 tonelada corta (0,89
                                -tonelada larga; 0,91 t) de capacidad dinámica, pesará aproximadamente 15 a 22 kg.
                                </p>
                            </div>

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL FLOORING */}

            {/* MODAL PLASTERS */}
            <div className="modal fade" id="formModalPlasters" tabIndex="-1" aria-labelledby="formModalPlastersLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalPlastersLabel"> Información Emplayes</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 className="modal-main-title">Emplayes</h1>
                            <div className="modal-inner-info">
                                <p> Un emplaye es un material de plástico transparente, este cuenta con una alta resistencia
                                    mecánica y un bajo espesor. Las propiedades con las que está conformado principalmente es por
                                    resina de polietileno de baja densidad, además cuenta con polietileno de ultra baja densidad
                                    para generar adhesión.
                                </p>

                                <div> 
                                    <img className= "img1_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img3_huacal" src="/img/huacal_img_big.png" />
                                </div>

                                <p>
                                Un emplaye tiene el propósito de envolver y contener diversos materiales para facilitar
                                su transportación y almacenamiento, manteniéndolos en un ambiente seguro durante el
                                proceso. Cuenta con diversos tamaños, por lo que tiene una alta adaptabilidad para diferentes
                                productos en la industria. Este puede ser aplicado manualmente o mediante máquinas
                                automáticas, en donde se envuelve totalmente el producto para brindarle estabilidad. Cuenta
                                con características como impermeabilidad, tener un menor espesor, adaptabilidad a productos
                                sensibles al calor y una gran estabilidad, permitiendo una mayor velocidad al realizar el proceso
                                de embalaje.
                                </p>
                                <div> 
                                    <img className= "img3_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img1_huacal" src="/img/huacal2_img_big.png" />
                                </div>

                                <p>
                                En Zanco se busca simplificar y facilitar la Integración Industrial, por lo que el uso del
                                emplaye nos asegura llegar a tener un proceso óptimo que mantenga los estándares de calidad
                                establecidos para brindarle el mejor servicio al cliente durante la transportación de sus
                                productos.
                                </p>
                            </div>  

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL PLASTERS */}

            {/* MODAL FOAMS */}
            <div className="modal fade" id="formModalFoams" tabIndex="-1" aria-labelledby="formModalFoamsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalFoamsLabel">Información Foams y derivados</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 className="modal-main-title">Foams y derivados</h1>
                            <div className="modal-inner-info">
                                <p>El foam es un material elaborado con polietileno y/o poliuretano, este se obtiene
                                    inyectando gas a presión a estos compuestos químicos, la estructura del resultado final posee
                                    elasticidad y resistencia al agua. El foam es caracterizado por ser resistente a materiales
                                    derivados del petróleo. Este material es muy práctico gracias a su ligereza, y por su estructura
                                    puede ser fabricada de diferentes tamaños.
                                </p>

                                <div> 
                                    <img className= "img1_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img3_huacal" src="/img/huacal_img_big.png" />
                                </div>

                                <p>
                                Su función principal y la razón por la que se utiliza frecuentemente es porque es ligero y
                                se puede fabricar en diferentes dimensiones. Se utiliza sobre todo como relleno de embalaje
                                debido a que envuelve los productos, este los protege, aísla, amortigua y fija los productos por el
                                foam en el interior de la caja. El uso de foam ha sido usado en muchas industrias, algunas de
                                estas son: industria automotriz, industria de juguetes, industria de calzado, industria mueblera,
                                etc…
                                </p>
                                <div> 
                                    <img className= "img3_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img1_huacal" src="/img/huacal2_img_big.png" />
                                </div>

                                <p>
                                Nosotros buscamos agilizar la adquisición de materiales a través del sistema MI (Motor
                                Integral) y con eso poder brindar los mejores materiales como en el caso del foam,veste brinda
                                el servicio necesario para que los productos del cliente puedan ser transportados en perfectas
                                condiciones y en tiempo.
                                </p>
                            </div>  

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL FOAMS */}

            {/* MODAL CARDBOARDS */}
            <div className="modal fade" id="formModalCardboards" tabIndex="-1" aria-labelledby="formModalCardboardsLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalCardboardsLabel">Información Cartones</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <h1 className="modal-main-title">Cartones</h1>
                            <div className="modal-inner-info">
                                <p> Las cajas de cartón son la solución más común para empaquetar, almacenar y enviar
                                    diferentes tipos de productos. Su resistencia evita las deformaciones propias del apilamiento y
                                    están diseñadas para soportar cambios bruscos de temperatura sin dañar el interior.

                                </p>

                                <div> 
                                    <img className= "img1_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal_img_big.png" />
                                    <img className= "img3_huacal" src="/img/huacal_img_big.png" />
                                </div>

                                <p>
                                La fiabilidad y calidad de las cajas de cartón pueden ser verificadas a través de
                                organizaciones como la AFCO (Asociación Española de Fabricantes de Envases y Embalajes de
                                Cartón Ondulado), las cuales se encargan de proteger el bien común y confirmar que productos
                                como cajas de cartón estén hechos de buenos materiales y puedan ser utilizados de manera
                                apropiada. Estas organizaciones marcan los productos de calidad con su logo, con el cual los
                                clientes pueden comprobar que este sea uno de calidad.
                                </p>
                                <div> 
                                    <img className= "img3_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img2_huacal" src="/img/huacal2_img_big.png" />
                                    <img className= "img1_huacal" src="/img/huacal2_img_big.png" />
                                </div>

                                <p>
                                Las cajas de cartón también tienen la cualidad de que estas son naturalmente ecológicas.
                                Las cajas de cartón ondulado marcadas con el código RESY, el cual denomina que la caja de
                                cartón en realidad es reciclable, son respetuosas al medio ambiente y una manera para proteger
                                al mundo de toda la contaminación que se puede encontrar hoy en día. Hay cajas de cartón tan
                                amigables con el medio ambiente que pueden estar compuestas con por lo menos 70% de papel
                                reciclado - con unas llegando a 100% de papel reciclado para la fabricación del canal interior de
                                la caja.
                                </p>
                            </div>  

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL CARDBOARDS */}


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
                    <button data-bs-toggle="modal" data-bs-target="#formModalFlooring">{lang.materialsSeeMore}</button>
                </div>
            </div>
        </div>

    )
}