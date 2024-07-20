import { render, screen } from '@testing-library/react';
import { RegisterForm } from './RegisterForm';
/**
 * 1) contain email input
 * 2) contain password input
 * 3) contain password confirmation input
 * 4) contain register button
 * 5) contain login link
 */

describe('RegisterForm', () => {
  it('should contain email input', () => {
    render(<RegisterForm />);
    const emailInput = screen.getByTestId('email');
    expect(emailInput).toBeInTheDocument();
  });
  it('should contain password input', () => {
    render(<RegisterForm />);
    const passwordInput = screen.getByTestId('password');
    expect(passwordInput).toBeInTheDocument();
  });
  it('should contain password confirmation input', () => {
    render(<RegisterForm />);
    const passwordConfirmationInput = screen.getByTestId(
      'password-confirmation'
    );
    expect(passwordConfirmationInput).toBeInTheDocument();
  });
  it('should contain login button', () => {
    render(<RegisterForm />);

    const submitButton = screen
      .getAllByRole('button')
      .filter((button) => button.innerHTML == 'SIGN UP');

    expect(submitButton.length).toEqual(1);
  });
  it('should contain log in link', () => {
    render(<RegisterForm />);
    const loginLink = screen.getByRole('link');
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.innerHTML).toEqual('Log in');
  });
});
