class HomePage
{
    get OpenAccount()
    {
        return $("//li[contains(text(),'Open Account')]")
    }
    get ApplyForDBCard()
    {
        return $("//li[contains(text(),'Apply Debit Card')]")
    }
    get InternetBanking()
    {
        return $("//a[contains(text(),'Internet Banking')]")
    }
    get IntLogin()
    {
        return $("//li[contains(text(),'Login ')]")
    }
    get IntRegister()
    {
        return $("//li[contains(text(),'Register')]")
    }
    get FundTransfer()
    {
        return $("//li[contains(text(),'Fund Transfer')]")
    }
    get StaffLogin()
    {
        return $("//a[contains(text(),'Staff Login')]")
    }

    // Business logic
    async click_OpenAccount()
    {
        await this.OpenAccount.click()
    }
    async click_ApplyDBCard()
    {
        await this.ApplyForDBCard.click()
    }
    async move_InternetBanking()
    {
        await this.InternetBanking.scrollIntoView()
        await browser.pause(1000)
        await this.InternetBanking.moveTo()
    }
    async click_InternetLogin()
    {
        await this.IntLogin.click()
    }
    async click_IntRegister()
    {
        await this.IntRegister.click()
    }
    async click_FundTransfer()
    {
        await this.FundTransfer.scrollIntoView()
        await browser.pause(1000)
        await this.FundTransfer.click()
    }
    async click_StaffLogin_btn()
    {
        await this.StaffLogin.click()
    }
}

export default new HomePage()