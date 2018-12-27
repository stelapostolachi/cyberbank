require('../Utilities/CustomLocators.js');
 
 var Customlocators = require('../Utilities/CustomLocators.js');


 describe('Hello world display', () => {
     beforeAll(function(){
        browser.waitForAngularEnabled(false);
        browser.get('https://translate.google.com/');

    });

        

         it('should behave...', () => {
             element(by.id('gt-sl-gms')).click();
             element(by.id(':o')).click();
             element(by.id('source')).sendKeys('Hello world.')
             element(by.id('gt-tl-gms')).click();
             element(by.xpath('//*[@id=":3t"]/div')).click();
             element(by.id('gt-submit')).click();
             
           
             
             
            });

            it('should behave...', () => {
                element(by.id('gt-tl-gms')).click();
               element(by.xpath('//*[@id=":4"]/div/text()')).getText().then((total)=>{
                    console.log(total)
                })

                
            });
     

    
});