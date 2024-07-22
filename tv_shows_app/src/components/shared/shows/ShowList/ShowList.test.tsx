import { IShow } from '@/typings/show';
import { IShowCard, ShowCard } from '../ShowCard/ShowCard';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import { ShowsList } from './ShowsList';
/**
 * 1) render ShowCard with appropriate props
 */
jest.mock('../ShowCard/ShowCard', () => {
  return {
    ShowCard: jest.fn().mockReturnValue(null),
  };
});

describe('ShowList', () => {
  const mockShows: Array<IShow> = [
    {
      title: 'test1',
      description: 'ovo je doslovno test show',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
    {
      title: 'test2',
      description: 'ovo je doslovno test show',
      id: 0,
      image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
      average_rating: 15,
    },
  ];

  it('should render ShowCard with appropriate props', () => {
    render(<ShowsList shows={mockShows} />);
    expect(ShowCard).toHaveBeenCalledTimes(mockShows.length);
    mockShows.forEach((show, index) => {
      expect(ShowCard).toHaveBeenNthCalledWith(
        index + 1,
        { show } as IShowCard,
        {}
      );
    });
  });
});
