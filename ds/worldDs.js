isc.DataSource.create({
    ID: "worldDs",
    dataFormat: "json",
    dataURL: "/ds/data/worldData.json",
    fields: [
        {name: "pk", type: "sequence", hidden: true, title: "pk", primaryKey: "true"},
        {name: "countryCode", type: "text", hidden: false, title: "Code", primaryKey: "true", required: true},
    ]
});

/*
<DataSource isSampleDS="true"
<fields>
    <field name="pk" type="sequence" hidden="true" primaryKey="true"/>
    <field name="countryCode" type="text" title="Code" required="true"/>
    <field name="countryName" type="text" title="Country" required="true"/>
    <field name="capital" type="text" title="Capital"/>
    <field name="government" type="text" title="Government" length="500"/>
    <field name="continent" type="text" title="Continent">
        <valueMap>
            <value>Europe</value>
            <value>Asia</value>
            <value>North America</value>
            <value>Australia/Oceania</value>
            <value>South America</value>
            <value>Africa</value>
        </valueMap>
    </field>
    <field name="independence" type="date" title="Nationhood"/>
    <field name="area" type="float" title="Area (km&amp;sup2;)" format=",0"/>
    <field name="population" type="integer" title="Population" format=",0"/>
    <field name="gdp" type="float" title="GDP ($M)" format=",0"/>
    <field name="member_g8" type="boolean" title="G8"/>
</fields>

<operationBinding operationType="fetch" operationId="fetchByRequiredCriterion" requiredCriterion="area, population">
    <description>
        <
        ![CDATA[
        Illustrates the <a
        href="https://www.smartclient.com/smartclient-latest/isomorphic/system/reference/?id=attr..OperationBinding.requiredCriterion"
        target="_blank">requiredCriterion</a> feature.
        ]]>
        </description>
</operationBinding>

</DataSource>
*/