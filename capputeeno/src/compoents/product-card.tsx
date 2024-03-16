import styled from "styled-components";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  image: string;
  title: string;
  price: number;
  id: string;
}

const Card = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.4);
  backdrop-filter: blur(4px);
  border-radius: 0px 0px 4px 4px;
  cursor: pointer;
  width: 256px;
  cursor: pointer;
  
  img {
    width: 256px;
    height: 300px;
  }

  h3 {
    font-family: inherit;
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark2);
  }

  p {
    font-family: inherit;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: var(--shapes-dark);
  }

  div {
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    padding: 8px 0px;

    > div {
      width: 228px;
      height: 1px;
      left: 12px;
      padding: 0px;
      top: 340px;
      background: #dce2e6;
      margin: 8px 8px;
    }
  }
`;

export function ProductCard(props: ProductCardProps) {
    function formatValue(value: number) {

            const formattedValue = (value / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            return formattedValue;
    }

    const price = formatValue(props.price);

    const router = useRouter();

    function handleNavigate() {
        router.push(`/product?id=${props.id}`)
    }

  return (
    <Card
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} onClick={handleNavigate}
    >
      <img src={props.image} alt="Imagem do produto" />
      <div>
        <h3>{props.title}</h3>
        <div></div>
        <p>{price}</p>
      </div>
    </Card>
  );
}
