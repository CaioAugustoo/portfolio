import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Title from ".";

const intersectionObserverMock = () => ({
  observe: () => null,
  disconnet: () => null,
});

window.IntersectionObserver = jest
  .fn()
  .mockImplementation(intersectionObserverMock);

describe("<Title />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Title>Portfolio</Title>);

    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toHaveStyle({
      color: "#ffffff",
      "font-size": "5.0rem",
      position: "relative",
      opacity: 0,
    });

    // expect(container.firstChild).toMatchSnapshot();
  });
});
