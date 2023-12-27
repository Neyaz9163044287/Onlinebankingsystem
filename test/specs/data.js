import fs from "fs"
let credential = JSON.parse(fs.readFileSync('./test/testdata/testdata.json'))
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_StaffLoginPage from "../pageobjects/bixi_StaffLoginPage.js";

describe('Suite65', () =>{

    credential.forEach((data, index) => {    
    let STAFFID = data.staff_id
    let PASSWORD = data.password

    it('datafromJson', async () =>{
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System/")
        await bixi_HomePage.click_StaffLogin_btn()
        await bixi_StaffLoginPage.staffLoginAction(STAFFID, PASSWORD)
        let exp_title = "Staff Home"
        let act_title = await browser.getTitle()
        console.log(act_title);
        if(act_title==exp_title)
        {
            console.log("********************** Login Successfull With Cresentials: *********************** "+STAFFID+" *** and *** "+PASSWORD);
        }
        else
        {
            console.log("********************** Login Unsuccessfull With Cresentials: ********************** "+STAFFID+" *** and *** "+PASSWORD);
        }
    })
  })
})