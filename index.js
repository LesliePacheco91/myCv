import data from './data.js';

const arrayData = data.abount;

// header seccion
let container = document.getElementById('container');

let iconLight = document.createElement('img');
iconLight.setAttribute("class","iconLight");
iconLight.src ="img/menu.png";

let imgMenuResponsive = document.createElement('i');
imgMenuResponsive.setAttribute("id","menuRespons");
imgMenuResponsive.className ="bi bi-list";

let header = document.createElement('header');
header.setAttribute("class","headerInfo");
header.setAttribute("id","headerInfo");

let titlPage = document.createElement('h3');
titlPage.setAttribute("class","titlePage")
titlPage.textContent ="Portafolio";

let contendMenu = document.createElement("div");
contendMenu.setAttribute("class","menu");

let list = document.createElement('ul');
list.className = "listMenu";

let lis1 = document.createElement('li');
lis1.textContent = "Sobre mí";

let lis3 = document.createElement('li');
lis3.textContent = "Proyectos";
let lis4 = document.createElement('li');
lis4.textContent = "Educación";
let lis5 = document.createElement('li');
lis5.textContent = "Cursos";
let lis6 = document.createElement('li');
lis6.textContent = "Experiencia";

let buttonLigth =  document.createElement('button');
buttonLigth.className = "buttonLigth";

let iconBrightness = document.createElement('img');
iconBrightness.className = "brillo";
iconBrightness.src = "img/brillo1.png";

buttonLigth.append(iconBrightness);

let buttonHigh =  document.createElement('button');
buttonHigh.className = "buttonhigh";

let iconBrightnessHigh = document.createElement('img');
iconBrightnessHigh.className = "brillo";
iconBrightnessHigh.src = "img/brillo-alto.png";

buttonHigh.append(iconBrightnessHigh)


list.append(lis1, lis3, lis4, lis5, lis6, buttonLigth, buttonHigh);
contendMenu.append(list);
header.append(contendMenu);


/// about me section
let sectionAboutme = document.createElement('section');
sectionAboutme.setAttribute("id","aboutme");

let photoinfo = document.createElement('div');
photoinfo.setAttribute("class","photoinfo");


let datainfo = document.createElement('div');
datainfo.setAttribute("class","datos");

let photo = document.createElement('img');
photo.setAttribute("class","photo");
photo.src = arrayData.photo;

let nameInfo = document.createElement('h2');
nameInfo.setAttribute("class","name");
nameInfo.textContent = arrayData.name;

let titleinfo = document.createElement('h4');
titleinfo.setAttribute("class","title");
titleinfo.textContent = arrayData.title;

