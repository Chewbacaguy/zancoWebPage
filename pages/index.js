import Layout from '../components/layout'
import styles from '../styles/Home.module.css'
import { Icon } from '@iconify/react';

export default function Index() {

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
                        <div className={`col-10 text-center d-flex align-items-start flex-column`}>
                            <h1 className={[styles.header__title, styles.h1, 'mb-auto'].join(" ")}>Zanco<br />Industrial<br />Distribution<br /></h1>
                            <p className={`text-white text-center mx-auto ${styles.imageText}`}>At Zanco we integrate all the packaging needs with the goal of creating efficient industrial manufacturing. We understand the importance of the quality that each product deserves,
                                from the time it leaves the warehouse, until it reaches its destination</p>
                        </div>
                    </div>
                </div>
            </header>

            {/* WHATWEDO */}
            <article id='whatwedo' className='' style={{ backgroundColor: 'black' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-white">
                            <h2 className='text-white' style={{ fontWeight: 'bold' }}>What we do</h2>
                            <p>We understand the logistical difficulties involved in integrating the respective materials
                                necessary to pack any product. </p>
                            <p>That is why our integrator system is
                                in charge of managing the needs of your manufacturing procedures, in order to facilitate all the
                                single channel packing operations</p>
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
                    <h2 className='text-white text-center'>How does it work?</h2>
                    <br />
                    <br />
                    <br />

                </div>
            </article>
            {/* END WHATWEDO */}

            {/* GIFT */}
            <section id='gift' className=''>
                <div className="container">
                    <div className="row vh-100 justify-content-center align-items-center">
                        <div className="col-lg-12 text-center">
                            <img className={`loaded ${styles.gift}`} src="/img/gift.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* END GIFT */}

            {/* ORDERS */}
            <section id='orders' className=''>
                <div className="container-fluid">
                    <div className={`container ${styles.grayOrderContainer}`}>
                        <div className={`container ${styles.blackOrderContainer}`}>
                            <div className="row ">
                                <div className="col-lg-4 text-center">
                                    <h1 className={`${styles.blackOrderContainerH1}`}>YOU <br />ASK</h1>
                                </div>
                                <div className="col-lg-4">
                                    <div className="row">
                                        <div className="col-lg-12 text-center"><img className={`loaded`} src="/img/gift_white.png" style={{ height: '200px', width: '75%' }} /></div>
                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                                    </div>
                                    <div className="row mt-2">
                                        <div className="col-lg-12 text-center"><img className={`loaded ${styles.dot}`} src="/img/dot.png" /></div>
                                    </div>
                                </div>
                                <div className="col-lg-4 text-center align-self-end">
                                    <h1 className={`${styles.blackOrderContainerH1}`}>WE <br />MANAGE</h1>
                                </div>
                            </div>
                            <div className={`${styles.gridServices} py-4`}>
                                <div className={`${styles.gridServicesItem}`}>
                                    <img className={`loaded img-fluid`} src="/img/floor.png" style={{ height: '100px' }} />
                                    <p className='mt-3'>Flooring & Crates</p>
                                </div>
                                <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                                <div className={`${styles.gridServicesItem}`}>
                                    <img className={`loaded img-fluid`} src="/img/package.png" style={{ height: '100px' }} />
                                    <p className='mt-3'>Plasters</p>
                                </div>
                                <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                                <div className={`${styles.gridServicesItem}`}>
                                    <img className={`loaded img-fluid`} src="/img/foam.png" style={{ height: '100px' }} />
                                    <p className='mt-3'>Foam</p>
                                </div>
                                <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                                <div className={`${styles.gridServicesItem}`}>
                                    <img className={`loaded img-fluid`} src="/img/dryice.png" style={{ height: '100px' }} />
                                    <p className='mt-3'>Dry Ice</p>
                                </div>
                                <img className={`loaded ${styles.dot} my-auto text-center`} src="/img/dot.png" />
                                <div className={`${styles.gridServicesItem}`}>
                                    <img className={`loaded img-fluid`} src="/img/cardboard.png" style={{ height: '100px' }} />
                                    <p className='my-auto'>Cardboards & Corrugated</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col-lg-3 mx-auto text-center">
                            <div className='btn btn-primary justify-content-center' data-bs-toggle="modal" data-bs-target="#formModal">
                                <div className='float-end mx-auto'>Registra tu pedido</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END ORDERS */}

            {/* ABOUT  */}
            <section id="about" className='pt-5'>
                <h1 className={`${styles.about__title} text-center pt-5`}> About Us</h1>
                <div className="container">
                    {/* FOAMS */}
                    <article>
                        <div className="row pt-5">
                            <div className="col-lg-5 offset-lg-1">
                                <img className="loaded img-fluid" src="/img/about1.png" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h2 className={styles.about__article__title}>Foams</h2>
                                <div className={styles.about__content}>
                                    <p> We manage the distribution of foams such as polyethylene, closed cell, neoprene and polyurethane.
                                        All of which have multiple application areas for example: lamination films,
                                        sealants, frozen food packaging, among others.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </article>

                    {/* PACKAGING */}
                    <article>
                        <div className="row pt-5">
                            <div className={`col-lg-5 offset-lg-1 ${styles.flexReverseContent}`}>
                                <h2 className={styles.about__article__title}>Packaging</h2>
                                <div className={styles.about__content}>
                                    <p> Part of our administration relies on industrial packaging material such as: Foam, Polybags and plasters.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                            <div className={`col-lg-5 offset-lg-1 ${styles.flexReverseImage}`}>
                                <img className="loaded img-fluid" src="/img/about2.png" alt="" />
                            </div>
                        </div>
                    </article>

                    {/* SEALING AND CUTS */}
                    <article>
                        <div className="row pt-5">
                            <div className="col-lg-5 offset-lg-1">
                                <img className="loaded img-fluid" src="/img/about3.png" alt="" />
                            </div>
                            <div className="col-lg-5 offset-lg-1">
                                <h2 className={styles.about__article__title}>Sealing and Cuts</h2>
                                <div className={styles.about__content}>
                                    <p> Our catalog also includes products for sealing and cuts such as industrial EPDM (rubber) , EVA (rubber/foam) and COROPLAST.
                                    </p>
                                    <a href="index.html#downloadCatalogo" className="btn btn-primary">Learn More</a>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
            {/* END ABOUT */}

            {/* CLIENTS */}
            <section id='clients' className='pt-5'>
                <h1 className={`${styles.about__title} text-center pt-5`}>PSA Adhesive Brand</h1>
                <p className='text-center pt-4'>We only manage premium Adhesive brands.</p>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client1.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client2.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client3.png" alt="" />
                        </div>
                        <div className="col-lg-3">
                            <img className="loaded img-fluid" src="/img/client4.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            {/* END CLIENTS */}

            {/* TESTIMONIALS */}
            <section id='testimonials' className='pt-5'>
                <h1 className={`${styles.about__title} text-center pt-5`}>Testimonials</h1>
                <p className='text-center pt-4'>Honest reviews from honest clients.</p>
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 g-4">

                        <div className="col-lg">
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
            </section>
            {/* END TESTIMONIALS */}

            {/* FAQs */}
            <section id='faqs' className='pt-5'>
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
            </section>
            {/* END FAQs */}


            {/* INDUSTRIAL CATALOGUE */}
            <section id='catalogue' className='pt-5'>
                <div className="container pt-5">
                    <div className="row row-cols-1 row-cols-lg-2 g-4 align-items-center justify-content-center">
                        <div className="col-lg text-center">
                            <img className='' style={{ height: '400px' }} src="/img/catalogHero.png" />
                        </div>
                        <div className="col-lg">
                            <h1 className=''>Download <br /> Industrial Catalogue</h1>
                            <p className='mt-5'> In the catalog you will find more information about the products and
                                their industrial use. If you find yourself interested, contact us directly and subscribe!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <h4> Download here</h4>
                        <div className="row">
                            <div className="col-lg-4">
                                <a className='btn btn-primary justify-content-center' target='_blank' rel="noreferrer" href='https://www.canva.com/design/DAE3DXmbMEY/3n68pCChUWjR3LkVTJHMnQ/view?utm_content=DAE3DXmbMEY&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton'>
                                    <img className='float-start' src="/img/catalog2.png" style={{ width: '3rem' }} />
                                    <div className='float-end mx-auto mt-3 ms-2'>INDUSTRIAL CATALOGUE</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* END OF INDUSTRIAL CATALOGUE */}

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
        </Layout>
    )
}