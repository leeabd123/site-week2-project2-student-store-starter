const fs = require('fs');
const { BadRequestError } = require("../error")

class Store {
    static productList() {
        try {
          const data = fs.readFileSync('./data/db.json', 'utf8');
          return JSON.parse(data);
        } catch (error) {
          console.error(error);
          return [];
        }
    }

    static getProductByID(productId) {
        const products = Store.productList();
        const a_product =  products.products.find((the_product) => the_product.id == productId);
        return a_product;
    }

    static getPurchaseNumber() {
        const products = Store.productList();
        const totalNum =  products.purchases.length;
        return totalNum;
    }


    static shoppingCart = [];
    static initializeShoppingCart() {
        Store.shoppingCart = [];
    }

    static previousPurchases = [];
    static previousPurchasesInitialized() {
        Store.previousPurchases = [];
    }

    static handleDelete(itemId) {
        const cart = Store.shoppingCart.filter(an_id => an_id.itemId != itemId);
    }

    static updateQuantity(itemId, amount) {
        const a_product = Store.shoppingCart.filter(an_id => an_id.itemId == itemId);
        if (a_product.quantity + amount < 0) {
            Store.handleDelete(itemId)
        } else {
            a_product.quantity += amount; 
        }
    }
      
   

    static purchaseOrder(shoppingCart, user) {
        const { name, email } = user
        console.log(shoppingCart, user, name, email);


        if (shoppingCart.length == 0 || user == null) {
            throw new BadRequestError("Fields are missing")
        }

    

        for (const item of shoppingCart) {
            for (const purchase of Store.previousPurchases) {
                if (item.id == purchase.id) {
                    throw new BadRequestError("Duplicate Item")

                }
            }
        
        }
        let total_num = 0;
        
        for (const item of shoppingCart) {
            let getproduct = Store.getProductByID(item.itemId);
            total_num += parseFloat(getproduct.price) * parseFloat(item.quantity);

        }
        let idField = Store.productList().purchases.length + 1

        let tax = 8.75

        total_num = total_num.toFixed(2)


        let subtotal_tax = ((tax / 100) * total_num).toFixed(2);

        let total = parseFloat(total_num) + parseFloat(subtotal_tax);
        total = total.toFixed(2)
    

        let anOrder = [
            {
                id: {idField},
                email: {email},
                order: {shoppingCart},
                subtotal: {total_num},
                tax: {subtotal_tax},
                total: {total},
                createdAt: new Date().toString(),
                name: {name}


            }
        ]

        const db = Store.productList();
        const purchases = db.purchases;

        purchases.push(anOrder);

        fs.writeFileSync('./data/db.json', JSON.stringify(db));


        console.log("sucessfully made an order ", anOrder);

        Store.shoppingCart.push(anOrder)
       
    }

    static purchaseList() {
        try {
          const data = fs.readFileSync('./data/db.json', 'utf8');
          const {purchases} = JSON.parse(data);
          return {"purchases": purchases};
        } catch (error) {
          console.error(error);
          return [];
        }
    } 

    static getPurchaseById(productId) {
        const { purchases } = Store.purchaseList();
        for (const purchaseArray of Object.values(purchases)) {
          const purchase = purchaseArray[0];
          if (purchase.id === productId) {
            console.log(purchase)
            res.send(purchase)
            return purchase;
          }
        }
      }
      
}

module.exports = Store; 