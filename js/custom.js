//navigacioni meni

let navText = ["Home", "Featured", "Recent Work", "Blog Entries","Contact Us"];
let navLinks = ["#top", "#featured", "#projects", "#blog","#contact"];
let navMeni = document.querySelector(".navList");
let navIspis = "<ul>";
for(let i = 0; i < navText.length; i++){
    navIspis += `<li><a href="${navLinks[i]}"><span class="rect"></span>
    <span class="circle"></span>${navText[i]}</a></li>`
}
navIspis += "</ul>";
navMeni.innerHTML = navIspis;

//ikonice

let ikonice = [" fa-facebook"," fa-twitter"," fa-linkedin"," fa-rss"," fa-behance"];
let linkoviIkonica = ["https://www.facebook.com/","https://www.twitter.com/","https://www.linkedin.com/","#","#"];
let ikoniceRed = document.querySelector(".social-icons");
let ikoniceIspis = "";
for(let i = 0 ; i < ikonice.length;i++){
    ikoniceIspis +=`<li><a href="${linkoviIkonica[i]}" target="blank"><i class="fa${ikonice[i]}"></i></a></li>`
}
ikoniceRed.innerHTML = ikoniceIspis;

//slajder
let sliderClass = ["item-1"," item-2","item-3"];
let h1TextSlider = ["Beautiful Travels<br>By Travpic","Discover new <br>astonishing places","You can read about<br>our travels"];
let pTextSlider = ["Relive our travels with some amazing pictures.","Maybe you'll find some interesting place<br>and travel yourself","<br>Thank you for supporting us."];
let sliderText = document.querySelector("#top");
let sliderIspis= "";
for(let i = 0 ; i < sliderClass.length;i++){
    sliderIspis +=`<div class="item ${sliderClass[i]}">
    <div class="img-fill">
    <div class="image"></div>
    <div class="info">
        <div>
          <h1>${h1TextSlider[i]}</h1>
          <p>${pTextSlider[i]}</p>
          <div class="white-button button">
              <a href="#featured">Discover More</a>
          </div>
        </div>
        </div>
    </div>
</div>`
}
sliderText.innerHTML = sliderIspis;

//featured places kartice
let imgTag = ["img/BuachailleEtiveMòr.jpg"," img/CinqueTerre.jpg","img/Alaska.jpg","img/toscana.jpg","img/prague.jpg","img/paris.jpg"];
let altTag = ["BuachailleEtiveMòr","CinqueTerre","Alaska","Tuscany","Prague","Paris"]
let featuredText = ["<h4>Buachaille Etive Mòr</h4><span>Scotland</span><p>#1 Buachaille Etive Mòr is one of the best known and loved of all the Munro peaks. The epic view of the mountain from the main A82 road makes it appear quite unassailable and is one of the most photographed sights in Scotland.</p>","<h4>Cinque Terre National Park</h4><span>Proin et sapien</span><p>#2 The park is unique in the way that it brings agricultural, cultural, historical, natural, and scenic significance together under the umbrella of Cinque Terre National Park..</p>","<h4>Alaska</h4><span>United States</span><p>#3 If you're a fan of gorgeous landscapes, massive mountains, wildlife, or anything involving nature, Alaska is a great place to visit. The biggest state in the US, Alaska is home to 17 of the country's 20 tallest mountains.</p>","<h4>Tuscany</h4><span>Italy</span><p>#4 Tuscany, Italian Toscana, regione (region), west-central Italy. It lies along the Tyrrhenian and Ligurian seas. The characteristic landscape is a blend of gently rolling hills leading on to sharply peaked mountains that pose a formidable barrier between Tuscany and regions to the south.</p>","<h4>Prague</h4><span>Czech Republic</span><p>#5 The bohemian allure and fairytale features of Prague make it a perfect destination for culture vultures who want to immerse themselves in history, art, music, and architecture.</p>","<h4>Paris</h4><span>France</span><p>#6 The capital of France seems to have been designed specifically for the enjoyment of its visitors. Its streets, squares, buildings, gardens and monuments beckon tourists to return, and indeed, many do.</p>"]
let featuredPlaces = document.querySelector("#featuredPlaces");
let featuredIspis= `<div class="owl-carousel owl-theme">`;
for(let i = 0 ; i < imgTag.length;i++){
    featuredIspis +=`<div class="item">
    <div class="image">
        <img src="${imgTag[i]}" alt="">
        <div class="featured-button button">
            <a href="#blog">Continue Reading</a>
        </div>
    </div>
    <div class="text-content">
        ${featuredText[i]}
    </div>
</div>`
}
featuredIspis += `</div>`
featuredPlaces.innerHTML = featuredIspis;

