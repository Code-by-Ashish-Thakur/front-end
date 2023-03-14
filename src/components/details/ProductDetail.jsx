import { Typography,Box, Table,TableBody, TableRow, TableCell, styled } from "@mui/material";
import {LocalOffer as Badge } from '@mui/icons-material';

const smallText =styled(Box)`
font-size:14px;
vertical-align:baseline;
& >p{
   font-size:14px;
   margin-top:10px;
}

`;

const StyledBadge =styled(Badge)`
margin-right:10px;
color: #00CC00;
font-size:15px;

`;

const ColumnText =styled(TableRow)`
font-size:14px;
vertical-align:baseline;
& > td{
   font-size:14px;
   margin-top:10px;
   border:none;
}

`


const ProductDetail = ({product}) => {

    const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';
    const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';
    const date =new Date(new Date().getTime()+(5*24*60*60*1000));


    return(
       <>
       <Typography>{product.title.longTitle}</Typography> 
        <Typography style={{marginTop :5 , color:'#878787',fontSize:14 }}>
         8 Ratings & 3 Reviews
         <Box component="span"><img src={fassured} style={{width:77, marginLeft:20}}/></Box>
         </Typography>
      <Typography>
         <Box component="span" style={{fontSize:28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#878787'}}><strike>₹{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
          <Box component="span" style={{color:'#388E3C'}}>{product.price.dicount} off </Box>
         </Typography>   
         <Typography>Available Offers</Typography> 
         <smallText>
           <Typography><StyledBadge/>Get extra 20% off upto  ₹50 on 1 item(s) T&C</Typography> 
           <Typography><StyledBadge/>Get extra 13% off (price inclusive of discount) T&C</Typography>
           <Typography><StyledBadge/>Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹100*  Know More</Typography>
           <Typography><StyledBadge/>Buy 2 items save 5% buy 3 or more save 15 % T&C</Typography>
           <Typography><StyledBadge/>Flat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C</Typography>
           <Typography><StyledBadge/>No cost EMI on Bajaj Finserv EMI card on cart value above ₹5000</Typography>
            
        </smallText> 
        <Table>
        <TableBody>
             <ColumnText>
               <TableCell style={{color:'#878787'}}>Delivery</TableCell>
               <TableCell style={{fontWeight:600}}>Delivered by {date.toDateString()} ₹40</TableCell>
             </ColumnText>
             
             <ColumnText>
               <TableCell style={{color:'#878787'}}>Warranty</TableCell>
               <TableCell>No warranty</TableCell>
             </ColumnText>

             <ColumnText>
               <TableCell style={{color:'#878787'}}>Seller</TableCell>
               <TableCell >
                  <Box component="span" style={{color:'#2874f0'}}> SuperComNet</Box>
                  <Typography>GST Invoice Availabe</Typography>
                  <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
               </TableCell>
             </ColumnText>

             <ColumnText>
              
               <TableCell colSpan={2}>

      <img src={adURL} style={{width:390}} alt="flipkartPoints"/>
               </TableCell>
             </ColumnText>


             <ColumnText>
               <TableCell style={{color:'#878787'}}>Descrption</TableCell>
               <TableCell>{product.description}</TableCell>
             </ColumnText>
        </TableBody>

         </Table> 
       
       </>
    )
}

export default ProductDetail;