import './App.css';
import rigthImg from './images/image-header-desktop.jpg'
import rigthMobile from './images/image-header-mobile.jpg'

function App() {
  return (
    <main>
      <div className='left'>
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p id="mainText">
          Discover the benefits of data analytics and make 
          better decisions regarding revenue, customer 
          experience, and overall efficiency.</p>

        <div className='bottomLeft'>
          <div className='bottom'>
            <p><strong>10k+</strong></p>
            <p>COMPANIES</p>  
          </div>
          <div className='bottom'>
            <p><strong>314</strong></p>
            <p>TEMPLATES</p>  
          </div>
          <div className='bottom'>
            <p><strong>12M+</strong></p>
            <p>QUERIES</p>  
          </div>
        </div>
      </div>

      <div className='rigth'>
        <img 
        src={rigthImg} 
        srcSet={rigthMobile}
        sizes="(max-width: 7 68px) 768px"
        alt='' id='img'/>
      </div>
    </main>
  );
}

export default App;
