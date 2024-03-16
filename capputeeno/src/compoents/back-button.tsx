import styled from "styled-components";
import {  BackIcon } from "./icons/back-icon";
import { useRouter } from "next/navigation";

interface BackButtonProps {
    navigate: string;
}
const BackButton = styled.button`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        background: transparent;
        border: none;
        cursor: pointer;

        font-weight: 500;
        font-size: 14px;
        line-height: 150%;
        color: var(--secondary-text);
`
export function BackButtonComponent({ navigate }: BackButtonProps) {
    const router = useRouter();
    const handleNavigate = () => {
        router.push(navigate)
    }
    return (
        <BackButton onClick={handleNavigate}>
            <BackIcon />
            Back
        </BackButton>
    )
}