// variables for the dropdown menu
var dropdownMenu = d3.select("sample-metadata");

// select dropdown menu
var dataset = d3.select("#selDataset");
var index = [];
var sample_values;
var names;
var data;
var otu_ids;
var otu_labels;

//function to data to the dropdown menu
function dropDown(data, index) {
    click = d3.selectAll(data)
    index.forEach(x => {
        data.append("option").text(x)
    })
};



// Read in the json using d3
var data;
var databox = [];
d3.json("/data/samples.json").then(function(d) {
    sample_values = d.samples.sample_values;
    names = d.names;
    metadata = d.metadata;
    otu_ids = d.samples.otu_ids;
    otu_labels = d.samples.otu_labels;
    console.log(data);
    sortSamples = button.sort((a, b) => b.sample_values - a.sample_values);
    names.forEach((name) => {
        dataset.append("option").text(name);
        console.log(sample_values);
    });
    info = metadata.filter(m => m.id.toString() === 0);
    databox.push(info);
})
console.log(info);
var trace1 = {
    x: sortedSamples.map(row => row.sample_values),
    y: sortedSamples.map(object => object.greekName),
    text: sortedSamples.map(object => object.greekName),
    name: "Belly Button Diversity",
    type: "bar"
};

var data1 = [trace1];
Plotly.newPlotly("bar", data1);

var trace2 = {
    x: data.sample_values,
    y: data.otu_ids,
    type: "scatter",
    mode: markers,
    marker: {
        size: data.sample_values,
        color: data.otu_ids
    },
    text: data.otu_labels
};

var data2 = [trace2];
Plotly.newPlotly("scatter", data2);


console.log(sample_values);
console.log(names);