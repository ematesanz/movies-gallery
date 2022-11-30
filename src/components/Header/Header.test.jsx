import {render} from "@testing-library/react";
import Header  from "./Header";

describe('Header component', () => {
  it('renders correctly', () => {
    const {container, getByPlaceholderText} = render(
      <Header/>
    );
    expect(container).toMatchSnapshot();
    expect(getByPlaceholderText('What do you fancy today?')).toBeVisible();
    expect(container.getElementsByClassName('favorites').length).toBe(1);
  });
});
