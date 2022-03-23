export interface Date {
  year: string;
  month: string;
  day: string;
  weekday: string;
}

export interface AlbumCardInfo {
  id: number;
  username: string;
  uri: string;
  title: string;
  memo: string;
  isReplied: boolean;
}
