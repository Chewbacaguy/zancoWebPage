import styles from '../../styles/home/Assemble.module.css';
import React, { useState, useEffect, setState } from 'react'

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function Assemble() {
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;
    const [width, setWidth] = useState(0);

    useEffect(() => {
        window.addEventListener('load', () => {
            setWidth(window.innerWidth);
        });

        window.addEventListener('resize', () => {
            setWidth(window.innerWidth);
        })
    });

    return (
        <div className={styles.container}>

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

            <p className={styles.title}>{lang.assembleIntegrate}</p>
            <p className={styles.content}>{lang.assembleSelect1}</p>
            <p className={styles.content}>{lang.assembleSelect2}</p>
            <br />
            <p className={styles.subtitle}>{lang.assembleIM}</p>
            <div className={styles.container__gift}>
                <div className='text-center'>
                    <img className={styles.gift} src="/img/gift.png" />
                </div>
            </div>

            <div className='text-center'>
                <img className={`${styles.flow__chart}`} src="/img/flow_chart.png" style={{ height: '75px', width: '75%' }} />
            </div>

            <div className={`${styles.gridMaterials}`}>
                <div className={`${styles.gridMaterialsItem} ${styles.tarimaFoto}`} data-bs-toggle="modal" data-bs-target="#formModalFlooring">
                    <img className={``} src="/img/crates.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.emplayeFoto}`} data-bs-toggle="modal" data-bs-target="#formModalPlasters">
                    <img className={``} src="/img/plaster.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.foamFoto}`} data-bs-toggle="modal" data-bs-target="#formModalFoams">
                    <img className={``} src="/img/foam.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.cartonFoto}`} data-bs-toggle="modal" data-bs-target="#formModalCardboards">
                    <img className={``} src="/img/cardboard.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.tarimaTexto}`}>
                    <button data-bs-toggle="modal" data-bs-target="#formModalFlooring" className={``}>{lang.assembleAdd}</button>
                    <p className='mt-2'>{lang.assembleCrates}</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.emplayeTexto}`}>
                    <button data-bs-toggle="modal" data-bs-target="#formModalPlasters" className={``}>{lang.assembleAdd}</button>
                    <p className='mt-2'>{lang.assemblePlastics}</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.foamTexto}`}>
                    <button data-bs-toggle="modal" data-bs-target="#formModalFoams" className={``}>{lang.assembleAdd}</button>
                    <p className='mt-2'>{lang.assembleFoam}</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.cartonTexto}`}>
                    <button data-bs-toggle="modal" data-bs-target="#formModalCardboards" className={``}>{lang.assembleAdd}</button>
                    <p className='mt-2'>{lang.assembleCardboards}</p>
                </div>
            </div>
        </div>
    );
}