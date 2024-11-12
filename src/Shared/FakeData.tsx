import { faker } from '@faker-js/faker';
function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'public/bmw.png',
        miles:'1000',
        gearType:'automatic',
        price:faker.finance.amount({min:100000000,max:1000000000})
    };
}

const carList=faker.helpers.multiple(createRandomeCarList, {
    count:10
})

export default {
    carList
};
