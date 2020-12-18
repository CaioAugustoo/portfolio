import { render, screen } from "@testing-library/react";

import Footer from "./index";

describe("<Footer />", () => {
  it("should render the texts", () => {
    render(<Footer />);

    expect(screen.getByText(/© 2020 - Caio Augusto/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Alguns direitos reservados./i)
    ).toBeInTheDocument();
  });
});
