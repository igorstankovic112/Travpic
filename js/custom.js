//navigacioni meni

let navText = ["Home", "Featured", "Recent Work", "Blog Entries","Contact Us"];
let navLinks = ["#top", "#featured", "#projects", "#blog","#contact"];
let navMeni = document.querySelector(".navList");
let navIspis = "<ul>";
for(let i = 0; i < navText.length; i++){
    navIspis += `<li><a href="${navLinks[i]}"><span class="rect"></span>
    <span class="circle"></span>${navText[i]}</a></li>`
}
navIspis += `</ul>`;
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
let imgTagovi = ["img/Budapest.jpg","img/milano.jpg","img/edinburgh.jpg"];
let imgTagovi1 = ["img/prague.jpg","img/paris.jpg","img/BuachailleEtiveMòr.jpg"];
let imgTagovi2 = ["img/Alaska.jpg","img/CinqueTerre.jpg","img/toscana.jpg"];
let imgTagovi3 = ["img/Vienna.jpg","img/rome.jpg","img/belgrade.jpg"];
let tabText = ["<h4>Budapest</h4><span>14 May 2019</span><p>Once called the “Queen of the Danube,” Budapest has long been the focal point of the nation and a lively cultural centre. The city straddles the Danube River in the magnificent natural setting where the hills of western Hungary meet the plains stretching to the east and south.</p>","<h4>Milano</h4><span>12 July 2019</span><p>One of the world's fashion capitals, Milan is often overlooked by tourists who flock to Rome, Florence, and Venice. But this gem of a city has a lot to offer, including the iconic Duomo di Milano, the world's largest—and perhaps most stunning—Gothic cathedral.</p>","<h4>Edinburgh</h4><span>9 November 2019</span><p>Scotland’s capital city, Edinburgh is renowned for its heritage, culture, and festivals. Take a long walk around the center to explore the World Heritage Sites of the Old Town and New Town, as well as all the area’s museums and galleries</p>"]
let tabText1 =["<h4>Prague</h4><span>20 October 2020</span><p>The City of Hundred Spires has so much to offer to all visitors in terms of architecture and culture, that travelers from all around the world often plan their Europe itineraries around the visit to Prague. Prague has many nicknames, but the most common nickname is the Heart of Europe because of its location in the center of the continent or The City of Hundred Spires.</p>","<h4>Paris</h4><span>18 August 2020</span><p>Some of the most memorable things to do in Paris include visiting the Eiffel Tower, the Arc de Triomphe and Notre-Dame Cathedral. During the evening, experiencing one of the legendary Moulin Rouge cabaret shows, strolling through some of the most picturesque neighborhoods, like Montmartre, or climbing the Montparnasse Tower are a must.It is always a good time to visit Paris.</p>","<h4>Buachaille Etive Mòr</h4><span>6 June 2020</span><p>Buachaille Etive Mòr is one of the best known and loved of all the Munro peaks. The epic view of the mountain from the main A82 road makes it appear quite unassailable and is one of the most photographed sights in Scotland.</p>"]
let tabText2 = ["<h4>Alaska</h4><span>25 July 2021</span><p>If you're a fan of gorgeous landscapes, massive mountains, wildlife, or anything involving nature, Alaska is a great place to visit. The biggest state in the US, Alaska is home to 17 of the country's 20 tallest mountains.</p>","<h4>Cinque Terre National Park</h4><span>12 May 2021</span><p>Cinque Terre National Park, locally known as Parco Nazionale delle Cinque Terre, is located along the coast of northern Italy in the province of La Spezia.It is the smallest national park in Italy </p>","<h4>Tuscany</h4><span>4 July 2021</span><p>The glorious region of Tuscany is a picture-postcard destination in northwest Italy. It’s easy to see why great artists and visionaries such as Da Vinci, Michelangelo, and Galileo made Tuscany the birthplace of the Renaissance. Several towns and cities are designated UNESCO World Heritage Sites and superb photo opportunities are available at every corner.</p>"]
let tabText3 = ["<h4>Vienna</h4><span>15 April 2022</span><p>This really is a beautiful city full of urban charm, with a rich and long history, plenty to see and do, excellent services and amenities, and a selection of cakes that will do evil things to your willpower.</p>","<h4>Rome</h4><span>30 November 2022</span><p>Rome is a beautiful place! One of the most beautiful cities in Italy and one of the most impressive cities in the world! I often refer to it as the city-museum because it really feels as if you are walking through a huge museum. Every street every church every building breaths history. There s so much to see in do in Rome and it's a city like no other. a place everyone should visit, at least once in their lifetime. </p>","<h4>Belgrade</h4><span>1 December 2022</span><p>The capital of Serbia, also its largest city, is an inexhaustible source of entertainment and leisure. Belgrade is a lively city, widely known for its nightlife and the numerous attractions that make it one of the most visited in the country. One weekend will be just enough for you to see the most prominent places and get to know its spirit./p>"]
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
                    ${tabText3[j]}
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

