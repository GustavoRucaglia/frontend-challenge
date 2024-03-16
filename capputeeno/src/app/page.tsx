"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Filterbar from '../compoents/filter-bar'
import ProductsList from '@/compoents/products-list'
import { QueryClient, QueryClientProvider } from 'react-query'
import styled from 'styled-components'
import { DefaultPageLayout } from '@/compoents/default-page-layout'

const PageWrapper = styled.main`
      .main {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 12px 24px;

`

export default function Home() {

  return (
  <DefaultPageLayout>
    <PageWrapper>
       <Filterbar/>
       <ProductsList/>
    </PageWrapper> 
  </DefaultPageLayout>
  )
}