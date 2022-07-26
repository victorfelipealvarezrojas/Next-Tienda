import { Box, Button, Card, CardContent, Divider, Grid, Typography } from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const CartPage = () => {
  return (
    <ShopLayout title="Carrito - 3" pageDescription="Carro de compras de la tienda">
      <Typography variant="h1" component="h1">Carrito</Typography>
      <Grid container>
        <Grid item xs={12} sm={7} >
          {/* cartList  */}
          <CartList/>
        </Grid>

        <Grid item xs={12} sm={5}>
          <Card className="sumary-card" >
            <CardContent>
              <Typography variant="h2" component="h2">Orden</Typography>
              <Divider sx={{my:1}} />
              {/* Orden Sumary  */}
              <OrderSummary/>
              <Box sx={{mt:3}}>
                <Button className="circular-btn"  color="secondary" fullWidth>
                  Checkout
                </Button>
              </Box>

            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default CartPage;
