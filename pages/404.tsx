import { Box, Typography } from "@mui/material";
import { ShopLayout } from "../components/layouts";

export const NotFoundCustom = () => {
    return (
        <ShopLayout title="Page not found" pageDescription="no hay anda que mostrar">
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                height="calc(100vh - 200px)"
                sx={{
                    flexDirection: {xs:'column', sm:'row'}
                }}
            >
                <Typography variant="h1" component="h1" fontSize={80} fontWeight={200}>404 |</Typography>
                <Typography marginLeft={2} variant="h1" component="h1" fontSize="100" fontWeight="200">Sin resultados de busqueda...</Typography>
            </Box>
        </ShopLayout>
    )
}


export default NotFoundCustom;