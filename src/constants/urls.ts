export const BASE_URL = 'http://34.64.52.14';

//accounts
const ACCOUNTS_BASE = '/accounts';
export const GET_ME = `${ACCOUNTS_BASE}/users/me`;

//albums
const ALBUMS_BASE = '/albums';
export const GET_JUNIOR_ALBUMS = `${ALBUMS_BASE}/juniors/me`;
export const GET_SENIOR_ALBUMS = `${ALBUMS_BASE}/seniors/me`;
export const GET_REPLIES_BY_ALBUM_ID = (albumId: number) =>
  `${ALBUMS_BASE}/${albumId}/replies`;
export const GET_ALBUM_BY_ALBUM_ID = (albumId: number) =>
  `${ALBUMS_BASE}/${albumId}`;

export const CREATE_REPLIES_BY_ALBUM_ID = (albumId: number) =>
  `${ALBUMS_BASE}/${albumId}/replies`;

//juniors

//relations

//seniors
const SENIORS_BASE = '/seniors';
export const SENIOR_PROFILE_UPDATE = (seniorId: number) =>
  `${SENIORS_BASE}/${seniorId}`;
