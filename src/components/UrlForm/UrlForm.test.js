import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import UrlForm from './UrlForm.js';

describe('UrlForm', () => {
  it('should display a url form', () => {
    const dumAddUrl = jest.fn();

    render(<UrlForm addUrl={dumAddUrl}/>);

    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
  });

  it('should update input values when form when inputs are filled', () => {
    const dumAddUrl = jest.fn();

    render(<UrlForm addUrl={dumAddUrl}/>);

    const title = screen.getByPlaceholderText('Title...');
    userEvent.type(title, 'turing');
    expect(title).toHaveValue('turing');

    const url = screen.getByPlaceholderText('URL to Shorten...');
    userEvent.type(url, 'turing.io');
    expect(url).toHaveValue('turing.io');
  });

  it('should call addUrl when button is clicked', () => {
    const dumAddUrl = jest.fn();

    render(<UrlForm addUrl={dumAddUrl}/>);

    userEvent.click(screen.getByText('Shorten Please!'));
    expect(dumAddUrl).toHaveBeenCalledTimes(1);
  });
})
