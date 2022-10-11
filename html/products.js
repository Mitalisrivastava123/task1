var products = [{ "id": 101, "name": "Basket Ball", "image": "basketball.png", "price": 150, index: 0, quantity: 1 },
{ "id": 102, "name": "Football", "image": "football.png", "price": 120, index: 1, quantity: 1 },
{ "id": 103, "name": "Soccer", "image": "soccer.png", "price": 110, index: 2, quantity: 1 },
{ "id": 104, "name": "Table Tennis", "image": "table-tennis.png", "price": 130, index: 3, quantity: 1 },
{ "id": 105, "name": "Tennis", "image": "tennis.png", "price": 100, index: 4, quantity: 1 }];



$(document).on('click', '.display', function () {
    var string1 = "<table><tr><th>Id</th><th>Name</th><th>Image</th><th>Price</th><th></th></tr>";
    for (let x = 0; x < products.length; x++) {
        string1 += "<tr><td>" + products[x].id + "</td><td>" + products[x].name + "</td><td>" + "<img src = images/" + products[x].image + "></td><td>" + products[x].price + "</td><td><button type='button' style='background:Dodgerblue;padding:10px;color:#fff;border:none;border-radius:5px;' onclick=add(id) id='" + products[x].id + "'>Add to Cart</button></td></td></tr>";
    }
    string1 += "</table>";
    $("#table1").html(string1);
});


let carts = [];
function add(x1) {
    var str1 = "";
    let flag =0;
    for(let i=0;i<carts.length;i++){
        if(carts[i].id==x1){
            flag=1;
        }
    }
    if(flag==0){
        products.forEach(element => {
            if (element.id == x1) {
                var obj = { id: element.id, name: element.name, image: element.image, price: element.price, quantity: 1 };
                carts.push(obj);
            }
            
        });
    }else if(flag==1){
        carts.forEach(e=>{
            if(e.id==id){
                e.quantity++;
            }
        })
    }
    carts.forEach(element => {
  
        str1 += "<tr><td>" + element.id + "</td><td>" + element.name + "</td><td>" + "<img src=images/" + element.image + "></td><td>" + element.price + "</td><td><td><button type='button'   class='del' >-</button></td><td id='one1'>" + element.quantity + "</td></td><td><button type='button' class='plus'>+</button></td><td><button type='button' style='background:black;padding:10px;color:#fff;border:none;' class='delete' value='" + element + "' id=" + element + ">delete</button></tr>";
    });
    str1 += "";
    $("#table2").html(str1);
}


$(document).on('click', '.plus', function () {
    products.forEach(element => {
        element.quantity = parseInt(element.quantity) + 1;
        console.log(element.quantity);
        $("#one1").html("<td>" + element.quantity + "</td>");
    });
});

$(document).on('click', '.del', function () {

    products.forEach(element => {
        element.quantity = parseInt(element.quantity) - 1;
        if (element.quantity <= 0) {
            $(this).closest("tr").remove();
        }
        console.log(element.quantity);
        $("#one1").html("<td>" + element.quantity + "</td>");
    });


});
$(document).on('click', '.delete', function () {
    m1 = $(this).val();
    products.splice(m1, 1);
    $(this).closest("tr").remove();

});









