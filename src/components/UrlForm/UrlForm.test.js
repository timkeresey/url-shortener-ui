import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlForm from './UrlForm.js';

describe('UrlForm', () => {
  it('should display a url form', () => {
    const dumAddUrl = jest.fn();

    render(<UrlForm addUrl={dumAddUrl}/>);

    expect(screen.getByText('Shorten Please!')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('URL to Shorten...')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Title...')).toBeInTheDocument();
  });
})
