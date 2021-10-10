export interface BandData {
  id: number;
  name: string;
  genreCode: string;
  year: number;
  country: string;
  members: { name: string }[];
}

export interface GenreData {
  code: string;
  name: string;
}

export interface AlbumData {
  id: number;
  bandId: number;
  name: string;
  year: number;
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

export type GenreCode =
  | 'black-metal'
  | 'grunge'
  | 'hard-rock'
  | 'heavy-metal'
  | 'power-metal'
  | 'progressive-metal'
  | 'rock'
  | 'rock-roll';
