import { render } from "@testing-library/react";

import NumberSelector from "./NumberSelector";

describe("Layout component", () => {
  it("matches snapshot", () => {
    const { container } = render(<NumberSelector label="Qty" value={42} />);
    expect(container).toMatchSnapshot();
  });
});
