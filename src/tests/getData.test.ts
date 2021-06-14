import { getData } from "../Components";

test("Expected response status: 200", () => {
  return getData().then((data: { status: "" }) => {
    expect(data.status).toBe("200");
  });
});
