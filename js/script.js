//creo una lista di email 
const mail = ['utente1@gmail.com','utente2@gmail.com','utente3@gmail.com','utente4@gmail.com'];
//prompt dove chiedo all' utente di inserire la propria email
const userMail = prompt('inserisci la tua e-mail :D');
let htmlElement = document.getElementById('output');
htmlElement.innerHTML=`email: ${userMail}`;
//dichiaro un flag in false che in caso l'utente sarà presente in true
flag = false;
//creo un for  dove l' indice scorrerà tutta la lista
//se l'email corrisponde allora il valore del flag diventerà vero
for(let i=0 ; i < mail.length ; i++){
    if(userMail === mail[i]){
        flag = true;
    }
}
//if se il valore del flag è vero , stampare "Benvenuto :D"
//altrimenti stampare "Attenzione! email non corretta"
if(flag){
    console.log('Benvenuto :D');
    htmlElement.innerHTML='Benvenuto :D';
}else{
    console.log('Attenzione! email non corretta')
    htmlElement.innerHTML='Attenzione! email non corretta';
}