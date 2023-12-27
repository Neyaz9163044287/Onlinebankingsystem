class LoginPage
{
    get shopperLogin()
    {
        return $("//button[text()='Shopper Login']")
    }
    get shopperUsername()
    {
        return $('#Email')
    }
    get shopperPassword()
    {
        return $('#Password')
    }
    get slogin()
    {
        return $("//span[text()='Login']")
    }
    get createAccount()
    {
        return $("//span[text()='Create Account']")
    }
    get forgotpassword()
    {
        return $("//a[text()='Forgot Password?']")
    }

    // Business Logic
    async EnterCredentials_ShopperLogin(EMAIL, PASSWORD)
    {
        await this.shopperUsername.setValue(EMAIL)
        await this.shopperPassword.setValue(PASSWORD)
        await this.slogin.click()
    }
    async click_createAccount()
    {
        await this.createAccount.click()
    }
    async click_forgotPassword()
    {
        await this.forgotpassword.click()
    }
}

export default new LoginPage()