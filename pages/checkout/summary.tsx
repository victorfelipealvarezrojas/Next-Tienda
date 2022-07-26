import NextLink from 'next/link';
import { Box, Button, Card, CardContent, Divider, Grid, Typography, Link } from "@mui/material";
import { CartList, OrderSummary } from "../../components/cart";
import { ShopLayout } from "../../components/layouts";

const SummaryPage = () => {
    return (
        <ShopLayout title="Resumen de la orden" pageDescription="Resumen de la orden">
            <Typography variant="h1" component="h1">Resumen Orden</Typography>
            <Grid container>
                <Grid item xs={12} sm={7} >
                    {/* cartList  */}
                    <CartList />
                </Grid>

                <Grid item xs={12} sm={5}>
                    <Card className="sumary-card" >
                        <CardContent>
                            <Typography variant="h2" component="h2">Resumen (3 productor)</Typography>
                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="space-between">
                            <Typography variant="subtitle1">Direccion de entrega</Typography>
                                <NextLink href="/checkout/address" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>

  
                            <Typography>Victor Alvarez</Typography>
                            <Typography>lo arcaya casas viejas 18F</Typography>
                            <Typography>Colina, Santiago 2345</Typography>
                            <Typography>Chile</Typography>
                            <Typography>+459 44905069</Typography>

                            <Divider sx={{ my: 1 }} />

                            <Box display="flex" justifyContent="end">
                                <NextLink href="/cart" passHref>
                                    <Link underline="always">Editar</Link>
                                </NextLink>
                            </Box>

                            {/* Orden Sumary  */}
                            <OrderSummary />
                            <Box sx={{ mt: 3 }}>
                                <Button className="circular-btn" color="secondary" fullWidth>
                                    Confirmar Orden
                                </Button>
                            </Box>

                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </ShopLayout>
    )
}

export default SummaryPage;
