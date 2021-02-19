 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyC7HSNt7oiH19pW3JtgAMhDI0JZ6y9kSxo",
    authDomain: "testecolegio-c958f.firebaseapp.com",
    projectId: "testecolegio-c958f",
    storageBucket: "testecolegio-c958f.appspot.com",
    messagingSenderId: "287613185209",
    appId: "1:287613185209:web:86e7aa288d6f2922c0ff68",
    measurementId: "G-Z4JXX41EXQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  //Lendo Documentos de Collections =>
  let dataBase = firebase.firestore();
  dataBase.collection("turmaA").get().then((snapshot)=>{
        snapshot.forEach((doc) => {
            let aluno = doc.data()
            console.log(aluno);
        });
  });

  //Lendo o Documento a partir do ID do Documento =>
  let docRef = dataBase.collection("turmaA").doc("yiksPqZ8HV1rI1Y1P0fs");
  docRef.get().then((doc)=>{
      console.log(doc.data());
  })
  
  //Lendo o Documento a partir de uma informaçao mais específica e usando comparadores como o "=="
  dataBase.collection("turmaA").where("Nome","==","Yule").get().then(snapshot=>{
    snapshot.forEach(doc => {
      let aluno = doc.data();
      console.log(aluno.Nome);
    });
  })