import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import UrlContainer from './UrlContainer.js';


describe('UrlContainer', () => {
  it('should render displaying url objects passed to it', () => {
    const dumUrls = [{
      id: 1,
      long_url: 'www.turing.com',
      short_url: 'http://localhost:3001/useshorturl/1',
      title: 'Awesome photo'
    }]

    render(<UrlContainer urls={dumUrls}/>);

    expect(screen.getByText('www.turing.com')).toBeInTheDocument();
  });
})
