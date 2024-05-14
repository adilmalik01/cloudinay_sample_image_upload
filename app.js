


// const firebaseConfig = {
//     apiKey: "AIzaSyBoRm8yCEjwkjvhq1o-osQfnPMjqUXwAx4",
//     authDomain: "vote-app-8ea70.firebaseapp.com",
//     projectId: "vote-app-8ea70",
//     storageBucket: "vote-app-8ea70.appspot.com",
//     messagingSenderId: "412982628722",
//     appId: "1:412982628722:web:fcb45e40e21d363c2ccdeb"
// };

// firebase.initializeApp(firebaseConfig);


let input = document.querySelector("#imageInp")
let uploadImgBtn = document.querySelector("#uploadImgBtn")
let filesInform;
let fileName;

// let input = document.querySelector("#imageInp")
// let uploadImgBtn = document.querySelector("#uploadImgBtn")
// let filesInform;
// let fileName;


const getFile = (e) => {
    filesInform = e.target.files[0]
    fileName = filesInform.name
    console.log(filesInform);
}


function uploadImg(e) {
    let urlDownload;

    let storageRef = firebase.storage().ref("images/" + fileName)
    let uploadTask = storageRef.put(filesInform)


    uploadTask.on('state_changed',
        (snapshot) => {
            console.log(snapshot);
        },
        (error) => {
            console.log(error);
        },
        () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            // getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            //     console.log('File available at', downloadURL);
            // });

            uploadTask.snapshot.ref.getDownloadURL().then((url) => {
                console.log('File available at', url);
            })

        }

    );

}



uploadImgBtn.addEventListener("click", uploadImg)
input.addEventListener("input", getFile)