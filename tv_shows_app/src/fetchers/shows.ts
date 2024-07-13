import { IShow } from '@/typings/show';
import { fetcher } from './fetcher';
import { getMutator } from './getMutator';
import useSWRMutation from 'swr/mutation';
import { mutator } from './mutator';

interface IShowResponse {
  shows: Array<IShow>;
}

export async function getAllShows() {
  return fetcher<IShowResponse>('/api/shows/all-shows');
}

export function getTopShows() {
  return fetcher<IShowResponse>('/api/shows/top-rated');
}

export function getShow(id: string) {
  return fetcher<IShow>(`../api/shows/${id}`);
}
