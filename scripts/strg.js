const storage = firebase.storage();
//Acessando referencias do Storage e manipulando
const ref = storage.ref("/images");
//Listando conteúdo de um repositório
ref.listAll().then((res)=>{
    console.log(res.items);
    //Acessando URL do arquivo
    res.items[0].getDownloadURL().then((url)=>{
        console.log(url);
    })
})