let location= document.createElement('h5');
location.setAttribute("class","location");
location.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${arrayData.contact.address}`;


let opeToWord = document.createElement('h2');
opeToWord.setAttribute("class","opeWork");
opeToWord.textContent ="Disponible para trabajar";

let socilaRed = document.createElement('div');
socilaRed.className = "redes";

// linkedin
let linkedin = document.createElement('a');
linkedin.href = arrayData.linkedin;
linkedin.target = "blanck";
linkedin.rel = 'noopener noreferrer';

const textoLinkeding = document.createElement('h4');
textoLinkeding.innerHTML = `<i class="bi-linkedin"></i> LinkedIn`;

linkedin.append(textoLinkeding);

// gitHub
let git = document.createElement('a');
git.href = arrayData.gitHub;
git.target = "blanck";
git.rel = 'noopener noreferrer';

const textoGit = document.createElement('h4');
textoGit.innerHTML = `<i class="bi-github"></i> GitHub`;

git.append(textoGit);


// trailhead 
let trailhead = document.createElement('a');
trailhead.href = arrayData.trailhead;
trailhead.target = "blanck";
trailhead.rel = 'noopener noreferrer';

const textTrailhead = document.createElement('h4');
textTrailhead.textContent = "TrailHead";


let imgTrailhead = document.createElement('img');
imgTrailhead.setAttribute("class","imgRed");
imgTrailhead.src = 'img/Trailhead.png';

trailhead.append(imgTrailhead, textTrailhead);

// email
let emailContact = document.createElement('a');
emailContact.target = "blanck";
emailContact.rel = 'noopener noreferrer';

const textContact = document.createElement('h4');
textContact.innerHTML = `<i class="'bi bi-envelope-at"></i> E-Mail`;

emailContact.append(textContact);

// telegram
let telegramContact = document.createElement('a');
telegramContact.href = arrayData.contact.telegram;
telegramContact.target = "blanck";
telegramContact.rel = 'noopener noreferrer';

const textTelegram = document.createElement('h4');
textTelegram.innerHTML = `<i class="'bi bi-telegram"></i> Telegram`;


telegramContact.append(textTelegram);

// button cv
let buttonCv = document.createElement("a");
buttonCv.setAttribute("class","buttonCV");
buttonCv.href = "img/Leslie_pacheco-CV.pdf";
buttonCv.download = 'cv.pdf';
buttonCv.rel = 'noopener noreferrer';

const textButtom = document.createElement('h4');
textButtom.innerHTML = `<i class="'bi bi-cloud-download"></i> Currículum`;


buttonCv.append(textButtom);

socilaRed.append(linkedin, git, emailContact, telegramContact,  buttonCv);


let aboutme = document.createElement('div');
aboutme.setAttribute("class","textAbotuME");

let titleAboutMe = document.createElement('h2');
titleAboutMe.textContent = "Sobre mí";

let textAbotuMe = document.createElement('p');
textAbotuMe.textContent = arrayData.summary;

let contact = document.createElement("div");
contact.setAttribute("class","contact");



aboutme.append(titleAboutMe, textAbotuMe);
datainfo.append( nameInfo,titleinfo, location);
photoinfo.append(photo,datainfo, opeToWord );

sectionAboutme.append(photoinfo, aboutme, socilaRed);


// proyect section

let proyectSection = document.createElement('section');
proyectSection.setAttribute('id', 'proyects');

let headerProyect = document.createElement('div');
headerProyect.className = "header_proyectos";

let titleProyects = document.createElement('h1');
titleProyects.textContent = "Proyectos";

let menuTypeProyects = document.createElement('ul');
menuTypeProyects.setAttribute('class', 'list_type_proyect');

// lista de los tipos de proyectos
const type = ["todo", "Front-End", "Back-End", "Full-Stak"];

type.forEach((element) => {
    

    let typeProyect = document.createElement('li');
    typeProyect.className ="type_Proyect";
    typeProyect.innerHTML = `${element}`;
    typeProyect.setAttribute("id", `${element}`);

    menuTypeProyects.append(typeProyect);
});


headerProyect.append(titleProyects, menuTypeProyects);

let listProtects = document.createElement('ul');
listProtects.className = "list-proyects";

// modalDetalle 
// funcion para renderizar los proyectos

function renderizaProyectos(dataList){

    listProtects.innerHTML = '';


    dataList.forEach(doc =>{

    let dataProyect = document.createElement('li');
    dataProyect.className ="cardProyect";

    let titleProyect = document.createElement('h3');
    titleProyect.textContent = doc.name;
    titleProyect.className = "title-proyecto"

    let imgProyect = document.createElement('img');
    imgProyect.className = "imageProyect";
    imgProyect.src = doc.image;

    let contedDescripcion = document.createElement('div');
    contedDescripcion.className = "contendDescrip";
    contedDescripcion.setAttribute("id","contendDescrip");

    let titledesc = document.createElement("h3");
    titledesc.className = "titleProyect";
    titledesc.textContent = "Descripción";

    let descriptionProyect = document.createElement('p');
    descriptionProyect.className = "descriptionProyect";
    descriptionProyect.setAttribute("id","descProyect");
    descriptionProyect.textContent = doc.description;

    let titleLogro = document.createElement("h3");
    titleLogro.className = "titleProyect";
    titleLogro.textContent = "Logro";

    let descriptionLogro = document.createElement('p');
    descriptionLogro.className = "logroProyecto";
    descriptionLogro.setAttribute("id","logroProyect");
    descriptionLogro.textContent = doc.achievements;



    let lisLenguale = document.createElement('ul');
    lisLenguale.className = "list-languaje";


    doc.languales.forEach(lan=>{

        let languaje = document.createElement('li');
        languaje.className ="languaje";

        let imgLanguaje = document.createElement('i');
        imgLanguaje.className = lan.image;

        let nameLanguaje = document.createElement("h6");
        nameLanguaje.textContent = lan.name;

        languaje.style.background = lan.color;

        languaje.append(imgLanguaje, nameLanguaje);

        lisLenguale.append(languaje);
        
    });


  // ver sitio
    let urlProyect = document.createElement('a');
    urlProyect.className = "urlProyect";
    urlProyect.href = doc.url;
    urlProyect.target = "blank";

    let textUrlProyect = document.createElement('h4');
    textUrlProyect.innerHTML = `<i class="bi bi-link"></i> Sitio`;
    
    urlProyect.append(textUrlProyect);

    
    // repositorio
    let urlRespository = document.createElement('a');
    urlRespository.className = "urlRespository";
    urlRespository.href = doc.repository;
    urlRespository.target = "blank";

    let textRespository = document.createElement('h4');
    textRespository.innerHTML =  `<i class="bi bi-github"></i> Repositorio`;

    urlRespository.append(textRespository);

    let divIcons = document.createElement('div');
    divIcons.className = "contentIcons";
    
    let buttonUrl = document.createElement('button');
    buttonUrl.className = "btn-url";
    buttonUrl.textContent = "Ver Detalle";

    let buttonCloseCarActive = document.createElement('button');
    buttonCloseCarActive.className ="btn-close";
    buttonCloseCarActive.setAttribute("id","btn-close");

    let iconButtomClose = document.createElement('i');
    iconButtomClose.className = "bi-x-lg fs-6";

    buttonCloseCarActive.append(iconButtomClose);


    buttonUrl.addEventListener('click', function(event) {
          event.preventDefault();
  
          dataProyect.setAttribute("id","activeCard");
          imgProyect.setAttribute("id","imgActiveCard");
          contedDescripcion.removeAttribute("id","contendDescrip");
          buttonUrl.setAttribute("id","btnDisable");
          divIcons.setAttribute("id","contentIconsActive");
          lisLenguale.removeAttribute("class", "list-languaje");
          lisLenguale.setAttribute("id","list-languajes-active");
       
          buttonCloseCarActive.removeAttribute("class","btn-close");
          dataProyect.removeChild(divIcons);
          contedDescripcion.append(lisLenguale, divIcons);

      });



      buttonCloseCarActive.addEventListener('click', function(event) {
        event.preventDefault();
        dataProyect.removeAttribute("id","activeCard");
        imgProyect.removeAttribute("id","imgActiveCard");
        contedDescripcion.setAttribute("id","contendDescrip");
        buttonUrl.removeAttribute("id","btnDisable");
        divIcons.removeAttribute("id","contentIconsActive");
        buttonCloseCarActive.setAttribute("class","btn-close");

         lisLenguale.setAttribute("class", "list-languaje");
          lisLenguale.removeAttribute("id","list-languajes-active");
        contedDescripcion.removeChild(lisLenguale);
         //dataProyect.append(lisLenguale);
          dataProyect.append( titleProyect,buttonCloseCarActive, imgProyect,  contedDescripcion  , lisLenguale, divIcons);


      })


      contedDescripcion.append(titledesc, descriptionProyect, titleLogro, descriptionLogro);

    if(doc.url != null || doc.url != undefined) {
        divIcons.append(urlProyect);
    }

    if(doc.repository != null || doc.repository != undefined) {

        divIcons.append( urlRespository);
    }
   
    divIcons.append(buttonUrl);
    dataProyect.append( titleProyect,buttonCloseCarActive, imgProyect,  contedDescripcion  , lisLenguale, divIcons);
    listProtects.append(dataProyect);

});



return listProtects;
}


function filtrarProyectos(tipo){

    if(tipo === "todo"){
        renderizaProyectos(arrayData.proyects);
        
    }else{
       
         const proyectosFiltrados = arrayData.proyects.filter(p => p.type === tipo);

         renderizaProyectos(proyectosFiltrados);

    }
}

renderizaProyectos(arrayData.proyects);

proyectSection.append(headerProyect, listProtects);


// curse section

let couserSection = document.createElement('section');
couserSection.setAttribute('id', 'couses');


let titleCursos = document.createElement('h1');
titleCursos.textContent = "Cursos";

let listCurses = document.createElement('ul');
listCurses.className = "listCurses";

arrayData.couses.forEach(cur =>{

    let datacurses = document.createElement('li');
    datacurses.setAttribute("class","curse");

    let titlecurse = document.createElement('h3');
    titlecurse.textContent = cur.name;
    
    let academyCurse = document.createElement('h4');
    academyCurse.textContent = cur.academy;
    
    let dateCurse = document.createElement('p');
    dateCurse.textContent = cur.date;
    let urlcurse = document.createElement('a');
    urlcurse.href = cur.url;
    urlcurse.textContent = "Ver curso";
    urlcurse.target = "blank"
    datacurses.append(titlecurse, academyCurse, dateCurse, urlcurse);

    listCurses.append(datacurses);
    
})


couserSection.append(titleCursos, listCurses);


// experience section
let experienceSection = document.createElement('section');
experienceSection.setAttribute('id', 'experience');


let titleexperience = document.createElement('h1');
titleexperience.textContent = "Experiencia";

let listexperience = document.createElement('ul');
listexperience.className = "listexpe";

arrayData.experience.forEach(ex =>{

    
    let dataExperi = document.createElement('li');
    dataExperi.setAttribute("class","exprience");

    let titleExprience = document.createElement('h2');
    titleExprience.textContent = ex.company;

    let positionExperience = document.createElement('h4');
    positionExperience.textContent = ex.position

    let dateExperience = document.createElement('h5');
    dateExperience.textContent = `${ex.startDate} | ${ex.endDate}`;

    let descriptionExperience = document.createElement('ul');

    ex.responsibilities.forEach(listdes =>{
        let descriptionRespo = document.createElement('li');
        descriptionRespo.textContent = listdes;
        descriptionExperience.append(descriptionRespo);
    })

    
    dataExperi.append(titleExprience, positionExperience,dateExperience, descriptionExperience);

    listexperience.append(dataExperi);
})

experienceSection.append(titleexperience, listexperience);


// educations
let eduSection = document.createElement('section');
eduSection.setAttribute('id', 'education');


let titleedu = document.createElement('h1');
titleedu.textContent = "Educación";

let listedu = document.createElement('ul');
listedu.className = "listEducation";

arrayData.education.forEach(edu =>{

    let dataedu = document.createElement('li');
    dataedu.setAttribute("class","education");

    let titleEd = document.createElement('h3');
    titleEd.textContent = `${edu.degree} - ${edu.startDate} | ${edu.endDate}`;
    
    let nameSchool = document.createElement('h4');
    nameSchool.textContent = edu.institution;
    
    let dateEdu = document.createElement('p');
    dateEdu.textContent = edu.info;
    let  urlcetifice = document.createElement('a');

    if(edu.url != undefined){
        urlcetifice.href = edu.url;
        urlcetifice.textContent = "Ver certificado";
    }
   
    
    urlcetifice.target = "blank"
    
    dataedu.append(titleEd, nameSchool, dateEdu, urlcetifice);

    listedu.append(dataedu);

});

// refla subir

let imgFlech = document.createElement('img');
imgFlech.setAttribute("class","flechaRespons");
imgFlech.src ="img/flecha-arriba.png";



eduSection.append(titleedu, listedu);


container.append(imgMenuResponsive, header, sectionAboutme, proyectSection, eduSection, couserSection, experienceSection, imgFlech);


// menu active 
imgMenuResponsive.addEventListener('click', function(event) {
    event.preventDefault();
    header.removeAttribute("id","headerInfo");
})

// dar clic fuera del menu se guarda
sectionAboutme.addEventListener('click', () => {    
    header.setAttribute("id","headerInfo");
});

imgFlech.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    imgMenuResponsive.scrollIntoView({ behavior: 'smooth' });
});


// desplazamientos de enlases

lis1.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    aboutme.scrollIntoView({ behavior: 'smooth' });

    lis1.setAttribute("class","menuActive");
    //lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
    header.setAttribute("id","headerInfo");

});

lis3.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    proyectSection.scrollIntoView({ behavior: 'smooth' });

    lis3.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    //lis2.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
    header.setAttribute("id","headerInfo");
});

lis4.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    eduSection.scrollIntoView({ behavior: 'smooth' });
    
    lis4.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
   // lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
    header.setAttribute("id","headerInfo");
});

lis5.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    couserSection.scrollIntoView({ behavior: 'smooth' });

    lis5.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    //lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
    header.setAttribute("id","headerInfo");
});

lis6.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    experienceSection.scrollIntoView({ behavior: 'smooth' });

    lis6.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    //lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    header.setAttribute("id","headerInfo");
});
// cambio de color
let bodyContend = document.querySelector('#container');
let btnUrl= document.querySelectorAll('.btn-url');
let filter_proyect = document.querySelectorAll('.type_proyect h4');
let urlProyect = document.querySelectorAll('.urlProyect');
let urlRespository = document.querySelectorAll('.urlRespository');
let cardProyect = document.querySelectorAll('.cardProyect');
let institutionEdu = document.querySelectorAll('.education h4');
let instiCurse = document.querySelectorAll('.curse h4');
let urlInsti = document.querySelectorAll('.education a');
let urlCurse = document.querySelectorAll('.curse a');
let experi = document.querySelectorAll('.exprience h4');
let botonMolaClose = document.querySelectorAll('#btn-close');
let redes = document.querySelectorAll('.redes a');
let menuActive = document.querySelector('.menuActive');
let dataCursos = document.querySelectorAll(".curse");
let dataEduc = document.querySelectorAll(".education");
let type_proyects = document.querySelectorAll(".type_Proyect");


buttonLigth.addEventListener('click', function(event) {
    event.preventDefault(); 
    photo.src = "img/leslieP.jpg";
    
    imgTrailhead.src = 'img/Trailhead.png';

    imgMenuResponsive.style.color = "#7D7ED5";

    bodyContend.style.background = "linear-gradient(137deg, rgba(224, 195, 252, 1) 0%, rgba(142, 197, 252, 1) 100%)";
    buttonLigth.style.display = "none";
    buttonHigh.style.display = "block";

    type_proyects.forEach(div =>{
        div.style.border = "2px solid  #d447a0";
        div.style.color = "#d447a0";
    })
    
    sectionAboutme.style.color = "#000";
    proyectSection.style.color = "#000";
    couserSection.style.color = "#000";
    experienceSection.style.color = "#000";
    eduSection.style.color = "#000";

    sectionAboutme.style.background = "#ffffffab";
    proyectSection.style.background = "#ffffffab";
    couserSection.style.background = "#ffffffab";
    experienceSection.style.background = "#ffffffab";
    eduSection.style.background = "#ffffffab";

    header.style.background = "#A2A3F7";
    opeToWord.style.background = "#94BBE9";
    opeToWord.style.border = "3px solid #A2A3F7";


    redes.forEach(rd => {
        rd.style.color = "#d447a0";
    });


    cardProyect.forEach(card => {
        card.style.background = "linear-gradient(137deg, rgba(224, 195, 252, 1) 0%, rgba(142, 197, 252, 1) 100%)";
    });
    
    btnUrl.forEach(btn => {
        btn.style.background = "#5296E6";
    });
    
    filter_proyect.forEach(py => {
        py.style.border =  "1px solid #d447a0";
        py.style.color = "#d447a0";
    });
    
    urlProyect.forEach(urlP =>{
        urlP.style.border = "1px solid #000";
        urlP.style.color = "#000";
    })
    

    urlRespository.forEach(repo => {
        repo.style.border = "1px solid #000";
        repo.style.color = "#000";
    });

    institutionEdu.forEach(edu =>{
        edu.style.color = "#5296E6";
    });

    instiCurse.forEach(cur =>{
        cur.style.color = "#5296E6";
    });

    urlInsti.forEach(url =>{
        url.style.color = "#d447a0";
    });

    urlCurse.forEach(urlC =>{
        urlC.style.color = "#d447a0";
    });

    experi.forEach(exp => {
        exp.style.color = "#5296E6";
    });

    dataCursos.forEach(element => {
        element.style.borderLeft = "4px solid #94BBE9";
    });

    dataEduc.forEach(element => {
        element.style.borderLeft = "4px solid #94BBE9";
    });

    botonMolaClose.forEach(btnMdl =>{
        btnMdl.style.color = "#d447a0";
        btnMdl.style.border = "3px solid #d447a0";
        btnMdl.style.background = "#fff";
    })

});

buttonHigh.addEventListener('click', function(event) {
    event.preventDefault(); 

    photo.src = "img/leslie.png";
    imgMenuResponsive.style.color = "#30CFD0";
    
    imgTrailhead.src = 'img/Trailhead3.png';

   bodyContend.style.background = "linear-gradient(90deg, rgb(25, 120, 124) 0%, rgb(51, 8, 103) 43%)";
    buttonLigth.style.display = "block";
    buttonHigh.style.display = "none";

    type_proyects.forEach(div =>{
        div.style.border = "2px solid  #fff";
        div.style.color = "#fff";
    });

    header.style.background = "#30CFD0";
    opeToWord.style.background = "#30CFD0";
    opeToWord.style.border = "3px solid #330867";

    sectionAboutme.style.background = "#ffffff40";
    proyectSection.style.background = "#ffffff40";
    couserSection.style.background = "#ffffff40";
    experienceSection.style.background = "#ffffff40";
    eduSection.style.background = "#ffffff40";

    sectionAboutme.style.color = "#fff";
    proyectSection.style.color = "#fff";
    couserSection.style.color = "#fff";
    experienceSection.style.color = "#fff";
    eduSection.style.color = "#fff";

    redes.forEach(rd => {
        rd.style.color = "#fff";
    });


    dataCursos.forEach(element => {
        element.style.borderLeft = "4px solid #330867";
    });

    dataEduc.forEach(element => {
        element.style.borderLeft = "4px solid #330867";
    });

    filter_proyect.forEach(fil => {
        fil.style.border = "1px solid #fff";
        fil.style.color = "#fff";
    });
    
    cardProyect.forEach(card => {
    card.style.background = "#330867";
    });

    btnUrl.forEach(btn => {
        btn.style.background = "#30CFD0";
    });
    
    urlProyect.forEach(urlP =>{
        urlP.style.border = "1px solid #fff";
        urlP.style.color = "#fff";
    })
    

    urlRespository.forEach(repo => {
        repo.style.border = "1px solid #fff";
        repo.style.color = "#fff";
    });
    

    institutionEdu.forEach(edu =>{
        edu.style.color = "#330867";
    });

    instiCurse.forEach(cur =>{
        cur.style.color = "#330867";
    });

    urlInsti.forEach(url =>{
        url.style.color = "#30CFD0";
    });

    urlCurse.forEach(urlC =>{
        urlC.style.color = "#30CFD0";
    });

    experi.forEach(exp => {
        exp.style.color = "#330867";
    });

    botonMolaClose.forEach(btnMdl =>{
        btnMdl.style.color = "#30CFD0";
        btnMdl.style.border = "3px solid #30CFD0";
        btnMdl.style.background = "#330867";
    })
    
})


// enviar correo

emailContact.addEventListener('click', function(event){
    
    const destinatario = "lesliepacheco62@gmail.com";
    const asunto = "";
    const cuerpo = "";

    const enlaceCorreo = `mailto:${destinatario}?subject=${encodeURIComponent(asunto)}&body=${encodeURIComponent(cuerpo)}`;

    // Redirige al cliente de correo
    window.location.href = enlaceCorreo;
});


// FILTRAR PROYECTOS POR TIPO
const bottom_filter = document.querySelectorAll(".type_Proyect");
bottom_filter.forEach(btn => {

    let cardProyect = document.querySelectorAll('.cardProyect');
        
    btn.addEventListener('click', function(event) {
        filtrarProyectos(btn.id);

        const estilo =getComputedStyle(buttonLigth);
        const estiloOscuro =getComputedStyle(buttonHigh);

        

        if(estilo.display === "none"){
            buttonLigth.click();
            console.log("esta activo modo claro")
    
        }else if(estiloOscuro.display === "none"){
           

        const proyecto = document.querySelectorAll('.cardProyect');
        const btnUrl= document.querySelectorAll('.btn-url');
        const urlRespository = document.querySelectorAll('.urlRespository');
        const urlProyect = document.querySelectorAll('.urlProyect');
        
        
        proyecto.forEach(card => {
            card.style.background = "#330867";
        });

        btnUrl.forEach(btn => {
            btn.style.background = "#30CFD0";
        });
        
        urlProyect.forEach(urlP =>{
            urlP.style.border = "1px solid #fff";
            urlP.style.color = "#fff";
        })
        

        urlRespository.forEach(repo => {
            repo.style.border = "1px solid #fff";
            repo.style.color = "#fff";
        });
    
        buttonHigh.click();
        
            console.log("esta activo modo oscuro")
        }
    });

    
    
});

