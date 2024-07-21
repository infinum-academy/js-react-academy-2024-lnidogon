import AllShows from '@/app/(authorised)/shows/page';

const apiUrl = 'https://tv-shows.infinum.academy';
export const swrKeys = {
  register: `${apiUrl}/users`,
  login: `${apiUrl}/users/sign_in`,
  allShows: `${apiUrl}/shows`,
  topRated: `${apiUrl}/shows/top_rated`,
  show: (show_id: string | number) => `${apiUrl}/shows/${show_id}`,
  createReview: `${apiUrl}/reviews`,
  listReviews: (show_id: string | number) =>
    `${apiUrl}/shows/${show_id}/reviews`,
  alterReview: (show_id: string | number) => `${apiUrl}/reviews/${show_id}`,
  me: `${apiUrl}/users/me`,
};
