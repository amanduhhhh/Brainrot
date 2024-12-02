const wordToImageMap = 
{
  "sands": "https://preview.redd.it/sans-in-really-low-resolution-v0-cebrow71n9qa1.jpg?auto=webp&s=334ac828b1c64efab106a3eef9bcaa00bf18349b",
  "will try": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3cKbQqaquVuApePZV-HM5mnNejZDEYEcg&s",
  "will fly": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3cKbQqaquVuApePZV-HM5mnNejZDEYEcg&s",
  "still my": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3cKbQqaquVuApePZV-HM5mnNejZDEYEcg&s",
  "kill my": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3cKbQqaquVuApePZV-HM5mnNejZDEYEcg&s",
  "will die": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYG3cKbQqaquVuApePZV-HM5mnNejZDEYEcg&s",
  "brick wall": "https://preview.redd.it/4wzew8ysnsm91.png?width=512&format=png&auto=webp&s=2a5e8b79c10d933bf920112fa9f2998cd157051d",
  "pick a role": "https://preview.redd.it/4wzew8ysnsm91.png?width=512&format=png&auto=webp&s=2a5e8b79c10d933bf920112fa9f2998cd157051d",
  "vastly": "https://preview.redd.it/4wzew8ysnsm91.png?width=512&format=png&auto=webp&s=2a5e8b79c10d933bf920112fa9f2998cd157051d",
  "lastly": "https://preview.redd.it/4wzew8ysnsm91.png?width=512&format=png&auto=webp&s=2a5e8b79c10d933bf920112fa9f2998cd157051d",
  "pita": "https://i.redd.it/in-the-newest-episode-patrick-literally-does-the-family-guy-v0-zg8f1ijqmptb1.png?width=928&format=png&auto=webp&s=63f2bc0ab545c659d2da9a9d33d7f8c0b553d1f8",
  "ski buddy": "https://upload.wikimedia.org/wikipedia/en/thumb/0/09/Skibidi_toilet_screenshot.webp/237px-Skibidi_toilet_screenshot.webp.png",
  "hot to": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "hot tuna": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "talk to a": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "hot too": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "honked too": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "hop to it": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "hawk to a": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "hawk to": "https://i.guim.co.uk/img/media/511b18fbfdd68f1ef02cdd91fba3a5708ba7d635/84_0_2116_1270/master/2116.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=5d07efd2429bfa092c1eb6b7ebf74ca2",
  "humongous": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "among us": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "a mongoose": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "among": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "amongst us": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "amongst": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "a fungus": "https://i1.sndcdn.com/artworks-PH5fSKwbVu086Crn-a1Aqzg-t1080x1080.jpg",
  "ready faster": "https://i.pinimg.com/736x/09/2c/d8/092cd892c6f1d6cf81a82c8be674738b.jpg",
  "bike of every seven": "https://i.pinimg.com/736x/09/2c/d8/092cd892c6f1d6cf81a82c8be674738b.jpg",
  "har har har": "https://i.pinimg.com/736x/09/2c/d8/092cd892c6f1d6cf81a82c8be674738b.jpg",
  "har har": "https://i.pinimg.com/736x/09/2c/d8/092cd892c6f1d6cf81a82c8be674738b.jpg",
  "pdf file": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-10/241009-sean-diddy-combs-al-1415-3f180d.jpg",
  "pdf files": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-10/241009-sean-diddy-combs-al-1415-3f180d.jpg",
  "did he": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1500w,f_auto,q_auto:best/rockcms/2024-10/241009-sean-diddy-combs-al-1415-3f180d.jpg",
  "ohayo": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ohio_in_United_States.svg/300px-Ohio_in_United_States.svg.png",
  "ohayou": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Ohio_in_United_States.svg/300px-Ohio_in_United_States.svg.png"
};

function highlightWord(element, word, imageUrl) {
  const regex = new RegExp(`\\b(${word})\\b`, "i"); 
  const originalHTML = element.innerHTML;
  const match = element.textContent.match(regex);
  if (match) {
    element.innerHTML = originalHTML.replace(regex, (matchedWord) => {
        return `<span style=
          "display: inline-block;
          border: 4px solid red;
          border-radius: 50%;
          padding: 0 5px;
          color: inherit;
          line-height: 1.5;">
          ${matchedWord}</span>`;
      });

    const updatedHTML = element.innerHTML.replace(regex, `<span class="highlight">$1</span>`);

    if (updatedHTML !== originalHTML) {
      element.innerHTML = updatedHTML;

   
      const highlightedWord = element.querySelector(".highlight");
      if (highlightedWord) {
        const rect = highlightedWord.getBoundingClientRect();

        const overlayImage = document.createElement("img");
        overlayImage.src = imageUrl;
        overlayImage.alt = word;
        overlayImage.style = `
          position: absolute;
          top: ${rect.top + window.scrollY + 10}px;
          left: ${rect.left + window.scrollX + rect.width + 10}px; 
          width: 70px; 
          height: 60px; 
          z-index: 9999; 
          pointer-events: none; 
        `;
    
        document.body.appendChild(overlayImage);

        return true;
        }
      }
    
    }

  return false; 
  } 

  
function scanPageForKeywords(wordToImageMap) {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    null,
    false
  );

  let currentNode;
  while ((currentNode = walker.nextNode())) {
    const text = currentNode.nodeValue;

    const parentElement = currentNode.parentElement;
    if (parentElement && (parentElement.tagName === 'SPAN' || parentElement.tagName === 'P' || parentElement.tagName.startsWith('H'))) {
        for (const [word, imageUrl] of Object.entries(wordToImageMap)) {
            if (highlightWord(parentElement, word, imageUrl)) {
              console.log(word);
              return; 
              }
        }
      }
      }
    }


scanPageForKeywords(wordToImageMap);




