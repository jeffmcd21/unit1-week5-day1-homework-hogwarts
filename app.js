
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
    const $h1 = $('<h1>Hogwarts</h1>');
        //console.log($h1)

    //Append your $h1 to your $container
    $container.append($h1);

// ----- ***** ----- Year 2 ----- ***** ----- //

    //h2 element with your name
    const $h2 = $('<h2>Jeff</h2>');
    $container.append($h2)
        //console.log($h2)


    // h3 element with your house (Hufflepuff, Gryffindor, Ravenclaw or Slytherin )
    const $h3 = $('<h3>Ravenclaw</h3>')
    $container.append($h3)
        //console.log($h3)

    // h4 element with your pet's name
    // this h4 element should have a class with a value of your pet type (owl, cat, toad, etc)
    const $h4 = $('<h4>Marley</h4>');
    // Add a class with the pet type (dog)
    $h4.addClass('dog');
    $container.append($h4);

    // h4 element with your wand 
    const $h4Two = $('<h4>Holly Wand with Unicorn Hair Core</h4>');
    $container.append($h4Two);

});

