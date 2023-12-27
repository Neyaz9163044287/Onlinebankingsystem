import { expect } from "chai";
import ShopperStack_HomePage_POM from "../pageobjects/ShopperStack_HomePage_POM.js";
import ShopperStack_LoginPage_POM from "../pageobjects/ShopperStack_LoginPage_POM.js";

describe('Suite01', () => {
    it('Login Test', async ()=>
    {
        let exp_text = "Hello, Md Neyaz"
        await browser.maximizeWindow()
        await browser.url("https://shoppersstack.com/")
        await ShopperStack_HomePage_POM.click_loginBtn()
        await ShopperStack_LoginPage_POM.EnterCredentials_ShopperLogin("zayen.demha001@gmail.com", "Neyaz@123")
        let act_text = await browser.$("//h3[text()='Md Neyaz']").getText()
        expect(exp_text).to.be.include(act_text)
        await browser.$("//img[@src='/static/media/men.77f063526a0f08ad75e8.webp']").scrollIntoView()
        await browser.$("//img[@src='/static/media/men.77f063526a0f08ad75e8.webp']").click()
        await browser.$("//img[@alt='nike shues']").scrollIntoView()
        await browser.$("//img[@alt='nike shues']").click()
        let exptext = "nike shues"
        let acttext= await browser.$("//h4[text()='nike shues']").getText()
        expect(acttext).to.be.include(exptext)
        await browser.$('#Check Delivery').setValue("560085")
        

    })
})