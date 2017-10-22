function Bun(type, current, flav1, flav2, cost, button){
	this.type= type;
	this.current= current;
	this.flav1= flav1;
	this.flav2= flav2;
	this.cost= cost;
	this.button= button;
}

$(document).ready(function(){

//make sure array will be on cart page
var infoCartItems = JSON.parse(localStorage.getItem("itemsArray"));
	console.log(infoCartItems);

// count of items in cart
if (infoCartItems===null) {
	} else {
		var numCart = infoCartItems.length;
		$("#cart-length").val(length);
		$('#cart-length').append(numCart);
	}
	
//append info to cart
for (i=0; i<numCart; i++){

	var row = $('<tr></tr>');
	var current = $('<td>'+infoCartItems[i].current+'</td>').addClass("checkoutTitles");
	row.append(current);
	
	var flav1 = $('<td>'+infoCartItems[i].flav1+'</td>').addClass("checkoutTitles");
	row.append(flav1);
	$(".cartTable").append(row);
	
	var flav2 = $('<td>'+infoCartItems[i].flav2+'</td>').addClass("checkoutTitles");
	row.append(flav2);
	$(".cartTable").append(row);
	
	var type = $('<td>'+infoCartItems[i].type+'</td>').addClass("checkoutTitles");
	row.append(type);
	$(".cartTable").append(row);
	
	var cost = $('<td>'+infoCartItems[i].cost+'</td>').addClass("checkoutTitles");
	row.append(cost);
	$(".cartTable").append(row);
	
	var button = $('<td><button class="remove">x</button></td>').addClass("checkoutTitles");
	row.append(button);
	$(".cartTable").append(row);		
}	

// removing item from cart	
	$(".remove").on('click', function() {
		// get the index of the row in the table
		var index = $(this).parent().parent().index();
		index = index - 1;
		// remove item from table
		$(this).parent().parent().remove();
		// remove item from the cart local storage
		var cart = JSON.parse(localStorage.getItem("itemsArray"));
		cart.splice(index, 1);
		localStorage.setItem("itemsArray", JSON.stringify(cart));
		location.reload();
		// update the cart #
		if (infoCartItems===null) {
		} else {
			var numCart = infoCartItems.length;
			$("#cart-length").val(length);
			$('#cart-length').append(numCart);
			}
	});
	
//i know we're supposed to get rid of stuff that's commented out, but this piece of code has sentimental value to me
//destructive delete 
//		$('.cartTable tr').click(function(){
//		$(this).remove();
//		return false; });

//hide extra flavor options
$("#extras").hide();
	
//drop downs of package type and flavors
$(".droppy").change(function(){
	if (this.value==='Individual'){
		$("#extras").hide();
		$("#price").html("$2.00");
		}
});
	
$(".droppy").change(function(){
	if (this.value==='6-Pack'){
		$("#extras").hide();
		$("#price").html("$6.00");
		$("#original-image").attr('src','Images/6pack.jpg');
		}
});
	
$(".droppy").change(function(){
	if (this.value==='Multi-Flavor 6-Pack'){
		$("#extras").show();
		$("#original-image").attr('src','Images/6pack.jpg');
		$("#price").html("$8.00");
		}
});	
		
$(".droppy").change(function(){
	if (this.value==='12-Pack'){
		$("#extras").hide();
		$("#price").html("$12.00");
		$("#original-image").attr('src','Images/12pack.jpg');
		}
});
	
$(".droppy").change(function(){
	if (this.value==='Multi-Flavor 12-Pack'){
		$("#extras").show();
		$("#price").html("$14.00");
		$("#original-image").attr('src','Images/12pack.jpg');
		}
});	
//end drop downs of package type and flavors	

//store the info
$("#addCart").click(function(){
	var pack= $(".droppy").val();
	var current= $("#bun-flavor").html();
	var flavor2nd= $("#flavor2").val();
	var flavor3rd= $("#flavor3").val();
	var money= $("#price").html();
	var newItem= new Bun(pack, current, flavor2nd, flavor3rd, money);
	var existingCartItems = JSON.parse(localStorage.getItem("itemsArray"))||[];
	existingCartItems.push(newItem);
	localStorage.setItem("itemsArray", JSON.stringify(existingCartItems));
});	
	
	
});

