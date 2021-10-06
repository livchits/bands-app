export interface BandData {
  id: number;
  name: string;
  genreCode: string;
  year: number;
  country: string;
  members: string[];
}

export interface GenreData {
  code: string;
  name: string;
}

export type Genre =
  | 'Black Metak'
  | 'Grunge'
  | 'Hard Rock'
  | 'Heavy Metal'
  | 'Power Metal'
  | 'Progressive Metal'
  | 'Rock'
  | 'Rock & Roll'
  | 'all';
