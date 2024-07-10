import { IShow } from '@/typings/show';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import { IReview, ReviewItem } from './ReviewItem';
/**
 * 1) contain correct email
 * 2) contain correct rating
 * 3) contain correct review comment
 * 4) render delete button
 * 5) call onDelete callback only once
 */
describe('ReviewItem', () => {
  const mockReview: IReview = {
    email: 'test@test.com',
    avatarUrl: 'https://fakeimg.pl/600x400/ff0000/ffffff?text=Nema+slike+:(',
    comment: 'ovo je najgori show ikada',
    rating: 2,
  };

  it('should contain correct email', () => {
    render(<ReviewItem review={mockReview} onRemove={() => {}} />);
    const emailDisplay = screen.getByText(mockReview.email);
    expect(emailDisplay).toBeInTheDocument();
  });
  it('should contain correct rating', () => {
    render(<ReviewItem review={mockReview} onRemove={() => {}} />);
    const ratingDisplay = screen.getByText(mockReview.rating + ' / 5');
    expect(ratingDisplay).toBeInTheDocument();
  });
  it('should contain correct review comment', () => {
    render(<ReviewItem review={mockReview} onRemove={() => {}} />);
    const reviewCommentDisplay = screen.getByText(mockReview.comment);
    expect(reviewCommentDisplay).toBeInTheDocument();
  });
  it('should render delete button', () => {
    render(<ReviewItem review={mockReview} onRemove={() => {}} />);
    const deleteButton = screen.getByRole('button');
    expect(deleteButton).toBeInTheDocument();
  });
  it('should call onDelete callback only once', () => {
    const mockOnDelete = jest.fn();
    render(<ReviewItem review={mockReview} onRemove={mockOnDelete} />);
    const deleteButton = screen.getByRole('button');
    deleteButton.click();
    expect(mockOnDelete).toHaveBeenCalled();
    expect(mockOnDelete).toHaveBeenCalledTimes(1);
  });
});
