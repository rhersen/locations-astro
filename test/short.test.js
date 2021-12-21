import assert from "assert";
import short from "../src/components/short.js";

describe("Array", function () {
  describe("#indexOf()", function () {
    it("should return -1 when the value is not present", function () {
      assert.equal(short([1, 2, 3]), -1);
    });
  });
});
