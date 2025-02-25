import { atom } from "jotai";
import {
  FollowerWithId,
  getRequestFriends,
} from "@apis/domain/mypage/getRequestFriends.ts";

// 친구 요청 데이터를 저장하는 Atom
export const friendRequestsAtom = atom<FollowerWithId[]>([]);

// 친구 요청 데이터를 불러오는 Atom
export const fetchFriendRequestsAtom = atom(
  (get) => get(friendRequestsAtom),
  async (_get, set) => {
    const response = await getRequestFriends();
    set(friendRequestsAtom, response ?? []);
  }
);
