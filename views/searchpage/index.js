const layout = require('../partials/layout')

module.exports = () => {
    return layout({ content : `
    <section>
                  <div class="collection-div">
                              <div class="collection-btn border" >
                      <a href="#" class="collection-link">
                         Collection
                       </a></div>
                  </div>
            </section>
            <div class="landingcontainer">
                    <div class="row">
                        <div class="col-md-4 px-0 mx-2 my-4 mainCars pb-2">
                
                         <img class="img-fluid" src="">
                
                        <div class="row  px-4 pt-3">
                                <div class="px-0">
                                        <p class="carsMake my-0"> cars.year  cars.make </p>
                                </div>  
                       </div>
                        <div class="px-2 my-2">
                                <p class="carsModel my-0">cars.model</p>
                        </div>
                        <div class="row">
                                    <div class="col-6 mx-2 mt-2">
                                <i class="material-icons">speed</i>     
                                 <p class="carsMilage my-0">cars.milage km</p>
                                </div>
                        </div>
                                    <div class="col-6 mx-2 px-0 mt-2">
                                        <p class="carsPrice my-0">$ cars.price+</p>
                                    </div>
                        
                  <div>
                        <a href="/viewcar/'+cars._id+'"><button class="see-more-btn ml-2 my-2">SEE MORE</button></a>
                </div>
       
                        </div>
                    </div>    
                  
            </div>
    `
    })
}