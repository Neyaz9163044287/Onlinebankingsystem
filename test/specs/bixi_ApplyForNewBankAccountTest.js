import { expect } from "chai";
import ss from "fs"
let cred = JSON.parse(ss.readFileSync('./test/testdata/bixi_OpenAccountTestData.json'))
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_OnlineAccountOpeningFormPage from "../pageobjects/bixi_OnlineAccountOpeningFormPage.js";
import bixi_CustomerRegistrationConfirmPage from "../pageobjects/bixi_CustomerRegistrationConfirmPage.js";

describe('Bixi_Suite03', () =>{
        
        let NAME = cred.name.toString()        
        let MOB = cred.mobile.toString()
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
        let appno = 0
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System")
        await bixi_HomePage.click_OpenAccount()
        
        await bixi_OnlineAccountOpeningFormPage.EnterDetails(NAME,MOB,EMAIL,LANDLINE,DOB,PAN,CITIZENNO,HOMEADDRESS,OFFICEADDRESS,PIN,AREA,NOMINEENAME,NOMINEEACCNO)
        await bixi_OnlineAccountOpeningFormPage.select_Dropdown(GENDER,STATE,CITY,ACCOUNTTYPE)
        await bixi_CustomerRegistrationConfirmPage.click_Confirm_Btn()
        let text = await browser.getAlertText()
        for(let i=0; i<text.length; i++)
        {
            if(text[i]>='0' && text[i]<='9')
            {
                appno = appno + text[i]
            }
        }
        console.log("<<<<---------------------- APPLICATION NUMBER IS ------------------->>>> : "+appno);
        expect(appno).to.have.lengthOf(10);
        await browser.acceptAlert();      
    })
})