"use client"

import styled from "styled-components"
import { FilterByType } from "./filter-by-type"
import FilterByPriority from "./filter-by-priority"

interface FilterBarProps {
    
}

const FilterContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
  `

const Filterbar =  (props: FilterBarProps)  => {
  return (
    <FilterContainer>
      <FilterByType/>
      <FilterByPriority/>
    </FilterContainer>
  )
}

export default Filterbar
