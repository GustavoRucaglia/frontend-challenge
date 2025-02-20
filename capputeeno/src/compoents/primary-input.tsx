import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 100%;
    height: 40px;
    border: none;
    padding-left: 10px;

    background: var(--bg-secondary);

    border-radius: 8px;

    font-family: inherit;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    color: var(--text-dark);

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        font-size: 14px;
        line-height: 22px;
    }

    `

const InputContainer = styled.div`
   position: relative;
   width: 250px;

   svg{
       position: absolute;
       right: 10px;
       top: 50%;
       transform: translateY(-50%);
   }

   @media(min-width: ${props => props.theme.desktopBreakpoint}){
       width: 352px;
   }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export function PrimaryInputWSearchIcon(props: InputProps){
    return(
        <InputContainer>
            <PrimaryInput {...props} placeholder="Encontre seu produto aqui" />
            <SearchIcon/>
        </InputContainer>
    )
}