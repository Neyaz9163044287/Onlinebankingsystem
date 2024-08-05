import date from "../../Genricutility/JS_Utility/date.js";

describe('Import Date', ()=>{
    it('Print System Date', async ()=>{
        await console.log("******"+date.getDate()+"********");
    })
})