let regexName = /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})\s*$/;

let textName = document.getElementById('name');
fieldName = document.getElementById('nameErorr');
textName.addEventListener('blur', checkName);
function checkName() {
    let name = textName.value;
    name.replace(/\s\s+/g, ' ');
    if (!regexName.test(name)) {
        fieldName = document.getElementById('nameErorr');
        if (name == "" || !name.trim()) {
            fieldName.innerHTML = "You didn't fill out your name!";
        }
        else {
            fieldName.innerHTML = "You've entered name in the wrong format! (example: Michael Scott)";
        }
        fieldName.classList.remove('hide');
        return false;
    }
    if (regexName.test(name)) {
        let fieldName = document.getElementById('nameErorr');
        fieldName.classList.add('hide');
        return true;
    }
}

let regexMail = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;

let textEmail = document.getElementById('email');
textEmail.addEventListener('blur', checkEmail);
function checkEmail() {
    let email = textEmail.value;
    if (!regexMail.test(email)) {
        let fieldEmail = document.getElementById('mailErorr');
        if (email == "" || !email.trim())
            fieldEmail.innerHTML = "You didn't fill out your email!";
        else
            fieldEmail.innerHTML = "Email is in wrong format! (example: michael@gmail.com)";

        fieldEmail.classList.remove('hide');
        return false;
    }
    if (regexMail.test(email)) {
        let fieldEmail = document.getElementById('mailErorr');
        fieldEmail.classList.add('hide');
        return true;
    }
}

let form = document.getElementById("form-submit");
form.addEventListener("click", function(){
    let text = document.getElementById("message").value;
    let ime = checkName();
    let mail = checkEmail();
    let r1 = document.getElementById("firstRadio");
    let r2 = document.getElementById("secondRadio");
    let cb1 = document.getElementById("cb1");
    let cb2 = document.getElementById("cb2");
    let cb3 = document.getElementById("cb3");
    let cb4 = document.getElementById("cb4");
    
    if(r1.checked || r2.checked){
        document.getElementById("radioError").classList.add("hide");
    }
    else{
        document.getElementById("radioError").classList.remove("hide");
    }
    if (text == "") {
        document.getElementById("textError").classList.remove("hide");
        document.getElementById("sentForm").classList.add("hide");
    }
    if (text != "") {
        document.getElementById("textError").classList.add("hide");

    }
    if(cb1.checked || cb2.checked || cb3.checked || cb4.checked){
        document.getElementById("tbError").classList.add("hide");
    }
    else{
        document.getElementById("tbError").classList.remove("hide");
    }
    if (text != "" && checkEmail() && checkName() && (r1.checked || r2.checked) && (cb1.checked || cb2.checked || cb3.checked || cb4.checked)) {
        document.getElementById("sentForm").classList.remove("hide");
    }
    else {
        document.getElementById("sentForm").classList.add("hide");
    }
});