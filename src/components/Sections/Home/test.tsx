import { render, screen } from "@testing-library/react";

import Main from "./index";

describe("<Main />", () => {
  it("should render the heading", () => {
    render(<Main />);

    expect(screen.getByText(/Eaí!✌🏼/i)).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /Eu sou o Caio./i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Desenvolvedor Front-end entusiasta/i)
    ).toBeInTheDocument();
  });
});
