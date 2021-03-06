import React from 'react';
import { MapContainer, TileLayer, LayersControl } from 'react-leaflet'
import { ShapeFile } from '../lib/index.js'

const { BaseLayer, Overlay } = LayersControl;

export default class ShapefileExample extends React.Component {

  state = {
    geodata: null,
    increment: 0
  }

  handleFile(e) {
    var reader = new FileReader();
    var file = e.target.files[0];
    reader.readAsArrayBuffer(file);
    reader.onload = function(buffer) {
      this.setState({ geodata: buffer.target.result });
    }.bind(this)
  }
  
  onEachFeature(feature, layer) {
    if (feature.properties) {
      layer.bindPopup(Object.keys(feature.properties).map(function(k) {
        return k + ": " + feature.properties[k];
      }).join("<br />"), {
        maxHeight: 200
      });
    }
  }
  
  style() {
    return ({
      weight: 2,
      opacity: 1,
      color: "blue",
      dashArray: "3",
      fillOpacity: 0.7
    });
  }

  render() {
    let ShapeLayers = null;
    if (this.state.geodata !== null) {
      ShapeLayers = (
      <Overlay checked name='Feature group'>
          <ShapeFile data={this.state.geodata} style={this.style} onEachFeature={this.onEachFeature}/>
      </Overlay>);
    }
    return (
      <div>
        <div >
          <input type="file" onChange={this.handleFile.bind(this)} className="inputfile"/>
        </div>
        <MapContainer center={[42.09618442380296, -71.5045166015625]} zoom={2} zoomControl={true}>
          <LayersControl position='topright'>
            <BaseLayer checked name='OpenStreetMap.Mapnik'>
              <TileLayer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"/>
            </BaseLayer>
            {ShapeLayers}
          </LayersControl>
        </MapContainer>
      </div>
    )
  }
}