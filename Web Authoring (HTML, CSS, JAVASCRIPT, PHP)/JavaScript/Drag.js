var ShoppingBasket = [];

$(document).ready(function(){

    $('.products').draggable({
        zIndex:5000,
        helper: "clone",
    });
	
	    $('.basket').droppable({
        drop: function(event, ui) 
		{
            //assign varaible for dropped item
            var Item = ui.draggable;
			
            //find product name
            var Name = $(Item).find('.car').text();
        
            var Price = $(Item).find('.price').text();

			
            //add item to cart
            AddToCart(Name, Price);
        }
    });
	
	    //Add to cart
    $('.Item').dblclick(function() {
        //gets name from dropped item
        var Name = $(this).find('.car').text();
        
        var Price = $(Item).find('.price').text();

        //add to cart
        AddToCart(Name, Price);
    });   
	
	    function AddToCart(Name, Price) {
        
        $Table = $('#Cart');
        //Add table row to cart depending on name and price
        $Table.after("<tr><td>" + Name + "</td><td>" + Price + "</td></tr>");
        //Add item to array
        ShoppingBasket.push({Name:Name,Price:Price});
        //Parse to string
        var Convert = JSON.stringify(ShoppingBasket);
        //Add item to local storage
        sessionStorage.setItem('Basket', Convert);
    }
	
});