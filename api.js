const shop ={
    owner:'Alia',
    address:{
        streat:'I am from bd',
        city:'sirajgonj',
        country:'BD',
    },
    product:['laptop', 'matherboard', 'ram',' rom', 'hardisk'], 
    revenew:5000,
    isOpen:true,
    isNew: false
};
console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);