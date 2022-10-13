import React from "react";
import { Card, Image, Icon, Button } from "semantic-ui-react";

const BookCard = book => {
    const { title, author, price, image, addToCart ,addedCount} = book;

    return (<div class="ui card">
        <div class="image">
            <img src={image} />
        </div>

        <div class="content">
            <a class="header">{title}</a>
            <div class="meta">
                <span class="date">{author}</span>
            </div>

            <div class="description"></div>
        </div>
        <div class="extra content">
            <a>
                <i class="eur icon"></i>
                {price}
            </a>
        </div>

        <Button onClick={ addToCart.bind(this, book)}>
            Добавить в корзину
            {addedCount > 0 && `(${addedCount})`}
              </Button>
    </div>
    )

};

export default BookCard;
