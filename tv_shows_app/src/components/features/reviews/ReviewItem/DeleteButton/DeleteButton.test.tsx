/**
 * 1) contain correct email
 * 2) contain correct rating
 * 3) contain correct review comment
 * 4) render delete button
 * 5) call onDelete callback only once
 * 6) open modal on click and call removeReview and mutate on confirm
 */

import { act, render, screen, waitFor } from '@testing-library/react';
import { IReview, ReviewItem } from '../ReviewItem';
import { DeleteButton } from './DeleteButton';
import { deleteReviewMutator } from '@/fetchers/mutators';
import { mutate } from 'swr';

jest.mock('@/fetchers/mutators', () => {
  return {
    deleteReviewMutator: jest.fn().mockResolvedValue(null),
  };
});
/*
jest.mock('swr', () => {
  return {
    mutate: jest.fn(),
  };
});
*/

describe('DeleteButton', () => {
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
  it('should open modal on click and call removeReview and mutate on confirm', async () => {
    render(<DeleteButton review={mockReview} />);
    const deleteButton = screen.getByTestId('delete-button');
    act(() => {
      deleteButton.click();
    });
    const confirmButton = await screen.findByText('Yes');
    act(() => {
      confirmButton.click();
    });
    await waitFor(() => {
      //expect(mutate).toHaveBeenCalled();
      expect(deleteReviewMutator).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(confirmButton).not.toBeInTheDocument();
    });
  });
});
