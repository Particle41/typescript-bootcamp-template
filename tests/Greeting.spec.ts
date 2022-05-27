import { Greeting } from "../src/Greeting";

describe("Greeting", () => {
    test("should say hello", () => {
        expect(new Greeting("Hari").hello()).toEqual("hello Hari");
    });
});