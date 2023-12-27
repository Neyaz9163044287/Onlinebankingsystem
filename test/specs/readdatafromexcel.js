import excel from "exceljs"

describe('Suite65', () =>{
    it('Read Data from Excel', async () =>{
        const book = new excel.Workbook()
        await book.xlsx.readFile("./test/testdata/testdata.xlsx")
        const sheet = book.getWorksheet('Sheet1')
        let data = sheet.getRow(2).getCell(1).toString()
        console.log(data);
    })
})