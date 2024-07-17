import { render, screen } from '@testing-library/react';
import { IReview, ReviewItem } from './ReviewItem';
/**
 * 1) contain correct email
 * 2) contain correct rating
 * 3) contain correct review comment
 * 4) render delete button
 * 5) call onDelete callback only once
 * 6) open modal on click and call removeReview and mutate on confirm
 */

jest.mock('@/fetchers/mutators', () => {
  return {
    deleteReviewMutator: jest.fn().mockResolvedValue(null),
  };
});

jest.mock('swr', () => {
  return {
    mutate: jest.fn(),
  };
});

describe('ReviewItem', () => {
  const mockReview: IReview = {
    comment: 'ovo je najgori show ikada',
    rating: 2,
    show_id: 2,
    user: {
      id: 0,
      email: 'test@test.com',
      image_url: '',
    },
    id: 23,
  };

  it('should contain correct email', () => {
    render(
      <ReviewItem review={mockReview} onRemove={() => {}} onEdit={() => {}} />
    );
    const emailDisplay = screen.getByText(mockReview.user.email);
    expect(emailDisplay).toBeInTheDocument();
  });
  it('should contain correct rating', () => {
    render(
      <ReviewItem review={mockReview} onRemove={() => {}} onEdit={() => {}} />
    );
    const ratingDisplay = screen.getByText(mockReview.rating + ' / 5');
    expect(ratingDisplay).toBeInTheDocument();
  });
  it('should contain correct review comment', () => {
    render(
      <ReviewItem review={mockReview} onRemove={() => {}} onEdit={() => {}} />
    );
    const reviewCommentDisplay = screen.getByText(mockReview.comment);
    expect(reviewCommentDisplay).toBeInTheDocument();
  });
  /** 

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
    expect(mockOnDelete).toHaveBeenCalledWith(mockReview);
  });
  */
  it('should open modal on click and call removeReview and mutate on confirm', () => {});
});
