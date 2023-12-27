import { expect } from "chai";
import bixi_HomePage from "../pageobjects/bixi_HomePage.js";
import bixi_DebitCardPage from "../pageobjects/bixi_DebitCardPage.js";

describe('BuildB03', () =>{
    it('Apply For Debit card and fetch Debit Card Details', async () => {
        await browser.maximizeWindow()
        await browser.url("http://rmgtestingserver/domain/Online_Banking_System")
        await bixi_HomePage.click_ApplyDBCard()
        await bixi_DebitCardPage.EnterCredentials("aaron", "12-12-1996", "9876543", 9876543210, 1011471011947)
        console.log(await browser.getAlertText());
    })
})