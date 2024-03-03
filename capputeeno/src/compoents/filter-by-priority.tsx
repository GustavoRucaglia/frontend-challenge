import React from 'react'
import styled from 'styled-components'
import { ArrowIcon } from './arow-icon'
import { useFilter } from '@/hooks/useFilter'
import { Priority } from '@/types/priority'
styled

interface FilterByPriorityProps {
    
}

const FilterContainer = styled.div`
        display: flex;
        align-items: center;
        position: relative;

        button{
            border: none;
            font-family: inherit;
            font-weight: 400;
            cursor: pointer;
            font-size: 14px;
            line-height: 24px;
            color: var(--text-dark);

            display: flex;
            align-items: center;
            justify-content: center;
            background: transparent;

            svg{
                margin-left: 8px;
            }
        }
`

const PriorityFilter = styled.ul`
    position: absolute;
    width: 250px;
    background: #FFFFFF;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    padding: 12px 16px;
    z-index: 999;

    list-style: none;

    top: 100%;
    right: 8px;

    li {
        color: var(--text-dark);
        font-weight: 400;
        font-size: 14px;
        line-height: 22px;
        cursor: pointer;
    }

    li + li {
        margin-top: 4px;
    }
`
function FilterByPriority(props : FilterByPriorityProps) {

    const [ isOpen, setIsOpen ] = React.useState(false)

    const {setPriority} = useFilter();

    const handleClick = (value: Priority) => {
        setPriority(value)
        setIsOpen(false)
    }
    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

  return (
    <FilterContainer>
        <button onClick={handleOpen}>
            Organizar Por
            <ArrowIcon/>
        </button>
        {isOpen && 
        <PriorityFilter>
            <li onClick={() => handleClick(Priority.NEWS)}>Novidades</li>
            <li onClick={() => handleClick(Priority.BIGGEST_PRICE)}>Preço: Maior -Menor</li>
            <li onClick={() => handleClick(Priority.BIGGEST_PRICE)}>Preço: Menor - Maior</li>
            <li onClick={() => handleClick(Priority.POPULARITY)}>Mais vendidos</li>
        </PriorityFilter>
        }
    </FilterContainer>
  )
}

export default FilterByPriority
