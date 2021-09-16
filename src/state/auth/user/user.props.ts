export interface authUserProps {
  user?: userProps;
  token: string;
  refresh_token?: string;
  forgetPassword: object;
  resetPassword: object;
}

export interface userProps {
  id: number;
  name: string;
  email: string;
  facebook_uid?: number;
  google_uid?: number;
  apple_uid: number;
  role_id: number;
  is_mail_verified: number;
  status_id: number;
  deleted_at: string;
  created_at: string;
  updated_at: string;
  phone: string;
  type_id: number;
  is_phone_verified: number;
  birthday: string;
  gender: string;
  tc_citizen: string;
  id_number: number;
  role: roleProps;
}

export interface roleProps {
  id: number;
  name: string;
  deleted_at: string;
  created_at: string;
  updated_at: string;
}
