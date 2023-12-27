class ApplyDebitCard
{
    get accName()
    {
        return $("[name='holder_name']")
    }
    get Dob()
    {
        return $("//input[@placeholder='Date of Birth']")
    }
    get Pan()
    {
        return $("[name='pan']")
    }
    get Mob()
    {
        return $("[name='mob']")
    }
    get accNO()
    {
        return $("[name='acc_no']")
    }
    get Submit()
    {
        return $("//input[@type='submit']")
    }

    // Business Logic
    async EnterCredentials(ACCNAME, DOB, PAN, MOB, ACCNO)
    {
        await this.accName.setValue(ACCNAME)
        await this.Dob.setValue(DOB)
        await this.Pan.setValue(PAN)
        await this.Mob.setValue(MOB)
        await this.accNO.setValue(ACCNO)
        await browser.pause(4000)
        await this.Submit.click()
    }
}

export default new ApplyDebitCard()