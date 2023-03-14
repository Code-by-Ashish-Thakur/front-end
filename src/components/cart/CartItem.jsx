import { Typography, Box, styled, Button} from "@mui/material";
import {removeFromCart} from "../../redux/actions/cartActions";
import { addEllipsis } from "../../utils/common-utils";
import ButtonGroup from "./ButtonGroup";
import {useDispatch} from 'react-redux';

const Component =styled(Box)`

    border-top:1px solid #f0f0f0;
    display:flex;
    background:#fff;
`;

const LeftComponent =styled(Box)`
   margin:20px;
   display:flex;
   flex-direction:column;

`;
const SmallText =styled(Typography)`
 color:#878787;
 font-size:14px;
 margin-top:10px;
`;
const Remove=styled(Button)`

margin-top:20px;
font-size:16px;
color:#000;
font-weight:600;
`

const CartItem = ({item}) => {
    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

        const dispatch=useDispatch();


      const removeItemFromCart =(id) =>{
        dispatch(removeFromCart(id));
      }

    return(
       
        <Component>
            <LeftComponent>
           <img src={item.url} alt="product" style={{height:120, width:120}}/>
            <ButtonGroup/>
            </LeftComponent>


            <Box style={{margin:20}}>

          <Typography>{addEllipsis(item.title.longTitle)}</Typography>
          <SmallText>seller :DetailNet

            <Box component="span">
                <img src={fassured} alt="flipkart" style={{width:50, marginLeft:10}}/>
            </Box>
          </SmallText>
          <Typography style={{margin:'20px 0'}}>
         <Box component="span" style={{fontWeight:600 , fontSize:18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#878787'}}><strike>₹{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#388E3C'}}>{item.price.dicount} off </Box>
         </Typography>  
         <Remove onClick={() =>removeItemFromCart(item.id)}>Remove</Remove>
            </Box>

        </Component>
    )
}



export default CartItem;