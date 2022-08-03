import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { ShopLayout } from '../components/layouts'
//import { initialData } from '../database/products'
import { ProductList } from '../components/products'

import useSWR from "swr"

const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json())


const Home: NextPage = () => {

  const { data, error } = useSWR("/api/products", fetcher)

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return (
    <ShopLayout title={'Shop - HOME'} pageDescription={'Encuentra tus productos'}>
      <Typography variant="h1" component="h1">Tienda</Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>Tienda</Typography>

      <ProductList products={data as any} />
    </ShopLayout>
  )
}

export default Home
