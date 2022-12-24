
import React, { useEffect } from "react";
import axios from "axios";
import { Col, Row } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import categories from "../categories";
import "./Home.css";

import { useDispatch, useSelector } from "react-redux";
import { updateProducts } from "../features/productSlice";
import ProductPreview from "../components/ProductPreview";

function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const lastProducts = products.slice(0,10);
    useEffect(() => {
        axios.get("/products").then(({ data }) => dispatch(updateProducts(data)));
    }, []);
    return (
        <div className="headline">
          
            <div className="featured-products-container mt-4">
                <h2>New Arrival</h2>
                {/* last products here */}
                <div className=" container grid grid-four-column">
                    {lastProducts.map((product) => (
                        <ProductPreview {...product} />
                    ))}
                </div>
                <div>
                    <Link to="/category/all" style={{ textAlign: "center",fontSize:50,fontWeight:40, display: "block", textDecoration: "none" }}>
                        See more {">>"}
                    </Link>
                </div>
            </div>
           
            <div className="recent-products-container mt-4">
                <h2>Categories</h2>
                <Row>
                    {categories.map((category) => (
                        <LinkContainer to={`/category/${category.name.toLocaleLowerCase()}`}>
                            <Col md={4}>
                                <div style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${category.img})`, gap: "10px" }} className="category-tile">
                                    {category.name}
                                </div>
                            </Col>
                        </LinkContainer>
                    ))}
                </Row>
            </div>
         
        </div>
    );
}

export default Home;