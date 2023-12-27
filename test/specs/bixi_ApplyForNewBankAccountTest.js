import { expect } from "chai";
import ss from "fs"
let cred = JSON.parse(ss.readFileSync('./test/testdata/bixi_OpenAccountTestData.json'))
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_OnlineAccountOpeningFormPage from "../pageobjects/bixi_OnlineAccountOpeningFormPage.js";

describe('Bixi_Suite03', () =>{
        
        let NAME = cred.name.toString()        
        let MOB = cred.mob.toString()
        let EMAIL = cred.email.toString()
        let LANDLINE = cred.landline.toString()
        let DOB = cred.dob.toString()
        let PAN = cred.pan.toString()
        let CITIZENNO = cred.citizenshipno.toString()
        let HOMEADDRESS = cred.homeaddress.toString()
        let OFFICEADDRESS = cred.officeaddress.toString()        
        let PIN = cred.pin.toString()
        let AREA = cred.area.toString()
        let NOMINEENAME = cred.nomineename.toString()
        let NOMINEEACCNO = cred.nomineeaccno.toString()
        let GENDER = cred.gender
        let STATE = cred.state
        let CITY = cred.city
        let ACCOUNTTYPE = cred.accounttype

        it('Apply For New Bank Account', async () =>{
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System")
        await bixi_HomePage.click_OpenAccount()
        
        await bixi_OnlineAccountOpeningFormPage.EnterDetails(NAME,MOB,EMAIL,LANDLINE,DOB,PAN,CITIZENNO,HOMEADDRESS,OFFICEADDRESS,PIN,AREA,NOMINEENAME,NOMINEEACCNO)
        await bixi_OnlineAccountOpeningFormPage.select_Dropdown(GENDER,STATE,CITY,ACCOUNTTYPE)
        await browser.pause(5000)      
    })
})