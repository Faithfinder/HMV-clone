import React from "react";

import FeaturedItems from "src/components/items/FeaturedItems";
import MainPageCategory from "src/components/items/MainPageCategory";

export default () => {
    return (
        <>
            <FeaturedItems />
            <MainPageCategory category="Music" />
            <MainPageCategory category="Video" />
            <MainPageCategory category="Games" />
        </>
    );
};
