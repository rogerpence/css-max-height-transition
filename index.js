const getHeight = function() {
    const elem = document.getElementById('body-container');  
    elem.style.maxHeight = 'auto';
    elem.classList.add('expanded');
    let elementHeight = elem.scrollHeight + elem.style.paddingTop + elem.style.paddingBottom;

    console.log(`height at start=${elementHeight}`)
    elem.style.maxHeight = 0;
    elem.classList.remove('expanded');
    return elementHeight + 20;
}

//const HEIGHT = `${getHeight()}px`;

const clicker = document.getElementById('clicker');  
clicker.addEventListener('click', (e) => {    
    const elem = document.getElementById('body-container');            

    let elementHeight = elem.offsetHeight;
    console.log(`scrollHeight=${elementHeight}`)

    if (elem.classList.contains('expanded')) {        
        elem.classList.remove('expanded');    
        // elem.style.maxHeight = '0';
        // elem.style.paddingTop = 0;
        // elem.style.paddingBottom = 0;
    }
    else {
        elem.classList.add('expanded');
        // elem.style.maxHeight = HEIGHT;
        //'128px';
        //elem.style.paddingTop = '4px';
        //elem.style.paddingBottom = '4px';
    }        
    
    


    // elem.classList.toggle('expanded');

    // if (elem.classList.contains('hidden')) {
    //     elem.style.display = 'block';
    //     let elementHeight = elem.offsetHeight;
    //     elem.maxHeight = 0;
    //     elem.maxHeight = elementHeight;    
    // }
    // else {
    //     elem.style.display = 'hidden';
    //     let elementHeight = elem.offsetHeight;
    //     elem.maxHeight = elementHeight;    
    // }




    // elem.style.display = 'block';
    // let elementHeight = elem.offsetHeight;
    // elem.maxHeight = elementHeight;

    // console.log(`scrollHeight=${elementHeight}`)
    // elementHeight = elem.offsetHeight;
    // console.log(`offsetHeight=${elementHeight}`)
    // // elementHeight = elem.style.height;
    // // console.log(`height=${height}`)
 
});