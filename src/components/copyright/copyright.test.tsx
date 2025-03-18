import { render } from '@testing-library/react';
import Copyright from './copyright';

describe('Copyright', () => {

  test('renders copyright element', () => {
    const { container } = render(<Copyright />);
    expect(container.getElementsByClassName('copyright').length).toBe(1);
  });
  
  test('contains copyright symbol', () => {
    const { container } = render(<Copyright />);
    const symbol = '©';
    expect(container.textContent).toContain(symbol);
  });

  test('contains current year', () => {
    const { container } = render(<Copyright />);
    const currentYear = (new Date()).getFullYear().toString();
    expect(container.textContent).toContain(currentYear);
  });

  test('contains business name', () => {
    const { container } = render(<Copyright />);
    const businessName = 'Positively Doodles';
    expect(container.textContent).toContain(businessName);
  });

});