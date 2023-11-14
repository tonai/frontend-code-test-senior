import { fetchGraphql } from "./graphql";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: "hello world" }),
  } as unknown as Response)
);

describe("graphql service", () => {
  describe("fetchGraphql", () => {
    it("should fetch graphql query", async () => {
      const result = await fetchGraphql("test");
      expect(result).toEqual("hello world");
      expect(fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ body: '{"query":"test","variables":null}' })
      );
    });

    it("should fetch graphql query with some variables", async () => {
      const result = await fetchGraphql("test", "42");
      expect(result).toEqual("hello world");
      expect(fetch).toHaveBeenCalledWith(
        expect.any(String),
        expect.objectContaining({ body: '{"query":"test","variables":"42"}' })
      );
    });
  });
});
