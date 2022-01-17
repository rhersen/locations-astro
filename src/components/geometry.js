export default ({ TrainStation = [] } = {}) =>
  Object.fromEntries(
    TrainStation.map(
      ({ LocationSignature, AdvertisedShortLocationName, Geometry }) => [
        LocationSignature,
        { AdvertisedShortLocationName, Geometry },
      ]
    )
  )
