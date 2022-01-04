import React from 'react';
import Pepperoni from './images/pepperoni.jpg';
import MeatLover from './images/meat.jpg';
import Veggie from './images/veggie.jpeg';
import Hawaiian from './images/hawaiian.jpg';
import Bbq from './images/bbq.jpg';
import plain from './images/plain.jpg';
import Slice from './slice'
import './css/menu.css';

function Menu() {
  return(
    <div className='Menu container-fluid'>
      <h1 className='primary-text'>New York's World Famous</h1>
      <h1 className='secondary-text'>Pizza Menu</h1>
      <div className='row'>
       <Slice 
       img= {plain}
       title= "plain"
       description="Its got Cheese and It's good"
       price="$1.00" />
       <Slice 
       img={Bbq}
       title="BBQ"
       description="One of the second best recommended pizza you could ask for."
       price="$1.50"/>
       <Slice 
       img={Pepperoni}
       description= "It's got cheese, it's got tomato sauce, and it's got pepperoni. One of the best topping you could hope for."
       price= "$1.25"/>
       <Slice 
       img= {Hawaiian}
       title= "Hawaiian"
       description="Its got Cheese and It's from Hawaii"
       price="$1.00" />
       <Slice 
       img= {Veggie}
       title= "Veggie"
       description="Its got Cheese and Veggie"
       price="$1.00" />
       <Slice 
       img= {MeatLover}
       title= "Meat Lover"
       description="Its got Cheese and It's got Meat on it"
       price="$1.00" />
      </div>
    </div>
  );
}

export default Menu;
