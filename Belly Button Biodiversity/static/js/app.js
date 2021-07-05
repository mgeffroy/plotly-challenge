// in the html explain what is going on
// Initialize plot 
// Get the names array in the dropdown ( user interacts with dropdown)
// 
// Select dropdown 
// On change to the DOM, call getData()
//d3.selectAll("#selDataset").on("change", getData);

var dataset = "samples.json"; 

// Get data that will populate the dropdown 
d3.json(dataset).then(function(data) {

    // Grab values from the data json object to build the plots
    var names = data.dataset.names;
    console.log(names);
});

