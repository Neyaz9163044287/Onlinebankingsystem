class IntLoginPage
{
    get cusID()
    {
        return $("[name='customer_id']")
    }
    get pwd()
    {
        return $("[name='password']")
    }
    get loginBtn()
    {
        return $("[name='login-btn']")
    }

    // Business Logic
    async EnterDetails_InternetLogin(CustomerID, Password)
    {
        await this.cusID.setValue(CustomerID)
        await this.pwd.setValue(Password)
        await this.loginBtn.click()
    }
}

export default new IntLoginPage()