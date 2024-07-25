
import data from './data.js';

const arrayData = data.abount;

// header seccion
let container = document.getElementById('container');

let header = document.createElement('header');
header.setAttribute("class","headerInfo");

let titlPage = document.createElement('h3');
titlPage.setAttribute("class","titlePage")
titlPage.textContent ="Portafolio";

let contendMenu = document.createElement("div");
contendMenu.setAttribute("class","menu");

let list = document.createElement('ul');
list.className = "listMenu";

let lis1 = document.createElement('li');
lis1.textContent = "Sobre mí";

let lis2 = document.createElement('li');
lis2.textContent = "Habilidades";
let lis3 = document.createElement('li');
lis3.textContent = "Proyectos";
let lis4 = document.createElement('li');
lis4.textContent = "Educación";
let lis5 = document.createElement('li');
lis5.textContent = "Cursos";
let lis6 = document.createElement('li');
lis6.textContent = "Experiencia";

list.append(lis1,lis2, lis3, lis4, lis5, lis6);
contendMenu.append(list);
header.append(titlPage, contendMenu);


/// about me section

let sectionAboutme = document.createElement('section');
sectionAboutme.setAttribute("id","aboutme");

let photoinfo = document.createElement('div');
photoinfo.setAttribute("class","photoinfo");

let photo = document.createElement('img');
photo.setAttribute("class","photo");
photo.src = arrayData.photo;

let nameInfo = document.createElement('h2');
nameInfo.setAttribute("class","name");
nameInfo.textContent = arrayData.name;

let titleinfo = document.createElement('h4');
titleinfo.setAttribute("class","title");
titleinfo.textContent = arrayData.title;

let socilaRed = document.createElement('div');
socilaRed.className = "redes";

// linkedin
let linkedin = document.createElement('a');
linkedin.href = arrayData.linkedin;
linkedin.target = "blanck";

let imgLinkedin = document.createElement('img');
imgLinkedin.setAttribute("class","imgRed");
imgLinkedin.src = "img/linkedin2.png";

linkedin.append(imgLinkedin);

// gitHub
let git = document.createElement('a');
git.href = arrayData.gitHub;
git.target = "blanck";

let imgGit = document.createElement('img');
imgGit.setAttribute("class","imgRed");
imgGit.src = 'img/githubPurple2.png';

git.append(imgGit);


// trailhead 
let trailhead = document.createElement('a');
trailhead.href = arrayData.trailhead;
trailhead.target = "blanck";
let imgTrailhead = document.createElement('img');
imgTrailhead.setAttribute("class","imgRed");
imgTrailhead.src = 'img/Trailhead.png';

trailhead.append(imgTrailhead);

socilaRed.append(linkedin, git, trailhead);


let aboutme = document.createElement('div');
aboutme.setAttribute("class","textAbotuME");

let titleAboutMe = document.createElement('h2');
titleAboutMe.textContent = "Sobre mí";

let textAbotuMe = document.createElement('p');
textAbotuMe.textContent = arrayData.summary;

let buttonCv = document.createElement("a");
buttonCv.setAttribute("class","buttonCV");
buttonCv.href = "img/cv.pdf";
buttonCv.textContent = "Descargar CV";
buttonCv.download = 'cv.pdf';


let contact = document.createElement("div");
contact.setAttribute("class","contact");

// telefono
let celfon = document.createElement("div");
celfon.className = "tel"
let imgCel = document.createElement("img");
imgCel.className = "imgContact";
imgCel.src = "img/celfon.png";
let titleCel = document.createElement("h5");
titleCel.textContent = arrayData.contact.phone;

celfon.append(imgCel, titleCel);

// ubicación 
let adreees = document.createElement("div");
adreees.className = "dir"
let imgAd = document.createElement("img");
imgAd.className = "imgContact";
imgAd.src = "img/adress.png";
let titleAd = document.createElement("h5");
titleAd.textContent = arrayData.contact.address;

adreees.append(imgAd, titleAd);


