"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Filterbar from '../compoents/filter-bar'
import ProductsList from '@/compoents/products-list'
import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components'

const PageWrapper = styled.main`
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 24px;
        background-color: var(--bg-primary);

        @media (min-width: ${props => props.theme.desktopBreakpoint}) {
          padding: 34px 160px;
        
      }

`

export default function Home() {

  return (
    <PageWrapper>
       <Filterbar/>
       <ProductsList/>
    </PageWrapper>  
  )
}