import React from 'react';
import Windows98 from './components/windows98';
import About from './components/about';
import './styles.scss';
import './animations.scss';

const App = () => (
  <div className="App grid">
    <div className="home-container">
      <div className="dog animateRight" ></div>
      <div className="dogBarking animateDogBarking" ></div>
      <div className="plant-jeffrey animatePlant" ></div>
      <div class="cloud animateCloud"></div>
      <div class="cloud-small animateCloud"></div>

      <Windows98 title="About" width="380px" height="642px">
        <About/>
      </Windows98>

      <Windows98 title="Welcome" width="445px">
        <div className="name">Madison Owens</div>
      </Windows98>

    </div>
  </div>
);

export default App;
