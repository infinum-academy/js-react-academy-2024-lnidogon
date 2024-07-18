import AllShows from '@/app/(authorised)/shows/page';

const apiUrl = 'https://tv-shows.infinum.academy';
export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  allShows: `${apiUrl}/shows`,
  topRated: `${apiUrl}/shows/top_rated`,
  show: `${apiUrl}/shows`,
};
