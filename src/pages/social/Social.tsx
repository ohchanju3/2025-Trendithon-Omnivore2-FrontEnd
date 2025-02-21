import { SelectTap } from "@components/selectTap/SelectTap.tsx";
import * as S from "./Social.styled.ts";
import { useEffect, useState } from "react";
import { SocialCupcake } from "@components/social/socialCupcake/SocialCupcake.tsx";
import { SocialCake } from "@components/social/socialCake/socialCake.tsx";

const socailCakeData = [
	{
		likeNum: 12,
		owner: "jeongbami",
		liked: true,
	},
	{
		likeNum: 8,
		owner: "alsn",
		liked: false,
	},
	{
		likeNum: 2,
		owner: "gildong",
		liked: true,
	},
];

const socialCupcakeData = [
	{
		feeling: "happy",
		likenNum: 13,
		writtenDate: "2025.10.24",
		liked: false,
		owner: "jeongbami",
	},
	{
		feeling: "unrest",
		likenNum: 8,
		liked: true,
		writtenDate: "2025.10.23",
		owner: "gildongli",
	},
	{
		feeling: "angry",
		likenNum: 2,
		liked: false,
		writtenDate: "2025.10.22",
		owner: "chillguy",
	},
];

export const Social = () => {
	const [numOfCakes, setNumOfCakes] = useState(0);
	const val1 = `Cakes(${numOfCakes})`;
	const val2 = "New Cupcakes";
	const [selectedTap, setSelectedTap] = useState(val1);

	useEffect(() => {
		setNumOfCakes(14);
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
					<div>
						{socailCakeData.map((data, index) => (
							<SocialCake
								key={index}
								liked={data.liked}
								likedNum={data.likeNum}
								owner={data.owner}
							/>
						))}
					</div>
				) : (
					<div>
						{socialCupcakeData.map((data, index) => (
							<SocialCupcake
								key={index}
								feeling={data.feeling}
								likenNum={data.likenNum}
								owner={data.owner}
								liked={data.liked}
								writtenDate={data.writtenDate}
							></SocialCupcake>
						))}
					</div>
				)}
			</S.Content>
		</S.SocialWrapper>
	);
};
