import { SelectTap } from "@components/selectTap/SelectTap.tsx";
import * as S from "./Social.styled.ts";
import { useEffect, useState } from "react";
import { SocialCake } from "@components/social/socialCake/SocialCake.tsx";
import {
	CakeData,
	getSocialCakes,
} from "@apis/domain/social/getSocialCakes.ts";
import {
	getSocialCupcakes,
	SocialCupcake,
} from "@apis/domain/social/getSocialCupcakes.ts";
import { SocialSingleCupcake } from "@components/socialCupcake/SocialSingleCupcake.tsx";
import { Modal } from "@components/modal/Modal.tsx";

export const Social = () => {
	const [numOfCakes, setNumOfCakes] = useState(0);
	const val1 = `Cakes(${numOfCakes})`;
	const val2 = "New Cupcakes";
	const [selectedTap, setSelectedTap] = useState(val1);
	const [socialCakeData, setSocialCakeData] = useState<CakeData[]>([]);
	const [socialCupcakeData, setSocialCupcakeData] = useState<SocialCupcake[]>(
		[],
	);
	const [selectedCupcake, setSelectedCupcake] = useState<SocialCupcake | null>(
		null,
	);
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const fetchSocialCakes = async () => {
		const response = await getSocialCakes();
		if (response && response.length > 0) {
			setSocialCakeData(response);
			setNumOfCakes(response.length);
			console.log(response);
		} else {
			setSocialCakeData([]);
			setNumOfCakes(0);
		}
	};

	const fetchSocialCupcakes = async () => {
		const response = await getSocialCupcakes();
		if (response && response.length > 0) {
			setSocialCupcakeData(response);
		} else {
			setSocialCupcakeData([]);
		}
	};

	const handleCupcakeClick = (data: SocialCupcake) => {
		setSelectedCupcake(data);
		setModalIsOpen(true);
	};

	useEffect(() => {
		fetchSocialCakes();
		fetchSocialCupcakes();
	}, []);

	useEffect(() => {
		setSelectedTap(`Cakes(${numOfCakes})`);
	}, [numOfCakes]);

	return (
		<S.SocialWrapper>
			<S.SelectTap>
				<SelectTap
					val1={val1}
					val2={val2}
					selected={selectedTap}
					onSelect={setSelectedTap}
				/>
			</S.SelectTap>

			<S.Content>
				{selectedTap === val1 ? (
					<S.CakeWrapper>
						{socialCakeData.length > 0 ? (
							socialCakeData.map((data, index) => (
								<SocialCake
									key={index}
									liked={false}
									likedNum={0}
									owner={data.nickname}
									candles={data.candles}
								/>
							))
						) : (
							<div>데이터가 존재하지 않습니다.</div>
						)}
					</S.CakeWrapper>
				) : (
					<S.CupCakeWrapper>
						{socialCupcakeData.map((data, index) => (
							<SocialSingleCupcake
								emotion={data.emotion}
								date={data.date}
								key={index}
								liked={data.like}
								likedNum={data.likeCount}
								nickname={data.nickname}
								onClick={() => handleCupcakeClick(data)}
							/>
						))}
					</S.CupCakeWrapper>
				)}
			</S.Content>

			<Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
				<S.ContentWrapper>
					<S.DayWrapper>
						{selectedCupcake
							? new Date(selectedCupcake.date).toLocaleDateString()
							: ""}
					</S.DayWrapper>
					<S.TextArea
						$emotion={selectedCupcake?.emotion.toLowerCase() || "default"}
					>
						{selectedCupcake?.content || ""}
					</S.TextArea>
					<S.LikeButton>
						<img src="/images/likeBtn/heart.png" alt="heart" />
						<span>{selectedCupcake?.likeCount || 0}</span>
					</S.LikeButton>
				</S.ContentWrapper>
			</Modal>
		</S.SocialWrapper>
	);
};

export default Social;
