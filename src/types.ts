export interface BandData {
  id: number;
  name: string;
  genreCode: GenreCode;
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

export type GenreCode =
  | 'black-metal'
  | 'grunge'
  | 'hard-rock'
  | 'heavy-metal'
  | 'power-metal'
  | 'progressive-metal'
  | 'rock'
  | 'rock-roll'
  | 'all';
