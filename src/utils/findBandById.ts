import { BandData } from '../types';

function findBandById(bands: BandData[], bandId: string) {
  return bands.find(({ id }) => id === Number(bandId));
}

export default findBandById;
