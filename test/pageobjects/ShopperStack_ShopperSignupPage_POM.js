class ShopperSignUpPage
{
    get firstName()
    {
        return $('#First Name')
    }
    get lastName()
    {
        return $('#Last Name')
    }
    get female()
    {
        return $('#Female')
    }
    get male()
    {
        return $('#Male')
    }
    get other()
    {
        return $('#Other')
    }
    get phoneNumber()
    {
        return $('#Phone Number')
    }
    get email()
    {
        return $('#Email Address')
    }
    get password()
    {
        return $('#Password')
    }
    get cnfpassword()
    {
        return $('#Confirm Password')
    }
    get checkbox()
    {
        return $('#Terms and Conditions')
    }
    get register()
    {
        return $('#Register')
    }

    // Business Logic
    async EnterShopperDetailsWithGenderAs_MALE(FIRSTNAME, LASTNAME, MOB, EMAIL, PASSWORD, CONFIRMPASSWORD)
    {
        await this.firstName.setValue(FIRSTNAME)
        await this.lastName.setValue(LASTNAME)
        await this.male.click()
        await this.phoneNumber.setValue(MOB)
        await this.email.setValue(EMAIL)
        await this.password.setValue(PASSWORD)
        await this.cnfpassword.setValue(CONFIRMPASSWORD)
        await this.checkbox.click()
        await this.register.click()
    }
    async EnterShopperDetailsWithGenderAs_FEMALE(FIRSTNAME, LASTNAME, MOB, EMAIL, PASSWORD, CONFIRMPASSWORD)
    {
        await this.firstName.setValue(FIRSTNAME)
        await this.lastName.setValue(LASTNAME)
        await this.female.click()
        await this.phoneNumber.setValue(MOB)
        await this.email.setValue(EMAIL)
        await this.password.setValue(PASSWORD)
        await this.cnfpassword.setValue(CONFIRMPASSWORD)
        await this.checkbox.click()
        await this.register.click()
    }
    async EnterShopperDetailsWithGenderAs_OTHER(FIRSTNAME, LASTNAME, MOB, EMAIL, PASSWORD, CONFIRMPASSWORD)
    {
        await this.firstName.setValue(FIRSTNAME)
        await this.lastName.setValue(LASTNAME)
        await this.other.click()
        await this.phoneNumber.setValue(MOB)
        await this.email.setValue(EMAIL)
        await this.password.setValue(PASSWORD)
        await this.cnfpassword.setValue(CONFIRMPASSWORD)
        await this.checkbox.click()
        await this.register.click()
    }

}