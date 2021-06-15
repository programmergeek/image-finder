import { getData } from "../Components";

test("Expected response status: 200", () => {
  return getData(
    "/photos/random",
    "CwzsxgVaUemIgH7gJ2ARE5QES6QqYuKAeBRTkMtQWC0"
  ).then((data: { status: string }) => {
    expect(data.status).toBe(200);
  });
});
