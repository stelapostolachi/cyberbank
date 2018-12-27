require('../Utilities/CustomLocators.js');
 var Base = require('../Utilities/Base.js');
 var CruiseDealsPage = require('../Pages/CruiseDeals.Page.js');
 var Customlocators = require('../Utilities/CustomLocators.js')

describe('Check Shop Our Cruise Deals & Discover Horvest Caye buttons.', () => {

    

    beforeEach(function(){
        browser.waitForAngularEnabled(false);
        Base.navigateToHome();
         
        });
    
    
        it('should navigate to NCL web page and check the title', () => {
           expect(browser.getTitle()).toEqual('Cruises & Cruise Deals | Caribbean Cruise Vacations | Norwegian Cruise Line');
        
          
        });
          
        it('should click on Shop our Cruise Deals and check Text of Sign up to never miss a cruise deal!', () => {
           CruiseDealsPage.cruiseDealsButton.click();
           CruiseDealsPage.myAlert.click();
           expect(CruiseDealsPage.neverMissLogo.getText()).toEqual('FREE AIR & SEA OFFERS');
          
           
        });
        
    
        it('should check if Free Airfare Offers is present', () => {
           CruiseDealsPage.cruiseDealsButton.click();
           expect(CruiseDealsPage.freeOffers.isPresent()).toBe(true);
           
           
           
        });

    

        it('should be able to click on discover Harvest Caye and click on details.', () => {
            CruiseDealsPage.carvestCaye.click();
            browser.actions().mouseMove(CruiseDealsPage.viewDealsClick).perform();
            browser.sleep(2000);
            CruiseDealsPage.viewDealsClick.click();
            browser.navigate().back();
            
        });

        xit('should see Harvest Caye Highlights, and Display text.', () => {
            CruiseDealsPage.carvestCaye.click();
            CruiseDealsPage.myAlert.click();
            $$('.copylc>ul>li').each((text)=>{
                text.getText().then((resolve)=>{
                    console.log(resolve)
                });
            });
            browser.navigate().back();
            
        });

        xit('should click on Hawaii Cruises & Cruise-tours and get price of the tour.', () => {
            CruiseDealsPage.hawaiiCruises.click();
            CruiseDealsPage.tourPrice.getText().then((total)=>{
                    console.log(`7-Day Hawaii, Round-trip Honolulu cost ${total} $.`)
            
            });
            browser.navigate().back();
            
        });

        it(' should click on Norwegian Joy and get Ship Information.', () => {
            CruiseDealsPage.norwegianJoy.click();
            CruiseDealsPage.shipInfo.each((information)=>{
                information.getText().then((result)=>{
                    console.log(result)
                });
                
            });

            browser.navigate().back();
            
        });

        xit('should choose a vacation.', () => {
            CruiseDealsPage.cruiseDealsButton.click();
            browser.actions().mouseMove(CruiseDealsPage.bookScrollDown).perform();
            browser.sleep(2000)
            CruiseDealsPage.destination.click();
            browser.sleep(2000)
            CruiseDealsPage.selectDestination.click();
            browser.sleep(2000)
            CruiseDealsPage.date.click();
            browser.sleep(2000)
            CruiseDealsPage.selectDate.click();
            browser.sleep(2000)
            CruiseDealsPage.ship.click();
            browser.sleep(2000)
            CruiseDealsPage.shipSelection.click();
            browser.sleep(2000)
            CruiseDealsPage.updateSearch.click();
            browser.sleep(2000);
            CruiseDealsPage.destinationSelected.getText().then((vacation)=>{
                console.log(`Vacation picked by Big Bugs Group is ${vacation}!`);
            });
            CruiseDealsPage.totalPrice.getText().then((price)=>{
                console.log(`Avg Per Person is ${price}$.`)
            });
            
         });

         describe('Pop up window.', () => {
             beforeAll(function(){
                Base.navigateToHome();
             })
            it('should switch to pop up window and get curent URL and vacation prices.', () => {
                CruiseDealsPage.carvestCaye.click();
                browser.sleep(2000);
                browser.actions().mouseMove($('#q1m1>div:nth-of-type(1)>h2>span:nth-child(1)')).perform();
                browser.sleep(2000);
                CruiseDealsPage.viewSailings.click();
                browser.getAllWindowHandles().then((windowhandle)=>{
                    windowhandle1=windowhandle
                    browser.switchTo().window(windowhandle1[1]).then(function(){
                    expect(browser.getCurrentUrl())
                    .toContain('/vacations/norwegian-bliss-2-guests-?ships=4294945626');

                        CruiseDealsPage.vacationPrices.getText().then((total)=>{
                                console.log('Prices may vary from '+total);

                        });
                          
                  
                       
    
                    });
    
                });
    
                 
            });




    
            it('should switch back to previews page.', () => {
                browser.switchTo().window(windowhandle1[0]);
                browser.sleep(2000);
            });
    
    
                
               
                
                
                
                 
             
        });


             
        

         

         



        

        
    
    
});
