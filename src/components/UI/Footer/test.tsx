import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import Footer from ".";

describe("<Footer />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<Footer />);

    expect(screen.getByText(/© 2021 - Caio Augusto/i)).toBeInTheDocument();
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Portfolio/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Blog/i })).toHaveAttribute(
      "href",
      "https://caio-blog.vercel.app/"
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
