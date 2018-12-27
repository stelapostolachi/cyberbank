var Base = function(){
    this.homeUrl= 'https://www.ncl.com/'
    this.navigateToHome=function(homeUrl){
        browser.get(this.homeUrl);
    }

}
module.exports= new Base();




