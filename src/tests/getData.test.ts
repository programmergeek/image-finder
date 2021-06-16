import { getData } from "../Components";

test("Expected response status: 200", () => {
  return getData("/photos/random").then((data: { status: string }) => {
    expect(data.status).toBe(200);
  });
});
