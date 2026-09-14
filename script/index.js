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
    .then(data=>displayWords(data.data));
}


const displayWords= (words)=>{
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML= "";
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

const display = (lesson)=>{

        const btnContainer = document.getElementById("btn-container");
        btnContainer.innerHTML= "";

    lesson.forEach((les)=>{

        const divBtn = document.createElement('div');
        divBtn.innerHTML = `
               <button onclick="loadLevelWord(${les.level_no})" class="btn btn-outline btn-primary ">
                <span><i class="fa-solid fa-book-open"></i></span>Lesson - ${les.level_no}</button>
        
        `

        btnContainer.append(divBtn);
        
       
    
        
    })
}


loadLesson();