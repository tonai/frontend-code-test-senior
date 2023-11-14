import { render } from "@testing-library/react";

import Header from "./Header";
import CartProvider from "../CartProvider/CartProvider";

describe("Header component", () => {
  it("matches snapshot", () => {
    const { container } = render(<Header />, {
      wrapper: CartProvider,
    });
    expect(container).toMatchSnapshot();
  });
});
