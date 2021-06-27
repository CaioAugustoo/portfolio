import { screen } from "@testing-library/react";
import { renderWithTheme } from "utils/tests/helpers";

import ScrollTop from ".";

describe("<ScrollTop />", () => {
  it("should render correctly", () => {
    const { container } = renderWithTheme(<ScrollTop />);

    expect(
      screen.getByAltText(/Icone para voltar ao topo da imagem/i)
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
