ItemEvents.tooltip(event =>{
    event.add("diamond","这是一个钻石")//此处数组显示换行
   // event.add("diamond",Text.of("该物品现在属于"+ Client.player.username).red())
    const problem = "由于兼容、冲突、重复、美观等问题,此物品的配方已禁用,这意味着正常情况下不会用到这个物品,它只会出现在JEI内"
    event.add('createmetallurgy:steel_ingot',problem)//此处数组显示换行
    event.add('crockpot:cooked_egg',problem)
    event.add('ashihara:gold_ore_shatter',problem)
    event.add('ashihara:iron_ore_shatter',problem)
    event.add('yuushya:form_trans_item',problem)
    event.add(Item.of('supplementaries:wrench', '{Damage:0}'),problem)
    event.add('ultramarine:bronze_dust',problem)
    event.add('ultramarine:bronze_ingot',problem)

    event.add('ae2:quantum_ring',problem)
    event.add('ae2:quantum_link',problem)
    event.add('ae2:spatial_cell_component_128',problem)
    event.add('ae2:spatial_storage_cell_128',problem)






    const ban_item ="由于恶性bug，此物品已暂时禁用，这可能随着更新而被重新恢复"

    event.add('alexsmobs:capsid',ban_item)
    event.add('minecraft:sticky_piston',ban_item)
    event.add('minecraft:piston',ban_item)
    event.add('minecraft:tripwire_hook',ban_item)
    event.add('minecraft:tripwire_hook',Text.lightPurple("如果需要使用此物品的检测功能，请联系管理员"))
    event.add('ae2:spatial_anchor',ban_item)
    event.add('ae2:matter_cannon',ban_item)
    


    const ban_item2 ="由于此物品会严重破坏游戏性与平衡性，此物品已被禁用"
    event.add('createaddition:creative_energy',ban_item2)
    event.add('create:creative_motor',ban_item2)
    event.add('create:creative_fluid_tank',ban_item2)
    event.add('create:creative_crate',ban_item2)
    event.add('create:creative_blaze_cake',ban_item2)
    event.add('ae2:creative_energy_cell',ban_item2)
    event.add('crockpot:creative_milkmade_hat',ban_item2)

    event.add('ae2:creative_item_cell',ban_item2)
    event.add('ae2:creative_fluid_cell',ban_item2)   

    //event.add('sophisticatedbackpacks:stack_upgrade_starter_tier',ban_item2) 
    //event.add('sophisticatedbackpacks:stack_upgrade_tier_1',ban_item2) 
    event.add('sophisticatedbackpacks:stack_upgrade_tier_2',ban_item2) 
    event.add('sophisticatedbackpacks:stack_upgrade_tier_3',ban_item2) 
    event.add('sophisticatedbackpacks:stack_upgrade_tier_4',ban_item2) 


    event.add('alexsmobs:vine_lasso',ban_item2)
    

    //背包的信息显示
   // event.addAdvanced('sophisticatedbackpacks:copper_backpack',(item,advanced,text) =>{
      //      text.remove(0)
       //     text.add(0,"附加潜影背包")
        
     //   })
   // event.addAdvanced('sophisticatedbackpacks:backpack',(item,advanced,text) =>{
       // text.remove(0)
       // text.add(0,"潜影背包")
    
    //})





    //添加有趣的提示
    event.addAdvanced('create:zinc_ingot',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("这种金属的特殊化学特性使其可以保护大多数它包裹的物品"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:rubber',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("充满弹性的橡皮，不过似乎硬度不够，需要进一步处理"))
            text.add(4,Text.green("或许可以拿来..."))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:steel',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块坚硬的金属，乌黑闪亮的光泽让人想咬上去！"))
            text.add(4,Text.green("叮，咯吱...铮"))

        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:andesite_machine',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一台安山机械装置，它是制作一切安山时代机器的雏形"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:copper_machine',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一台铜质机械装置，它是制作一切需要密封机器的雏形"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:brass_machine',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一台精致的黄铜机械装置，它可以用来制作那些令人欲罢不能的闪亮黄铜机械！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:rubber_block',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块柔软Q弹的白色橡胶块！"))
            text.add(4,Text.green("等等！ 你在干什...."))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:cured_rubber_block',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块结实的黑色橡胶块！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:deep_gravel',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一些黑色的碎石，由深板岩原石粉碎而来，似乎需要进一步处理才能更多的捕获其中的矿物"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:deep_rock_sand',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一些乌黑的细沙，快去筛筛看里面有什么吧！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:algal_brick',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("由海带与粘土的混合物烧制而来，粘土的硬度与海带的纤维使得砖块兼具硬度与韧性，是良好的机械原材料"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:algal_blend',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("粘土与海带被搅拌混合到了一起，你也不知道你为什么要这么做，不过你还需要烧制它才能知道它的作用"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:kinetic_mechanism',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块由安山时代的零部件组成的智慧结晶，可以实现一些简单的结构"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:sealed_mechanism',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块由密封橡胶加固密封的零件，可以实现一些需要流体通过的结构"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:cured_rubber',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一块由白色橡胶烧制而来的坚固橡胶，经过了高温的硫化，它具有了良好的弹性与韧性，适合拿来制作一些需要密封或频繁滚动的部件"))
            text.add(4,Text.green("或许可以拿来..."))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:meitanfen',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("从黑沙中分离而来，是一种天然的燃料"))
            text.add(4,Text.green("抹到脸上可以带来好运！     吗？"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:steel_nuggut',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一小块坚硬的钢粒"))
            text.add(4,Text.green("如果有弹弓可以玩...."))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:wrench',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("结实的专用扳手，可以调节紧固子弹的外壳衔接"))
            text.add(4,Text.green("开啤酒瓶神器！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:steel_plate',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一张结实的钢板，可以拿来制作大部分需要强度的零件与结构"))
            text.add(4,Text.green("黄金板砖X 黑金板砖√"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:lang_ballet_shell',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("由黄铜板压制而成的长形弹壳，可以用来制作火药量需求较大的子弹"))
            text.add(4,Text.green("为什么子弹打出去不能回收弹壳，这不科学！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:sulfur',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一种黄色的粉末，易燃，是一种绝佳的爆炸原料"))
            text.add(4,Text.green("这是金粉吗？"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:bullet_shell',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("由黄铜板压制而成的手枪弹弹壳，可以用来制作大小适中的子弹"))
            text.add(4,Text.green("为什么子弹打出去不能回收弹壳，这不科学！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('twilightforest:charm_of_life_1',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("这种心形糖的特殊结构使其可以在受到任何剧烈攻击时破碎并散发出不死图腾的残缺治疗效果"))
            text.add(4,Text.green("看起来很好吃~但是不可以吃啦"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('twilightforest:charm_of_life_2',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("心形糖果的强效版本，在受到剧烈攻击后还会释放强烈祝福"))
            text.add(4,Text.green("关键时刻的救命稻草~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:mouse_ingot',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("当你拿着这个锭的时候，似乎察觉到了哪里不对？"))
            text.add(4,Text.green("你鼠锭了~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:apple_milk_tea',(item,advanced,text) =>{
        text.add(1,Text.blue("速度 (01:30)"))
        text.add(2,Text.blue("生命提升Ⅱ (01:30)"))
        text.add(3,Text.blue("发光 (01:30)"))
        text.add(4,Text.blue("茶多酚 (01:30)"))
    })

    event.addAdvanced('cab:pineapple_milk_tea',(item,advanced,text) =>{
        text.add(1,Text.blue("力量 (01:30)"))
        text.add(2,Text.blue("滋养 (01:30)"))
        text.add(3,Text.blue("饱食 (01:30)"))
        text.add(4,Text.blue("茶多酚 (01:30)"))
    })

    event.addAdvanced('cab:iced_coffee',(item,advanced,text) =>{
        text.add(1,Text.blue("清醒 (01:00)"))
        text.add(2,Text.blue("夜视 (01:00)"))
        text.add(3,Text.blue("咖啡因 (01:00)"))
    })

    event.addAdvanced('cab:coconut_iced_coffee',(item,advanced,text) =>{
        text.add(1,Text.blue("清醒 (01:00)"))
        text.add(2,Text.blue("夜视 (02:00)"))
        text.add(3,Text.blue("咖啡因 (02:00)"))
        text.add(3,Text.blue("抗性提升 (02:00)"))
        text.add(3,Text.blue("醇厚 (02:00)"))

    })

//3.1version

    event.addAdvanced('cab:chromatic_resonator',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("用曲弘球制作而成的磁铁，可以对许多物质产生奇异的引力"))
            text.add(4,Text.green("虽然有时会把它们撕裂就是了~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:dye_entangled_singularity1',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个神奇的炫彩球体，会随时反转为奇妙的结构"))
            text.add(4,Text.green("引力伴随颜色而悸动。"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:dye_entangled_singularity2',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个神奇的炫彩球体，会随时反转为奇妙的结构"))
            text.add(4,Text.green("引力伴随颜色而悸动。"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:dye_entangled_singularity3',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个神奇的炫彩球体，会随时反转为奇妙的结构"))
            text.add(4,Text.green("引力伴随颜色而悸动。"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:dye_entangled_singularity4',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个神奇的炫彩球体，会随时反转为奇妙的结构"))
            text.add(4,Text.green("引力伴随颜色而悸动。"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:abstruse_mechanism',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个探索奇异空间科学产生的奇妙结晶，特殊的构件结构使其可以随时在亚空间内小幅折跃。"))
            text.add(4,Text.green("它仿佛在那里，又仿佛不在！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:calculation_mechanism',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个探索能量与物质转化的结晶，可以将万物物质化为量子泡沫，神奇的构件结构使其可以反转物质为液态能量"))
            text.add(4,Text.green("它是一团活着的物质！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:radiant_coil',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("光辉石组成的镭射电子管，不时散发着扭曲物质的璀璨光辉"))
            text.add(4,Text.green("这个可以拿来跳舞吗"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:radiant_sheet',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("光辉石压制而成的薄片，虽然压制改变了材料本身的密度，丧失了悬浮能力，但镀板散发的扭曲射线变得格外炽热"))
            text.add(4,Text.green("璀璨的闪光薄板~~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:shadow_sheet',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("暗影钢多次锤炼后的产物，超高的硬度使其极难破坏，是制作这个世界上最坚硬结构的绝佳材料"))
            text.add(4,Text.green("散发着魔法光芒的乌黑金属板"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })
    event.addAdvanced('cab:enderium_machine',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一台可以借助能量扭曲空间的设备，是空间科学的终极结晶，维度的奥秘浓缩于此！"))
            text.add(4,Text.green("#￥%@16，16，16.。。16"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:material_block',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一台可以借助量子泡沫能量化物质的设备，是物质科学的终极结晶，能量与物质的奥秘浓缩于此！"))
            text.add(4,Text.green("#￥%@16，16，16.。。16"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('kubejs:invar_casing',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("这是一种由光辉镀板构成的机壳，是稳定能量化物质并利用射线将其隔离的绝佳选择，可以用来阱能量化的物质，但是却容易破碎"))
            text.add(4,Text.green("轻盈而不耐用#"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('kubejs:enderium_casing',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("由世界上最坚硬的物质构成的机壳，可以抵挡维度折叠产生的巨大撕扯，可以用来构建维度折跃的外围架构"))
            text.add(4,Text.green("坚硬而咯牙（"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    const part_ans = "这是一些拆解枪械后得到的零件盒，他们可以用来构建更高一级的枪械，但要注意：安全拆解（只能清空弹夹才可以被拆解）"
    const part_2 = "安全拆解，从我做起~"

	const inputs_2_123 = [
         ['tacz_rebuild:part_box_item',part_ans,part_2],
         ['tacz_rebuild:part_box_item_b',part_ans,part_2],
         ['tacz_rebuild:part_box_item_c',part_ans,part_2],
         ['tacz_rebuild:part_box_item_j',part_ans,part_2],
         ['tacz_rebuild:part_box_item_x',part_ans,part_2],
         ['tacz_rebuild:part_box_item_s',part_ans,part_2],
         ['tacz_rebuild:part_box_item_ex',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_b',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_c',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_j',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_x',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_s',part_ans,part_2],
         ['tacz_rebuild:part_box_item_tungsten_ex',part_ans,part_2],

	];
	
	// 轮询输入并调用函数
	function process_load_tag_item(inputsArray) {
	    for (const [item_in, note,note2] of inputsArray) {
            event.addAdvanced(item_in,(item,advanced,text) =>{
                if (event.shift){
                    text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
                    text.add(2,"提示：")
                    text.add(3,Text.blue(note))
                    text.add(4,Text.green(note2))
                }
                else{
                    text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
                }
            })
	    }
	}
	
	// 调用函数
	process_load_tag_item(inputs_2_123);



    event.addAdvanced('create:chromatic_compound',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("奇特的量子球组成的奇异触媒，似乎会对不同的环境产生不同的反应"))
            text.add(4,Text.green("~~~~~~~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('tacz_rebuild:shadow_nugget',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("世界上最坚硬的物质和最耐高温的物质形成的爆炸混合物，兼具极致耐热性与硬度，可以贯穿世界上最坚硬的护甲"))
            text.add(4,Text.green("一旦拆开就再也无法放到一起~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:purified_sand',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("熔岩的注入，使得沙球发生了结晶化，析出了一些晶体结构"))
            text.add(4,Text.green("这样处理有什么用吗"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('create:refined_radiance',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("吸收饱和的光能量后的体现，随着量子而波动"))
            text.add(4,Text.green("它是活的~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('create:shadow_steel',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("受到极致压力后的体现，是世界上最坚硬的物质，但似乎会%￥#被它处理的物品，因此无法用于制作工具"))
            text.add(4,Text.green("会有人拿来做武器吗？"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:empty_boba_cup',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个空的奶茶杯，你看了看杯子，杯子映射出你的面庞，也看了看你~"))
            text.add(4,Text.green("快到杯子里来！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:boba_cup',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("一个装入珍珠奶茶杯，你看了看杯子，杯子透过珍珠映射出你的面庞，你也不知道为什么要看杯子"))
            text.add(4,Text.green("关键时刻可以充饥"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:yezi',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("与其说是椰子，不如说是机械工业的产物，这些材料混合在一起，却产生了椰子的香味，可以用来制作甜品"))
            text.add(4,Text.green("椰子是什么？"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('mobaicore:copper_zinc',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("炼金锅内的大块结晶，包含着你投进去的两种金属，似乎需要更高的温度来处理"))
            text.add(4,Text.green("凹凸不平的混合金属块"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:nether_quartz_dust',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("下界石英磨制而成的粉末，易于塑性，并且独特的材料结构使其可以用于注模，但无法再次利用"))
            text.add(4,Text.green("一吹就散~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:sand_ball',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("将水与沙子混合形成的球体"))
            text.add(4,Text.green("我也不知道为什么要这样做，可能比较好处理~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('mobaicore:stone_shatter',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("你会在处理石制品时产出大量的碎石，可以组成沙砾"))
            text.add(4,Text.green("产出废料~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:silicon_compound',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("经过了超高温的处理，结晶表面析出了一些流动的黑色物质，冷却后凝固在结晶表面，但他们仍与结晶完美结合在一起，无法分离，稍有不慎就会爆开"))
            text.add(4,Text.green("小小的沙球，蕴含大大的潜力~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:rough_sand',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("粗沙过滤后得到的坚硬固体，需要进一步粉碎处理"))
            text.add(4,Text.green("咯脚的就是它！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:steel_wire',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("坚硬钢板轧制出的钢丝，兼具弹性与硬度，可以包裹设备的外壳，也可以用来供给小型物品"))
            text.add(4,Text.green("好玩~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:forged_beam',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("暗影钢板组合成的钢梁，兼具硬度与神奇的特性"))
            text.add(4,Text.green("把他插到地上可能会陷进地里。"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:blizz_rod',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("冰块被霜寒魔法处理后的结晶，蕴含极致的暴雪与寒冰之力，但结构紧密，不易触发反应"))
            text.add(4,Text.green("切勿手碰！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:blizz_powder',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("蕴含寒霜之力的粉末，蕴含着极度低温，但作用效果太强，非常不稳定，极易爆炸"))
            text.add(4,Text.green("蓝色的粉末！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })



    event.addAdvanced('cab:ice_charge',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("经过稳定和稀释后的寒霜粉末球体，易于反应并且性格温和"))
            text.add(4,Text.green("蓝色的粘土！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:silicon_compound_progress',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("神奇的反应效果，低温完美的剥离了混合物中的黑色成分，并且保证了结构的完整性"))
            text.add(4,Text.green("奇妙的反应！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })

    event.addAdvanced('cab:raw_boba',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("生的木薯珍珠，有毒，吃了可能会坏肚子"))
            text.add(4,Text.green("有毒，禁止食用！"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    event.addAdvanced('cab:boba',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("煮熟的木薯珍珠，软糯晶莹透亮的通体结构，Q弹饱满的外形，是甜品搭配的MC美味！"))
            text.add(4,Text.green("一口一个！捏捏~"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })



    event.addAdvanced('cab:end_mixbean',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("切碎紫颂果得到的Q弹果粒"))
            text.add(4,Text.green("（吃吃吃~）"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }
    })


    

})