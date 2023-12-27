class Customer_Confirm
{
    get confirm()
    {
        return $("//input[@type='submit']")
    }
    get goback()
    {
        return $("//input[@type='button']")
    }

    // Business Logic
    async click_Confirm_Btn()
    {
        await this.confirm.scrollIntoView()
        await this.confirm.click()
    }
    async click_goback_Btn()
    {
        await this.goback.scrollIntoView()
        await this.goback.click()
    }
}

export default new Customer_Confirm()