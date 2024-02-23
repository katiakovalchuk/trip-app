export const cities = [
  {
    title: 'Dublin',
    url: '/images/dublin.jpg',
  },
  {
    title: 'Tokyo',
    url: '/images/tokyo.jpg',
  },
  {
    title: 'Barcelona',
    url: '/images/barcelona.jpg',
  },
  {
    title: 'Vienna',
    url: '/images/vienna.jpg',
  },
  {
    title: 'Brussel',
    url: '/images/brussel.jpg',
  },
  {
    title: 'Prague',
    url: '/images/prague.jpg',
  },
  {
    title: 'London',
    url: '/images/london.jpg',
  },
];

export const initialCity = {
  id: 1,
  title: 'Berlin',
  startDate: new Date(
    Date.now() + 3 * 24 * 60 * 60 * 1000 - new Date().getTimezoneOffset() * 60 * 1000,
  )
    .toJSON()
    ?.split('T')[0],
  endDate: new Date(
    Date.now() + 5 * 24 * 60 * 60 * 1000 - new Date().getTimezoneOffset() * 60 * 1000,
  )
    .toJSON()
    ?.split('T')[0],
  url: '/images/berlin.jpg',
};
