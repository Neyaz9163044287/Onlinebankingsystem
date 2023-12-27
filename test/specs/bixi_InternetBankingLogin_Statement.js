import { expect } from "chai";
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_IntBankingLoginPage from "../pageobjects/bixi_IntBankingLoginPage.js";
import bixi_MyAccountPage from "../pageobjects/bixi_MyAccountPage.js";

describe('Suite04', ()=>{
    it('Print Statement Test', async ()=>{
        await browser.maximizeWindow()
        await browser.navigateTo("http://rmgtestingserver/domain/Online_Banking_System/")
        await bixi_HomePage.move_InternetBanking()
        await bixi_HomePage.click_InternetLogin()
        await bixi_IntBankingLoginPage.EnterDetails_InternetLogin(1011947, "abc@123")

        const nameisDisplayed = await $("//label[contains(text(),'Welcome aaron')]").isDisplayed()
        expect(nameisDisplayed).to.equal(true)

        //await bixi_MyAccountPage.click_ChangePassword_tab()
        await bixi_MyAccountPage.click_Statement_tab()
                
        let state = await browser.$$("//div[@class='cust_statement']//tr[2]")
        let state1 = await state.map(ele=>ele.getText())
        let state2 = state1.toString()
        let state3 = state2.split(" ")
        console.log(state3); 
        for(let i=0; i<state3.length; i++)
        {
            if(state3[i].length==9)
            {
                console.log("<<<<<<<<<<<<<<<<<< TRANSACTION ID IS >>>>>>>>>>>>>>>  "+state3[i]);
            }            
            else if(state3[i].includes("/") && state3[i]>='0' && state3[i]<='9')
            {
                console.log("<<<<<<<<<<<<<<<<<< TRANSACTION DATE IS >>>>>>>>>>>>>>>  "+state3[i]);
            }
            else if(state3[i].includes(":"))
            {
                console.log("<<<<<<<<<<<<<<<<<< TRANSACTION TIME IS >>>>>>>>>>>>>>>  "+state3[i]);
            }
            else if(state3[i].includes("$"))
            {
                console.log("<<<<<<<<<<<<<<<<<< TRANSACTION AMOUNT IS >>>>>>>>>>>>>>>  "+state3[i]);
            }
        }  
         
    })
})