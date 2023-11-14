import { render } from "@testing-library/react";

import Layout from "./Layout";

describe("Layout component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Layout>test</Layout>);
    expect(container).toMatchSnapshot();
  });
});
