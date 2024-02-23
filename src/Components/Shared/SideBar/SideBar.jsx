import React, { useContext, useEffect, useState } from 'react';

import { getSeparateDate } from '../../../utils/helpers';
import { CardContext } from '../../../context/cardContext';
import { SelectedCardContext } from '../../../context/selectedCardContext';

import './sideBar.css';

const SideBar = () => {
  const { cardList } = useContext(CardContext);
  const { selectedCard, selectedCardData } = useContext(SelectedCardContext);
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const [timeLeft, setTimeLeft] = useState();

  useEffect(() => {
    let interval;
    if (selectedCard) {
      interval = setInterval(() => {
        setTimeLeft(
          new Date(cardList.find((card) => card.title === selectedCard)?.startDate).getTime() -
            Date.now(),
        );
      }, 1000);
    }
    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = getSeparateDate(timeLeft);

  return (
    <div className="side-content" style={{ backgroundImage: 'url(/images/bg.png)' }}>
      <div className="side-content-data">
        <div className="side-content-day">{daysOfWeek[new Date().getDay()]}</div>
        <div className="side-content-temp">
          {selectedCardData && selectedCardData?.days[0]?.temp}
          <sup>°C</sup>
        </div>
        <div>{selectedCard}</div>
      </div>
      {timeLeft && (
        <div className="side-content-time">
          <div>
            <div>{days}</div>
            <div>DAYS</div>
          </div>
          <div>
            <div>{hours}</div>
            <div>HOURS</div>
          </div>
          <div>
            <div>{minutes}</div>
            <div>MINUTES</div>
          </div>
          <div>
            <div>{seconds}</div>
            <div>SECONDS</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SideBar;
