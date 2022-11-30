import {render} from "@testing-library/react";
import List  from "./List";

const mockData = [{
  overview: "overview",
  poster_path: "/111.jpg",
  release_date: "2022-10-19",
  title: "title"
}];
const title = "title";
const overview = "overview";

describe('List component', () => {
  it('renders correctly', () => {
    const {container, getByText} = render(
      <List list={mockData}/>
    );
    expect(container).toMatchSnapshot();
    expect(getByText(title)).toBeVisible();
    expect(getByText(overview)).toBeVisible();
  });
});