console.info("Web cam");

let btnRecord = document.getElementById("btnRecord");
let btnStop = document.getElementById("btnStop");
let video = document.querySelector('video');
let constraints = { audio: false, video: true };

btnRecord.addEventListener("click", () => {
    navigator.mediaDevices.getUserMedia(constraints)
        .then(function (mediaStream) {
            video.srcObject = mediaStream;
            video.onloadedmetadata = function (e) {
                video.play();
            };
        })
        .catch(function (err) { console.log(err.name + ": " + err.message); });
});

btnStop.addEventListener("click", () => {
    console.log("stop");
    video.pause();
});

/* function getStreamAndRecord() {
    navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
            height: { max: 480 }
        }
    })
        .then(function (stream) {
            video.srcObject = stream;
            video.play()
        }; */

async function getRecord() {
    let stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
    let recorder = new RecordRTCPromisesHandler(stream, {
        type: 'gif',
        frameRate: 60,
        quality: 50,
        width: 360
    });
    recorder.startRecording();

    const sleep = m => new Promise(r => setTimeout(r, m));
    await sleep(3000);

    await recorder.stopRecording();
    let blob = await recorder.getBlob();
    invokeSaveAsDialog(blob);
    let form = new FormData();
    form.append('file', blob, 'myGif.gif');
    console.log(form.get('file'));
}

// let url = fetch("url", {
//     headers: {
//         'Content-Type': 'text/xml'
//     }
// });

//getRecord();
