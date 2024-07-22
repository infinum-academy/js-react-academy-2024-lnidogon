import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { MemoryRouter } from 'react-router-dom';
import { mutator } from '@/fetchers/mutators';
import { swrKeys } from '@/fetchers/swrKeys';
/**
 * 1) contain email input
 * 2) contain password input
 * 3) contain login button
 * 4) contain register link
 * 5) call fetcher with provided arguments
 */

jest.mock('@/fetchers/mutators', () => {
  return {
    mutator: jest.fn().mockResolvedValue(null),
  };
});

jest.mock('swr', () => {
  return {
    mutate: jest.fn().mockResolvedValue(null),
  };
});

describe('LoginForm', () => {
  it('should contain email input', () => {
    render(<LoginForm />);
    const emailInput = screen.getByTestId('email');
    expect(emailInput).toBeInTheDocument();
  });
  it('should contain password input', () => {
    render(<LoginForm />);
    const passwordInput = screen.getByTestId('password');
    expect(passwordInput).toBeInTheDocument();
  });
  it('should contain login button', () => {
    render(<LoginForm />);
    const submitButton = screen
      .getAllByRole('button')
      .filter((button) => button.innerHTML == 'Log in');
    expect(submitButton.length).toEqual(1);
  });
  it('should contain register link', () => {
    render(<LoginForm />);
    const registerLink = screen.getByRole('link');
    expect(registerLink).toBeInTheDocument();
    expect(registerLink.innerHTML).toEqual('Register');
  });
  it('should call fetcher with provided arguments', async () => {
    render(<LoginForm />);
    const emailInput: HTMLInputElement = screen.getByTestId('email');
    const passwordInput: HTMLInputElement = screen.getByTestId('password');
    const submitButton = screen.getByText('Log in');
    fireEvent.change(emailInput, { target: { value: 'test@test.hr' } });
    fireEvent.change(passwordInput, { target: { value: '12345678' } });
    fireEvent.submit(submitButton);
    await waitFor(() => {
      expect(mutator).toHaveBeenCalledWith(swrKeys.login, {
        arg: {
          email: 'test@test.hr',
          password: '12345678',
        },
      });
    });
  });
});
