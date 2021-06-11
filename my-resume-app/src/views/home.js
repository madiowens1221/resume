import React, {useState, useEffect} from 'react';
import './styles.scss';

function App() {
  const [scrollPosition, setScrollPosition] = useState();
  const [animate, setAnimate] = useState('animateRight');
  const [dogWaiting, setDogWaiting] = useState();

  // const handleScroll = () => {
  //   /** dog doesnt move when page loads */
  //   if (!scrollPosition) {
  //     setScrollPosition(window.pageYOffset)
  //     return
  //   }
  //   const position = window.pageYOffset;

  //   /** dog walks up when the scroll position is larger than page offset */
  //   if (window.pageYOffset < scrollPosition) {
  //     clearTimeout(dogWaiting)
  //     setAnimate('animateUp')
  //   }
  //   /** else dog walks down */
  //   else {
  //     clearTimeout(dogWaiting)
  //     setAnimate('animateDown')
  //   }

  //   setScrollPosition(position);
  //   setDogWaiting(setTimeout(() => setAnimate('animateSit'), 300));
  // };

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll, { passive: true });

  //   return () => {
  //       window.removeEventListener('scroll', handleScroll);
  //   };
  // });

  return (
    <div className="App grid">
      <div className="home-container">
        <div className={"dog " + animate} ></div>
        <div className="plant" ></div>
        <div className={"plant2 " + animate} ></div>
        <div class="cloud"></div>
        <div className="window" style={{width: 300 + "px"}}>
          <div className="title-bar">
            <div className="title-bar-text">A Window With Stuff In It</div>
            <div className="title-bar-controls">
              <button aria-label="Minimize"></button>
              <button aria-label="Maximize"></button>
              <button aria-label="Close"></button>
            </div>
          </div>
          <div className="window-body">
            <p>There's so much room for activities!</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
