
function submitComment() {
   
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    

    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
  
   
    h3.innerHTML = `${name} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
  
   
   if(msg.includes("badwords")){
     alert("Hey! don't do that!")
     return; true
   }

    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
  
   
    inputField.value = null;
    textArea.value = null;
    

    // const paintings = {
    //   artObjects: [
    //     { links: {
    //       self: "https://gazetekarinca.com/wp-content/uploads/2019/05/k%C3%BCrt_%C3%A7acda%C5%9F_sanat.jpg",
    //       web: "https://gazetekarinca.com/wp-content/uploads/2019/05/k%C3%BCrt_%C3%A7acda%C5%9F_sanat.jpg"
    //     }
    //     id: "201905",
    //     objectNumber: "photo201905",
    //     title: "A Lady who miss love",
    //     hasImage: true,      

    //     }
    //   ]
    // }
  }