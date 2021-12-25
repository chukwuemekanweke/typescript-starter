import { Controller, Get, HttpCode, Post, Query, Redirect } from "@nestjs/common/decorators";
import { get } from "http";

@Controller('dogs')
export class DogsController {

    @Get()
    findAll():string{
        return 'This action returns all dogs';
    }

    @Get('husky')
    findHusky():string
    {
        return 'this action returns Husky breed of dogs';
    }

    @Post()
    @HttpCode(204)
    create(){
        return 'This action adds a new dog';
    }

    @Get('otherDogs')
    @Redirect('https://www.petsmart.com/')
    getOtherDogs(@Query('version') version){
        if(version && version === '5')
        {
            
        }
    }
}