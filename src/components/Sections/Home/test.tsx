import {  screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Home from ".";

describe("<Main />", () => {
  it("should render the home", () => {
    renderWithTheme(<Home />);

    expect(screen.getByText(/Hello!/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /I am Caio Augusto./i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /I create things for the web../i })
    ).toBeInTheDocument();
  });
});
