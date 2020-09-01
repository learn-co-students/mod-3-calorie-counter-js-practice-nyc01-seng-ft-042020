// your code here, it may be worth it to ensure this file only runs AFTER the dom has loaded.
document.addEventListener('DOMContentLoaded', function(e){
    const baseUrl = "http://localhost:3000/api/v1/calorie_entries"
    const calorieList = document.querySelector('#calories-list')



    // clear out boilerplate tags
    // *find tag parent
    // *remove children of parent tag 

    const clearCalorieList = () => {
        calorieList.innerHTML = '';
    }
    
    // *fetch data
    // *forEach
    // *render each item individually 

    const fetchData = () => {
        fetch(baseUrl)
        .then(resp => resp.json())
        .then(calorieItems => {
            renderCalorieItems(calorieItems)
        })
    }

    const renderCalorieItems = calorieItems => {
        calorieItems.forEach(calorieItem => {
            renderCalorieItem(calorieItem)
        })
    }

    const renderCalorieItem = calorieItem => {
        const calorieItemLi = document.createElement('li')
        calorieItemLi.dataset.id = calorieItem.id
        calorieItemLi.className = "calories-list-item"
        calorieItemLi.innerHTML = `
        <div class="uk-grid">
            <div class="uk-width-1-6">
                <strong>${calorieItem.calorie}</strong>
                <span>kcal</span>
            </div>
            <div class="uk-width-4-5">
                <em class="uk-text-meta">${calorieItem.note}</em>
            </div>
        </div>
        <div class="list-item-menu">
            <a class="edit-button" uk-toggle="target: #edit-form-container" uk-icon="icon: pencil"></a>
            <a class="delete-button" uk-icon="icon: trash"></a>
        </div>
        `
        calorieList.appendChild(calorieItemLi)
    }

    document.addEventListener('click', function(e){
        e.preventDefault()
        const calorieItemForm = document.querySelector('new-calorie-form')
        console.log
        const calories = calorieItemForm.calories.value
        const notes = calorieItemForm.note.value

            // const button = e.target
            // const 
            // const calories = document.querySelectorAll('.uk-input')
            // const calorie = calories[4]
            // // console.log(calories)
            // const notes = document.querySelector('.uk-textarea').value
            // // console.log(notes)
            // const calorieItemObj = {
            //     calorie: calories,
            //     notes: notes
            // }
            // console.log(calorieItemObj)

            // fetch(baseUrl, {
            //     method: "POST",
            //     headers: {
            //         "Content-Type": "application/json",
            //         "Accept": "application/json"
            //     },
            //     body: JSON.stringify(calorieItemObj)
            // })
            // .then(resp => resp.json())
            // .then(console.log)
            // .then(calorieItem => renderCalorieItem(calorieItem))

    })





    clearCalorieList();
    fetchData();

});