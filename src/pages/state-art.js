
import blogrphone from '../assets/illustration-phones.png'
import './state-art.css'
function Stateart() {
  return (
    <body className="stateart-display">
      <div> 
        <img className='phone-size'src={blogrphone} />
      </div>
      <div className='typography'>
        <h1 className="stateart-h1">State of the Art Infrastructure</h1>
        <p className='stateart-p'>This is a random paragraph for the first headerThis is a random paragraph for the first headerThis is a random paragraph for the first headerThis is a random paragraph for the first header </p>
      </div>
    </body>
  );
}

export default Stateart;