// email 
let ema = document.createElement("div");
ema.className = "email"
let imgEm = document.createElement("img");
imgEm.className = "imgContact";
imgEm.src = "img/email.png";
let titleEm = document.createElement("h5");
titleEm.textContent = arrayData.contact.email;

ema.append(imgEm, titleEm);

contact.append(celfon, adreees, ema);



aboutme.append(titleAboutMe, textAbotuMe,buttonCv );
photoinfo.append(photo, nameInfo,titleinfo, socilaRed);
sectionAboutme.append(photoinfo, aboutme,contact);


// skills section
let skillsSection = document.createElement('section');
skillsSection.setAttribute("id","skills");

let titleSkills = document.createElement('h1');
titleSkills.textContent = "Habilidades";

let titleSkillsTech = document.createElement('h3');
titleSkillsTech.textContent = "Habilidades técnicas";

let listSkillsTech = document.createElement('ul');
listSkillsTech.className = "list-kills-tech";

arrayData.techSkills.forEach(item => {

    let dataSkill = document.createElement('li');
    dataSkill.setAttribute("class","skill");
    
    let imgSkills = document.createElement('img');
    imgSkills.setAttribute("class","imgSkill");
    imgSkills.src = item.image;

    dataSkill.appendChild(imgSkills);

    listSkillsTech.append(dataSkill);

});

let titleSoftSkills = document.createElement('h3');
titleSoftSkills.textContent = "Habilidades blandas";

let listSoftSkills = document.createElement('ul');
listSoftSkills.className = "list-soft-skills";

arrayData.softSkills.forEach( row =>{

    let dataSoftSkill = document.createElement('li');
    dataSoftSkill.setAttribute("class","Softskill");
    
    let imgSoftSkills = document.createElement('img');
    imgSoftSkills.setAttribute("class","imgSSoftkill");
    imgSoftSkills.src = row.image;

    let nameSkill = document.createElement('h5');
    nameSkill.textContent = row.name;

    dataSoftSkill.append(imgSoftSkills, nameSkill);

    listSoftSkills.append(dataSoftSkill);
});

skillsSection.append(titleSkills, titleSkillsTech, listSkillsTech, titleSoftSkills, listSoftSkills );


// proyect section

let proyectSection = document.createElement('section');
proyectSection.setAttribute('id', 'proyects');

let titleProyects = document.createElement('h1');
titleProyects.textContent = "Proyectos";

let listProtects = document.createElement('ul');
listProtects.className = "list-proyects";


// modalDetalle 

