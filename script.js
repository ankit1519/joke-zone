const btnElement=document.getElementById("btn");
const jokeElement=document.getElementById("joke");
const apiKey="514u3mM4PsdjmjVsDyOUng==WFszKjkW6Lk6Y5ib";
const options={
    method:"GET",
    headers:{
        "X-Api-Key":apiKey,
    },
};
const url="https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function findJoke(){
    try {
        jokeElement.innerText="Loading...";
         btnElement.disabled=true;
         btnElement.innerText="please wait.."
         const response=await fetch(url,options)
         const data=await response.json();
         jokeElement.innerText=data[0].joke;
         btnElement.disabled=false;
        btnElement.innerText="I want to laugh"
    } catch (error) {
        jokeElement.innerText="An error occured , Try again later";
    }
    
}
btnElement.addEventListener("click", findJoke)