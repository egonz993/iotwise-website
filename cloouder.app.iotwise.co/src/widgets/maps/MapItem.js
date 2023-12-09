import React from 'react'
import { Marker, Popup } from 'react-leaflet'
import { DivIcon } from 'leaflet'

const markerIcon = (color) => {
    return new DivIcon({
        className: 'my-custom-pin',
        html: `<span style="background-color: ${color}; width: 10px; height: 10px; border-radius: 50%; display: inline-block;"></span>`,
        iconSize: [10, 10],
    })
}

export const MapItem = ({ item }) => {
    return (
        <Marker
            position={[item.latitude, item.longitude]}
            icon={markerIcon(item.color)}
        >
            <Popup>
                Popup
            </Popup>
        </Marker>
    )
}
