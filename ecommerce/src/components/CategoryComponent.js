import { Link } from "react-router-dom";

import { categories } from "data";

import { Image, P } from "assets/css/container";
import Nav from "react-bootstrap/Nav";

const CategoryComponent = () => {
  return (
    <>
      <Nav className="category-nav">
        {categories.map((item) => (
          <Nav.Item className="nav-container" key={item.id}>
            <Nav.Link as={Link} to={`/${item.title}`}>
              <Image src={item.img} />
              <P>{item.title}</P>
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </>
  );
};

export default CategoryComponent;
