import React from 'react';

import './card.css';

const Card = ({ card, onClick }) => {
  const { url, title, startDate, endDate } = card;
  const getFormattedDate = (date) => {
    const [year, month, day] = date.split('-');
    return `${day}.${month}.${year}`;
  };

  return (
    /* eslint-disable-next-line */
    <div className="card" onClick={onClick}>
      <img src={url} alt="City view" width="200px" height="200px" />
      <div className="card-data">
        <div>{title}</div>
        <div>
          {getFormattedDate(startDate)} - {getFormattedDate(endDate)}
        </div>
      </div>
    </div>
  );
};

export default Card;
