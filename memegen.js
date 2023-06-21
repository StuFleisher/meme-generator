function generate() {
  //get form data
  myURL = document.getElementById("imageURL").value;
  topText = document.getElementById("topText").value || "";
  bottomText = document.getElementById("bottomText").value || "";

  //create elements for DOM
  let memeDiv =  document.createElement('div');
              memeDiv.classList.add("meme");
  let closeDiv = document.createElement('div');
              closeDiv.classList.add("close");
  let image = document.createElement('img');
              image.src= myURL;
  let topTextElement = document.createElement('h2')
              topTextElement.classList.add("top");
              topTextElement.innerText = topText;
  let bottomTextElement = document.createElement('h2')
              bottomTextElement.classList.add("bottom");
              bottomTextElement.innerText = bottomText;


  //add container
  document.querySelector(".container").appendChild(memeDiv);


   //set font size dynamically to fit image
  image.onload = function() {
    let myWidth = image.naturalWidth;
    //adjust for 13 characters = 150
    let textLength = Math.max(topText.length, bottomText.length);
    let fontSize = myWidth/(150) + "rem";
    bottomTextElement.style.fontSize = fontSize;
    bottomTextElement.style.lineHeight= fontSize;
    topTextElement.style.fontSize = fontSize;
    topTextElement.style.lineHeight = fontSize;

    //render remaining content after image loads
    memeDiv.appendChild(closeDiv);
    memeDiv.appendChild(image);
    memeDiv.appendChild(topTextElement);
    memeDiv.appendChild(bottomTextElement);
  }

  //add functionality
  closeDiv.addEventListener('click', closeMeme);
}


function closeMeme(e) {
  myMeme = e.currentTarget.parentElement;
  document.querySelector(".container").removeChild(myMeme);
}
