
isc.DataSource.create({
    ID: "eventDS",
    fields:[
        {name:"eventId", primaryKey: true, type: "sequence"},
        {name:"name"},
        {name:"description"},
        {name:"startDate"},
        {name:"endDate"}
    ],
    clientOnly: true,
    testData: eventData
});     

isc.Calendar.create({
    ID: "eventCalendar", 
    startDate: eventData.getDataStartDate(),
    dataSource: eventDS, 
    autoFetchData: true,
    showWeekends: false, 
    showWorkday: true,
    scrollToWorkday: true
});
