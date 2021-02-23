const list_items = [
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
    "Item 7",
    "Item 8",
    "Item 9",
    "Item 10",
    "Item 11",
    "Item 12",
    "Item 13",
    "Item 14",
    "Item 15",
    "Item 16",
    "Item 17",
    "Item 18",
    "Item 19",
    "Item 20",
    "Item 21",
    "Item 22"
]
const list_element = document.getElementById('list');
const pagination_element= document.getElementById('pagination')

let curr = 1;
let rows = 5;

let displayList = (items, wrapper, rows_per_page, page)=> {

        wrapper.innerHTML= "";
        //Resets the contents.
        page--;
        //subtract page# by 1
        let start = rows_per_page * page; //rows * page#
        //5 *0, 5*1, 5*2, 5*3, 5*4
        let end = start + rows_per_page;
        //0+5, 5+5, 10+5, 15+5, 20+5 
        console.log(start,end);
        let loop_start = rows_per_page * page;//Where we loop through the list of items
        //5*0, 5*1, 5*2, 5*3, 5*4
        //Start loop at list_items[0], list_items[5], list_items[10], etc.
        console.log(loop_start)
        let paginatedItems = items.slice(start, end); 
        console.log(paginatedItems)
        //Gets the chunk of items from the list 
        for (let i = 0; i < paginatedItems.length; i++){
            //While I is less than the amount of values grabbed from the list (5)
            let item = paginatedItems[i]
            //you can also do "let item = items[i+start];" This is what I did, but you end up not using the paginatedItems list at all.
            //Grabs the element from the list 
            let item_element = document.createElement('div');
            //Creates a div tag for that element
            item_element.classList.add('item')
            //Gives that div a class called item
            item_element.innerText= item;
            //Sets the text of that element to the name of the current list item 

            wrapper.appendChild(item_element);
            //Adds the the content to our HTML that has the class "list"
            //Takes all the HTML that we used, and stores it in our document
            //I'm confused by the wrapper.. Where is it indicated that the wrapper will 
            //Send its contents to the document
            //To my understanding, wrapper is known as our list_element, which
            //is responsible for 
        }
}

let setupPagination = (items, wrapper, rows_per_page)=> {
    wrapper.innerHTML= "";
    let page_count = Math.ceil(items.length / rows_per_page); 
    console.log('hello')
    //Divide the # of items by your rows (5), and round that number up in case there's a remainder. 
    //We watch for a remainder because we'll still need a page number to print the extra items 
    for (let i = 1 ; i < page_count + 1 ; i++)
    {
       let btn = PaginationButton(i, items);
       //Create the button 
       wrapper.appendChild(btn);
    }
}

let PaginationButton = (page, item) => {
    let button = document.createElement('button');
    button.innerText=page;

    if (curr == page) {button.classList.add('active');}
    button.addEventListener('click', () => {
        current_page = page;
        displayList(item, list_element, rows, current_page);
        let current_btn = document.querySelector('.active');
        current_btn.classList.remove('active');
        button.classList.add('active');

    })
    console.log('button')
    return button;
}

displayList(list_items, list_element, rows, curr);
setupPagination(list_items, pagination_element, rows);