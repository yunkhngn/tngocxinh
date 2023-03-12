// import main from '../images/mosaic.png';
import './Mosaic.css';
import { MapInteractionCSS } from 'react-map-interaction';
const Mosaic = () => {
    return (
      <MapInteractionCSS
        //default scale fit the screen responsively
        defaultScale={window.innerWidth / 1920}
        defaultPositionX={window.innerWidth / 2}
        smoothScroll={true}
        minScale={1}
        maxScale={10}
      >
        <div className="mosaic">
           <img src="https://i.imgur.com/ZckendN.jpg" alt="mosaic" />
        </div>
      </MapInteractionCSS>
    );
}
 
export default Mosaic;