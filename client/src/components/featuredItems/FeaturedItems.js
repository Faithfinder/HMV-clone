// import React, { useState, useEffect } from "react";
// import Carousel from "react-bootstrap/Carousel";
// import Image from "react-bootstrap/Image";
// import Button from "react-bootstrap/Button";
// import axios from "axios";

// const FeaturedItems = () => {
//     const [items, setItems] = useState([]);

//     useEffect(() => {
//         (async () => {
//             const fetchedItems = await axios.get("/api/items/featured");
//             setItems(fetchedItems.data);
//         })();
//     }, []);

//     if (!items.length) return null;

//     return (
//         <Carousel style={{height: "500px"}}>
//             {items.map(item => {
//                 return (
//                     <Carousel.Item key={item._id}>
//                         <Image
//                             fluid
//                             className="d-block w-100"
//                             src={item.featured.image}
//                             alt={item.title}
//                         />
//                         <Carousel.Caption>
//                             <h3>{item.title}</h3>
//                             <p>{item.featured.caption}</p>
//                             <Button variant="success">Add to cart</Button>
//                         </Carousel.Caption>
//                     </Carousel.Item>
//                 );
//             })}
//         </Carousel>
//     );
// };

// export default FeaturedItems;
