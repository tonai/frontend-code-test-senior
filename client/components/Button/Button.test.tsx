import { render } from "@testing-library/react";

import Button from "./Button";

describe("Button component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Button>test</Button>);
    expect(container).toMatchSnapshot();
  });
});
