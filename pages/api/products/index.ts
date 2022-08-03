// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { db, SHOP_CONSTANT } from '../../../database';
import { IProduct } from '../../../interfaces/product';
import { Product } from '../../../models';

type Data = { message: string } | IProduct

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
    switch (req.method) {
        case 'GET':
            return getProduct(req, res)

        default:
            return res.status(400).json({
                message: 'Bad request'
            });
    }
}

const getProduct = async (req: NextApiRequest, res: NextApiResponse<Data>) => {

    const {gender = 'all'} = req.query;

    let condition = {};

    if(gender !== 'all' && SHOP_CONSTANT.validGenders.includes(`${gender}`))
        condition = { gender };

    await db.connect();
    const products: IProduct = await Product
                                            .find(condition)
                                            .select('title images pprice inStock slug -_id')
                                            .lean();
    await db.disconnect();

    return res.status(200).json(
        products
    );

}

