"use client"

import { DefaultPageLayout } from '@/compoents/default-page-layout'
import React from 'react'
import styled from 'styled-components'
import { BackButtonComponent } from '@/compoents/back-button'
import { useProduct } from '@/hooks/useProduct'
import { ShopBagIcon } from '@/compoents/icons/shopping-bag-icon'


const Container = styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
flex-direction: column;

section {
    display: flex;
    justify-content: center;
    width: 100%;
    gap: 32px;
    margin-top: 24px;

    img {
        max-width: 640px;
        width: 50%;
    }
    
    > div {
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        button {
            background: #115D8C;
            mix-blend-mode: multiply;
            border-radius: 4px;
            color: white;
            border: none;
            cursor: pointer;
            padding: 10px 0;
            text-align: center;
            font-weight: 500;
            font-size: 16px;
            text-transform: uppercase;

            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
    }
}
`
const ProductInfo = styled.div`
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;

        span {
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: var(--text-dark-2);
        }

        h2 {
            font-weight: 300;
            font-size: 32px;
            line-height: 150%;
            color: var(--text-dark-2);
            margin-top: 12px;
        }

        span:nth-of-type(2){
            font-weight: 600;
            font-size: 20px;
            color: var(--shapes-dark);
            margin-bottom: 24px;
        }

        p {
            font-weight: 400;
            font-size: 12px;
            color: (--text-dark);
        }

        div {
            margin-top: 24px;

            h3 {
                text-transform: uppercase;
                color: var(--text-dark);
                font-weight: 500;
                font-size: 16px;
            }

            p {
                font-size: 14px;
            }
}
`

const formatPrice = (value: number) => {
    const formattedValue = (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    return formattedValue;
}

export default function Product({ searchParams }: { searchParams: { id: string }}) {
    const { data } = useProduct(searchParams.id);

    return (
    <DefaultPageLayout>
    <Container>
      <BackButtonComponent navigate={'/'}/>
      <section>
            <img src={data?.image_url}alt="imagem do produto" />
            <div>
                <ProductInfo>
                    <span>{data?.category}</span>
                    <span>{data?.name}</span>
                    <span>{formatPrice(data?.price_in_cents ?? 0)}</span>
                    <p>*Frete de R$40,00 para todo Brasil, Grátis para compras acima de R$900</p>
                    <div>
                        <h3>Descrição</h3>
                        <p>{data?.description}</p>
                    </div>
                    </ProductInfo>
                <button>
                    <ShopBagIcon/>
                    Adicionar ao carrinho
                </button>
            </div>
      </section>
    </Container>
    </DefaultPageLayout>    
  )
}


