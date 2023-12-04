
// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
//   } else {console.log('I did it! I linked jQuery and this js file!')};

$(() => {
	// put jQuery in here
    
    //Query for your div with the id of container and set it to a variable named $container
    const $container = $("#container");
    console.log($container)

    //Create an <h1> element and set it to a variable called $h1
    const $h1 = $('<h1>Hogwarts</h1>');
    console.log($h1)

    //Append your $h1 to your $container
    $container.append($h1);
});

