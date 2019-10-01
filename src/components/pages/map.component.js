import React from 'react'
import { render } from 'react-dom'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const position = [51.505, -0.09]
function MapComponent(props) {
  return (
    <Map center={[-37, 175]} zoom={13}>
      <TileLayer
        url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
      />
    </Map>
  )
}
export default MapComponent;