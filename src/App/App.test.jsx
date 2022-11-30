import {render} from '@testing-library/react';
import App  from './App';

const MockChildren = () => <div>....mockChildrenComponent....</div>;

describe('App component', () => {
  it('renders correctly', () => {
    const {container} = render(
      <App>
        <MockChildren />
      </App>
    );
    expect(container).toMatchSnapshot();
  });
});