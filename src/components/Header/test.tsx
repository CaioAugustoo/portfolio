import { render } from "@testing-library/react";

import Header from "./index";

describe("<Header />", () => {
  it("should render the header", () => {
    const { container } = render(<Header />);

    expect(container.firstChild).toHaveStyle({ width: "100%" });
    expect(container.firstChild).toHaveStyle({ display: "flex" });
    expect(container.firstChild).toHaveStyle({ position: "fixed" });
    expect(container.firstChild).toHaveStyle({ top: "0" });
  });
});
