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

export const CREATE_REPLY_VOICE_URI = (albumId: number) =>
  `${ALBUMS_BASE}/${albumId}/replyvoices`;

export const CREATE_REPLIES_BY_ALBUM_ID = (albumId: number) =>
  `${ALBUMS_BASE}/${albumId}/replies`;

export const CREATE_IMAGE_URI = `${ALBUMS_BASE}/images`;
export const CREATE_VOICE_URI = `${ALBUMS_BASE}/voices`;
export const CREATE_ALBUM = (seniorId: number) =>
  `${ALBUMS_BASE}/juniors/me/seniors/${seniorId}`;

//juniors

//relations
const RELATIONS_BASE = '/relations';
export const GET_RELATIONS = `${RELATIONS_BASE}/seniors/me/juniors`;

//seniors
const SENIORS_BASE = '/seniors';
export const SENIOR_PROFILE_UPDATE = (seniorId: number) =>
  `${SENIORS_BASE}/${seniorId}`;

// simple voices
const SIMPLE_VOICE_BASE = '/simplevoices';
export const CREATE_SIMPLE_VOICE_URI = `${SIMPLE_VOICE_BASE}/files`;
export const GET_SENIOR_VOICES = `${SIMPLE_VOICE_BASE}/seniors/me`;
export const CREATE_SIMPLE_VOICE = (juniorId: number) =>
  `${SIMPLE_VOICE_BASE}/seniors/me/juniors/${juniorId}`;
