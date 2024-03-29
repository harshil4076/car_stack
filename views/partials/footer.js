
      
module.exports = () => {
  return `
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>        
<script
  src="https://code.jquery.com/jquery-3.4.1.min.js"
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<script type="text/javascript">
  $("#car_make").on("change",function(event){
 event.preventDefault();
 event.stopPropagation();
 var make = $("#car_make").val();
 
 $.ajax({
   url: "/addcar/displaymodel", 
   type: 'GET',
   async: true,
   contentType: "application/json",
   data:{
     make:make
   }  
}).done(function(result){
  console.log(result);
   var div = document.getElementById("car_model");
   var output ="";
   result.forEach(function(carmodel){
    output +=    '<option>' +carmodel.model+ '</option>'
       });   
   div.innerHTML = output;
 }).fail(function(err){
   console.log(err);
 })
 
});

</script>
  <script type="text/javascript">
   $("#displaymodel").on("submit",function(event){
  event.preventDefault();
  event.stopPropagation();
  var make = $("#dcarmake").val();
  
  $.ajax({
    url: "/displaymodel", 
    type: 'GET',
    async: true,
    contentType: "application/json",
    data:{
      make:make
    }  
 }).done(function(result){
    var div = document.getElementById("display");
    div.innerHTML = result;
  }).fail(function(err){
    console.log(err);
  })
  
 });

 </script>

  <script type="text/javascript">

 $("#carmakedisplay").on("change",function(event){
  event.preventDefault();
  event.stopPropagation();
  var make = $("#carmakedisplayselect").val();
  console.log(make)
  $.ajax({
    url: "/updatebyone", 
    type: 'GET',
    async: true,
    contentType: "application/json",
    data:{
      make:make
    }  
 }).done(function(cars){
    var displaydiv = document.getElementById("displaydiv");
    var output = "";
    cars.forEach(function(cars){
      output+= '<div class="col-lg px-0 mx-2 my-4 mainCars pb-2">' +
                
                '<img class="img-fluid" src="'+cars.image1+'">'+
                
                        '<div class="row px-4 pt-3">'+
                                '<div class="px-0">'+
                                        '<p class="carsMake my-0">'+ cars.year +''+  cars.make +'</p>'+
                                '</div>' +  
                       ' </div>' +
                        '<div class="px-2 my-2">'+
                                '<p class="carsModel my-0">' +cars.model+'</p>'+
                        '</div>'+
                        '<div class="row">'+
                                    '<div class="col-6 mx-2 mt-2">'+ 
                                '<i class="material-icons">speed</i>' +         
                                 '<p class="carsMilage my-0">'+cars.milage+' km</p>'+
                                '</div>'+
                        '</div>'+
                                    '<div class="col-6 mx-2 px-0 mt-2">'+
                                        '<p class="carsPrice my-0">$' + cars.price+'</p>'+
                                    '</div>'+
                        
                '<div>'+
                        '<a href="/viewcar/'+cars._id+'"><button class="see-more-btn ml-2 my-2">SEE MORE</button></a>'+
                '</div>'+
       
        
    '</div>'
    });

    displaydiv.innerHTML = output;
  }).fail(function(err){
    console.log(err);
  })
  
 });

  </script>
  <script>
    function myFunction() {
  var x = document.getElementById("dropdown-nav");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
</script>

<!-- add car detail ajax -->
 
  <!-- <script type="text/javascript">
    $("#add_car_details").on("click", function(event){
        event.preventDefault();
        event.stopPropagation();
    $.ajax({
        url: "/addcardetails", 
       type: 'GET',
       async: true,
       contentType: "application/json"
    }).done(function(result){
       var admin_div = document.getElementById("admin_display");
       admin_div.innerHTML = result;
      
    }).fail(function(err){
           console.log(err);
       })
    });
    </script> -->
    <script type="text/javascript">
      $("#add_car_make").submit((event)=>{
          event.preventDefault()
          event.stopPropagation()
          var form_data = $("#add_car_make").serializeArray();
          console.log(form_data)
          $.ajax({
              url: "/addcarmake", 
              type: 'POST',
              async: true,
              contentType: "application/json",
              data : JSON.stringify({form_data: form_data})
          }).done(
              (result)=>{
                  console.log(result);
              }
          ).fail((err)=>{
              console.log(err);
          })
      });
  </script>
    </body>

</html>

`
}  