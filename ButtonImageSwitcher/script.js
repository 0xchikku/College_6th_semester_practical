function changeImage(value){
    let image = document.getElementById('Image');
    switch(value){
        case '1':
            image.src = "jsSrc.png";
            break;
        
        case '2':
            image.src = "jsOut.png";
            break;

        case '3':
            image.src = 'jsOver.png';
            break;
    }
}