const userInput=document.getElementById("input_user");
const searchBtn=document.getElementById("searchBtn");
const searchForm=document.getElementById("searchForm");
const searchResult=document.getElementById("search_result");
const showmorebtn=document.getElementById("showmorebtn");
const accessKey="NJUQAQ7KcpL2QnOqTrVvyCDdo8vYK7lmenGCvSczcaE";
const footer=document.querySelector("footer");
let keyword="";
let page=1;

async function searchImages() {
    keyword=userInput.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    const response =await fetch(url);
    const data=await response.json();
    if(page==1){
        searchResult.innerHTML="";
    }
    const results=data.results;
    
    results.map((result)=>{
        const image=document.createElement("img");
        image.src=result.urls.small;
        const imageLink=document.createElement("a");
        imageLink.href=result.links.html;
        imageLink.target="_blank";
        imageLink.appendChild(image);
        searchResult.appendChild(imageLink)
        
    })
    showmorebtn.style.display="block";
    footer.style.display="block";

}
function showMore(){
    page++;
    searchImages();
}
searchBtn.addEventListener("click", () => {
    page = 1; 
    searchImages();
});
