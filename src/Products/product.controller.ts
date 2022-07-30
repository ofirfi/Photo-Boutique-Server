import { Get, Post, Body , Controller } from "@nestjs/common";

import {ProductService} from './product.service';

@Controller('Product')
export class ProductController{
    constructor(private readonly productService: ProductService){};

    @Get()
    async getProducts(){
        return await this.productService.getProducts();
    }
    @Post()
    async addProduct(
        @Body('title') title:String,
        @Body('description') description:String,
        @Body('price') price:Number
    ) {
        const generatedId = await this.productService.insertProduct(title, description,price);
        return generatedId;
    }
}