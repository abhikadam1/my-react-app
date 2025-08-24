import pic from '../public/pic.png';
import vitesvg from '../public/vite.svg';

function Card() {
    return(
        <div className="card">
            {/* <img src={vitesvg} alt="Logo" /> */}
            <img src={pic} alt="Logo" />
            <h1>Bro Code</h1>
            <p>This is some info about the the Card</p>
        </div>
    );
}

export default Card;