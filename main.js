"use strict"

function renderCoffee(coffee) {
    var html = '<div class="coffee">';
    // html += '<td>' + coffee.id + '</td>';
    html += '<h3>' + coffee.name + '</h3>';
    html += '<p>' + coffee.roast + '</p>';
    html += '</div>';

    return html;
}

function renderCoffees(coffees) {
    coffees = coffees.sort(function(a, b){
        return a.id-b.id
    })
    var html = '';
    for(var i=0; i< coffees.length ; i++) {
        html += renderCoffee(coffees[i]);
    }
    return html;
}

function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data

    var selectedRoast = roastSelection.value;
    var searchText = searchBar.value;
    var filteredCoffees = [];
    coffees.forEach(function(coffee) {
        if ((coffee.roast === selectedRoast || selectedRoast === "All")&& coffee.name.toLowerCase().includes(searchText.toLowerCase())) {
            filteredCoffees.push(coffee);
        }
    });
    tbody.innerHTML = renderCoffees(filteredCoffees);
}

function addNewCoffee(e) {
    e.preventDefault();
    var selectedRoast = newRoast.value;
    var inputText = newCoffee.value;
    let addNewCoffee = {
        id: coffees.length +1, name: selectedRoast, roast: inputText
    }
        coffees.push(addNewCoffee)
    tbody.innerHTML = renderCoffees(coffees);
    //
    //
    // var filteredCoffees = [];
    // coffees.forEach(function(coffeeInput) {
    //     if (coffeeInput !== selectedRoast && inputText !== coffeeInput.name) {
    //         filteredCoffees.push(selectedRoast);
    //         filteredCoffees.push(inputText);
    }
});

    //console.log('addNewCoffee');
}

// function searchForCoffees() {
//     var searchText = searchBar.value;
//     for (var x = 0; x < coffees.length; x++) {
//         if (coffees.length.indexOf()
//     }
//     console.log(searchText);
// }

// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide

var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

var tbody = document.querySelector('#coffees');
var submitButton = document.querySelector('#addNewCoffee');
var roastSelection = document.querySelector('#roast-selection');
var searchBar = document.querySelector('#searchBar');
var newRoast = document.querySelector('#newCoffeeRoast');
var newCoffee = document.querySelector('#newCoffeeName');

tbody.innerHTML = renderCoffees(coffees);

roastSelection.addEventListener('change', updateCoffees);
searchBar.addEventListener('input', updateCoffees);
submitButton.addEventListener('click', addNewCoffee);