import React from 'react';

 

const BookCard = ({title,author,price,image}) => (

    <div class="ui card">
        <div class="image">
            <img src={image} />
        </div>

        <div class="content">
            <a class="header">{title}</a>
            <div class="meta">
                <span class="date">{author}</span>
            </div>
            
            <div class="description">
                Kristy is an art director living in New York.
            </div>
        </div>
        <div class="extra content">
            <a>
                <i class="eur icon"></i>
             {price}
            </a>
        </div>
    </div>

)

export default BookCard;
