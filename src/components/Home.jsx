import '../styles/Home.scss';
// import mockImageVertical from '../assets/mock-image-vertical.png';
// import mockImageHorizontal from '../assets/mock-image-horizontal.png';
import mock1 from "../assets/mock-1.png";
import mock2 from "../assets/mock-2.png";
import mock3 from "../assets/mock-3.png";
import mock4 from "../assets/mock-4.png";
import mock5 from "../assets/mock-5.png";
import mockVert from "../assets/mock-image-vertical.png";
import mockHori from "../assets/mock-image-horizontal.png";



// TODO: Create a gallery component to simplify Home logic 
function Home() {
  return (
    <div>
      <div className='content'>
        <div className='row'>
          <div className='column'>
            <img src={mock1} />
            <img src={mock5} />
            <img src={mock3} />
            <img src={mockVert} />
            <img src={mock2} />
            <img src={mock4} />
            <img src={mockHori} />
          </div>
          <div className='column'>
            <img src={mock2} />
            <img src={mockHori} />
            <img src={mock4} />
            <img src={mock3} />
            <img src={mockVert} />
            <img src={mock1} />
          </div>
          <div className='column'>
            <img src={mockHori} />
            <img src={mock3} />
            <img src={mockVert} />
            <img src={mock1} />
            <img src={mock4} />
            <img src={mock2} />
          </div>
          <div className='column'>
            <img src={mock4} />
            <img src={mockVert} />
            <img src={mock2} />
            <img src={mock1} />
            <img src={mockHori} />
            <img src={mock3} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home