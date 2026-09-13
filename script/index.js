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
        <p> hello </p>
        
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