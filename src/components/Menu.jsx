import React from 'react';
import { Menu, Popup, List, Button, Image, ItemDescription } from 'semantic-ui-react'


// const CardComponent = ({ title, id, image, removeFromCart }) => (
//     <div class="ui middle aligned divided list">
//         <div class="item">
//             <div class="right floated content">
//                 <div class="ui button red" 
//                 onClick={removeFromCart.bind(this, id)}>remove</div>
//             </div>

//             <img class="ui avatar image" src={image} />
//             <div class="content">
//                 {title}
//             </div>
//         </div>


//     </div>



// )

const CartComponent = ({ title, id, image, removeFromCart }) => (
    <List selection divided verticalAlign="middle">
      <List.Item>
        <List.Content floated="right">
          <Button onClick={removeFromCart.bind(this, id)} color="red">
            Удалить
          </Button>
        </List.Content>
        <Image avatar src={image} />
        <List.Content>{title}</List.Content>
      </List.Item>
    </List>
  );
  






const MenuComponent = ({ totalPrice, count, items }) => (



    <div class="ui menu">
        <a className="item" >Магазин книг</a>

        <div class="right menu">
            <a className="item">Итого : <b>&nbsp;  {totalPrice}</b> грн.</a>




        </div>



        {/* <div >

            <a className="item"
                data-position="bottom center"
                data-tooltip={items.map(book => <CartComponent{...book} />)}
                on='click'
            >Корзина (<b>{count}</b>)</a>
            

        </div> */}


<Popup
        trigger={
          <Menu.Item name="help">
            Корзина (<b>{count}</b>)
          </Menu.Item>
        }
        content={items.map(book => (
          <CartComponent {...book} />
        ))}
        on="click"
        hideOnScroll
      />




    </div>








)


export default MenuComponent;