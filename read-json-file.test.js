//Unit Test für das JSON das wir in der E-Mail bekommen haben

const path = require("path");
const { readJsonFile } = require("./read-json-file");

describe("readJsonFile", () => {

  test("alles gut, test war richtig"; () => {
    const result = readJsonFile(path.resolve(__dirname, "./read-json-file.example.json"));

    expect(result).toBeDefined();
    expect(result.lines).toBeDefined();
    expect(result.lines).toHaveLength(2);
    expect(result.lines[0].line).toBe(1);
    expect(result.lines[0].desc).toBe("item 1");
    expect(result.lines[1].line).toBe(2);
    expect(result.lines[1].desc).toBe("item 2");
  });

});
