const layout = require('../partials/layout')

module.exports = () => {
      return layout({ content : 
            `
            <section>
                  <div class="row topbanner pt-5">
                        <div class="col-lg-6">
                    <p class="banner-heading pt-lg-5">DRIVE YOUR PASSION</p>
                        </div>
                        <div class="col-lg-6 text-center">
                         <img class="img-fluid" src="red-car.png">
                        </div>
                  </div>
            </section>
            <section class="container">
                  <div class="row">
                        <div class="col-lg-6 ">
                              <p class="text-lg-right text-wrap font-weight-normal whySection">WHY BUY YOUR NEXT VEHICLE</p>
                              <p class="text-lg-right text-wrap font-weight-normal atCarstack">at CARSTACK</p>
                              <p class="text-lg-right text-wrap font-weight-normal textCarstack">
                                    It’s all about pride. The pride we take in selling and servicing brand vehicles, some of the most reliable, safe and innovative on the road today. The pride we take in ensuring your experience here at CARSTACK exceeds your expectations, from first appointment through final delivery...and beyond. The pride we take in giving back, particularly our direct involvement in CARSTACK events that support our entire community.
                              </p>
                              <button class="book-appointment border m-3 float-left float-lg-right">MEET OUT TEAM</button>
                              <button class="book-appointment border m-3 float-left float-lg-right">CONTACT US</button>

                        </div>
                        <div class="col-lg-6">
                        <img class="img-fluid" src="carsales.png">
                        </div>
                  </div>
            </section>
            <section class="container">
                  <div class="row">
                        <div class="col-lg-6 ">

                        </div>
                        <div class="col-lg-6 ">
                        
                        </div>
                  </div>
            </section>
                 `
      });
};
