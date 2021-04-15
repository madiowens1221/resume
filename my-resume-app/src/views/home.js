import React, {useState, useEffect} from 'react';
import './styles.scss';

function App() {
  const [scrollPosition, setScrollPosition] = useState();
  const [animate, setAnimate] = useState('animateLeft');
  const [dogWaiting, setDogWaiting] = useState();

  const handleScroll = () => {
    /** dog doesnt move when page loads */
    if (!scrollPosition) {
      setScrollPosition(window.pageYOffset)
      return
    }
    const position = window.pageYOffset;

    /** dog walks up when the scroll position is larger than page offset */
    if (window.pageYOffset < scrollPosition) {
      clearTimeout(dogWaiting)
      setAnimate('animateUp')
    }
    /** else dog walks down */
    else {
      clearTimeout(dogWaiting)
      setAnimate('animateDown')
    }

    setScrollPosition(position);
    setDogWaiting(setTimeout(() => setAnimate('animateSit'), 300));
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
  });

  return (
    <div className="App">
      <div className="home-container">
        <div className={"dog " + animate} ></div>
        <div className="first">
          <span>Madison Owens</span>
        </div>
        <div className="sushi second">test two</div>
        <div className="third">test three</div>
      </div>

    </div>
  );
}

export default App;
