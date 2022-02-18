let animalDs = isc.DataSource.create({
    ID: "animalDs",
    dataFormat: "json",
    dataURL: "ds/data/animalData.json",
    fields: [
        {name: "commonName", hidden: true, title: "Animal"},
        {name: "scientificName", title: "Scientific Name"},
        // Note: Fields not included in this list will not show up in the ListGrid
        //{name:"lifeSpan", title:"Life Span"},
        //{name:"status",title:"Endangered Species Status"}
        {name: "diet", title: "Diet"},
        {name: "information", title: "Interesting Facts"}
    ]
});
