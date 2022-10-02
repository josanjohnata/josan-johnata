import { render, screen } from '@testing-library/react';

import Home from '../Home';

describe('Home', () => {
  it('should render correctly header', () => {
		const { getByTestId} = render(<Home />);
		const titleHeader = screen.getByText(/josan johnata/i);
		const subtitleHeader = screen.getByText(/Full Stack Developer/i);

		expect(getByTestId('home-image-header')).toBeDefined();
    expect(titleHeader).toBeDefined();
		expect(subtitleHeader).toBeDefined();
	})
});