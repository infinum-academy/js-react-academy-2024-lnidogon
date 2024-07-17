import { IShow } from '@/typings/show';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import {
  IReview,
  ReviewItem,
  IReviewItemProps,
} from '../ReviewItem/ReviewItem';
import { ReviewList } from './ReviewList';
import { CLIENT_STATIC_FILES_RUNTIME_WEBPACK } from 'next/dist/shared/lib/constants';
/**
 * 1) render ReviewItem with appropriate props
 */
jest.mock('../ReviewItem/ReviewItem', () => {
  return {
    ReviewItem: jest.fn().mockReturnValue(null),
  };
});

describe('ReviewList', () => {
  const mockReviews: Array<IReview> = [
    {
      comment: 'test',
      rating: 1,
      id: 13,
      show_id: 14,
      user: {
        id: 11,
        email: 'test@test.hr',
        image_url: 'google.com',
      },
    },
    {
      comment: 'test2',
      rating: 12,
      id: 132,
      show_id: 142,
      user: {
        id: 112,
        email: 'test@test2.hr',
        image_url: 'google.com2',
      },
    },
  ];

  it('should render ReviewItem with appropriate props', () => {
    render(
      <ReviewList reviews={mockReviews} onRemove={() => {}} onEdit={() => {}} />
    );
    expect(ReviewItem).toHaveBeenCalledTimes(2);
    mockReviews.forEach((review, index) => {
      expect(ReviewItem).toHaveBeenNthCalledWith(
        index + 1,
        {
          review,
          onRemove: expect.any(Function),
          onEdit: expect.any(Function),
        },
        {}
      );
    });
  });
});
