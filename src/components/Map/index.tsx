import React from 'react';
import ReactMapboxGL, { Marker } from 'react-mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import logo from '../../assets/logo.jpeg';

const MapBoxGL = ReactMapboxGL({
	accessToken:
		'pk.eyJ1Ijoid2lpbm5lcm1sZyIsImEiOiJja3B4MmYxa2Exd3prMm9xdndxcGttbDR1In0.sXxiP0549Yo6c-WLJ7Jt5A',
});

const Map: React.FC = () => {
	return (
		<MapBoxGL
			style="mapbox://styles/mapbox/streets-v11"
			containerStyle={{
				height: '400px',
				width: '100%',
			}}
			center={[-46.6487763, -23.5677666]}
			zoom={[14]}
		>
			<Marker coordinates={[-46.6487763, -23.5677666]}>
				<img
					src={logo.src}
					alt="Localização da empresa"
					style={{
						height: 50,
						width: 50,
						borderRadius: '50%',
					}}
				/>
			</Marker>
		</MapBoxGL>
	);
};

export default Map;
