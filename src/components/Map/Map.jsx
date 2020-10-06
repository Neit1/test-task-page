import React from 'react';

function initMap() {
    window.ymaps.ready(function () {
        var myMap = new window.ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 9,
            controls: []
        });
     
        var multiRoute1 = new window.ymaps.multiRouter.MultiRoute({   
            referencePoints: [
                'Москва, Колодезный переулок д.2а ',
                'Москва, метро Сокольники'
            ],
            params: {
                routingMode: "masstransit"  
            }
        }, {
            boundsAutoApply: true,
            routeActiveStrokeColor: '#ff0000',
            routeStrokeColor: '#000000'
        }
        );

        var multiRoute2 = new window.ymaps.multiRouter.MultiRoute({   
            referencePoints: [
                'Москва, Колодезный переулок д.2а ',
                'Преображенская площадь'
            ],
            params: {
                routingMode: "masstransit"  
            }
        }, {
            boundsAutoApply: true
        }
        );
    
        myMap.geoObjects.add(multiRoute1);
        myMap.geoObjects.add(multiRoute2);
    });
}

class Map extends React.Component {

    componentDidMount() {
        initMap();
    }

    render() {
        return (
            <div id='map' style={{height: '265px', width: '460px'}}>
            </div>
        )
    }
}

export default Map;