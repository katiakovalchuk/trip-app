import React, { useContext, useEffect, useRef, useState } from 'react';

import Card from '../Card';
import Modal from '../Modal';
import SearchBar from '../SearchBar';
import { cities } from '../../../assets/mock/cities';
import { CardContext } from '../../../context/cardContext';
import { SelectedCardContext } from '../../../context/selectedCardContext';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

import './cardList.css';
import axiosConfig from '../../../utils/axiosConfig';

const CardList = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentList, setCurrentList] = useState([]);
  const [searchOption, setSearchOption] = useState('');
  const modalRef = useRef();
  const { cardList } = useContext(CardContext);
  const { selectedCard, setSelectedCard, setSelectedCardData, setDataLoading, setError } =
    useContext(SelectedCardContext);

  useOnClickOutside(modalRef, () => setModalOpen(false));

  useEffect(() => {
    setCurrentList(
      cardList.filter(({ title }) =>
        title.toUpperCase().includes(searchOption.toString().toUpperCase()),
      ),
    );
  }, [searchOption, cardList]);

  return (
    <>
      {isModalOpen && <Modal setOpen={setModalOpen} modalRef={modalRef} />}
      <SearchBar searchOption={searchOption} setSearchOption={setSearchOption} />
      <div className="card-list">
        {currentList?.map((card) => (
          <Card
            key={card.id}
            card={card}
            onClick={async () => {
              await setSelectedCard(card.title);
              if (selectedCard !== card.title) {
                await setDataLoading(true);
                await axiosConfig
                  .get(
                    `/${card.title}/today?unitGroup=metric&include=days&key=${process.env.REACT_APP_API_KEY}&contentType=json`,
                  )
                  .then((response) => {
                    if (response) {
                      setSelectedCardData(response.data);
                    }
                    setDataLoading(false);
                  })
                  .catch((err) => {
                    setError(err);
                    setDataLoading(false);
                  });
              }
            }}
          />
        ))}
        <button
          type="button"
          className="add-card"
          onClick={() => {
            setModalOpen(true);
          }}
        >
          <div>+</div>
          <div>Add trip</div>
        </button>
      </div>
    </>
  );
};

export default CardList;
