import { styled } from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 300px;
    height: 40px;
    border: none;
    padding-left: 10px;

    background: var(--bg-secondary);

    border-radius: 8px;

    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: var(--text-dark);
    `

const InputContainer = styled.div`
   position: relative;
   width: 300px;

   svg{
       position: absolute;
       right: 10px;
       top: 50%;
       transform: translateY(-50%);
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