import { render, screen } from '@testing-library/react';
import ContactForm from './contactForm';

describe('ContactForm', () => {
  
  test('should render the contact form', () => {
    const { container } = render(<ContactForm />);
    expect(container.getElementsByClassName('contact-form').length).toBe(1);
  });

  test('should render Name* field', async () => {
    render(<ContactForm />);
    const label = await screen.getByText('Name*');
    const input = label.parentElement?.getElementsByTagName('input')[0];
    if(!input) fail();
    expect(label).not.toBeNull();
    expect(input.name).toBe('entry.2005620554');
    expect(input.type).toBe('text');
  });

  test('should render Email* field', async () => {
    render(<ContactForm />);
    const label = await screen.getByText('Email*');
    const input = label.parentElement?.getElementsByTagName('input')[0];
    if(!input) fail();
    expect(label).not.toBeNull();
    expect(input.name).toBe('entry.1045781291');
    expect(input.type).toBe('email');
  });

  test('should render Phone* field', async () => {
    render(<ContactForm />);
    const label = await screen.getByText('Phone*');
    const input = label.parentElement?.getElementsByTagName('input')[0];
    if(!input) fail();
    expect(label).not.toBeNull();
    expect(input.name).toBe('entry.1166974658');
    expect(input.type).toBe('tel');
  });

  test('should render Message* field', async () => {
    render(<ContactForm />);
    const label = await screen.getByText('Message*');
    const textarea = label.parentElement?.getElementsByTagName('textarea')[0];
    if(!textarea) fail();
    expect(label).not.toBeNull();
    expect(textarea.name).toBe('entry.839337160');
  });

  test('should render the Send button', () => {
    render(<ContactForm />);
    const button = screen.getByRole('button');
    expect(button.textContent).toBe('Send');
    expect(button.getAttribute('type')).toBe('submit');
  });

});