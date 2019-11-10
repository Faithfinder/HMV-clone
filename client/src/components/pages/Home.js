import React from "react";

import Container from "@material-ui/core/Container";

import FeaturedItems from "src/components/items/FeaturedItems";
import { ItemsByCategory } from "src/components/items/ItemsByCategory";

export default () => {
    return (
        <>
            <FeaturedItems />
            <Container>
                <ItemsByCategory category="Music" />
                <ItemsByCategory category="Video" />
                <ItemsByCategory category="Games" />
            </Container>
        </>
    );
};
