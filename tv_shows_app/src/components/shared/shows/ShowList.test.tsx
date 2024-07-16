import { IShow } from '@/typings/show';
import { ShowCard } from './ShowCard';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import { ShowsList } from './ShowsList';
/**
 * 1) renders all shows
 */
describe('ShowList', () => {
  const mockShows: Array<IShow> = [
    {
      title: 'test1',
      description:
        'ovo je doslovno test show, svejedno bolji love story od Twilighta',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
    {
      title: 'test2',
      description:
        'ovo je doslovno test show, svejedno bolji love story od Twilighta',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
    {
      title: 'test3',
      description:
        'ovo je doslovno test show, svejedno bolji love story od Twilighta',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
    {
      title: 'test4',
      description:
        'ovo je doslovno test show, svejedno bolji love story od Twilighta',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
  ];

  it('should render all shows', () => {
    render(<ShowsList shows={mockShows} />);
    const shows = screen.getAllByRole('link');
    expect(shows.length).toEqual(mockShows.length);
  });
});
