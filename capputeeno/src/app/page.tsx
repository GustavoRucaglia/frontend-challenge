"use client"

import Image from 'next/image'
import styles from './page.module.css'
import Filterbar from '../compoents/filter-bar'
import ProductsList from '@/compoents/products-list'
import { QueryClient, QueryClientProvider } from 'react-query'

export default function Home() {

  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
    <main className={styles.main}>
       <Filterbar/>
       <ProductsList/>
    </main>
    </QueryClientProvider>
  )
}