const loadLesson = ()=>{
    const url = 'https://openapi.programming-hero.com/api/levels/all';

    fetch(url)
    .then((res)=>res.json())
    .then((json)=>display(json.data))
}

const loadLevelWord = (id)=>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        removeActive();

        const clickbtn = document.getElementById(`lesson-btn${id}`);
        // console.log(clickbtn);
        clickbtn.classList.add('active');

        displayWords(data.data)
    });
}


const displayWords= (words)=>{
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML="";

            if(words.length == 0 ){
            const ldiv = document.createElement('div');
            ldiv.innerHTML= `
             <div class="text-center col-span-3 font-bangla-font">
             <p class="">আপনি এখনো কোন Lesson Select করেন ni</p>
             <h2 class="font-bold text-2xl ">একটি Lesson Select করুন।</h2> 
             </div>`
  levelContainer.append(ldiv);
            return;
        }

    words.forEach((word)=>{
        const levelDiv = document.createElement('div');
        levelDiv.innerHTML = ` 
          <div class="bg-white py-5 px-5 rounded-md text-center">
    <h2 class="font-bold text-xl">${word.word}</h2>
    <p>${word.meaning} / ${word.pronunciation}</p>
    <div class="flex  justify-between items-center">
      <button><i class="fa-solid fa-circle-info"></i></button>
      <button><i class="fa-solid fa-volume"></i></button>
    </div>

  </div>
        
        
        `
        levelContainer.append(levelDiv);
    })
    
}

const removeActive= ()=>{
    const lessonButton = document.querySelectorAll('.lesson-button');
    lessonButton.forEach(btn=>btn.classList.remove('active'))


}

const display = (lesson)=>{

        const btnContainer = document.getElementById("btn-container");
        btnContainer.innerHTML= "";

    lesson.forEach((les)=>{

        const divBtn = document.createElement('div');
        divBtn.innerHTML = `
               <button id="lesson-btn${les.level_no}" onclick="loadLevelWord(${les.level_no})" class="btn btn-outline btn-primary ">
                <span><i class="fa-solid fa-book-open lesson-button "></i></span>Lesson - ${les.level_no}</button>
        
        `

        btnContainer.append(divBtn);
        
       
    
        
    })
}


loadLesson();