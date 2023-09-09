const puppeteer = require('puppeteer');


async function runAutoTest() {

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    await page.goto('https://rostov.tele2.ru');
    await page.setViewport({ width: 1920, height: 1080 });
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen1.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.click(forBusinessSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen2.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.click(loyaltySelector);
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen3.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));

    bannerText = await page.$eval(inYourRegionTextSelector, element => element.textContent);
    console.log(bannerText);
    await new Promise(resolve => setTimeout(resolve, 15000));

    await page.click(presentSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));

    bannerText = await page.$eval(presentTextSelector, element => element.textContent);
    console.log(bannerText);
    await new Promise(resolve => setTimeout(resolve, 15000));

    await page.click(entertainmentSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));

    bannerText = await page.$eval(entertainmentTextSelector, element => element.textContent);
    console.log(bannerText);
    await new Promise(resolve => setTimeout(resolve, 15000));

    await page.click(foodSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));

    bannerText = await page.$eval(foodTextSelector, element => element.textContent);
    console.log(bannerText);
    await new Promise(resolve => setTimeout(resolve, 15000));

    await page.click(shopingSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));

    bannerText = await page.$eval(shopingTextSelector, element => element.textContent);
    console.log(bannerText);
    await new Promise(resolve => setTimeout(resolve, 15000));

    await page.click(finservicesSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen4.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.click(blackOnWhiteSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen5.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));

    await page.click(aboutTeleTwoSelector);
    await new Promise(resolve => setTimeout(resolve, 15000));
    await page.screenshot({ path: 'screen6.png', fullPage: true });
    await new Promise(resolve => setTimeout(resolve, 500));
}

forBusinessSelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div:nth-child(1) > div > div > div > div > 
section > header > section.header-navbar-main-line.container.flex > 
ul > li:nth-child(2) > a`;

loyaltySelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div:nth-child(1) > div > div > section > 
header > section.header-navbar-main-line.container.flex > 
ul > li:nth-child(3) > a`;

inYourRegionTextSelector = `#offer_FE0D5CEF53748DABE0530D06F60A5B96 > 
div > div.loyalty-offer-item > div > div.loyalty-offer__name > span`;

presentSelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div.main-content > div:nth-child(2) > div > 
div:nth-child(1) > div > div > div:nth-child(1) > div > div > 
div.swiper-wrapper > 
div.swiper-slide.offers-categories-swipe.swiper-slide-next`;

presentTextSelector = `#offer_E5D965BED2ED9F21E0530D06F60AE433 > 
div > div.loyalty-offer-item > div > 
div.loyalty-offer__name > span`;

entertainmentSelector = `#root > div > div.height-holder-mobile > 
div > div > div > div > div.main-content > div:nth-child(2) > 
div > div:nth-child(1) > div > div > div:nth-child(1) > div > 
div > div.swiper-wrapper > 
div.swiper-slide.offers-categories-swipe.swiper-slide-next`;

entertainmentTextSelector = `#offer_E5D965BED2ED9F21E0530D06F60AE433 > 
div > div.loyalty-offer-item > div > div.loyalty-offer__name > span`;

foodSelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div.main-content > div:nth-child(2) > div > 
div:nth-child(1) > div > div > div:nth-child(1) > div > div > 
div.swiper-wrapper > 
div.swiper-slide.offers-categories-swipe.swiper-slide-next`;

foodTextSelector = `#offer_EBEB2DA4E88A78D8E0530D06F60A01AF > 
div > div.loyalty-offer-item > div > div.loyalty-offer__name > span`;

shopingSelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div.main-content > div:nth-child(2) > div > 
div:nth-child(1) > div > div > div:nth-child(1) > div > div > 
div.swiper-wrapper > 
div.swiper-slide.offers-categories-swipe.swiper-slide-next`;

shopingTextSelector = `#offer_FE0D5CEF53748DABE0530D06F60A5B96 > div > 
div.loyalty-offer-item > div > div.loyalty-offer__name > span`;

finservicesSelector = `#root > div > div.height-holder-mobile > div > 
div > div > div > div:nth-child(1) > div > div > div > div > 
section > header > section.header-navbar-main-line.container.flex > 
ul > li:nth-child(4) > a`;

blackOnWhiteSelector = `#root > div > div.height-holder-mobile > 
div > div > div > div > div:nth-child(1) > div > div > div > 
div > section > header > 
section.header-navbar-main-line.container.flex > ul > 
li:nth-child(5) > a`;

aboutTeleTwoSelector = `#root > div > div.height-holder-mobile > 
div > div > div > div > div:nth-child(1) > div > div > div > 
div > section > header > 
section.header-navbar-main-line.container.flex > ul > 
li:nth-child(6) > a`;

runAutoTest();


//бля, это похоже на гавнокод. Куча повторений имеется. По идее сделать бы отдельные
//методы вроде кликера, скриншотера. Что имею ввиду: при вызове оснвоного метода программы - запуск 
//стартовой страницы вызвать метод скриншотер, затем кликер. Когда оказываемся в разделе кэшбэк и покупки, вызвать
//метод скриншотер, а после метод принтер текста какого-либо элемента, затем вызвать метод кликер и т.д. 
//да и в скриншотер запихать обработку исключений, чтобы в случае успешного скрина возвращал true и 
//мы могли при этом условии вызывать кликер. 
//async function openHomePage (){
//    функция октрытия стартового окна
//}

//async getCurrentPageScreenshot() {
//    функция скриншотера страницы
//}



