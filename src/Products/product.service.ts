import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose'

import { Product } from './product.model'

@Injectable()
export class ProductService {
    constructor(
        @InjectModel('Product') private readonly productModel: Model<Product>,) {}
    
    async getProducts(){
        return await this.productModel.find().exec();
    }
    async insertProduct(title:String,description:String,price:Number){
        const newProd = new this.productModel({title,description,price})
        const result = await newProd.save(); 
    }

}