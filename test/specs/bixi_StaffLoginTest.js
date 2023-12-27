import { expect } from "chai";
import bixi_StaffLoginPage from "../pageobjects/bixi_StaffLoginPage.js";

    describe('BuildBO1', () =>{
        it('Staff Login Page', async () =>{
            let exp_title = "Staff Home"
            await browser.maximizeWindow()
            await browser.url("http://rmgtestingserver/domain/Online_Banking_System/staff_login.php")
            await bixi_StaffLoginPage.staffLoginAction(210001, "password")
            let act_title= await browser.getTitle()
            expect(act_title).to.be.equal(exp_title)            // Assertion
        })
    })