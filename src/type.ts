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
  memo?: string;
  isReplied: boolean;
}

export interface CalendarDate {
  month: string;
  day: string;
  date: string;
  fontSize: 'big' | 'small';
}
export interface AlbumCardInfoWithUserType extends AlbumCardInfo {
  type: 'junior' | 'senior';
}

export interface SeniorProfileInfo {
  profile_img?: string;
  name?: string;
  age: number;
  address?: string;
  illness?: string;
  phone_number?: string;
  remarks?: string;
}
