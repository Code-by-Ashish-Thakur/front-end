import { useEffect } from 'react';
import {Fragment} from 'react';
// components
import NavBar from './NavBar';
import Banner from './Banner';
import Slide from './Slide';

import MidSlide from './MidSlide';

import MidSection from './MidSection';

import {styled} from '@mui/material';
import { Box } from '@mui/system';
import { getProducts } from '../../redux/actions/productAction';
import { useDispatch, useSelector } from 'react-redux';
const Component=styled(Box)`
padding:10px;
background:#F2F2F2;
`

const Home =() =>{

 const {products}= useSelector(state =>state.getProducts);

 
  const dispatch =useDispatch();

  useEffect(() => {
     dispatch(getProducts())
  }, [dispatch])
    return (
     <>
       <NavBar/>
       <Component>
       <Banner/>
       <MidSlide products={products} title="Deal of the Day" timer={true}/>
       <MidSection/>
       <Slide products={products} title="Discount for You" timer={false}/>
       <Slide products={products} title="suggesting Items"timer={false}/>
       <Slide products={products} title="Top Selection"timer={false}/>
       <Slide products={products} title="Recommned Items" timer={false}/>
       <Slide products={products} title="Trending Offers" timer={false}/>
       <Slide products={products} title="Season's offers" timer={false}/>
       <Slide products={products} title="Top Deals on Accessories" timer={false}/>
       <Slide products={products} title="Best of Electronics " timer={false}/>
       <Slide products={products} title="Beauty, Food, Toys " timer={false}/>
       <Slide products={products} title="Women's Day Specials " timer={false}/>
       </Component>
       
     </>
    )
}


export default Home;
