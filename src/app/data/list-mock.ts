import { List } from "../models/list.model";
import { AuthResponseData } from "../interface/test";
export const LISTS: List[] = [
  { listId: 1, userId: 1958, listStatus: "uncompleted", capacity: 45 },
  { listId: 2, userId: 1958, listStatus: "uncompleted", capacity: 70 },
  { listId: 3, userId: 1958, listStatus: "uncompleted", capacity: 55 },
  { listId: 4, userId: 1958, listStatus: "uncompleted", capacity: 48 },
  { listId: 5, userId: 1970, listStatus: "uncompleted", capacity: 38 },
  { listId: 6, userId: 1970, listStatus: "uncompleted", capacity: 98 },
  { listId: 7, userId: 1970, listStatus: "uncompleted", capacity: 85 },
  { listId: 8, userId: 1970, listStatus: "uncompleted", capacity: 83 },
  { listId: 9, userId: 1970, listStatus: "uncompleted", capacity: 98 }
];

export const MOCK_AuthResponseData: AuthResponseData = {
  expiresIn: "sdf",
  username: "sdf",
  refreshToken: "sdf",
  localId: "sdf",
  registered:  true,
  kind: "sdf",
  idToken: "sdf"
};
