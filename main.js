import Map from 'ol/Map.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import XYZ from 'ol/source/XYZ.js';
import OSM from 'ol/source/OSM.js';
import Link from 'ol/interaction/Link';

const key = 'RimB45vbiccGjEIpPxR2';
const attributions =
  '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> ' +
  '<a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>';



const aerialLayer = new TileLayer({
  source: new XYZ({
    attributions: attributions,
    url: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=' + key,
    maxZoom: 20,
  }),
});

const roadLayer = new TileLayer({
    source: new XYZ({
      attributions: attributions,
      url: 'https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=' + key,
      tileSize: 512,
      maxZoom: 22,
    }),
  });
  
  const openMapSatelite = new TileLayer({
    source: new XYZ( {
//        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/${z}/${y}/${x}",
        url: "https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
            attribution: "Powered by Esri. " + 
                "Source: Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community",
                maxZoom: 24,
                tileSize: 256 
                
        })
  });


const view = new View({
  center: [-6655.5402445057125, 6709968.258934638],
  zoom: 13,
});

// aerialLayer.setVisible(false);
const map2 = new Map({
  target: 'map-container',
  layers: [
    openMapSatelite

   ],
  view: view,
});


map2.addInteraction(new Link());
