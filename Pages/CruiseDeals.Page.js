require('../Utilities/customLocators.js');

var CruiseDealsPage=function(){
    this.cruiseDealsButton= element(by.linkText('Shop Now'));
    this.myAlert = $('.ngi-icon-times-thin');
    this.neverMissLogo = $('.content-header>h1');
    this.freeOffers=element.all(by.css('#marketing-slider>li:nth-child(2)>div:nth-child(2)>div>div>div:nth-child(3)>div:nth-child(2)>ol'));
    this.viewDeal= $('.btn-cta.btn-primary.btn-large');
    this.categoriesDeals =  $$('.sushi>li');
    this.carvestCaye = $('.sushi>li:nth-of-type(2)');
    this.viewDealsClick = $('#teaLeaf-item-right-item-bottom33>div>form>a:nth-child(1)');
    this.hawaiiCruises = $('.sushi>li:nth-of-type(3)');
    this.norwegianJoy= $('.sushi>li:nth-of-type(4)');
    this.shipInfo =$$('.inforgraphics>li>div span');
    this.bookScrollDown = $('#teaLeaf-btn-cta-btn-secondary-btn-expand-collapsed-js-viewall69');
    this.destination = $('#filterWidgetDirectSearch>li:nth-of-type(1)>a>span');
    this.selectDestination = $('#Destination>li:nth-child(13)>label');
    this.date = $('#Dates>span');
    this.selectDate = $('#calendar>li:nth-of-type(11)>label');
    this.ship = $('#filterWidgetDirectSearch>li:nth-child(3)>a>span');
    this.shipSelection = $('#Ship>li:nth-child(9)>label');
    this.updateSearch = $('#Ships-update-filter');
    this.destinationSelected = $('#teaLeaf-a--13');
    this.totalPrice = $('#teaLeaf-black-text18>strong');
    this.viewSailings =  $('#f2m-1-1>div:nth-of-type(2)>a:nth-child(2)');
    this.vacationPrices = $$('.price');
    this.tourPrice = $('#teaLeaf-black-text786 strong');


    //this.TextArray=$$('.copylc>ul>li')
    

};

module.exports = new CruiseDealsPage();
