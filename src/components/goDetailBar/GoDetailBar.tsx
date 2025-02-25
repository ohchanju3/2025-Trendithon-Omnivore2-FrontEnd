import { useEffect } from "react";
import * as S from "./GoDetailBar.styled.ts";
import { useAtom } from "jotai";
import { fetchFriendRequestsAtom } from "@atoms/friendRequestAtom.ts";

type GoDetailBarProps = {
  text: string[];
  separator?: string;
  width: string;
  onClick: () => void;
};

export const GoDetailBar = ({ text, width, onClick }: GoDetailBarProps) => {
  const [requestedData, fetchRequestFriends] = useAtom(fetchFriendRequestsAtom);

  useEffect(() => {
    fetchRequestFriends();
  }, []);
  const hasFriendRequests = requestedData.length > 0;

  return (
    <S.GoDetailBarWrapper width={width} onClick={() => onClick()}>
      <S.TextWrapper>
        {text.map((t, index) => (
          <span key={index}>{t}</span>
        ))}
      </S.TextWrapper>
      <S.ButtonIconBox>
        {hasFriendRequests && <img src="images/goDetailBar/pink_dot.svg" />}
        <img src="images/goDetailBar/right_arrow.svg" />
      </S.ButtonIconBox>
    </S.GoDetailBarWrapper>
  );
};
