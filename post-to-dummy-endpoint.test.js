//Test für den DummyEndpoint aus der E-Mail

const { postToDummyEndpoint } = require("./post-to-dummy-endpoint");
const apikey = "xyzabcd123123";

describe("post-to-dummy-endpoint", () =>{
  
    test("returns correct data", async () =>
      const payload = {
        data: {
        entities: [ { id: "123" } ]
      },
      ratio: 0.7
    };
    const result = await postToDummyEndpoint(
      "https://kogoy.wiremockapi.cloud/dummy-endpoint", apiKey, payload);

    expect(result).toBeDefined();
    expect (result. items).toBeDefined();
    expect(result. items).toHaveLength(3);
    expect(result. items [0].id).toBe(1);
    expect(result. items[0].name).toBe("item 1");
    expect(result. items [1].id).toBe(2);
    expect(result. items [1].name).toBe("item 2");
    expect (result. items[2].id).toBe(3);
    expect(result.items[2].name).toBe("item 3");
  });
});
