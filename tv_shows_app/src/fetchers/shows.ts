import { IShow } from '@/typings/show';
import { fetcher } from './fetcher';

interface IShowResponse {
  shows: Array<IShow>;
}

export function getAllShows() {
  return fetcher<IShowResponse>('api/shows');
}

export function getTopShows() {
  return fetcher<IShowResponse>('api/shows/top-rated');
}

export function getShow(id: string) {
  return fetcher<IShow>(`api/shows/${id}`);
}
