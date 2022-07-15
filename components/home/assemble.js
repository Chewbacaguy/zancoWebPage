import styles from '../../styles/home/Assemble.module.css';
import React, { useState, useEffect, setState } from 'react'


export default function Assemble() {

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
            <p className={styles.title}>Integra tus materiales</p>
            <p className={styles.content}>Selecciona el tipo de producto y llena el formulario</p>
            <p className={styles.content}>¡El resto lo hacemos nosotros!</p>
            <br />
            <p className={styles.subtitle}>Motor Integral (M.I.)</p>
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
                    <img className={``} src="/img/tarima.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.emplayeFoto}`} data-bs-toggle="modal" data-bs-target="#formModalPlasters">
                    <img className={``} src="/img/paper.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.foamFoto}`} data-bs-toggle="modal" data-bs-target="#formModalFoams">
                    <img className={``} src="/img/foam.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.cartonFoto}`} data-bs-toggle="modal" data-bs-target="#formModalCardboards">
                    <img className={``} src="/img/box.png" />
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.tarimaTexto}`}>
                    <button className={``}>Agregar +</button>
                    <p className='mt-2'>Tarimas</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.emplayeTexto}`}>
                    <button className={``}>Agregar +</button>
                    <p className='mt-2'>Emplaye</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.foamTexto}`}>
                    <button className={``}>Agregar +</button>
                    <p className='mt-2'>Foam y derivados</p>
                </div>
                <div className={`${styles.gridMaterialsItem} ${styles.cartonTexto}`}>
                    <button className={``}>Agregar +</button>
                    <p className='mt-2'>Cartones</p>
                </div>
            </div>
        </div>
    );
}