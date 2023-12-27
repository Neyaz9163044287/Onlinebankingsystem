class StfLoginPage
{
    get enterUsername()
    {
        return $("//input[@class='customer_id']")
    }
    get enterPassword()
    {
        return $("[name='password']")
    }
    get clickLogin()
    {
        return $("[name='staff_login-btn']")
    }

    // Business Logic
    async staffLoginAction(staffId, pwd)
    {
        await this.enterUsername.setValue(staffId)
        await this.enterPassword.setValue(pwd)
        await this.clickLogin.click()
    }
}

export default new StfLoginPage()