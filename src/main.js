import './App.css';
import rigthImg from './images/image-header-desktop.jpg'

function App() {
  return (
    <main>
      <section className='left'>
        <h1>Get <span>insights</span> that help your business grow.</h1>
        <p>Discover the benefits of data analytics and male better decisions regarding revenue, customer experience, and overall efficiency.</p>

        <div className='bottomLeft'>
          <div className='bottom1'>
            <p><strong>10k+</strong></p>
            <p>COMPANIES</p>  
          </div>
          <div className='bottom2'>
            <p><strong>314</strong></p>
            <p>TEMPLATES</p>  
          </div>
          <div className='bottom3'>
            <p><strong>12M+</strong></p>
            <p>QUERIES</p>  
          </div>
        </div>
      </section>

      <section className='right'>
        <img src={rigthImg} alt='' />
      </section>
    </main>
  );
}

export default App;
