import { expect } from "chai"
import geometry from "../src/components/geometry.js"

describe("geometry", () => {
  it("extracts", () =>
    expect(
      geometry({
        TrainStation: [
          {
            Advertised: true,
            AdvertisedLocationName: "Bredaryd",
            AdvertisedShortLocationName: "Bredaryd",
            CountryCode: "SE",
            CountyNo: [6],
            Deleted: false,
            Geometry: {
              SWEREF99TM: "POINT (423681 6337744)",
              WGS84: "POINT (13.737651016592572 57.17653675673727)",
            },
            LocationSignature: "Bdy",
            ModifiedTime: "2021-06-17T09:05:25.135Z",
            PlatformLine: ["1"],
            Prognosticated: true,
          },
          {
            Advertised: true,
            AdvertisedLocationName: "Bengtsfors",
            AdvertisedShortLocationName: "Bengtsfors",
            CountryCode: "SE",
            CountyNo: [14],
            Deleted: false,
            Geometry: {
              SWEREF99TM: "POINT (341299 6546555)",
              WGS84: "POINT (12.234869527899678 59.02890400421548)",
            },
            LocationSignature: "Bef",
            ModifiedTime: "2021-06-17T09:05:25.182Z",
            Prognosticated: false,
          },
        ],
      })
    ).to.deep.equal({
      Bdy: {
        AdvertisedShortLocationName: "Bredaryd",
        Geometry: {
          SWEREF99TM: "POINT (423681 6337744)",
          WGS84: "POINT (13.737651016592572 57.17653675673727)",
        },
      },
      Bef: {
        AdvertisedShortLocationName: "Bengtsfors",
        Geometry: {
          SWEREF99TM: "POINT (341299 6546555)",
          WGS84: "POINT (12.234869527899678 59.02890400421548)",
        },
      },
    }))

  it("handles empty input", () => expect(geometry()).to.deep.equal({}))
})
