import pic from '../public/pic.png';

function Card() {
    return(
        <div className="card">
            <img src={pic} alt="Logo" />
            <h1>Bro Code</h1>
            <p>This is some info about the the Card</p>
        </div>
    );
}

export default Card;