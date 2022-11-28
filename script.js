const videoElement = document.getElementById("video");
const button = document.getElementById('button');

// prompt user to select a media stream =>  pass to video elm => play

async function selectMediaStream(){
    try{
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }

    }catch(error){
        console.log('Something went wrong with the Select Media Stream function :(', error)
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true; 
    // Start Picture-in-Picture
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});



// On load

selectMediaStream();
