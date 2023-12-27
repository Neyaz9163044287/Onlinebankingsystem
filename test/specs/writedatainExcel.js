import excel from "exceljs"

describe('Suite66', ()=>{
    it('Write Data In Excel', async ()=>{
        const book = new excel.Workbook()
        // new work book
        await book.xlsx.readFile("./test/testdata/testdata.xlsx")
        const sheet = book.addWorksheet('Neyaz')
        sheet.addRow(2).getCell(3).value = 'Store the Data'
        await book.xlsx.writeFile("./test/testdata/testdata.xlsx")


        // Same Work Book
        // await book.xlsx.readFile("./test/testdata/testdata.xlsx")
        // const sheet = book.getWorksheet('Sheet2')
        // sheet.addRow(2).getCell(2).value = 'Store the data'
        // await book.xlsx.writeFile("./test/testdata/testdata.xlsx")
    })
})