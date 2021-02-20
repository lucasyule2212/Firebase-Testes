//  Your web app's Firebase configuration
//  For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyC7HSNt7oiH19pW3JtgAMhDI0JZ6y9kSxo",
  authDomain: "testecolegio-c958f.firebaseapp.com",
  projectId: "testecolegio-c958f",
   storageBucket: "testecolegio-c958f.appspot.com",
  messagingSenderId: "287613185209",
   appId: "1:287613185209:web:86e7aa288d6f2922c0ff68",
  measurementId: "G-Z4JXX41EXQ",
 };
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();

 //let dataBase = firebase.firestore();
// //Lendo Documentos de Collections =>
// dataBase
//   .collection("turmaA")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno);
//     });
//   });

// //Lendo o Documento a partir do ID do Documento =>
// let docRef = dataBase.collection("turmaA").doc("Aluno4");
// docRef.get().then((doc) => {
//   console.log(doc.data());
// });

// //Lendo o Documento a partir de uma informaçao mais específica e usando comparadores como o "=="
// dataBase
//   .collection("turmaA")
//   .where("Nome", "==", "Denya")
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       let aluno = doc.data();
//       console.log(aluno.Nome);
//     });
//   });

// //Adicionando e Alterando Documentos a partir do JS
// const TURMA = "turmaA";
// // dataBase.collection(TURMA).add({
// //   Nome:"Denya",
// //   Idade:"21",
// //   Notas:{
// //     ["Nota 1"] : 9.5,
// //     ["Nota 2"] :  8.5
// //   },
// //   Advertencias:{

// //   }
// // }).then((doc)=>{
// //   console.log("Documento inserido com sucesso!",doc);
// // }).catch(err=>{
// //   console.log(err);
// // })

// //Adicionando e definindo ID nao randomico
// //METODO "SET" NAO RETORNA NENHUM DOCUMENTO, O "ADD" E O "GET" RETORNA!
// dataBase
//   .collection(TURMA)
//   .doc("Aluno4")
//   .set({
//     Nome: "Luna",
//     Idade: "1.5",
//     Notas: {
//       ["Nota 1"]: 0,
//       ["Nota 2"]: 0,
//     },
//     Advertencias: {},
//   })
//   .then(() => {
//     console.log("Documento inserido com sucesso!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Alterando Documento
// //METODO "SET" E "UPDATE" CONSEGUEM ADICIONAR NOVOS CAMPOS
// dataBase
//   .collection(TURMA)
//   .doc("Aluno4")
//   .set({
//     Nome: "Luna",
//     Sobrenome: "Maria",
//     Idade: 1.5,
//     Notas: {
//       ["Nota 1"]: 0,
//       ["Nota 2"]: 0,
//     },
//     Advertencias: {},
//   })
//   .then(() => {
//     console.log("Documento alterado com sucesso!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// //Alterando somente o campo desejado do Documento
// dataBase
//   .collection(TURMA)
//   .doc("l1Mhccf8QCyfohtt2I9V")
//   .update({
//     Sobrenome: "Louisa",
//   })
//   .then(() => {
//     console.log("Documento alterado com sucesso!");
//   })
//   .catch((err) => {
//     console.log(err);
//   });


// //ON SNAPSHOT(ATUALIZAÇAO EM TEMPO REAL)
// dataBase.collection("turmaA").onSnapshot((snapshot) => {
//   snapshot.forEach((doc) => {
//     let aluno = doc.data();
//     console.log(aluno);
//   });
// });
// //A funçao será chamada sempre que houver alguma alteraçao em algum Documento ou Collection!

// //Apagar Campos e Documentos
// //Apagando Campos:
// dataBase.collection(TURMA).doc("Aluno4").update({
//   Notas: firebase.firestore.FieldValue.delete()
// }).then(()=>{
//   console.log("Campo apagado com sucesso!");
// }).catch(err=>{
//   console.log(err);
// })

// //Apagando Documento:
// dataBase.collection(TURMA).doc("Aluno4").delete().then(()=>{
//   console.log("Documento apagado com sucesso!");
// }).catch(err=>{
//   console.log(err);
// });