describe('Suite Name', () => {

    it('TestScriptName', async () => {
        await browser.url('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        await expect(browser).toHaveTitle('OrangeHRM')
    })
})