import React from "react";

import FeaturedItems from "src/components/items/FeaturedItems";
import { ItemsByCategory } from "src/components/items/ItemsByCategory";

export default () => {
    return (
        <>
            <FeaturedItems />
            <ItemsByCategory category="Music" />
            <ItemsByCategory category="Video" />
            <ItemsByCategory category="Games" />
        </>
    );
};
