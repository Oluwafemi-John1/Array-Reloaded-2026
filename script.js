// const allPhones = ['iPhone 17 pro max', 'Xiaomi 17 ultra', 'Samsung Galaxy S26 ultra', 'Pixel 10 pro XL']

// // Arrays are indexed. Index begins from 0

// console.log(allPhones[1]);

const allItems = []

const addItem = () => {
    const userInput = document.getElementById('item')
    if (userInput.value.trim() === '') {
        // alert('empty')
        message.innerHTML = `<div class="alert alert-danger p-2 fw-bold text-center" role="alert">Please fill in the empty input!</div>`
        setTimeout(() => {
            message.style.display = 'none'
        }, 1500);
    } else {
        allItems.push(userInput.value)
        userInput.value = ''
        showItem()
        console.log(allItems);
    }
}

const deleteItem = (index) => {
    // console.log(index);
    const confamu = confirm('Are you sure you want to delete?')
    console.log(confamu);
    if(confamu) {
        const prompting = prompt("Type the word 'DELETE' to confirm you are responsible for this")
        console.log(prompting);
        if(prompting === 'DELETE') {
            allItems.splice(index, 1)
            console.log(allItems);
            showItem()
        } else {
            alert('Type in the correct information')
        }
    } else {
        showItem()
    }
}

function showItem() {
    show.innerHTML = ''
    for (let i = 0; i < allItems.length; i++) {
        show.innerHTML += `
            <div class="my-2 row">
                <p class='text-start'>${i + 1}. ${allItems[i]}</p>
                <div class="d-flex gap-2">
                    <button class="btn btn-sm btn-danger" onclick="deleteItem(${i})">Delete</button>
                    <button class="btn btn-sm btn-warning">Edit</button>
                </div>
            </div>
        `
    }
}

// for(let i=0; i<3; i++) {
//     0
//     1
//     2
// }

// dummy[i]

// const dummy = ['Chelsea', 'Arsenal', 'Fulham']
// length is 3, lastIndex is 2

// Splice
// const arr = [1,2,3,4,5]
// arr.splice(2,1,'pepper')
// console.log(arr);