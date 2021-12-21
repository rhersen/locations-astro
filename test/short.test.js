import { expect } from "chai";
import short from "../src/components/short.js";

describe("short", () => {
  it("extracts", () =>
    expect(
      short({
        TrainStation: [
          {
            AdvertisedLocationName: "Avesta centrum",
            AdvertisedShortLocationName: "Avesta centrum",
            LocationSignature: "Acm",
          },
          {
            AdvertisedLocationName: "Abisko turiststation",
            AdvertisedShortLocationName: "Abisko turist",
            LocationSignature: "Akt",
          },
        ],
      })
    ).to.deep.equal({ Acm: "Avesta centrum", Akt: "Abisko turist" }));

  it("handles empty input", () => expect(short()).to.deep.equal({}));
});
