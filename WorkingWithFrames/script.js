
function site(option){
    let page = document.getElementById('choice');
    switch(option){
        case 'google':
            // index.src = "http:/www.google.com";
            page.src = "http:/www.google.com";
            break;
        
        default:
            break;
    }
}