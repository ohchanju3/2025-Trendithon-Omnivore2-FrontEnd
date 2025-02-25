import { FriendReqeustBox } from "@components/friends/friendsRequestBox/FriendsRequestBox.tsx";
import * as S from "./FriendReqeust.styled.ts";
import { useAtom } from "jotai";

import { useEffect } from "react";
import {
  fetchFriendRequestsAtom,
  friendRequestsAtom,
} from "@atoms/friendRequestAtom.ts";

export const FriendReqeust = () => {
  const [requestedData] = useAtom(friendRequestsAtom);
  const [, fetchRequestFriends] = useAtom(fetchFriendRequestsAtom);

  useEffect(() => {
    fetchRequestFriends();
  }, []);

  return (
    <S.FriendRequestWrapper>
      {requestedData.length > 0 ? (
        requestedData.map((data) => (
          <FriendReqeustBox
            key={data.memberId}
            name={data.nickname}
            followerId={data.followId.toString()}
            onSuccess={fetchRequestFriends}
          />
        ))
      ) : (
        <S.NoRequestMessage>요청 내역이 없습니다.</S.NoRequestMessage>
      )}
    </S.FriendRequestWrapper>
  );
};
