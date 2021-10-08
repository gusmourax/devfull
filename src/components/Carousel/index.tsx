import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

import principal from '../../assets/principal.png';
import escritorio from '../../assets/escritorio.png';

const Carousel: React.FC = () => {
	return (
		<ResponsiveCarousel
			showArrows={false}
			showStatus={false}
			showIndicators={false}
			showThumbs={false}
			autoPlay={true}
			infiniteLoop={true}
			interval={5000}
			transitionTime={1000}
			swipeable={true}
			emulateTouch={true}
		>
			<div>
				<img src={principal.src} />
			</div>
			<div>
				<img src={escritorio.src} />
			</div>
		</ResponsiveCarousel>
	);
};

export default Carousel;
