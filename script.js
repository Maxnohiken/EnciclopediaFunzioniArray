/*METODI DEGLI ARRAY*/

const Array = ["Mela","Pera","Arancia","Banana"]

/*LUNGHEZZA DELL'ARRAY .lenght*/

function lunghezzaArray(){
    const Container=document.getElementById('container1')
    Container.innerHTML=Array.length
}

lunghezzaArray()

/*AGGIUNGERE ELEMENTO ALL'ARRAY .push(elemento da aggiungere)*/ 

function aggiuntaAllArray(){
    const Container2=document.getElementById('container2')
    Array.push("Mandarino")
    Container2.innerHTML=Array
}

aggiuntaAllArray()

/*TOGLIERE ULTIMO ELEMENTO ALL'ARRAY .pop()*/

function elementoToltoArray(){
    const Container3=document.getElementById('container3')
    Array.pop()
    Container3.innerHTML=Array
}
elementoToltoArray()

/*TOGLIERE PRIMO ELEMENTO ALL'ARRAY .shift()*/ 

function elementoPrimoToltoArray(){
    const Container4=document.getElementById('container4')
    Array.shift()
    Container4.innerHTML=Array
}

elementoPrimoToltoArray()

/*AGGIUNGERE ELEMENTO ALL'INIZIO DELL'ARRAY .unshift(elemento da aggiungere)*/

function elementoAggiuntoInizioArray(){
    const Container5=document.getElementById('container5')
    Array.unshift("Mela")
    Container5.innerHTML=Array
}

elementoAggiuntoInizioArray()

/*INDIVIDUARE POSIZIONE ELEMENTO NELL'ARRAY .indexOf(elemento da controllare)*/

function individuaPosizioneInArray(){
    const Container6=document.getElementById('container6')
    Container6.innerHTML=Array.indexOf("Mela")
}

individuaPosizioneInArray()

/*CONCATENARE DUE ARRAY PER GENERARNE UNO NUOVO .concat(elemento da concatenare)*/ 

function concatenareArray(){
    const Container7=document.getElementById('container7')
    NuovoArray=["Pompelmo","Anguria"]
    Container7.innerHTML=Array.concat(NuovoArray)
}

concatenareArray()

/*INVERTIRE L'ORDINE DENTRO GLI ARRAY .reverse()*/

function invertireArray(){
    const Container8=document.getElementById('container8')
    Container8.innerHTML=Array.reverse()
}

invertireArray()

/* INVERTIRE L'ARRAY SECONDO L'ORDINE ALFABETICO DEGLI ELEMENTI .sort()*/

function ordineAlfabeticoArray(){
    const Container9=document.getElementById('container9')
    Container9.innerHTML=Array.sort()
}

ordineAlfabeticoArray()