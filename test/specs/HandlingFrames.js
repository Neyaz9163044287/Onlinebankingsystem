import { expect } from "chai";

describe('Suite01', ()=>{
    it('Handling Frames', async ()=>{
        await browser.maximizeWindow()
        await browser.navigateTo("https://ui.vision/demo/webtest/frames/")
        
    })
})