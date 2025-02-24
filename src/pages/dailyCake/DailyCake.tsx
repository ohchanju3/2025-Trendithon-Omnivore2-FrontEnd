import { CalendarForm } from "@components/calendar/Calendar";
import * as S from "./DailyCake.styled";
import Button from "@components/button/Button";
import AddIcon from "@mui/icons-material/Add";
import { DropDownButton } from "@components/button/DropDownButton";
import { useEffect, useState } from "react";
import { Modal } from "@components/modal/Modal";
import { CreateDailyCake } from "@components/modal/createDailyCake/CreateDailyCake";
import { updateAccess } from "@apis/domain/cupcake/updateAccess";

const DailyCake = () => {
	const options = ["전체공개", "친구공개", "비공개"];
	const [privacyMode, setPrivacyMode] = useState(options[0]);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const privacyMapping: Record<string, string> = {
		전체공개: "PUBLIC",
		친구공개: "FRIEND",
		비공개: "PRIVATE",
	};

	const handleShare = async () => {
		const shareData = {
			title: "Daily Cake 공유",
			text: "내 감정을 공유해요! 🧁",
			url: window.location.href,
		};

		try {
			if (navigator.share) {
				await navigator.share(shareData);
				console.log("공유 성공");
			} else {
				alert("현재 브라우저는 공유 기능을 지원하지 않습니다.");
			}
		} catch (error) {
			console.error("공유 오류:", error);
		}
	};

	useEffect(() => {
		const mappedValue = privacyMapping[privacyMode];
		if (mappedValue) {
			updateAccess(mappedValue);
		} else {
			console.warn(`잘못된 privacyMode 값: ${privacyMode}`);
		}
	}, [privacyMode]);

	return (
		<S.StyledDailyCake>
			<CalendarForm />
			<S.StyledButtons>
				<S.IsPublicButton>
					<DropDownButton
						onSelect={(select) => setPrivacyMode(select)}
						selected={privacyMode}
						options={options}
						scheme="E2DAEB"
					>
						<img
							src="images/publicPrivateBtn/isPublic.png"
							alt="isPublicBtnIcon"
						/>
						<span>{privacyMode}</span>
					</DropDownButton>
				</S.IsPublicButton>
				<S.AddButton onClick={() => setIsModalOpen(!isModalOpen)}>
					<AddIcon />
				</S.AddButton>
				<S.ShareButton>
					<Button scheme="E2DAEB" onClick={handleShare}>
						<img src="images/shareBtn/Send.png" alt="shareBtnIcon" />
						<span>공유</span>
					</Button>
				</S.ShareButton>
			</S.StyledButtons>
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				<CreateDailyCake />
			</Modal>
		</S.StyledDailyCake>
	);
};

export default DailyCake;
