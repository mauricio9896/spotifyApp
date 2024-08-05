export interface AlbumByID {
  album_type:             string;
  artists:                Artist[];
  available_markets:      string[];
  copyrights:             Copyright[];
  external_ids:           ExternalIDS;
  external_urls:          ExternalUrls;
  genres:                 any[];
  href:                   string;
  id:                     string;
  images:                 Image[];
  label:                  string;
  name:                   string;
  popularity:             number;
  release_date:           Date;
  release_date_precision: string;
  total_tracks:           number;
  tracks:                 Tracks;
  type:                   string;
  uri:                    string;
}

export interface Artist {
  external_urls: ExternalUrls;
  href:          string;
  id:            ID;
  name:          Name;
  type:          ArtistType;
  uri:           URI;
}

export interface ExternalUrls {
  spotify: string;
}

export enum ID {
  The0QUBaF6Rtta4TTmxYYfzux = "0QUBaF6Rtta4TTmxYYfzux",
  The5NSGBmlgUdqWNExnOX8VTV = "5nSGBmlgUdqWNExnOX8VtV",
}

export enum Name {
  RainSounds = "Rain Sounds",
  WhiteNoiseRadiance = "White Noise Radiance",
}

export enum ArtistType {
  Artist = "artist",
}

export enum URI {
  SpotifyArtist0QUBaF6Rtta4TTmxYYfzux = "spotify:artist:0QUBaF6Rtta4TTmxYYfzux",
  SpotifyArtist5NSGBmlgUdqWNExnOX8VTV = "spotify:artist:5nSGBmlgUdqWNExnOX8VtV",
}

export interface Copyright {
  text: string;
  type: string;
}

export interface ExternalIDS {
  upc: string;
}

export interface Image {
  height: number;
  url:    string;
  width:  number;
}

export interface Tracks {
  href:     string;
  items:    Item[];
  limit:    number;
  next:     string;
  offset:   number;
  previous: null;
  total:    number;
}

export interface Item {
  artists:           Artist[];
  available_markets: string[];
  disc_number:       number;
  duration_ms:       number;
  explicit:          boolean;
  external_urls:     ExternalUrls;
  href:              string;
  id:                string;
  is_local:          boolean;
  name:              string;
  preview_url:       string;
  track_number:      number;
  type:              ItemType;
  uri:               string;
}

export enum ItemType {
  Track = "track",
}
