//Testes para cadastrar um Novo Usuário a partir do Email e Senha:

let autentication = firebase.auth();

function criarUsuarioTeste() {
  let newUserEmail = "teste@teste.com";
  let newUserPassword = "123456";
  autentication
    .createUserWithEmailAndPassword(newUserEmail, newUserPassword)
    .then((user) => {
      console.log(user);
    })
    .catch((err) => {
      console.log(err);
    });
}

//Gerenciando Logins:
function login() {
  let userEmail = "teste@teste.com";
  let userPassword = "123456";

  //Alterando a persistencia da Sessao do Usuário:

  // autentication.setPersistence(firebase.auth.Auth.Persistence.LOCAL) //--> Persiste em qualquer janela.

  autentication
    .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(() => {
      //Dar o sign in(logar com usuário)
      autentication
        .signInWithEmailAndPassword(userEmail, userPassword)
        .then((loggedUser) => {
          console.log(loggedUser);
        })
        .catch((error) => {
          console.log(error);
        });
    })
    .catch((error) => {
      console.log(error);
    }); //--> Persiste em uma única aba.

  // autentication.setPersistence(firebase.auth.Auth.Persistence.NONE) //--> Ao atualizar a page, nao persiste mais, deslogando o usuário.
}
//Funçao logOut
function logOut() {
  autentication
    .signOut()
    .then(() => {
      console.log("Deslogado com sucesso!");
    })
    .catch((error) => {
      console.log(error);
    });
}
//Funçao para checar o status do Login
function checkLogin() {
  //testando se existe um usuário logged:
  autentication.onAuthStateChanged((user) => {
    if (user) {
      console.log(user);
    } else {
      console.log("Ninguem Logado!");
    }
  });
}

 login();
 setTimeout(() => {
  checkLogin();
 }, 3000);
  setTimeout(() => {
      //logOut();
    //testarLeitura();
 }, 5000);
//testando Permissoes do dataBase(as permissoes sao inseridas apenas no painel do CloudFirestore) 
function testarLeitura() {
    dataBase
      .collection("turmaA")
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          let aluno = doc.data();
          console.log(aluno);
        });
      });
}