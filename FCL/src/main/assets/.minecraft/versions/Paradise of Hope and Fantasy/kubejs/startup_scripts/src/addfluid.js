StartupEvents.registry("fluid",e=>{


    e.create("cab:shinystone_fluid").luminosity(15).displayName("荧石激发溶液").bucketColor(0xFFD700)
    .stillTexture('cab:fluid/led_still')
    .flowingTexture('cab:fluid/led_flow')

    e.create("cab:redstone_fluid").luminosity(15).displayName("红石稳定溶液").bucketColor(0xB22222)
    .stillTexture('cab:fluid/red_still')
    .flowingTexture('cab:fluid/red_flow')

    //细沙桶
    e.create('cab:blood').displayName(`鲜血`).stillTexture('cab:fluid/blood_stay').flowingTexture('cab:fluid/blood_flowing').bucketColor(0xCD2626)//textureStill('cab:fluid/fine_sand_still').
    e.create('cab:fine_sand').displayName(`细沙`).stillTexture('cab:fluid/fine_sand_still').flowingTexture('cab:fluid/fine_sand_flow').bucketColor(0xE3DBB0)


    //blood_flowing
    e.create("cab:apple_milk_tea_fluid").displayName("苹果奶茶")
    .stillTexture('cab:fluid/apple_milk_tea_still')
    .flowingTexture('cab:fluid/apple_milk_tea_flow')
    .bucketColor(0xEEBE22)


    e.create("cab:pineapple_milk_tea_fluid").displayName("菠萝奶茶")
    .stillTexture('cab:fluid/pineapple_milk_tea_still')
    .flowingTexture('cab:fluid/pineapple_milk_tea_flow')
    .bucketColor(0xEFE349)

    e.create("cab:coffee_milk_tea_fluid").displayName("冰镇咖啡")
    .stillTexture('cab:fluid/ice_milk_tea_still')
    .flowingTexture('cab:fluid/ice_milk_tea_flow')
    .bucketColor(0x584402)

    e.create("cab:coconut_coffee_milk_tea_fluid").displayName("冰镇椰香巧克力雪顶咖啡")
    .stillTexture('cab:fluid/coconut_ice_milk_tea_still')
    .flowingTexture('cab:fluid/coconut_ice_milk_tea_flow')
    .bucketColor(0x756122)
})