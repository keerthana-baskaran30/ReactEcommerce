import styled from "styled-components";
import { categories } from "data";
import CategoryItem from "components/CategoryItem";
import { Container } from 'assets/css/container';


const CategoryComponent = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default CategoryComponent;