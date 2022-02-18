export type Genders =
  | 'gender-female'
  | 'gender-male'
  | 'gender-non-binary'
  | 'gender-transgender';

export interface Profile {
  _id: string;
  username: string;
  gender: Genders;
  email: string;
}
