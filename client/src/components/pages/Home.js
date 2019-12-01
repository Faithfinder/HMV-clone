import React from "react";

import FeaturedItems from "src/components/items/FeaturedItems";
import MainPageCategory from "src/components/items/MainPageCategory";
import categories from "src/types/categories";

export default () => {
    return (
        <>
            <FeaturedItems />
            {categories.map(category => (
                <MainPageCategory key={category} category={category} />
            ))}
        </>
    );
};
