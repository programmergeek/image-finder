import { useSearch } from "./../Hooks";

describe("useSearch", () => {
  it("Gets data from API", () => {
    const { data, error } = useSearch("search/photos", "nature");
    expect(data?.status).toBe(200);
    expect(error).toBe(false);
  });
});
