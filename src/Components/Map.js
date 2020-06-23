import React, { Component } from 'react';
import ReactMapGL,{Marker} from 'react-map-gl';
import Pin from './Pin'
//import ckey from 'ckey';
const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;
//const ck = require('ckey');
class Map extends Component {

    
    constructor(props){
        super(props);
        this.state={
            viewport:{
                width:1100,
                height:600,
                zoom:12,
                latitude:  53.5444,
                longitude: -113.4909
            },
          //  Tokens:'pk.eyJ1IjoicmFrZXNoZ293ZGEiLCJhIjoiY2tibDhxa3p2MDh5bzJxcG91ancwZTNvaSJ9.zWkJT6d6oAxiMCIvk4MYJQ'
        }
    }
    render() { 
        return ( 
        <ReactMapGL
            mapboxApiAccessToken={MAPBOX_TOKEN}
            {...this.state.viewport}
            onViewportChange={(viewport) => this.setState({viewport})}>
                <Marker latitude={53.5444} longitude={-113.4909}>
                    <Pin/>
                </Marker>
            </ReactMapGL>        
           );
    }
}

export default Map;