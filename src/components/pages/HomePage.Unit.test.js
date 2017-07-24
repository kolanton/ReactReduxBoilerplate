let assert = require("assert");
let expect = require("expect");

describe("createPagingArray", function() {
  it("should succeed on the 3rd try", function() {
    // Specify this test to only retry up to 2 times
    this.retries(2);
    expect({} instanceof Object).toBeTruthy();
  });
});
