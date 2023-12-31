
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here

 // ----- ***** ----- Year 1 ----- ***** ----- //

    //Query for your div with the id of container and set it to a variable named $container
    const $container = $("#container");
        //console.log($container)

    //Create an <h1> element and set it to a variable called $h1
    const $h1 = $("<h1>Hogwarts</h1>");
        //console.log($h1)

    //Append your $h1 to your $container
    $container.append($h1);

// ----- ***** ----- Year 2 ----- ***** ----- //

    //h2 element with your name
    const $h2 = $("<h2>Jeff</h2>");
    $container.append($h2)
        //console.log($h2)


    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
    const $h3 = $("<h3>Ravenclaw</h3>");
    $container.append($h3)
        //console.log($h3)

    // h4 element with your pet's name
    // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $h4 = $("<h4>Marley</h4>");
    // Add a class with the pet type (dog)
    $h4.addClass("dog");
    $container.append($h4);

    // h4 element with your wand 
    const $h4Two = $("<h4>Holly Wand with Unicorn Hair Core</h4>");
    $container.append($h4Two);

// ----- ***** ----- Year 3 ----- ***** ----- //

// create an unordered list with storage attribute set to "trunk"
const $ul = $("<ul>", { storage: "trunk" });

// create list items for each item in the list
const items = [
  "butter beer",
  {text: "invisibility cloak", class: "secret"},
  {text: "magic map", class: "secret"},
  {text: "time turner", class: "secret"},
  {text: "leash", class: "dog"},
  "Bertie Bott's Every Flavor [Jelly] Beans",
];

// add each item to the list
items.forEach(item => {
  if (typeof item === "string") {
    $ul.append($("<li>", { text: item }));
  } else {
    $ul.append($("<li>", { text: item.text, class: item.class }));
  }
});

// append the list to the container
$("#container").append($ul);


// Remove list item bullet points
$("ul").css("list-style", "none");

// ----- ***** ----- Year 4 ----- ***** ----- //

    // Create table variable interpolate table structure and elements
    const classTable = `
    <table>
        <tr>
            <th>Day</th>
            <th>Classes</th>
        </tr>
        <tr>
            <td>Monday</td>
            <td>Herbology</td>
        </tr>
        <tr>
            <td>Tuesday</td>
            <td>Divination</td>
        </tr>
        <tr>
            <td>Wednesday</td>
            <td>History of Magic</td>
        </tr>
        <tr>
            <td>Thursday</td>
            <td>Charms</td>
        </tr>
        <tr>
            <td>Friday</td>
            <td>Potions</td>
        </tr>
    </table>`
    // Append header and table to div 
    $container.append($("<h5>Spring 2017</h5>")).append($(classTable))
    

// ----- ***** ----- Year 5 ----- ***** ----- //

    // Remove broken wand
    $h4Two.remove()

    // Remove butter beer // Not working
    //items[0].remove()

    // Add new wand after dog and change the color
    const $h4Three = $("<h4>Wand with unbreakable shaft</h4>").css("color", "indigo");
    $h4.after($h4Three);

    
    // Spy games
    const $spyDog = $h4.remove()
    $spyDog.insertBefore($h2)

    
    // Mission Complete
    const $dogHome = $spyDog.remove()
    $dogHome.insertAfter($h3)



// ----- ***** ----- Year 6 ----- ***** ----- //

    // Hide the goods but delaying the special move
    $(".secret").delay(2000).hide("slow");

    // Bring it all back
    $(".secret").show("slow");
    
    // Add class to dogs leash // Not Working
    //$dog.addClass("cabbage")
    
    // Remove class // Not Working
    //$dog.removeClass("cabbage")
    

// ----- ***** ----- Year 6 ----- ***** ----- //

    // Create the header and table elements separately
    $container.find('h5').replaceWith('<h5>Fall 2018</h5>');

    // More Butter beer...
    $ul.prepend($("<li>", { text: "Butter beer" }));

    // Buy a new chest
    $ul.attr("storage", "chest");



});