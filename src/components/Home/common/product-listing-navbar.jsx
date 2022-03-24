import React from 'react';

export function ProductNavbar() {
    return (
        <>
            <aside class="aside-navbar">
                    <div class="product-categories">
                        <h1>Categories</h1>
                        <ul class="product-categories-list">
                            <li><a href=".">Sneaker</a></li>
                            <li><a href=".">Formal Shoes</a></li>
                            <li><a href=".">Trainer</a></li>
                            <li><a href=".">Cleats</a></li>
                        </ul>
                    </div>
                    <div class="product-filter">
                        <div>
                            <h1>Filters</h1>
                            <a href="."><span class="filter-badge">Clear All</span></a>
                        </div>
                        <div class="price-range">
                            <input type="range" className='range-slider' min="0" max="10"/>
                            <ul class="filter-range">
                                <li>From: <span>$1</span></li>
                                <li>To: <span>$1000</span></li>
                            </ul>
                        </div>
                        <div class="sort-container">
                            <h3>Sort By:</h3>
                            <ul class="price-sort">
                                <li>
                                    <input type="radio" id="sort-h2l" name="sort-selector" />
                                    <label for="sort-h2l">Price - High to Low</label>
                                </li>
                                <li>
                                    <input type="radio" id="sort-l2h" name="sort-selector" />
                                    <label for="sort-l2h">Price - Low to High</label>
                                </li>
                            </ul>
                        </div>
                        <div class="rate-container">
                            <h3>Rating</h3>
                            <ul class="product-rating">
                                <li>
                                    <input type="radio" id="4star" name="star-selector" />
                                    <label for="4star">4 Star & above</label>
                                </li>
                                <li>
                                    <input type="radio" id="3star" name="star-selector" />
                                    <label for="3star">3 Star & above</label>
                                </li>
                                <li>
                                    <input type="radio" id="2star" name="star-selector" />
                                    <label for="2star">2 Star & above</label>
                                </li>
                                <li>
                                    <input type="radio" id="1star" name="star-selector" />
                                    <label for="1star">1 Star & above</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </aside>
        </>
    );
}