import { styled } from "styled-components";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CartIcon } from "./icons/cart-icon";
import { useRouter } from "next/navigation";

const CartCount = styled.span`
    display: flex;
    width: 10px;
    align-items: center;
    justify-content: center;
    height: 20px;
    border-radius: 50%;
    padding: 0 5px;
    font-size: 10px;
    text-align: center;
    background-color: var(--delete-color);
    color: white;

    position: absolute;
    top: 14px;
    right: -5px;
`

const Container = styled.button`
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
`

export function CartControl(){
    const router = useRouter()
    const { value } = useLocalStorage('cart-items', [])

    const handleNavigateToCart = () => {
        router.push("/cart")
    }

    return (
        <Container onClick={handleNavigateToCart}>
            <CartIcon/>
            {value.length > 0 && <CartCount>{value.length}</CartCount>}
        </Container>
    )
}