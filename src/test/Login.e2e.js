const { expect, browser, $ } = require('@wdio/globals')

describe('My Login application', () => {

    it('should login with valid credentials', async () => {
        await browser.url(`http://localhost:3000/#/login`)

        //sleep 3 seconds
        await new Promise(r => setTimeout(r, 3000));

        await $('input[name="email"]').setValue('admin@test.com')
        await $('input[name="password"]').setValue('password123')

        //sleep 3 seconds
        await new Promise(r => setTimeout(r, 3000));

        await $('button').click()

        //sleep 6 seconds
        await new Promise(r => setTimeout(r, 6000));

        const element = await $('.card-title')
        await expect(element).toHaveText('Projects')
    })

})