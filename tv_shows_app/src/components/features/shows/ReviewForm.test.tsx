import { IShow } from '@/typings/show';
import { render, screen } from '@testing-library/react';
import { mock } from 'node:test';
import { ReviewForm } from './ReviewForm';
/**
 * 1) contain comment input
 * 2) contain rating input
 * 3) contain button input
 */
describe('ReviewForm', () => {
  it('should contain comment input', () => {
    render(<ReviewForm onAdd={() => {}} />);
    const commentInput = screen.getByRole('textbox');
    expect(commentInput).toBeInTheDocument();
  });

  it('should contain rating input', () => {
    render(<ReviewForm onAdd={() => {}} />);
    const reviewInput = screen.getAllByRole('img');
    expect(reviewInput).toHaveLength(5);
  });

  it('should contain button input', () => {
    render(<ReviewForm onAdd={() => {}} />);
    const buttonInput = screen.getByRole('button');
    expect(buttonInput).toBeInTheDocument();
  });
});
