isc.DataSource.create({
    ID: "worldDs",
    dataFormat: "json",
    dataURL: "ds/data/worldData.json",
    fields: [
        {name: "pk", type: "sequence", hidden: true, title: "pk", primaryKey: "true"},
        {name: "countryCode", type: "text", title: "Code", required: true},
        {name: "countryName", type: "text", title: "Country", required: true},
        {name: "capital", type: "text", title: "Capital"},
        {
            name: "government",
            type: "text",
            title: "Government",
            length: 500
        },
        {
            name: "continent",
            type: "text",
            title: "Continent",
            valueMap: ["Europe", "Asia", "North America", "Australia/Oceania", "South America", "Africa"]
        },
        {
            name: "independence",
            type: "date",
            title: "Nationhood"
        },
        {
            name: "area",
            type: "float",
            title: 'Area (km&amp;sup2;)',
            format: ",0"
        },
        {
            name: "population",
            type: "integer",
            title: "Population",
            format: ",0"
        },
        {
            name: "gdp",
            type: "float",
            title: "GDP ($M)",
            format: ",0"
        },
        {
            name: "member_g8",
            type: "boolean",
            title: "G8"
        },
    ]
});
