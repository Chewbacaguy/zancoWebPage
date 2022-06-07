import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';
import { useRouter } from 'next/router';
import React, { useState, useEffect, setState } from 'react'
import es from '../locales/es';
import en from '../locales/en';

var width;

export default function Index() {

    const router = useRouter();
    const locale = router.locale;
    const lang = locale === 'es' ? es : en;
    // var width = window.innerWidth;
    const [width, setWidth] = useState(0);

    // var width;
    // console.log(width);

    useEffect(() => {
        window.addEventListener('load', () => {
            setWidth(window.innerWidth);
            // width = window.innerWidth;
            // console.log(width);
            // setState({ width: window.innerWidth })
        });

        window.addEventListener('resize', () => {
            // width = window.innerWidth;
            // console.log(width);
            // setState({ width: window.innerWidth })
            setWidth(window.innerWidth);
        })
    })

    return (
        <Layout>

            {/* MODAL */}
            <div className="modal fade" id="formModal" tabIndex="-1" aria-labelledby="formModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalLabel">Registro de interés</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe frameBorder="0" style={{ height: '500px', width: '99%', border: 'none' }}
                                src='https://forms.zohopublic.com/santiagotorres/form/RegistrodeInteres/formperma/DFOqubpt0eTbJfODHp_HSOP-wD9m5BAPQnH9ZBgSTms'></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL */}

            {/* MODAL FLOORING */}
            <div className="modal fade" id="formModalFlooring" tabIndex="-1" aria-labelledby="formModalFlooringLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="formModalFlooringLabel">Tarimas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe frameBorder="0" style={{ height: '500px', width: '99%', border: 'none' }} src='https://forms.zohopublic.com/santiagotorres/form/Tarimas/formperma/gXuD0csw0ur6aWOHjVTSB1SCEBEy6MkyZFvQADT8dgA'></iframe>
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
                            <h5 className="modal-title" id="formModalPlastersLabel">Polietileno</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe frameBorder="0" style={{ height: '500px', width: '99%', border: 'none' }} src='https://forms.zohopublic.com/santiagotorres/form/Polietileno/formperma/A4e4JqaxF8BnK-zyjDIQSzHey7lalHw5_un7afR4OsY'></iframe>
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
                            <h5 className="modal-title" id="formModalFoamsLabel">Foams y derivados</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe frameBorder="0" style={{ height: '500px', width: '99%', border: 'none' }} src='https://forms.zohopublic.com/santiagotorres/form/Foamysusderivados/formperma/UcttXzN41nM9I10v-A49DUaWEAvXZSpnoPyf8xDwytk'></iframe>
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
                            <h5 className="modal-title" id="formModalCardboardsLabel">Cartones</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <iframe frameBorder="0" style={{ height: '500px', width: '99%', border: 'none' }} src='https://forms.zohopublic.com/santiagotorres/form/Cartones/formperma/7MKwAVASyIBnzsQwtpndnU3HpefX9-C0yvO5ViFiePw'></iframe>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* END MODAL CARDBOARDS */}

            <header className={styles.header}>
                <div className="h-100 g-0">
                    <div className="row mt-5 h-100 g-0 d-flex">
                        <div className="col-1 align-self-center text-center">
                            <div className="row">
                                <a className={styles.socials} href="https://www.facebook.com/zancofb" target="_blank" rel="noreferrer">
                                    <Icon icon="bxl:facebook" />
                                </a>
                            </div>
                            <div className="row">
                                <a className={styles.socials} href="https://www.instagram.com/zanco_ig/" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:instagram-fill" />
                                </a>
                            </div>
                            <div className="row">
                                <a className={styles.socials} href="https://twitter.com/Zanco_tw" target="_blank" rel="noreferrer">
                                    <Icon icon="akar-icons:twitter-fill" />
                                </a>
                            </div>
                            <div className="row">
                                <a className={styles.socials} href="https://linktr.ee/Zanco.lt" target="_blank" rel="noreferrer">
                                    <Icon icon="simple-icons:linktree" />
                                </a>
                            </div>
                        </div>
                        <div className={`col-6 offset-2 text-center d-flex align-items-start flex-column`}>
                            <h2 className={[styles.header__title, styles.h1, ''].join(" ")}>INTEGRA TU EMPAQUE<br /></h2>
                            <div className={`${styles.package} container mt-3`} style={{ backgroundColor: 'rgba(64, 64, 64, 0.52)' }}>
                                <div className="row mx-auto mt-4">
                                    <div className="col-lg-12 mx-auto text-center">
                                        <img className={`${styles.newGift} loaded img-fluid p-5`} src="/img/new_gift.png" style={{ height: '175px' }} />
                                    </div>
                                </div>
                                <div className="row mx-auto">
                                    <div className="col-lg-12 mx-auto text-center">
                                        {
                                            width < 1024
                                                ? <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/arrow_up.png" style={{ height: '150px' }} />
                                                : <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/flow_chart.png" style={{ height: '200px', width: '87%' }} />
                                        }
                                    </div>
                                </div>
                                <div className={`${styles.gridServices} pb-5 px-3`}>
                                    <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFlooring">
                                        <img className={`loaded img-fluid`} src="/img/floor.png" style={{ height: '80px' }} />
                                        <p className='mt-3'>Tarimas</p>
                                    </div>
                                    {
                                        width < 1024
                                            ? <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/arrow_up.png" style={{ height: '75px' }} />
                                            : ""
                                    }
                                    <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalPlasters">
                                        <img className={`loaded img-fluid`} src="/img/package.png" style={{ height: '80px' }} />
                                        <p className='mt-3'>Polietileno</p>
                                    </div>
                                    {
                                        width < 1024
                                            ? <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/arrow_up.png" style={{ height: '75px' }} />
                                            : ""
                                    }
                                    <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFoams">
                                        <img className={`loaded img-fluid`} src="/img/foam.png" style={{ height: '80px' }} />
                                        <p className='mt-3'>Foam y derivados</p>
                                    </div>
                                    {
                                        width < 1024
                                            ? <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/arrow_up.png" style={{ height: '75px' }} />
                                            : ""
                                    }
                                    <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalCardboards">
                                        <img className={`loaded img-fluid`} src="/img/cardboard.png" style={{ height: '80px' }} />
                                        <p className='mt-3'>Cartones</p>
                                    </div>
                                </div>
                            </div>
                            {/* <p className={`text-white text-center mx-auto ${styles.imageText}`}>{lang.homeMessage}</p> */}
                        </div>
                    </div>
                </div>
            </header>

            {/* ABOUT */}
            <article id='about' className='pt-5 ' style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <br /><br />
                    <div className="row">
                        <div className="col-lg-6 text-white">
                            <h2 className='text-white' style={{ fontWeight: 'bold' }}>{lang.homeWhatWeDoQuestion}</h2>
                            <p dangerouslySetInnerHTML={{ __html: lang.homeWhatWeDoAnswer }}></p>
                        </div>
                        <div className="col-lg-4 offset-lg-2">
                            <h1 className='text-white'>3D MODEL</h1>
                        </div>
                    </div>
                    <div className="container px-4 mt-5">
                        <div className="row bg-white text-center align-items-center p-4">
                            <div className="col-lg"></div>
                            <div className="col-lg p-4">
                                <img className={`loaded img-fluid`} src="/img/factory.png" alt="" />
                            </div>
                            <div className="col-lg p-4">
                                <img className={`loaded img-fluid`} src="/img/right_arrow.png" alt="" />
                            </div>
                            <div className="col-lg p-4">
                                <img className={`loaded img-fluid`} src="/img/truck.png" alt="" />
                            </div>
                            <div className="col-lg p-4">
                                <img className={`loaded img-fluid`} src="/img/right_arrow.png" alt="" />
                            </div>
                            <div className="col-lg p-4">
                                <img className={`loaded img-fluid`} src="/img/destination.png" alt="" />
                            </div>
                            <div className="col-lg p-4"></div>
                        </div>
                    </div>

                    <br />
                    <br />
                    <br />
                    <h2 className='text-white text-center'>{lang.homeHowDoesItWorkQuestion}</h2>
                    <br />
                    <br />
                    <br />

                </div>
            </article>
            {/* END ABOUT */}

            {/* ORDERS */}
            <section id='orders' className=''>
                <br /><br /><br />
                <h2 className='text-center text-decoration-underline'>{lang.homeCoffe}</h2>
                <br />
                <h4 className='text-center' style={{ padding: '0 10%' }}>{lang.homeHowDoesItWorkAnswer}</h4>
                <div className={`${styles.blackOrderContainer}`}>
                    <h3 className='text-center text-white pt-3'>#1</h3>
                    <h3 className='text-center text-white'>{lang.homeRegistryStep1}</h3>
                    <div className="container">
                        <div className="row text-center align-items-center mt-5">
                            <div className="col-lg-4">
                                <h2 className='text-white py-4'>YOU ASK</h2>
                            </div>
                            <div className={` col-lg-4 text-center mx-auto py-4`}>
                                <img className={`${styles.newGift} loaded img-fluid p-5`} src="/img/new_gift.png" style={{ height: '175px' }} />
                            </div>
                            <div className="col-lg-4">
                                <h2 className='text-white py-5'>WE MANAGE</h2>
                            </div>
                        </div>
                        {/* <div className="row mt-4">
                            <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                        </div>
                        <div className="row mt-2">
                            <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                        </div>
                        <div className="row mx-auto mt-4">

                        </div> */}
                        <div className='' style={width < 1024 ? { padding: '0 5rem' } : { padding: '0 13rem' }}>
                            <div className="row mx-auto">
                                <div className="col-lg-12 mx-auto text-center">
                                    {
                                        width < 1024
                                            ? <div><img className={`loaded my-3 ${styles.dot}`} src="/img/dot.png" /><br /><img className={`loaded my-3 ${styles.dot}`} src="/img/dot.png" /></div>
                                            : <img className={`${styles.flowChart} loaded img-fluid px-5`} src="/img/flow_circles.png" style={{ height: '125px', width: '90%' }} />
                                    }
                                </div>
                            </div>
                            <div className={`${styles.gridServices} pb-5 px-3`}>
                                <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFlooring">
                                    <img className={`loaded img-fluid`} src="/img/floor.png" style={{ height: '80px' }} />
                                    <p className='mt-3'>Tarimas</p>
                                </div>
                                {
                                    width < 1024
                                        ? <img className={`loaded my-3 ${styles.dot}`} src="/img/dot.png" />
                                        : ""
                                }
                                <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalPlasters">
                                    <img className={`loaded img-fluid`} src="/img/package.png" style={{ height: '80px' }} />
                                    <p className='mt-3'>Polietileno</p>
                                </div>
                                {
                                    width < 1024
                                        ? <img className={`loaded my-3 ${styles.dot}`} src="/img/dot.png" />
                                        : ""
                                }
                                <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFoams">
                                    <img className={`loaded img-fluid`} src="/img/foam.png" style={{ height: '80px' }} />
                                    <p className='mt-3'>Foam y derivados</p>
                                </div>
                                {
                                    width < 1024
                                        ? <img className={`loaded my-3 ${styles.dot}`} src="/img/dot.png" />
                                        : ""
                                }
                                <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalCardboards">
                                    <img className={`loaded img-fluid`} src="/img/cardboard.png" style={{ height: '80px' }} />
                                    <p className='mt-3'>Cartones</p>
                                </div>
                            </div>

                        </div>
                        {/* <div className={`${styles.gridServices} py-5`}>
                            <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFlooring">
                                <img className={`loaded img-fluid`} src="/img/floor.png" style={{ height: '100px' }} />
                                <p className='mt-3'>Flooring & Crates</p>
                            </div>
                            <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                            <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalPlasters">
                                <img className={`loaded img-fluid`} src="/img/package.png" style={{ height: '100px' }} />
                                <p className='mt-3'>Plasters</p>
                            </div>
                            <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                            <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalFoams">
                                <img className={`loaded img-fluid`} src="/img/foam.png" style={{ height: '100px' }} />
                                <p className='mt-3'>Foam</p>
                            </div>
                            <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                            <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalDryice">
                                <img className={`loaded img-fluid`} src="/img/dryice.png" style={{ height: '100px' }} />
                                <p className='mt-3'>Dry Ice</p>
                            </div>
                            <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                            <div className={`${styles.gridServicesItem}`} data-bs-toggle="modal" data-bs-target="#formModalCardboards">
                                <img className={`loaded img-fluid`} src="/img/cardboard.png" style={{ height: '100px' }} />
                                <p className='my-auto'>Cardboards & Corrugated</p>
                            </div>
                        </div> */}
                    </div>
                </div>

                {/* <section style={{ backgroundColor: '#ebebeb' }}> */}
                <section>
                    <div className={`${styles.registryBackground}`}>
                        <div className='pt-3'></div>
                        <h2 className='text-white text-center pt-5'>REGISTRY</h2>
                        <br /><br /><br /><br /><br />
                        <br /><br /><br /><br /><br />
                    </div>
                    <div className="container">
                        <div className="row text-center">
                            <div className={`col-lg-4 align-self-start mb-5`}>
                                <div className="row">
                                    <div className={`col-lg-12 ${styles.registryElementsBackground}`}>
                                        <h3 className='text-center text-white pt-3'>#2</h3>
                                        <h3 className='text-center text-white px-4'>
                                            {lang.homeRegistryStep2}
                                        </h3>
                                    </div>
                                </div>
                                <br />
                                <br />
                                <div className="row">
                                    <div className={`col-lg-12 ${styles.registryElementsBackground}`}>
                                        <h3 className='text-center text-white p-5'>
                                            Quick register
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 pb-5">
                                <img className={`loaded img-fluid`} src="/img/document.png" style={{ height: '250px', width: '50%' }} />

                            </div>
                            <div className={`col-lg-4 align-self-start ${styles.registryElementsBackground}`}>
                                <h3 className='text-center text-white pt-3'>#3</h3>
                                <h3 className='text-center text-white p-5'>
                                    {lang.homeRegistryStep3}

                                </h3>
                            </div>
                        </div>
                        <div className="row m-5">
                            <h1 className='text-center'>3D MODEL</h1>
                        </div>
                        <br />

                        <div className="container">
                            <div className={`row p-5 ${styles.followUps}`}>
                                <div className="col-lg-5 p-4">
                                    <h3 className='text-white'>#4</h3>
                                    <h2 className='text-white py-3'>
                                        FOLLOW UPS <br /> AND ADVISORY
                                    </h2>
                                    <h4 className='text-white'>
                                        {lang.homeRegistryStep4}
                                    </h4>
                                </div>
                                <div className="col-lg-5 offset-lg-2 p-5">
                                    <h5 className='text-center text-white'>Contact us through: </h5>
                                    <div className="row">
                                        <div className="col-lg-6 text-center">
                                            <a className='bg-transparent border-0 no-underline' href={'https://wa.me/+528124004678'}>
                                                <img className={`loaded p-3 img-fluid`} style={{ height: '60%' }} src="/img/whatsapp_icon.png" />
                                                <h4 className='text-center text-white'>Whatsapp</h4>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <a className='bg-transparent border-0' href={'https://wa.me/+528124004678'}>
                                                <img className={`loaded p-3 img-fluid`} style={{ height: '60%' }} src="/img/phone_icon.png" />
                                                <h4 className='text-center text-white'>Phone</h4>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row">

                                        <div className="col-lg-6 text-center">
                                            <a className='bg-transparent border-0' href={'mailto:servicios@zanco.com.mx'}>
                                                <img className={`loaded p-3 img-fluid`} style={{ height: '60%' }} src="/img/email_icon.png" />
                                                <h4 className='text-center text-white'>Email</h4>
                                            </a>
                                        </div>
                                        <div className="col-lg-6 text-center">
                                            <a className='bg-transparent border-0' href={'https://calendly.com/zancoo/planeacion-para-junta-fisica'}>
                                                <img className={`loaded p-3 img-fluid`} style={{ height: '60%' }} src="/img/person_icon.png" />
                                                <h4 className='text-center text-white'>Physically</h4>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row pt-5 mt-5">
                            <div className="col-lg-7 mx-auto">
                                <img className={`loaded py-5 img-fluid`} style={{ height: '30%' }} src="/img/quotes_icon.png" />
                                <h3 className='lh-base' style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: lang.homeCEOMessage }} >
                                </h3>
                                <div className="row mt-3">
                                    <div className="col-lg">
                                        <h4 className='text-end'>Paulo Escobar</h4>
                                        <h4 className='text-end'>-Zanco CEO</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            {/* END ORDERS */}

            {/* TESTIMONIALS */}
            {/* <section id='testimonials' className='pt-5  border-2 border-solid'>
                <h1 className={`${styles.about__title} text-center pt-5`}>Testimonials</h1>
                <p className='text-center pt-4'>Honest reviews from honest clients.</p>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 g-4 border-solid ">

                        <div className="col-lg ">
                            <div className={`${styles.testimonial}`}>
                                <p>Our team was amazed by the facility of their operation and amazing response time.</p>
                                <div className={`${styles.testimonial__work}`}>
                                    <div className="col-lg-2">
                                        <img className={`loaded rounded-circle float-start ${styles.avatar}`} src="/img/nayoescobar.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="fw-bolder">Nayo Escobar</div>
                                        </div>
                                        <div className="row">
                                            <small className=''>Influencer/Entrepeneur</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div className={`${styles.testimonial}`}>
                                <p>Top quality products from the company, very profesional treatment, would defenitly deal with Zanco again.</p>
                                <div className={`${styles.testimonial__work}`}>
                                    <div className="col-lg-2">
                                        <img className={`loaded rounded-circle float-start ${styles.avatar}`} src="/img/avatar2.jpeg" alt="" />
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="fw-bolder">Victor Guajardo</div>
                                        </div>
                                        <div className="row">
                                            <small className=''>Inversionista</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div className={`${styles.testimonial}`}>
                                <p>Zanco has presented itself to be one of the most reliable and trustworthy integration companies out there. We have collaborated for over a year and we&apos;ve only had smooth negotiations and profesional buisness.</p>
                                <div className={`${styles.testimonial__work}`}>
                                    <div className="col-lg-2">
                                        <img className={`loaded rounded-circle float-start ${styles.avatar}`} src="/img/avatar3.png" alt="" />
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="fw-bolder">Jose Antonio Ramos</div>
                                        </div>
                                        <div className="row">
                                            <small className=''>Tráfico de Transportes</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg">
                            <div className={`${styles.testimonial}`}>
                                <p>Zanco ha creado una cadena de confianza para mi negocio, su trato y tiempo de respuesta son muy buenos.</p>
                                <div className={`${styles.testimonial__work}`}>
                                    <div className="col-lg-2">
                                        <img className={`loaded rounded-circle float-start ${styles.avatar}`} src="/img/avatar4.jpg" alt="" />
                                    </div>
                                    <div className="col-lg-10">
                                        <div className="row">
                                            <div className="fw-bolder">Verónica Martínez</div>
                                        </div>
                                        <div className="row">
                                            <small className=''>Small bussines owner</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* END TESTIMONIALS */}

            {/* FAQs */}
            {/* <section id='faqs' className='pt-5'>
                <h1 className={`${styles.about__title} text-center py-5`}>FAQs</h1>
                <div className="container">
                    <div className="row align-items-center justify-content-center ">
                        <div className={styles.faqs__container}>
                            <div className="col-lg-6 mx-auto">
                                <article className={styles.faq}>
                                    <span className={styles.faqs__icon}> <i className="uil uil-plus"></i></span>
                                    <div className={styles.faqs__question__answer}>
                                        <h4 className={styles.faqs__question}> What is ZANCO?</h4>
                                        <p className={styles.faqs__answer}> Zanco is a personalized industrial distribution company. We care for our clients,
                                            their time and trust.
                                        </p>
                                    </div>
                                </article>
                            </div>
                            <div className="col-lg-6 mx-auto">
                                <article className={styles.faq}>
                                    <span className={styles.faqs__icon}><i className="uil uil-plus"></i></span>
                                    <div className={styles.faqs__question__answer}>
                                        <h4 className={styles.faqs__question}> Why choose ZANCO?</h4>
                                        <p className={styles.faqs__answer}> As a company we stay true to our core values:
                                            We believe that by doing so, everything can be properly achieved.
                                        </p>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* END FAQs */}
            {/* <br />
            <br /> */}

            {/* INDUSTRIAL CATALOGUE */}
            {/* <section id='catalogue' className='pt-5'>
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-lg-2 g-4 align-items-center justify-content-center">
                        <div className="col-lg text-center">
                            <img className='img-fluid' style={{ height: '400px' }} src="/images/catalog3.jpg" />
                        </div>
                        <div>
                            <h1 className='flex flex-inline'>Download <br /> Industrial Catalogue</h1>
                            <p className='mt-5'> In the catalog you will find more information about the products and
                                their industrial use. If you find yourself interested, contact us directly and subscribe!
                            </p>
                        </div>
                        <a className=' btn btn-primary justify-content-center' target='_blank' rel="noreferrer" href='https://www.canva.com/design/DAE3DXmbMEY/3n68pCChUWjR3LkVTJHMnQ/view?utm_content=DAE3DXmbMEY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
                            <h4 className=' float-center mx-auto '>DOWNLOAD</h4>
                        </a>
                    </div>

                </div>
            </section> */}
            {/* END OF INDUSTRIAL CATALOGUE */}
            {/* <br />
            <br />
            <section id='subscribe'>
                <div className="container">
                    <div className={`row ${styles.subscribeContainer}`}>
                        <div className="row justify-content-center">
                            <div className="col-lg-10 text-white">
                                <h2>Subscribe to get updated</h2>
                                <p className='mt-3'>Our updates include changes in the catalog, social media announcements, exclusive limited time deals, among other amazing content.</p>
                            </div>
                            <div className="col-lg-2">
                                <a href="#" className='btn mt-4'>Get Updates</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <br /> */}
        </Layout>
    )
}
