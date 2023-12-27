import { expect } from "chai";
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_IntBankingLoginPage from "../pageobjects/bixi_IntBankingLoginPage.js";


describe('BuildB02', () => {
    it('Internet Login Negative Test', async () =>{
        await browser.maximizeWindow()
        await browser.navigateTo("http://rmgtestingserver/domain/Online_Banking_System")
        await bixi_HomePage.move_InternetBanking()
        await bixi_HomePage.click_InternetLogin()
        //await bixi_IntBankingLoginPage.InternetLogin(1011763, "abc#1234")
        await bixi_IntBankingLoginPage.EnterDetails_InternetLogin(1011763, "abc#1234")
        let message = await browser.getAlertText()
        console.log("Error Message Displayed As ===============>>>>>>>>>>>>>>>"+message);
        await browser.acceptAlert()
    })
})