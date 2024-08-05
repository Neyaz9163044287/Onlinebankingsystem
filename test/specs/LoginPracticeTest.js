describe('Orange HRM Login Page', () => {
    
    it('Name', async () =>{
        await browser.maximizeWindow()
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await browser.$('//input[@name="username"]').setValue('Admin')
        await browser.$('//input[@name="password"]').setValue('admin123')
        await browser.$("//button[@type='submit']").click()
        await browser.pause(3000)
        await browser.$("//p[text()='OrangeHRM OS 5.5']").scrollIntoView()
        await browser.pause(3000)
        // await browser.$('#wmgzDqkZ').moveTo()
        // await browser.pause(2000)
        // await browser.$("//p[text()='Time at Work']").isDisplayed()

        // await browser.url('https://demowebshop.tricentis.com/books')
        //  await browser.$('#products-orderby').selectByVisibleText('Price: Low to High')
        // // await browser.pause(2000)
        // await browser.$('#products-orderby').selectByIndex(0)
        // await browser.pause(2000)
    })
})
