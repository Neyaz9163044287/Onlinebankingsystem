class MyAccount
{
    get profilePic()
    {
        return $("//img[@class='custmr_img']")
    }
    get home()
    {
        return $("//input[@value='Home']")
    }
    get logOut()
    {
        return $("//input[@value='Logout']")
    }
    get myAccount()
    {
        return $("//li[contains(text(),'My Account')]")
    }
    get myProfile()
    {
        return $("//li[contains(text(),'My Profile')]")
    }
    get changePassword()
    {
        return $("//li[contains(text(),'Change Password')]")
    }
    get fundTransfer()
    {
        return $("//li[contains(text(),'Fund Transfer')]")
    }
    get statement()
    {
        return $("//li[contains(text(),'Statement')]")
    }

    //Business Logic
    async click_profilePic()
    {
        await this.profilePic.click()
    }
    async click_Home_btn()
    {
        await this.home.click()
    }
    async click_logOut_btn()
    {
        await this.logOut.click()
    }
    async click_MyAccount_tab()
    {
        await this.myAccount.click()
    }
    async click_MyProfile_tab()
    {
        await this.myProfile.click()
    }
    async click_ChangePassword_tab()
    {
        await this.changePassword.click()
    }
    async click_FundTransfer_tab()
    {
        await this.fundTransfer.click()
    }
    async click_Statement_tab()
    {
        await this.statement.click()
    }
}

export default new MyAccount()