//tabovi
//prva petlja ispisuje razlicite divove a druga petlja sa ifom u odnosu na to koji je div ispisuje odredjene slike i tekst
let divTagovi = ["tab1","tab2","tab3","tab4"]
let imgTagovi = ["img/Alaska.jpg","img/CinqueTerre.jpg","img/toscana.jpg"];
let imgTagovi1 = ["img/prague.jpg","img/paris.jpg","img/BuachailleEtiveMòr.jpg"];
let imgTagovi2 = ["img/featured_2.jpg","img/featured_1.jpg","img/featured_3.jpg"];
let imgTagovi3 = ["img/featured_3.jpg","img/featured_1.jpg","img/featured_3.jpg"];
let tabText = ["<h4>Alaska</h4><span>25 July 2019</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Cinque Terre National Park</h4><span>25 June 2019</span><p>Cinque Terre National Park, locally known as Parco Nazionale delle Cinque Terre, is located along the coast of northern Italy in the province of La Spezia.It is the smallest national park in Italy </p>","<h4>Tuscany</h4><span>5 May 2019</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>"]
let tabText1 =["<h4>Prague</h4><span>20 October 2020</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Paris</h4><span>18 August 2020</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Buachaille Etive Mòr</h4><span>6 June 2020</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>"]
let tabText2 =["<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>","<h4>Integer ultrices augue</h4><span>25 July 2018</span><p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>"]
let tabs = document.querySelector("#first-tab-group");
let taboviIspis= "";
for(let i = 0 ; i < divTagovi.length;i++){
    taboviIspis +=`<div id="${divTagovi[i]}"><ul>`
    for(let j = 0 ; j < imgTagovi.length;j++){
        if(i==0){
        taboviIspis += `<li>
        <div class="item">
            <img src="${imgTagovi[j]}" alt="">
            <div class="text-content">
                ${tabText[j]}
                <div class="accent-button button">
                    <a href="#contact">Continue Reading</a>
                </div>
            </div>
        </div>
    </li>`}
        else if(i==1){
        taboviIspis += `<li>
        <div class="item">
            <img src="${imgTagovi1[j]}" alt="">
            <div class="text-content">
                ${tabText1[j]}
                <div class="accent-button button">
                    <a href="#contact">Continue Reading</a>
                </div>
            </div>
        </div>
    </li>`}
        else if(i==2){
            taboviIspis += `<li>
            <div class="item">
                <img src="${imgTagovi2[j]}" alt="">
                <div class="text-content">
                    ${tabText2[j]}
                    <div class="accent-button button">
                        <a href="#contact">Continue Reading</a>
                    </div>
                </div>
            </div>
        </li>`}
        else if(i==3){
            taboviIspis += `<li>
            <div class="item">
                <img src="${imgTagovi3[j]}" alt="">
                <div class="text-content">
                    ${tabText[j]}
                    <div class="accent-button button">
                        <a href="#contact">Continue Reading</a>
                    </div>
                </div>
            </div>
        </li>`}
    }
    taboviIspis += "</ul></div>"
}
tabs.innerHTML = taboviIspis;


{/*                             <div id="tab1">
                                    <ul>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_1.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Integer ultrices augue</h4>
                                                    <span>25 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_2.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>16 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_3.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Sed at massa turpis</h4>
                                                    <span>10 July 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab2">
                                    <ul>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_3.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Sed at massa turpis</h4>
                                                    <span>30 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_1.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>24 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_2.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>12 June 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab3">
                                    <ul>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_2.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>26 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_1.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>22 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_3.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Integer ultrices augue</h4>
                                                    <span>8 May 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div id="tab4">
                                    <ul>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_1.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Lorem ipsum dolor sit</h4>
                                                    <span>26 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>                                
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_3.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Integer ultrices augue eu</h4>
                                                    <span>24 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="item">
                                                <img src="img/blog_2.jpg" alt="">
                                                <div class="text-content">
                                                    <h4>Cras commodo odio ut</h4>
                                                    <span>20 April 2018</span>
                                                    <p>Nam vel egestas nisi. Nullam lobortis magna at enim venenatis luctus. Nam finibus, mauris eu dictum iaculis, dolor tortor cursus quam, in volutpat augue lectus sed magna. Integer mollis lorem quis ipsum maximus finibus.</p>
                                                    
                                                    <div class="accent-button button">
                                                        <a href="#contact">Continue Reading</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div> */}