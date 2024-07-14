import { render, screen } from '@testing-library/react';
import { LoginForm } from './LoginForm';
/**
 * 1) contain email input
 * 2) contain password input
 * 3) contain login button
 * 4) contain register link
 */

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
});
