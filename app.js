

// functional way to handle the cart systems

function cartnumber(product,price,type,phone){

    const casing = document.getElementById(product+'-input');
    let casing_value = casing.value;
    let casing_amunt = parseInt(casing_value);

    var phone_id = document.getElementById(phone+'-details');
    var phone_id_value = phone_id.innerText;
    var phone_cost = parseInt(phone_id_value);
    
 
   
    if(type=='plus')
    {
        casing.value = casing_amunt+1;

        var cost = price * casing.value;
        phone_id.innerText =cost;
    }
    else{
        if(casing_amunt>0){
            casing.value = casing_amunt-1;
            var cost = price * casing.value;
            phone_id.innerText =cost;
        }
      
    }
    balance();

}

//for phonecase
document.getElementById('btn-plus').addEventListener('click',function(){
   
    cartnumber('case',15,'plus','casing')
      
 });
 
 document.getElementById('btn-minus').addEventListener('click',function(){
    
     cartnumber('case',15,'minus','casing')
       
  });
 
 
  //for phone price
 
 
  document.getElementById('btn-plus2').addEventListener('click',function(){
    
     cartnumber('case2',20,'plus','phone')
       
  });
  
  document.getElementById('btn-minus2').addEventListener('click',function(){
     
      cartnumber('case2',20,'minus','phone')
        
   });
 
   //Balance update and tax total
 
   function phoneinput(product){
       const pinput  = document.getElementById(product+'-input').value;
       const pinput_int = parseInt(pinput);
       return pinput_int;
   }
 
   function balance(){
       const casing_price = parseInt(phoneinput('case')*15);
       const phone_price = parseInt(phoneinput('case2')*20);
       const subtotoal = phone_price+casing_price;
       const tax = subtotoal/10;
       const grand_cost = subtotoal+tax;
 
       //set 
       document.getElementById('subtoal').innerText = subtotoal;
       document.getElementById('tax').innerText = tax;
       document.getElementById('grand-total').innerText = grand_cost;
   }