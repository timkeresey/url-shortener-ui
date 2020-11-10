import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { getUrls, postUrl } from '../../apiCalls.js'
import App from './App.js';
import UrlForm from '../UrlForm/UrlForm.js';
import UrlContainer from '../UrlContainer/UrlContainer.js';
jest.mock('../../apiCalls.js');

describe('App', () => {
  it('should render displaying proper elements', () => {
    render(<App />);

    expect(screen.getByText('URL Shortener')).toBeInTheDocument();
  });

  it('should display the urls that are on the server when rendered', async () => {
    getUrls.mockResolvedValueOnce([{
      id: 1,
      long_url: 'www.turing.com',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'Awesome photo'
    }]);

    render(<App />);

    const url = await waitFor(() => screen.getByText('Awesome photo'));
    expect(url).toBeInTheDocument();
  });

})
