import React from 'react'
import './Map.css'
import { MapContainer, TileLayer } from 'react-leaflet'
import { MapItem } from './MapItem'
import { ErrorBoundary } from '../../error-boundary/ErrorBoundary'
import { useComponent } from '../../../hooks/useComponent'
import { PendingComponent } from '../others/PendingComponent'


export const Map = (props) => {
    const {pending, _data, _options} = useComponent(props)

    const renderData = (markers) => {
        let renderedData = []

        if (!markers.length || !(markers instanceof Array)){
            renderedData = []
        }
        else{
            markers.map((item, idx) => {
                renderedData.push(<MapItem key={idx} item={item} />)
                return item
            })
        }

        return renderedData;
    }

    return (
        pending ? <PendingComponent /> :
        <div style={{ height: '1000px' }}>
            <ErrorBoundary>
                <MapContainer {..._options} >

                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution={`&copy; <strong>Cloouder<strong>`}
                    />

                    {renderData(_data.markers)}

                </MapContainer>
            </ErrorBoundary>
        </div>
    )
}