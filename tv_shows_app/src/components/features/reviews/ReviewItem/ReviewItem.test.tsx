import { render, screen } from '@testing-library/react';
import { IReview, ReviewItem } from './ReviewItem';
/**
 * 1) contain correct email
 * 2) contain correct rating
 * 3) contain correct review comment
 * 4) render delete button
 */

describe('ReviewItem', () => {
  const mockReview: IReview = {
    comment: 'ovo je najgori show ikada',
    rating: 2,
    show_id: 2,
    user: {
      id: -1,
      email: 'test@test.com',
      image_url: '',
    },
    id: 23,
  };

  it('should contain correct email', () => {
    render(<ReviewItem review={mockReview} />);
    const emailDisplay = screen.getByText(mockReview.user.email);
    expect(emailDisplay).toBeInTheDocument();
  });
  it('should contain correct rating', () => {
    render(<ReviewItem review={mockReview} />);
    const ratingDisplay = screen.getByText(mockReview.rating + ' / 5');
    expect(ratingDisplay).toBeInTheDocument();
  });
  it('should contain correct review comment', () => {
    render(<ReviewItem review={mockReview} />);
    const reviewCommentDisplay = screen.getByText(mockReview.comment);
    expect(reviewCommentDisplay).toBeInTheDocument();
  });

  it('should render delete button', () => {
    render(<ReviewItem review={mockReview} />);
    const deleteButton = screen.getByTestId('delete-button');
    expect(deleteButton).toBeInTheDocument();
  });
});
