import React, { useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { CardContext } from '../../../context/cardContext';
import { CitiesContext } from '../../../context/citiesContext';

import './modal.css';

const Modal = ({ setOpen, modalRef }) => {
  const [data, setData] = useState({});
  const { citiesList: cities, setCitiesList: setCities } = useContext(CitiesContext);
  const { selectedCity, startDate, endDate } = data || {};

  const { setCardList } = useContext(CardContext);

  const minDate = new Date(Date.now() - new Date().getTimezoneOffset() * 60 * 1000)
    .toJSON()
    ?.split('T')[0];
  const maxDate = new Date(
    Date.now() + 15 * 24 * 60 * 60 * 1000 - new Date().getTimezoneOffset() * 60 * 1000,
  )
    .toJSON()
    ?.split('T')[0];

  return createPortal(
    <div className="modal">
      <div className="modal-content" ref={modalRef}>
        <form>
          <div className="modal-header">
            <h2>Create trip</h2>
            <button type="button" className="modal-close" onClick={() => setOpen(false)}>
              X
            </button>
          </div>
          <div className="modal-body">
            <label htmlFor="city">
              <div className="modal-body-title">
                <span>*</span> City
              </div>
              <select
                id="city"
                defaultValue="default"
                value={selectedCity}
                onChange={(e) => setData((prev) => ({ ...prev, selectedCity: e.target.value }))}
              >
                {cities.length > 0 ? (
                  <>
                    <option value="default" disabled>
                      Please select a city
                    </option>
                    {cities?.map((city) => {
                      return (
                        <option key={city.title} value={city.title}>
                          {city.title}
                        </option>
                      );
                    })}
                  </>
                ) : (
                  <option value="no-options">No cities to select</option>
                )}
              </select>
            </label>
            <label htmlFor="start-date">
              <div className="modal-body-title">
                <span>*</span> Start date
              </div>
              <input
                id="start-date"
                type="date"
                min={minDate}
                max={maxDate}
                value={startDate || ''}
                onChange={(e) => setData((prev) => ({ ...prev, startDate: e.target.value }))}
              />
            </label>
            <label htmlFor="end-date">
              <div className="modal-body-title">
                <span>*</span> End date
              </div>
              <input
                id="end-date"
                type="date"
                min={minDate}
                max={maxDate}
                value={endDate || ''}
                onChange={(e) => setData((prev) => ({ ...prev, endDate: e.target.value }))}
              />
            </label>
          </div>
          <div className="modal-buttons">
            <button type="button" onClick={() => setOpen(false)}>
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedCity || !startDate || !endDate}
              onClick={(e) => {
                e.preventDefault();
                setCardList((prev) => [
                  ...prev,
                  {
                    id: prev.length + 1,
                    title: selectedCity,
                    url: cities.find((city) => city.title === selectedCity).url,
                    startDate,
                    endDate,
                  },
                ]);
                setCities((prev) => prev.filter((city) => city.title !== selectedCity));
                setOpen(false);
              }}
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>,
    document.getElementById('app-modal'),
  );
};

export default Modal;
