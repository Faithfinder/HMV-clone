import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";

const FeaturedItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        (async () => {
            const fetchedItems = await axios.get("/api/items/featured");
            setItems(fetchedItems.data);
        })();
    }, []);

    if (!items.length) return null;

    return (
        <Carousel>
            {items.map(item => {
                return (
                    <Carousel.Item key={item._id}>
                        <img
                            className="d-block w-100"
                            src={item.featured.image}
                            alt=""
                        />
                        <Carousel.Caption>
                            <h3>{item.title}</h3>
                            <p>{item.featured.caption}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                );
            })}
        </Carousel>
    );
};

export default FeaturedItems;
