function findBandById(bands, bandId) {
  return bands.find(({ id }) => id === Number(bandId));
}

export default findBandById;
