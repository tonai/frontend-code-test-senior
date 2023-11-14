import { render } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
