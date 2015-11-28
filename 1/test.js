var assert = require("assert");


describe("arithmetic", function () {
  describe("plus", function () {
    it ("should be true as 4 + 4 = 8", function () {
      assert.equal(4 + 4, 8);
    })
  })

  describe("subtraction", function () {
    it ("should return false as 4 - 2 != 1", function () {
      assert.notEqual(4 - 2, 1);
    })
  })

})
