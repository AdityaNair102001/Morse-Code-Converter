var btntranslate= document.querySelector("#btn-translate");
var txtinput=document.querySelector("#txt-input");
var txtoutput=document.querySelector("#output-area");

var serverUrl="https://api.funtranslations.com/translate/morse.json"

function getFullURL(text)
{
    return serverUrl+"?"+"text="+text;
}

function errorHandler(error)
{
    console.log("error occured",error)
}

function show() {
   
    var inputText=txtinput.value;

    fetch(getFullURL(inputText))
    .then(function (response) {
            return response.json();
        })
    .then(json=>{
        var Translatedtext=json.contents.translated;
        txtoutput.innerText = Translatedtext;

    });

}

btntranslate.addEventListener("click",show);




