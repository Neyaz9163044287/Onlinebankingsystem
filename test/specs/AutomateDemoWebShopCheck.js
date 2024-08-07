describe('Build01', () =>{
    it('Check', async () =>{
        await browser.navigateTo("https://demowebshop.tricentis.com/")

    // isDisplayed 
        let logo = await browser.$("//img[@alt='Tricentis Demo Web Shop']")
        if (logo.isDisplayed) 
        {
            console.log("***************Logo is displayed*****************");
        }
        else
        {
            console.log("***************Logo not displayed*****************");
        }

    // isEnabled    
        let enabled = await browser.$("#small-searchterms")
        if(enabled.isEnabled)
        {
            console.log("************Search text field is enabled*************");
        }
        else
        {
            console.log("************Search text field is NOT enabled*************");
        }

    // isSelected
        let radio = await browser.$("#pollanswers-2")
        if(radio.isSelected)
        {
            console.log("************Selected*************");
        }
        else
        {
            console.log("************Not Selected*************");
        }

    })
})