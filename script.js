let $form = document.querySelector("#form");
let $list = document.querySelector('#list');
let $size = document.querySelectorAll(".input_size");
let $onPizza = document.querySelectorAll(".ingredient");
let $add = document.querySelectorAll(".added");
let $diam = document.querySelector('#malumotlar');



let userArray = []

$form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    let onPizzaAr = [];
    let arr1 = [];
    for (let i = 0; i < $onPizza.length; i++) {
        if ($onPizza[i].checked) {
            onPizzaAr.push($onPizza[i].value)
            arr1.push(Number($onPizza[i].dataset.click))
        }
    }
    let onPizzaAr1 = [];
    let arr2 = [];
    for (let i = 0; i < $diam.length; i++) {
        if ($diam[i].selected) {
            onPizzaAr1.push($diam[i].value)
            arr2.push(Number($diam[i].dataset.click))
        }
    }    let onPizzaAr2 = [];
    let arr3 = [];
    for (let i = 0; i < $add.length; i++) {
        if ($add[i].checked) {
            onPizzaAr2.push($add[i].value)
            arr3.push(Number($add[i].dataset.click))
        }
    }    let onPizzaAr3 = [];
    let arr4 = [];
    for (let i = 0; i < $size.length; i++) {
        if ($size[i].checked) {
            onPizzaAr3.push($size[i].value)
            arr4.push(Number($size[i].dataset.click))
        }
    }
 function sum(Array){
    let s = 0;
    for(i=0; i < Array.length; i++){
    s += Array[i]
    }
    return s
 }

 let sum1 = sum(arr4) + sum(arr3) + sum(arr2) + sum(arr1)



    let addAr = [];
    for (let i = 0; i < $add.length; i++) {
        if ($add[i].checked) {
            addAr.push($add[i].value)
        }
    }



    


    let {
        user_name,
        user_phone,
        user_email,
        selector,
        size
    } = evt.target.elements

    let newObj = {

        id: userArray.length + 1,
        name: user_name.value.trim(),
        phone: user_phone.value.trim(),
        email: user_email.value.trim(),
        thickness: selector.value.trim(),
        newSize: size.value.trim(),
        onPizza: onPizzaAr.join(', '),
        add: addAr.join(', '),
        Sum: sum1,


    }
    userArray.push(newObj)
    console.log(userArray);
    renderFunction(userArray, $list)

})



var renderFunction = (array, element) => {
    element.innerHTML = null
    for (let i = 0; i < array.length; i++) {
        element.innerHTML += `
            <li>
            <p> User id: ${array[i].id}</p>
            <p>Name: ${array[i].name}</p>
            <p>Phone: ${array[i].phone}</p>
            <p>Email: ${array[i].email}</p>

            <hr>
            <p>Thickness: ${array[i].thickness}</p>
            <p>Size: ${array[i].newSize}</p>
            <p>On Pizza: ${array[i].onPizza}</p>
            <p>Add: ${array[i].add}</p>
            <p>Total: ${array[i].Sum}$</p>

            </li>
        `

    }
}

renderFunction(userArray, $list)