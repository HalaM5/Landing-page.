// TODO: Test performance  of whole file code by  declare of performance.now()
const startTime = performance.now();

// TODO: use this function to generate number of  section elements by for loop
function creatSections(){
    // TODO: declare and creat fragment  that will include section tag  as virtual Dom
    const fragment = document.createDocumentFragment();
    // TODO: declare main tag in which secion will be added to
    const mainn =document.querySelector('main');
   // TODO: creat number of section by using for loop
    for(var i=1; i<=5; i++){
     // TODO: declare created section element
        const sectio =document.createElement('section');
      // TODO: add attributes to section
        sectio.setAttribute('id',`section${i}`);
        sectio.setAttribute('data-nav',`section ${i}`);
      // TODO: add sections to fragment
        fragment.appendChild(sectio)
      //TODO: add fragment in declared  main tag
        mainn.appendChild(fragment)
        // TODO: declare texts for adding to  paragh */
        const text1 =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.`;
        const text2 =`Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.`;
       // TODO: creat div , h2 and paragraph by innerHTML
        sectio.innerHTML=`<div class='landing__container'><h2>section ${i}</h2><p>${text1}</p><p>${text2}</p></div>`
       // TODO declare div element through class name
        const divv =document.getElementsByClassName(`.landing__container`);
    }
    // TODO: use setTimeout for increase performance of page
    if (i < 6 ) {
        setTimeout(creatSections, 1000);
    }
}

//TODO: recall function to build section and its content
creatSections();


// TODO: creat navigation bar by this function creatNavbar
function creatNavbar(){
    // TODO: creat virtual fragment will include a navigation bar and declare it
    const navFragment = document.createDocumentFragment();
    // TODO: declare section tags that will be linked to navbar when clicked on navbar
    const sections =document.querySelectorAll('section');
    // TODO: creat number of nevigation items related to number of sections by for loop
    for(let section of sections){
        // TODO: declare and creat li element that will be linked to each selected section
        const list = document.createElement('li');
        // TODO: add <a> tag to <li> tag and set link between navbar and its content in section*/
        list.innerHTML=`<a href='#${section.id}' class='menu__links'> ${section.dataset.nav} </a>`;
        // TODO: add li tag to virtual fragment
        const listFrag =navFragment.appendChild(list);
        // TODO: declare <ul >tag unordered list that is in DOM HTML
        const ulist =document.querySelector('#navbar__list');
        // TODO: add fragment in which li tag were created to unordered list ul
        ulist.appendChild(listFrag);
    }
}

// TODO: recall function to appear nevigation bar on page
creatNavbar();

// TODO: add active class to section that is in viewport and remove this class when section isnot in viewport during scroll
window.addEventListener('scroll',function(){
    // TODO: use forEach for loop all sections for adding or remove active class
    document.querySelectorAll('section').forEach(section => {
        // TODO: add active class to section when it is  in viewport
        if ( innerWidth>innerHeight && section.getBoundingClientRect().top<=563 && section.getBoundingClientRect().bottom>=625 ){
            section.classList.add('your-active-class');

        // TODO: add active class to section  on  screen width when section in viewport
        } else if (innerWidth<innerHeight && section.getBoundingClientRect().top<=409 && section.getBoundingClientRect().bottom>=611){
            section.classList.add('your-active-class');
         // TODO: remove  active class from section  when section is not in  viewport
        } else {
            section.classList.remove('your-active-class');
        }
    });
});


// TODO: creat function does scroll to sections by Clicking on a navigation item
function scrollToclick(ev){
    // TODO: add preventDefault to prevent  jumping to section suddenly
    ev.preventDefault();
    // TODO: declare section tag
    const sections = document.querySelectorAll('section');
    // TODO: declare anchor tag
    const target =document.querySelectorAll('a');
    // TODO: use slice()method to remove # from href
    let hreff = ev.target.getAttribute('href').slice(1,9);
    // TODO: event is click
    ev= 'click';
    // TODO: for loop for all section
    for (let section of sections){
        // TODO: condition statment if it is happenened the scroll done
        if ( section.id == hreff ){
            // TODO: scroll section at its start
            section.scrollIntoView({behavior:'smooth',block:'start',inline:'nearest'});
            return;
        }
    }
}

// TODO: to avoid many events add addEventListener to ancestor of anchor is ul tag(unordered list)
document.querySelector('#navbar__list').addEventListener('click',scrollToclick);

// TODO: test performance of code declare of performance.now() as endTime
const endTime =  performance.now();
console.log(`this code took ${endTime-startTime} millisecond.`);
