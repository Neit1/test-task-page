import React from 'react';

class Map extends React.Component {
    componentDidMount() {
        window.addEventListener('load', this.handleLoad);
      }
      
    handleLoad() {
        window.ymaps.ready(() => {
            this.localMap = new window.ymaps.Map('map', { center: this.state.center, zoom: 9 }, {
                searchControlProvider: 'yandex#search'
            });
        });
    }

    render() {
        return (
            <div>
                {this.localMap ? this.localMap : null}
            </div>
        )
    }
}

export default Map;