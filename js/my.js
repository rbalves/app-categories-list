var categories = [
    {
        title: 'Category 01',
        items: [
            'Item 01',
            'Item 02',
            'Item 03'
        ]
    },
    {
        title: 'Category 02',
        items: [
            'Item 01',
            'Item 02',
            'Item 03'
        ]
    },
    {
        title: 'Category 03',
        items: [
            'Item 01'
        ]
    }
]

function listCategories(categories){
    let divCategories = document.getElementById("categories");

    for (let index = 0; index < categories.length; index++) {
        let divCategory = mountDivCategory(categories[index]);
        divCategories.appendChild(divCategory);
    }
}

function mountDivCategory(category) {
    let divCategory = document.createElement("div");

    let title = document.createElement("h3");
    title.innerHTML = category.title;
    divCategory.appendChild(title);

    let listItems = listItemsCategory(category.items);
    divCategory.appendChild(listItems);

    return divCategory;
}

function listItemsCategory(items){
    let ul = document.createElement('ul');

    for (let index = 0; index < items.length; index++) {
        
        let radio = document.createElement('input');
        radio.setAttribute('type', 'radio');
        radio.setAttribute('name', 'item');
        radio.setAttribute('value', items[index]);

        let li = document.createElement('li');
        li.appendChild(radio);
        li.appendChild(document.createTextNode(items[index]));
        ul.appendChild(li);
    }

    return ul;
}

listCategories(categories);