arrayData.proyects.forEach(doc =>{

    let dataProyect = document.createElement('li');
    dataProyect.className ="cardProyect";

    let titleProyect = document.createElement('h3');
    titleProyect.textContent = doc.name;

    let imgProyect = document.createElement('img');
    imgProyect.className = "imageProyect";
    imgProyect.src = doc.image;

    let contedDescripcion = document.createElement('div');
    contedDescripcion.className = "contendDescrip";
    contedDescripcion.setAttribute("id","contendDescrip");

    let descriptionProyect = document.createElement('p');
    descriptionProyect.className = "descriptionProyect";
    descriptionProyect.setAttribute("id","descProyect");
    descriptionProyect.textContent = doc.description;

    let lisLenguale = document.createElement('ul');

    doc.languales.forEach(lan=>{

        let languaje = document.createElement('li');
        languaje.className ="languaje";

        let imgLanguaje = document.createElement('img');
        imgLanguaje.src = lan.image;

        languaje.append(imgLanguaje);

        lisLenguale.append(languaje);
        
    });

  
    let urlProyect = document.createElement('a');
    urlProyect.className = "urlProyect";
    urlProyect.href = doc.url;
    urlProyect.target = "blank";


    let iconUrl = document.createElement('img');
    

    if(doc.url != null || doc.url != undefined) {

        iconUrl.src = "img/vistas.png";
    }

    urlProyect.append(iconUrl);

    let urlRespository = document.createElement('a');
    urlRespository.className = "urlRespository";
    urlRespository.href = doc.repository;
    urlRespository.target = "blank";

    let iconRespository = document.createElement('img');
    

    if(doc.repository != null || doc.repository != undefined) {

        iconRespository.src = "img/github.png";
    }
    

    urlRespository.append(iconRespository);

    let divIcons = document.createElement('div');
    divIcons.className = "contentIcons";
    
    let buttonUrl = document.createElement('button');
    buttonUrl.className = "btn-url";
    buttonUrl.textContent = "Ver Detalle";

    let buttonCloseCarActive = document.createElement('button');
    buttonCloseCarActive.textContent = "X";
    buttonCloseCarActive.className ="btn-close";
    buttonCloseCarActive.setAttribute("id","btn-close");

    buttonUrl.addEventListener('click', function(event) {
          event.preventDefault();
  
          dataProyect.setAttribute("id","activeCard");
          imgProyect.setAttribute("id","imgActiveCard");
          contedDescripcion.removeAttribute("id","contendDescrip");
          buttonUrl.setAttribute("id","btnDisable");
          divIcons.setAttribute("id","contentIconsActive");
          buttonCloseCarActive.removeAttribute("class","btn-close");

      });



      buttonCloseCarActive.addEventListener('click', function(event) {
        event.preventDefault();
        dataProyect.removeAttribute("id","activeCard");
        imgProyect.removeAttribute("id","imgActiveCard");
        contedDescripcion.setAttribute("id","contendDescrip");
        buttonUrl.removeAttribute("id","btnDisable");
        divIcons.removeAttribute("id","contentIconsActive");
        buttonCloseCarActive.setAttribute("class","btn-close");
      })


      contedDescripcion.append(descriptionProyect, lisLenguale);

    divIcons.append(urlProyect, urlRespository, buttonUrl);
        
    dataProyect.append( titleProyect,buttonCloseCarActive, imgProyect,  contedDescripcion, divIcons);
    listProtects.append(dataProyect);

});


proyectSection.append(titleProyects, listProtects);


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
    titleEd.textContent = edu.degree;
    
    let nameSchool = document.createElement('h4');
    nameSchool.textContent = edu.institution;
    
    let dateEdu = document.createElement('p');
    dateEdu.textContent =`${edu.startDate} | ${edu.endDate}`;
    let  urlcetifice = document.createElement('a');

    if(edu.url != undefined){
        urlcetifice.href = edu.url;
        urlcetifice.textContent = "Ver certificado";
    }
   
    
    urlcetifice.target = "blank"
    
    dataedu.append(titleEd, nameSchool, dateEdu, urlcetifice);

    listedu.append(dataedu);

});


eduSection.append(titleedu, listedu);


container.append(header, sectionAboutme, skillsSection,proyectSection, eduSection, couserSection, experienceSection);


// desplazamientos de enlases

lis1.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    sectionAboutme.scrollIntoView({ behavior: 'smooth' });

    lis1.setAttribute("class","menuActive");
    lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");

});

lis2.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    skillsSection.scrollIntoView({ behavior: 'smooth' });

    lis2.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
});

lis3.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    proyectSection.scrollIntoView({ behavior: 'smooth' });

    lis3.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    lis2.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
});

lis4.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    eduSection.scrollIntoView({ behavior: 'smooth' });
    
    lis4.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
});

lis5.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    couserSection.scrollIntoView({ behavior: 'smooth' });

    lis5.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis6.removeAttribute("class","menuActive");
});

lis6.addEventListener('click', function(event) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    experienceSection.scrollIntoView({ behavior: 'smooth' });

    lis6.setAttribute("class","menuActive");
    lis1.removeAttribute("class","menuActive");
    lis2.removeAttribute("class","menuActive");
    lis3.removeAttribute("class","menuActive");
    lis4.removeAttribute("class","menuActive");
    lis5.removeAttribute("class","menuActive");
});