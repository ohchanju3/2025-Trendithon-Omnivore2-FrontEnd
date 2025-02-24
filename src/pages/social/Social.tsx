import { SelectTap } from "@components/selectTap/SelectTap.tsx";
import * as S from "./Social.styled.ts";
import { useEffect, useState } from "react";
import { SocialCake } from "@components/social/socialCake/SocialCake.tsx";
import { getSocialCakes } from "@apis/domain/social/getSocialCakes.ts";
import { getSocialCupcakes } from "@apis/domain/social/getSocialCupcakes.ts";

export const Social = () => {
	const [numOfCakes, setNumOfCakes] = useState(0);
	const val1 = `Cakes(${numOfCakes})`;
	const val2 = "New Cupcakes";
	const [selectedTap, setSelectedTap] = useState(val1);
	const [socialCakeData, setSocialCakeData] = useState<string[]>([]);
	const [socialCupcakeData, setSocialCupcakeData] = useState<string[]>([]);

	const fetchSocialCakes = async () => {
		const response = await getSocialCakes();
		if (response) {
			console.log("getSocialCakes API 응답 데이터:", response);
			setSocialCakeData(response);
			setNumOfCakes(response.length);
		}
	};

	const fetchSocialCupcakes = async () => {
		const response = await getSocialCupcakes();
		if (response) {
			console.log("getSocialCupcakes API 응답 데이터 : ", response);
			setSocialCupcakeData(response);
		}
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
						{socialCakeData.map((data, index) => (
							<SocialCake key={index} liked={false} likedNum={0} owner={data} />
						))}
					</S.CakeWrapper>
				) : (
					<S.CupCakeWrapper>
						{socialCupcakeData.map((data, index) => (
							<SocialCake key={index} liked={false} likedNum={0} owner={data} />
						))}
					</S.CupCakeWrapper>
				)}
			</S.Content>
		</S.SocialWrapper>
	);
};
