import React, { useEffect } from 'react'
import classes from './Map.module.scss'
import { getMap } from '../../utils/helpers/getMap'

const Map = () => {
    useEffect(() => {
        const map = getMap()

        return () => map.remove()
    }, [])

    return (
        <div className={classes.map__wrapper}>
            <h2 className={classes.section_title}>Офис Нефтегрань в Москве</h2>
            <div className={classes.map__mapbox}>
                <div id="map" className={classes.map__map}></div>
            </div>
        </div>
    );
}

export default Map;