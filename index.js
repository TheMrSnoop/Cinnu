function toggleBackground()
{
    
    const body = document.getElementsByTagName('body');
    let currentBackground = body[0].style.backgroundImage;


    if (currentBackground.includes('seattle.jpg'))
    {
        currentBackgroundIteration = 0;
    }

    currentBackgroundIteration = currentBackgroundIteration + 1;
            
            
    switch (currentBackgroundIteration) {   
        case 0:
            body[0].style.backgroundImage = "url('Images/Backgrounds/seattle.jpg')";
            break;
        case 1:
            body[0].style.backgroundImage = "url('Images/Backgrounds/cyberworld.gif')";
            break;
        case 2:
            body[0].style.backgroundImage = "url('Images/Backgrounds/Porsche 911.jpg')";
            break;
        case 3:
            body[0].style.backgroundImage = "url('Images/Backgrounds/starfarm.webp')";
            break;
        case 4:
            body[0].style.backgroundImage = "url('Images/Backgrounds/Black Minimalist.jpg')";
            break;
        case 5:
            body[0].style.backgroundImage = "url('Images/Backgrounds/Black toppo.webp')";
            break;
        case 6:
            body[0].style.backgroundImage = "url('Images/Thumbnails/Titan-01.png')";
        default:
            body[0].style.backgroundImage = "url('Images/Backgrounds/seattle.jpg')";
            break;
        }

    console.log(`Current Interation: ${currentBackgroundIteration}`);
}


const trigger = document.querySelector('.ProfileBackground')
const ProfileText = document.querySelector('.ProfileText')

trigger.addEventListener('mouseenter', () => {
    ProfileText.classList.add('ProfileTextAnimated')
})

trigger.addEventListener('mouseleave', () => {
    ProfileText.classList.remove('ProfileTextAnimated')
})