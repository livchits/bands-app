function sortByName(bands, asc = true) {
  const copyOfBands = [...bands];

  const sortedBands = copyOfBands.sort((band, nextBand) =>
    band.name.localeCompare(nextBand.name)
  );

  if (!asc) sortedBands.reverse();

  return sortedBands;
}

export default sortByName;
