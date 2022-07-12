import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'
import { initialData } from '../database/products'
import { ProductList } from '../components/products'



const Home: NextPage = () => {
  return (
    <ShopLayout title={'Shop - HOME'} pageDescription={'Encuentra tus productos'}>
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Tienda</Typography>

      <ProductList products={ initialData.products as any } />
    </ShopLayout>
  )
}

export default Home
