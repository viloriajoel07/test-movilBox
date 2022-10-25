import { API } from "./fetch";

export interface userInterface {
  id: number;
  name: string;
  email: string;
  profile: string;
  status: string;
  create_at: Date;
  update_at: Date;
}

export interface userCreateInterface {
  id: number;
  name: string;
  email: string;
  profile: string;
  createAt: Date;
}

export interface userUpdateInterface {
  status: boolean;
  errors: any;
  message: string;
  user: any;
}

export interface listUserInterface {
  status: boolean;
  users: any;
}

export interface profileInterface {
  status: boolean;
  profiles: Array<{ id: number; name: string }>;
}

export const userApi = {
  createUser: async (body: {
    name: string;
    email: string;
    profile: string;
  }) => {
    const result = await API.post<{ value: Array<userInterface> }>(
      "1043930221/users",
      {
        body,
      }
    );
    return result;
  },
  updateUser: async (body: {
    id: number;
    bData: {
      name: string;
      email: string;
      profile: number;
      state: number;
    };
  }) => {
    const result = await API.put<userUpdateInterface>(
      `1043930221/users/${body.id}`,
      {
        body: body.bData,
      }
    );
    return result;
  },
  allUsers: async () => {
    const result = await API.get<{
      users(users: any): void | PromiseLike<void>;
      value: Array<listUserInterface>;
    }>("1043930221/users/index");
    return result;
  },
  viewUser: async (body: { id: number }) => {
    const result = await API.get<{ value: Array<userInterface> }>(
      `1043930221/users/${body.id}`
    );
    return result;
  },
  deleteUser: async (body: { id: number }) => {
    const result = await API.delete<{ value: Array<userInterface> }>(
      `1043930221/users/${body.id}`
    );
    return result;
  },
  profilesFind: async () => {
    const result = await API.get<profileInterface>("profiles");
    return result;
  },
};
