export default ({ TrainStation = [] } = {}) =>
  Object.fromEntries(
    TrainStation.map(({ AdvertisedShortLocationName, LocationSignature }) => [
      LocationSignature,
      AdvertisedShortLocationName,
    ])
  );
