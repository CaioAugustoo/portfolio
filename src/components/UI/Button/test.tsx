import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Button from ".";

describe("<Main />", () => {
  it("should render the button", () => {
    renderWithTheme(<Button>Click here</Button>);

    expect(screen.getByText(/Click here/i)).toBeInTheDocument();
  });
});
