import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Button from ".";

describe("<Button />", () => {
  it("should render with children", () => {
    const { container } = renderWithTheme(<Button>Button</Button>);

    expect(screen.getByText(/Button/i)).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it("should render with some styles", () => {
    renderWithTheme(<Button>Button</Button>);

    expect(screen.getByRole("button", { name: /Button/i })).toHaveStyle({
      "background-color": "#4C30F5",
      padding: "12px 40px",
      "font-size": "1.5rem",
    });
  });
});
