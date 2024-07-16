import { IShow } from '@/typings/show';
import { ShowCard } from './ShowCard';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import { Container } from '@chakra-ui/react';
/**
 * 1) contain correct image element
 * 2) show title is rendered
 * 3) rendered correct average rating
 */
describe('ShowCard', () => {
  const mockShow: IShow = {
    title: 'test',
    description:
      'ovo je doslovno test show, svejedno bolji love story od Twilighta',
    id: 0,
    image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
    average_rating: 15,
  };
  const mockShow2: IShow = {
    title: 'test',
    description:
      'ovo je doslovno test show, svejedno bolji love story od Twilighta',
    id: 0,
    image_url: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
    average_rating: 0,
  };
  it('should contain correct image element', () => {
    render(<ShowCard show={mockShow} />);
    const image = screen.getByRole('img') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toEqual(mockShow.image_url);
  });
  it('should render show title', () => {
    render(<ShowCard show={mockShow} />);
    const title = screen.getByText(mockShow.title);
    expect(title).toBeInTheDocument();
  });
  it('should render correct average rating', () => {
    render(<ShowCard show={mockShow} />);
    const avgRating = screen.getByText(mockShow.average_rating + '/5');
    expect(avgRating).toBeInTheDocument();
  });
  it('should display no rating when appropriate', () => {
    render(<ShowCard show={mockShow2} />);
    const avgRating = screen.getByText('no rating');
    expect(avgRating).toBeInTheDocument();
  });
});
