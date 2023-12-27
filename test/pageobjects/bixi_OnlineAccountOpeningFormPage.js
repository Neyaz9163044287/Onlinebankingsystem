class OpenAccount
{
    get Name()
    {
        return $("[name='name']")
    }
    get Gender()
    {
        return $("[name='gender']")
    }
    get Mob()
    {
        return $("[name='mobile']")
    }
    get Email()
    {
        return $("[name='email']")
    }
    get LandLine()
    {
        return $("[name='landline']")
    }
    get Dob()
    {
        return $("[name='dob']")
    }
    get Pan()
    {
        return $("[name='pan_no']")
    }
    get Citizenship()
    {
        return $("[name='citizenship']")
    }
    get HomeAddress()
    {
        return $("[name='homeaddrs']")
    }
    get OfficeAddress()
    {
        return $("[name='officeaddrs']")
    }
    get State()
    {
        return $("[name='state']")
    }
    get City()
    {
        return $("[name='city']")
    }
    get Pin()
    {
        return $("[name='pin']")
    }
    get Area()
    {
        return $("[name='arealoc']")
    }
    get NomineeName()
    {
        return $("[name='nominee_name']")
    }
    get NomineeAccNo()
    {
        return $("[name='nominee_ac_no']")
    }
    get AccType()
    {
        return $("[name='acctype']")
    }
    get Submit()
    {
        return $("[name='submit']")
    }

    // Business Logic
    async select_Dropdown(GENDER,STATE,CITY,ACCOUNTTYPE)
    {
        await this.Gender.selectByVisibleText(GENDER)
        await this.State.selectByVisibleText(STATE)
        await this.City.selectByVisibleText(CITY)
        await this.AccType.selectByVisibleText(ACCOUNTTYPE)
        await this.Submit.click()
    }

    async EnterDetails(NAME,MOB,EMAIL,LANDLINE,DOB,PAN,CITIZENNO,HOMEADDRESS,OFFICEADDRESS,PIN,AREA,NOMINEENAME,NOMINEEACCNO)
    {
        await this.Name.setValue(NAME)
        await this.Mob.setValue(MOB)
        await this.Email.setValue(EMAIL)
        await this.LandLine.setValue(LANDLINE)
        await this.Dob.setValue(DOB)
        await this.Pan.setValue(PAN)
        await this.Citizenship.setValue(CITIZENNO)
        await this.HomeAddress.setValue(HOMEADDRESS)
        await this.OfficeAddress.setValue(OFFICEADDRESS)
        await this.Pin.setValue(PIN)
        await this.Area.setValue(AREA)
        await this.NomineeName.setValue(NOMINEENAME)
        await this.NomineeAccNo.setValue(NOMINEEACCNO)
    }
}

export default new OpenAccount()