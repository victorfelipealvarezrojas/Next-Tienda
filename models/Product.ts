import mongoose, { Schema, model, Model } from 'mongoose';
import { IProduct } from '../interfaces/product';

const productSchema = new Schema({
    description: {
        type: String,
        require: true
    },
    images: [{
        type: String
    }],
    inStock: {
        type: Number,
        require: true,
        default: 0
    },
    price: {
        type: Number,
        require: true,
        default: 0
    },
    sizes: [{
        type: String,
        enum: {
            values: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
            message: '{VALUE} no es un valor valido'
        }
    }],
    slug: {
        type: String,
        require: true,
        unique: true
    },
    tags: [{
        type: String
    }],
    title: {
        type: String,
        require: true
    },
    type: {
        type: String,
        enum: {
            values: ['shirts', 'pants', 'hoodies', 'hats'],
            message: '{VALUE} no es un tipo valido'
        }
    },
    gender: {
        type: String,
        enum: {
            values: ['men', 'women', 'kid', 'unisex'],
            message: '{VALUE} no es un genero valido'
        }
    },
}, {
    timestamps: true
});

//TODO:  Crear indice de mongo, me permiten realizar el filtrado en breakpoints con filtro
productSchema.index({ title: 'text' , tags: 'text'});

const ProductModel: Model<IProduct> = mongoose.models.Product || model('Product', productSchema);

export default ProductModel;