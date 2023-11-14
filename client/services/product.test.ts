import { formatPrice, getAllProducts, getProduct } from "./product";
import { fetchGraphql } from "./graphql";

jest.mock("./graphql", () => ({ fetchGraphql: jest.fn() }));

describe("product service", () => {
  afterEach(() => {
    (fetchGraphql as jest.Mock).mockRestore();
  });

  describe("formatPrice", () => {
    it("should format the price", () => {
      expect(formatPrice(1299)).toEqual("£12.99");
    });
  });

  describe("getAllProducts", () => {
    it("should return all products list", async () => {
      (fetchGraphql as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({ allProducts: [{ id: "42" }] })
      );
      const result = await getAllProducts();
      expect(result).toEqual([{ id: "42" }]);
      expect(fetchGraphql).toHaveBeenCalledTimes(1);
    });
  });

  describe("getProduct", () => {
    it("should return all products list", async () => {
      (fetchGraphql as jest.Mock).mockImplementationOnce(() =>
        Promise.resolve({ Product: { id: "42" } })
      );
      const result = await getProduct("42");
      expect(result).toEqual({ id: "42" });
      expect(fetchGraphql).toHaveBeenCalledTimes(1);
    });
  });
});
