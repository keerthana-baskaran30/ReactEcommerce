import styled from "styled-components";
import { Button } from 'react-bootstrap';
import { useNavigate,Link } from "react-router-dom";
import {Image} from "assets/css/container";

const Container = styled.div`
  flex: 1;
  margin: 30px;
  margin-bottom:50px;
  height: 70vh;
  position: relative;
`;


// const Image = styled.img`
//   width: 100%;
//   height: 100%;
//   object-fit: cover;
// `;


const CategoryItem = ({ item }) => {

  return (
    <Container>
      <Image src={item.img} />
      <p>{item.title}</p>
      <Button  as={Link} to={`${item.title}`}>
        SHOP NOW
      </Button>
    </Container>
  );
};

export default CategoryItem;
