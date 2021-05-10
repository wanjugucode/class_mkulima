class Mkulima {
    constructor() {
        this.farms = [];

        this.products = [];
    
        this.orders = [];
    }


    addFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address
        }
        this.farms.push(farm)
    }

    updateFarm(farmId, name, farmer, phone, address) {
        let farm = {
            farmId: farmId,
            name: name,
            farmer: farmer,
            phone: phone,
            address: address
        }
        this.farms.push(farm)
    }
     
    removeFarm(farmId) {
           let farm = this.getFarm(farmId)
           let farmindex = this.farms.indexOf(farm)
           this.farms.splice(farmindex, 1)
    }

    getFarm(farmId){
       for (var i = 0; i < this.farms.length; i++) {
           let farm = this.farms[i]
           if(farm.farmId === farmId){
               return farm
           }
       } 
    }

addProduct(productId, name, price) {
    let product = {
        productId: productId,
        name: name,
        price:price
    }
    this.products.push(product)
}
updateProduct(productId, name, price) {
    let product = {
        productId: productId,
        name: name,
        price:price
    }
    this.products.push(product)
}
removeProduct(productId) {
    let product = this.getFarm(productId)
    let productindex = this.products.indexOf(product)
    this.products.splice(productindex, 1)
}
getProduct(productId){
    for (var i = 0; i < this.products.length; i++) {
        let products = this.product[i]
        if(product.productId ===productId){
            return product
        }
    } 
 }

//  printProduct(){
//     for(let i of this.products){
//         console.log(i.name+" "+i.price)
//     }
//}
calculateOrderCost(productId,quantity){
 let productCost=this.product.find(productCost=>productCost.productId==productId)
return productCost.price*quantity

}

}


var mkulima = new Mkulima();
mkulima.addFarm("1232","Kanyagia","Nyuki","071234678","13");
mkulima.addFarm("1238","Karaba","Sammy","0709934678","18");
console.log(mkulima.farms);


var update = new Mkulima();
update.updateFarm("1233","Kibutio","Kariuki","079034678","93");
console.log(update.farms);


var remove = new Mkulima();
remove.removeFarm(2);
console.log(remove.farms);

var get = new Mkulima();
get.getFarm(2);
console.log(get.farms);


var mkulima = new Mkulima();
mkulima.addProduct("12","orange",20);
mkulima.addProduct("5","apple",25);
console.log(mkulima.products);

var update = new Mkulima();
update.updateProduct("13","mango",30);
console.log(update.products);

var remove = new Mkulima();
remove.removeProduct(1);
console.log(remove.products);

var get = new Mkulima();
get.getProduct(2);
console.log(get.products);

// var print=new Mkulima();
// console.log(print.printProducts());

var order=new Mkulima();
console.log(order.calculateOrderCost("13",40));
