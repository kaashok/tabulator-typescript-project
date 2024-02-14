import * as Tabulator from 'tabulator-tables';
import { Module } from 'tabulator-tables';

class TabulatorWrapper {
    public createTabulator(data: any[]) {
        const tabulator = new this._tabulatorObject("#example-table", {
            height: 205, // set height of table (in CSS or here), this enables the Virtual DOM and improves render speed dramatically (can be any valid css height value)
            data: data, //assign data to table
            layout: "fitColumns", //fit columns to width of table (optional)
            columns: [ //Define Table Columns
                { title: "Name", field: "name", width: 150 },
                { title: "Age", field: "age", hozAlign: "left", formatter: "progress" },
                { title: "Favourite Color", field: "col" },
                { title: "Date Of Birth", field: "dob", sorter: "date", hozAlign: "center" },
            ],
        });
    }

    //If i am importing like this `import { TabulatorFull as Tabulator } from 'tabulator-tables'` and creating a Tabulator like below
    //`const tabulator = new Tabulator("#example-table", {});` I am getting error "app.ts:7 Uncaught TypeError: tabulator_tables_1.TabulatorFull is not a constructor"
    private _tabulatorObject: any = Tabulator;
}

class CustomModule extends Module {
    constructor(table: any) {
        super(table);
    }

    initialize() {
        //called by the table when it is ready for module integrations
    }
}
CustomModule.moduleName = "customModule";


function initTabulator() {
    const obj = new TabulatorWrapper();
    obj.createTabulator(getTableData())
}

function getTableData(): any[] {
    var tableData = [
        { id: 1, name: "Oli Bob", age: "12", col: "red", dob: "" },
        { id: 2, name: "Mary May", age: "1", col: "blue", dob: "14/05/1982" },
        { id: 3, name: "Christine Lobowski", age: "42", col: "green", dob: "22/05/1982" },
        { id: 4, name: "Brendon Philips", age: "125", col: "orange", dob: "01/08/1980" },
        { id: 5, name: "Margret Marmajuke", age: "16", col: "yellow", dob: "31/01/1999" },
    ];
    return tableData;
}

initTabulator();