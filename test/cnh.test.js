const { obterCnh } = require("../src/cnh");

test("validando cnh idade 18 anos", async () => {
    expect(obterCnh(21)).toBeTruthy();
});

test("validando cnh idade 15 anos", async () => {
    expect(obterCnh(15)).toBeFalsy();
});
