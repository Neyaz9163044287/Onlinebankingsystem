class HomePage
{
    get men()
    {
        return $("#men")
    }
    get women()
    {
        return $("#women")
    }
    get kids()
    {
        return $("#kids")
    }
    get electronics()
    {
        return $("#electronics")
    }
    get beautyproducts()
    {
        return $("#beautyProducts")
    }
    get login()
    {
        return $('#loginBtn')
    }

    //Business Logic
    async click_menTab()
    {
        await this.men.click()
    }
    async click_womenTab()
    {
        await this.women.click()
    }
    async click_kidsTab()
    {
        await this.kids.click()
    }
    async click_electronicsTab()
    {
        await this.electronics.click()
    }
    async click_beautyproducts()
    {
        await this.beautyproducts.click()
    }
    async click_loginBtn()
    {
        await this.login.click()
    }
}

export default new HomePage()