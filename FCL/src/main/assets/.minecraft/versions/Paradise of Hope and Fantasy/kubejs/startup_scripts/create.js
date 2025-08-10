StartupEvents.registry("item",event =>{
    //定义物品和翻译必须要重启游戏

    //普通子弹物品定义
    event.create('cab:bullet_shell_uncomplete',"create:sequenced_assembly")

    event.create('cab:bullet_uncomplete',"create:sequenced_assembly")

    event.create("cab:bullet_shell",'basic')

    //定义硫磺物品
    event.create("cab:sulfur",'basic')


    //定义扳手
    event.create("cab:wrench",'sword').maxDamage(300)

    //定义长弹壳
    event.create("cab:lang_ballet_shell",'basic')

    event.create('cab:lang_ballet_uncomplete',"create:sequenced_assembly")

    event.create('cab:lang_ballet_shell_uncomplete',"create:sequenced_assembly")


    //定义钢锭
    event.create("cab:steel",'basic')
    event.create("cab:steel_plate_uncomplete",'create:sequenced_assembly')
    event.create("cab:steel_plate",'basic')
    event.create("cab:steel_nuggut",'basic')
    event.create('cab:steel_uncomplete',"create:sequenced_assembly")
    //定义煤炭粉
    event.create("cab:meitanfen",'basic')


    //定义create的几个构件
    event.create("cab:rubber",'basic')//橡胶
    event.create("cab:cured_rubber",'basic')//固化橡胶

    event.create("cab:incomplete_kinetic_mechanism",'create:sequenced_assembly')//动力构件 过程
    event.create("cab:incomplete_sealed_mechanism",'create:sequenced_assembly')//精密/密封构件 过程

    event.create("cab:sealed_mechanism",'basic') //密封构件
    event.create("cab:kinetic_mechanism",'basic') //动力构件
    

    //定义海藻球和海藻砖
    event.create("cab:algal_blend",'basic')
    event.create("cab:algal_brick",'basic')

    //定义炫彩奇点和感应磁铁
    event.create("cab:chromatic_resonator","pickaxe").maxDamage(400).displayName('感应磁铁')
    event.create("cab:dye_entangled_singularity1","basic").displayName('曲弘球α')
    event.create("cab:dye_entangled_singularity2","basic").displayName('曲弘球β')
    event.create("cab:dye_entangled_singularity3","basic").displayName('曲弘球γ')
    event.create("cab:dye_entangled_singularity4","basic").displayName('曲弘球δ')



    //定义几个构件
    event.create('cab:incomplete_abstruse_mechanism',"create:sequenced_assembly").displayName('未完成的空间构件')
    event.create("cab:abstruse_mechanism",'basic').displayName('空间构件').glow(true)

    event.create('cab:incomplete_calculation_mechanism',"create:sequenced_assembly").displayName('未完成的物质构件')
    event.create("cab:calculation_mechanism",'basic').displayName('物质构件').glow(true)

    event.create('cab:incomplete_inductive_mechanism',"create:sequenced_assembly").displayName('未完成的锌制构件')
    event.create("cab:inductive_mechanism",'basic').displayName('锌制构件')


    event.create("cab:radiant_coil",'basic').displayName('辐射电子管').glow(true)
    event.create("cab:radiant_sheet",'basic').displayName('光辉镀板').glow(true)
    event.create("cab:shadow_sheet",'basic').displayName('暗影钢板').glow(true)
    event.create("cab:shadow_sheet_a",'basic').displayName('暗影钢板雏形').glow(true)

    //定义末影珍珠产生物品
    
    event.create("cab:end_mixbean","basic").displayName('软糯紫颂珍珠')
    .food(foodBuilder=>{
        foodBuilder.hunger(2)
        foodBuilder.saturation(0.2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.fastToEat()
        foodBuilder.effect("minecraft:speed",20*5,9,0.2)
    })
    //补充下界石英粉配方
    event.create("cab:nether_quartz_dust","basic").displayName('下界石英粉')

    event.create("cab:engineering_processor_press",'basic').displayName('工程压印模板的注模').glow(true)
    event.create("cab:logic_processor_press",'basic').displayName('逻辑压印模板的注模').glow(true)
    event.create("cab:calculation_processor_press",'basic').displayName('运算压印模板的注模').glow(true)


    event.create("cab:sand_ball",'basic').displayName('沙球')
    event.create("cab:purified_sand",'basic').displayName('纯净沙结晶')
    event.create("cab:silicon_compound",'basic').displayName('含硅化合物')
    event.create("cab:rough_sand",'basic').displayName('沙子碎块')
    //补充处理器的几个中间产物
    event.create("cab:printed_calculation_processor_progress_uncomplete",'create:sequenced_assembly').displayName('装配中的运算电路板')
    event.create("cab:printed_engineering_processor_progress_uncomplete",'create:sequenced_assembly').displayName('装配中的工程电路板')
    event.create("cab:printed_logic_processor_progress_uncomplete",'create:sequenced_assembly').displayName('装配中的逻辑电路板')
    
    event.create("cab:calculation_processor_progress",'create:sequenced_assembly').displayName('装配中的运算处理器')
    event.create("cab:engineering_processor_progress",'create:sequenced_assembly').displayName('装配中的工程处理器')
    event.create("cab:logic_processor_progress",'create:sequenced_assembly').displayName('装配中的逻辑处理器')
    


    //定义暗影钢的梁结构
    event.create("cab:forged_beam",'basic').displayName('暗影钢梁').glow(true)



    //定义几个与寒冰有关的物品
    event.create("cab:blizz_rod",'basic').displayName('暴雪立方体').glow(true)
    event.create("cab:blizz_powder",'basic').displayName('寒霜粉末').glow(true)
    event.create("cab:ice_charge",'basic').displayName('稳定降温粘土')
    event.create("cab:silicon_compound_progress",'basic').displayName('速冻的开裂含硅化合物').glow(true)
    event.create("cab:silicon_compound_progress_part",'create:sequenced_assembly').displayName('部分外壳剥离的含硅化合物').glow(true)

    //定义碎煤块
    event.create("cab:coke_chunk",'basic').displayName('焦炭碎块')
    event.create("cab:mouse_ingot",'basic').displayName('鼠锭')
    event.create("cab:ingot",'basic').displayName('黄金锭注模')
    event.create("cab:blank",'basic').displayName('黄金注模')

    //定义碎石块
    event.create("mobaicore:stone_shatter",'basic').displayName('碎石块')
    
    event.create("mobaicore:copper_zinc",'basic').displayName('铜锌合金混合物')



    //定义巧克力替代
    event.create("mobaicore:full_chocolate_bar",'basic').displayName('巧克力板').maxStackSize(16)
        .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give('minecraft:paper')
            }
        })
    })
    event.create("mobaicore:full_black_chocolate_bar",'basic').displayName('黑巧克力板').maxStackSize(16)
            .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("create_confectionery:stimulation",20*90,0,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give('minecraft:paper')
            }
        })
    })
    event.create("mobaicore:full_white_chocolate_bar",'basic').displayName('白巧克力板').maxStackSize(16)
            .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("create_confectionery:rest",20*90,0,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give('minecraft:paper')
            }
        })
    })
    event.create("mobaicore:full_ruby_chocolate_bar",'basic').displayName('红宝石巧克力板').maxStackSize(16)
        .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:saturation",20*90,0,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give('minecraft:paper')
            }
        })
    })






    //定义多个与咖啡相关的物品
    event.create("cab:apple_milk_tea",'basic').displayName('~沁人苹果奶茶~').maxStackSize(16)
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(1.5) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:speed",20*90,0,1)
        foodBuilder.effect("minecraft:health_boost",20*90,1,1)
        foodBuilder.effect("minecraft:glowing",20*90,1,1)
        foodBuilder.effect("youkaishomecoming:tea_polyphenols",20*90,1,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give("cab:empty_boba_cup")
            }
        })
    })

    event.create("cab:pineapple_milk_tea",'basic').displayName('~甜蜜菠萝奶茶~').maxStackSize(16)
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(1.5) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:strength",20*90,0,1)
        foodBuilder.effect("farmersdelight:nourishment",20*90,0,1)
        foodBuilder.effect("crockpot:well_fed",20*90,0,1)
        foodBuilder.effect("youkaishomecoming:tea_polyphenols",20*90,1,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give("cab:empty_boba_cup")
            }
        })
    })

    event.create("cab:iced_coffee",'basic').displayName('~醇厚冰咖啡~').maxStackSize(16)
    .food(foodBuilder=>{
        foodBuilder.hunger(1)
        foodBuilder.saturation(1) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("youkaishomecoming:caffeinated",20*60,0,1)
        foodBuilder.effect("youkaishomecoming:sober",20*60,0,1)
        foodBuilder.effect("minecraft:night_vision",20*60,1,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give("cab:empty_boba_cup")
            }
        })
        
    })

    event.create("cab:coconut_iced_coffee","basic").displayName('~椰香巧克力雪顶冰咖啡~').maxStackSize(16)
    .food(foodBuilder=>{
        foodBuilder.hunger(1)
        foodBuilder.saturation(1.2) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.effect("youkaishomecoming:caffeinated",20*120,0,1)
        foodBuilder.effect("youkaishomecoming:sober",20*60,0,1)
        foodBuilder.effect("minecraft:resistance",20*120,1,1)
        foodBuilder.effect("minecraft:night_vision",20*120,1,1)
        foodBuilder.effect("youkaishomecoming:thick",20*120,1,1)
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give("cab:empty_boba_cup")
            }
        })

    })
    event.create("cab:raw_boba",'basic').displayName('生木薯珍珠')
    .food(foodBuilder=>{
        foodBuilder.hunger(1)
        foodBuilder.alwaysEdible()
        foodBuilder.effect("minecraft:poison",20*10,1,1)
    })
    event.create("cab:boba",'basic').displayName('~软糯熟木薯珍珠~')
    .food(foodBuilder=>{
        foodBuilder.hunger(1)
        foodBuilder.alwaysEdible()
    })
    event.create("cab:empty_boba_cup",'basic').displayName('空奶茶杯')
    event.create("cab:boba_cup",'basic').displayName('珍珠奶茶杯')
    .food(foodBuilder=>{
        foodBuilder.hunger(4)
        foodBuilder.saturation(1) //0.2*10
        foodBuilder.alwaysEdible()
        foodBuilder.eaten(foodEaten=>{
            /**
             * @type {$Player}
             */
            let player = foodEaten.getPlayer()
            if (player != null){
                player.give("cab:empty_boba_cup")
            }
        })
    })
    event.create("cab:yezi",'basic').displayName('人造椰子')
    .food(foodBuilder=>{
        foodBuilder.hunger(2)
        foodBuilder.saturation(1) //0.2*10
        foodBuilder.alwaysEdible()
    })


    //枪械零件部分
    event.create('tacz_rebuild:part_box_item').parentModel('tacz_rebuild:block/part_box').displayName('T1手枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_b').parentModel('tacz_rebuild:block/part_box').displayName('T1步枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_c').parentModel('tacz_rebuild:block/part_box').displayName('T1冲锋枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_j').parentModel('tacz_rebuild:block/part_box').displayName('T1狙击枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_x').parentModel('tacz_rebuild:block/part_box').displayName('T1霰弹枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_s').parentModel('tacz_rebuild:block/part_box').displayName('T1机枪零件拆解盒')
    event.create('tacz_rebuild:part_box_item_ex').parentModel('tacz_rebuild:block/part_box').displayName('T1重型武器零件拆解盒')

    event.create('tacz_rebuild:part_box_item_tungsten').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2手枪钨钢零件拆解盒')
    event.create('tacz_rebuild:part_box_item_tungsten_b').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2步枪钨钢零件拆解盒').glow(true)
    event.create('tacz_rebuild:part_box_item_tungsten_c').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2冲锋枪钨钢零件拆解盒').glow(true)
    event.create('tacz_rebuild:part_box_item_tungsten_j').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2狙击枪钨钢零件拆解盒').glow(true)
    event.create('tacz_rebuild:part_box_item_tungsten_x').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2霰弹枪钨钢零件拆解盒').glow(true)
    event.create('tacz_rebuild:part_box_item_tungsten_s').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2机枪钨钢零件拆解盒').glow(true)
    event.create('tacz_rebuild:part_box_item_tungsten_ex').parentModel('tacz_rebuild:block/part_box_tungsten').displayName('T2重型武器钨钢零件拆解盒').glow(true)



    event.create('tacz_rebuild:steel_bounce').parentModel('tacz_rebuild:block/steel_bounce').displayName('锻钢弹簧')
    event.create('tacz_rebuild:steel_barrel').parentModel('tacz_rebuild:block/steel_barrel').displayName('锻钢枪管')
    event.create('tacz_rebuild:steel_barrel_long').parentModel('tacz_rebuild:block/steel_barrel_long').displayName('锻钢长枪管')
    event.create('tacz_rebuild:steel_barrel_magazine').parentModel('tacz_rebuild:block/steel_barrel_magazine').displayName('锻钢弹舱')
    event.create('tacz_rebuild:steel_barrel_outside').parentModel('tacz_rebuild:block/steel_barrel_outside').displayName('锻钢枪膛衬套')
    event.create('tacz_rebuild:steel_barrel_stabilizator').parentModel('tacz_rebuild:block/steel_barrel_stabilizator').displayName('锻钢支架')
    event.create('tacz_rebuild:steel_barrel_trestle').parentModel('tacz_rebuild:block/steel_barrel_trestle').displayName('锻钢重型武器稳定支架')
    event.create('tacz_rebuild:steel_cassette').parentModel('tacz_rebuild:block/steel_cassette').displayName('锻钢弹夹')
    event.create('tacz_rebuild:steel_cassette_big').parentModel('tacz_rebuild:block/steel_cassette_big').displayName('锻钢宽弹夹')
    event.create('tacz_rebuild:steel_spring').parentModel('tacz_rebuild:block/steel_spring').displayName('锻钢弹夹弹簧')
    event.create('tacz_rebuild:steel_trigger').parentModel('tacz_rebuild:block/steel_trigger').displayName('钢扳机')
    event.create('tacz_rebuild:tungsten_fring_pin').parentModel('tacz_rebuild:block/tungsten_fring_pin').displayName('锻钢激发撞针')
    event.create('tacz_rebuild:tungsten_re-entry_pin').parentModel('tacz_rebuild:block/tungsten_re-entry_pin').displayName('锻钢复位摆')
    event.create('tacz_rebuild:steel_barrel_long_awm').parentModel('tacz_rebuild:block/steel_barrel_long_awm').displayName('锻钢狙击稳定枪管')

    event.create('tacz_rebuild:steel_back').parentModel('tacz_rebuild:block/steel_back').displayName('锻钢枪托')
    event.create('tacz_rebuild:steel_barrel_collimation').parentModel('tacz_rebuild:block/steel_barrel_collimation').displayName('锻钢瞄准辅助件')
    event.create('tacz_rebuild:steel_puller').parentModel('tacz_rebuild:block/steel_puller').displayName('锻钢长弹舱抛壳器')
    event.create('tacz_rebuild:steel_heavy_stabilizator').parentModel('tacz_rebuild:block/steel_heavy_stabilizator').displayName('锻钢重型机枪平衡摆')
    event.create('tacz_rebuild:steel_outer').parentModel('tacz_rebuild:block/steel_outer').displayName('锻钢固定外壳')
    event.create('tacz_rebuild:steel_pistol').parentModel('tacz_rebuild:block/steel_pistol').displayName('锻钢枪把手')
    event.create('tacz_rebuild:steel_protect').parentModel('tacz_rebuild:block/steel_protect').displayName('锻钢散热外套')
    event.create('tacz_rebuild:steel_protect_easy').parentModel('tacz_rebuild:block/steel_protect_easy').displayName('简易锻钢枪托')
    event.create('tacz_rebuild:steel_protect_supporter').parentModel('tacz_rebuild:block/steel_protect_supporter').displayName('锻钢枪托支架')
    event.create('tacz_rebuild:steel_protect_tragger').parentModel('tacz_rebuild:block/steel_protect_tragger').displayName('锻钢弹舱抛壳器')
    event.create('tacz_rebuild:steel_protect_weight').parentModel('tacz_rebuild:block/steel_protect_weight').displayName('锻钢稳定配重')



    event.create('tacz_rebuild:steel_bounce_tungsten').parentModel('tacz_rebuild:block/steel_bounce_tungsten').displayName('钨钢弹簧').glow(true)
    event.create('tacz_rebuild:steel_barrel_tungsten').parentModel('tacz_rebuild:block/steel_barrel_tungsten').displayName('钨钢枪管').glow(true)
    event.create('tacz_rebuild:steel_barrel_long_tungsten').parentModel('tacz_rebuild:block/steel_barrel_long_tungsten').displayName('钨钢长枪管').glow(true)
    event.create('tacz_rebuild:steel_barrel_magazine_tungsten').parentModel('tacz_rebuild:block/steel_barrel_magazine_tungsten').displayName('钨钢弹舱').glow(true)
    event.create('tacz_rebuild:steel_barrel_outside_tungsten').parentModel('tacz_rebuild:block/steel_barrel_outside_tungsten').displayName('钨钢枪膛衬套').glow(true)
    event.create('tacz_rebuild:steel_barrel_stabilizator_tungsten').parentModel('tacz_rebuild:block/steel_barrel_stabilizator_tungsten').displayName('钨钢支架').glow(true)
    event.create('tacz_rebuild:steel_barrel_trestle_tungsten').parentModel('tacz_rebuild:block/steel_barrel_trestle_tungsten').displayName('钨钢重型武器稳定支架').glow(true)
    event.create('tacz_rebuild:steel_cassette_tungsten').parentModel('tacz_rebuild:block/steel_cassette_tungsten').displayName('钨钢弹夹').glow(true)
    event.create('tacz_rebuild:steel_cassette_big_tungsten').parentModel('tacz_rebuild:block/steel_cassette_big_tungsten').displayName('钨钢宽弹夹').glow(true)
    event.create('tacz_rebuild:steel_spring_tungsten').parentModel('tacz_rebuild:block/steel_spring_tungsten').displayName('钨钢弹夹弹簧').glow(true)
    event.create('tacz_rebuild:steel_trigger_tungsten').parentModel('tacz_rebuild:block/steel_trigger_tungsten').displayName('钨钢扳机').glow(true)
    event.create('tacz_rebuild:tungsten_fring_pin_tungsten').parentModel('tacz_rebuild:block/tungsten_fring_pin_tungsten').displayName('钨钢激发撞针').glow(true)
    event.create('tacz_rebuild:tungsten_re-entry_pin_tungsten').parentModel('tacz_rebuild:block/tungsten_re-entry_pin_tungsten').displayName('钨钢复位摆').glow(true)
    event.create('tacz_rebuild:steel_barrel_long_awm_tungsten').parentModel('tacz_rebuild:block/steel_barrel_long_awm_tungsten').displayName('钨钢狙击稳定枪管').glow(true)

    event.create('tacz_rebuild:steel_back_tungsten').parentModel('tacz_rebuild:block/steel_back_tungsten').displayName('钨钢枪托').glow(true)
    event.create('tacz_rebuild:steel_barrel_collimation_tungsten').parentModel('tacz_rebuild:block/steel_barrel_collimation_tungsten').displayName('钨钢瞄准辅助件').glow(true)
    event.create('tacz_rebuild:steel_puller_tungsten').parentModel('tacz_rebuild:block/steel_puller_tungsten').displayName('钨钢长弹舱抛壳器').glow(true)
    event.create('tacz_rebuild:steel_heavy_stabilizator_tungsten').parentModel('tacz_rebuild:block/steel_heavy_stabilizator_tungsten').displayName('钨钢重型机枪平衡摆').glow(true)
    event.create('tacz_rebuild:steel_outer_tungsten').parentModel('tacz_rebuild:block/steel_outer_tungsten').displayName('钨钢固定外壳').glow(true)
    event.create('tacz_rebuild:steel_pistol_tungsten').parentModel('tacz_rebuild:block/steel_pistol_tungsten').displayName('钨钢枪把手').glow(true)
    event.create('tacz_rebuild:steel_protect_tungsten').parentModel('tacz_rebuild:block/steel_protect_tungsten').displayName('钨钢散热外套').glow(true)
    event.create('tacz_rebuild:steel_protect_easy_tungsten').parentModel('tacz_rebuild:block/steel_protect_easy_tungsten').displayName('简易钨钢枪托').glow(true)
    event.create('tacz_rebuild:steel_protect_supporter_tungsten').parentModel('tacz_rebuild:block/steel_protect_supporter_tungsten').displayName('钨钢枪托支架').glow(true)
    event.create('tacz_rebuild:steel_protect_tragger_tungsten').parentModel('tacz_rebuild:block/steel_protect_tragger_tungsten').displayName('钨钢弹舱抛壳器').glow(true)
    event.create('tacz_rebuild:steel_protect_weight_tungsten').parentModel('tacz_rebuild:block/steel_protect_weight_tungsten').displayName('钨钢稳定配重').glow(true)


    event.create('tacz_rebuild:shadow_nugget',"basic").displayName('暗影钢结晶粒').glow(true).maxDamage(20000)



    event.create("cab:steel_wire",'basic').displayName('钢丝')




})






ItemEvents.modification(event =>{
    event.modify('create_ethium:chorus_nectar',item=>{
        item.foodProperties = food =>{
            food.saturation(0.5)
        }
        
    })
})


ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_armor_chestplate',item =>{
        item.maxDamage = 888
        item.fireResistant = true
        item.rarity = "EPIC"
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_armor_helmet',item =>{
        item.maxDamage = 612
        item.fireResistant = true
        item.rarity = "EPIC"
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_armor_leggings',item =>{
        item.maxDamage = 834
        item.fireResistant = true
        item.rarity = "EPIC"
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_armor_boots',item =>{
        item.maxDamage = 723
        item.fireResistant = true
        item.rarity = "EPIC"
        })

})

ItemEvents.modification(event =>{
    event.modify('tacz_rebuild:shadow_nugget',item =>{
        item.rarity = "EPIC"
        item.fireResistant = true
        })

})


ItemEvents.modification(event =>{
    event.modify(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:1,GunFireMode:"SEMI",GunId:"cake:railgun",HasBulletInBarrel:1b}').strongNBT(),item =>{
        item.rarity = "EPIC"
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify(Item.of('tacz:modern_kinetic_gun', '{GunCurrentAmmoCount:0,GunFireMode:"SEMI",GunId:"cake:railgun",HasBulletInBarrel:1b}').strongNBT(),item =>{
        item.rarity = "EPIC"
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:calculation_mechanism',item =>{
        item.rarity = "EPIC"
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:abstruse_mechanism',item =>{
        item.rarity = "EPIC"
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:chromatic_resonator',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:dye_entangled_singularity4',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:dye_entangled_singularity3',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:dye_entangled_singularity2',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:dye_entangled_singularity1',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:incomplete_abstruse_mechanism',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:incomplete_calculation_mechanism',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:incomplete_calculation_mechanism',item =>{
        item.rarity = 'RARE'
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:inductive_mechanism',item =>{
        item.rarity =  "common"
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:enderium_machine',item =>{
        item.rarity = "EPIC"  
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('mobaicore:copper_zinc',item =>{
        item.rarity ="twilight" 
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:mouse_ingot',item =>{
        item.rarity ="uncommon"
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:apple_milk_tea',item =>{
        item.rarity = 'RARE'  
        })

})

ItemEvents.modification(event =>{
    event.modify('cab:pineapple_milk_tea',item =>{
        item.rarity = 'RARE'  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:iced_coffee',item =>{
        item.rarity = 'RARE'  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:coconut_iced_coffee',item =>{
        item.rarity =  "EPIC"  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:material_block',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('kubejs:enderium_casing',item =>{
        item.rarity =  "uncommon" 
        item.fireResistant = true 
        })

})
ItemEvents.modification(event =>{
    event.modify('kubejs:invar_casing',item =>{
        item.rarity =  "uncommon"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:blizz_rod',item =>{
        item.rarity =  "uncommon"  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:forged_beam',item =>{
        item.rarity =  "EPIC"  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:silicon_compound',item =>{
        item.rarity =  "uncommon"  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:silicon_compound_progress',item =>{
        item.rarity =  "EPIC"  
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:shadow_sheet',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('cab:radiant_sheet',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
//ethium
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_sword',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_axe',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_shovel',item =>{
        item.rarity =  "EPIC" 
        item.fireResistant = true 
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_hoe',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_pickaxe',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_smithing_template',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_ingot',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_nugget',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_block',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('create_ethium:ethium_sheet',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})


ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coin_netherite',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})


ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coin_diamond',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coin_emerald',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coinpile_netherite',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coinpile_diamond',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})
ItemEvents.modification(event =>{
    event.modify('lightmanscurrency:coinpile_emerald',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})

ItemEvents.modification(event =>{
    event.modify('lightingwand:wand',item =>{
        item.rarity =  "EPIC"  
        item.fireResistant = true
        })

})




ItemEvents.modification(event =>{
    event.modify('youkaishomecoming:reimu_hairband',item =>{
        item.armorProtection = 8
        item.armorToughness = 8
        item.rarity = "EPIC"
        })

})




















//16 16 16 16



const modify_ball = [
    'ae2:white_paint_ball','ae2:orange_paint_ball','ae2:magenta_paint_ball','ae2:light_blue_paint_ball',
    'ae2:yellow_paint_ball','ae2:lime_paint_ball','ae2:pink_paint_ball','ae2:gray_paint_ball',
    'ae2:brown_paint_ball','ae2:green_paint_ball','ae2:red_paint_ball','ae2:black_paint_ball',
    'ae2:light_gray_paint_ball', 'ae2:cyan_paint_ball','ae2:purple_paint_ball','ae2:blue_paint_ball',
    'ae2:white_lumen_paint_ball','ae2:orange_lumen_paint_ball','ae2:magenta_lumen_paint_ball','ae2:light_blue_lumen_paint_ball',
    'ae2:yellow_lumen_paint_ball','ae2:lime_lumen_paint_ball','ae2:pink_lumen_paint_ball','ae2:gray_lumen_paint_ball',
    'ae2:brown_lumen_paint_ball','ae2:green_lumen_paint_ball','ae2:red_lumen_paint_ball','ae2:black_lumen_paint_ball',
    'ae2:light_gray_lumen_paint_ball', 'ae2:cyan_lumen_paint_ball','ae2:purple_lumen_paint_ball','ae2:blue_lumen_paint_ball',
    'cab:dye_entangled_singularity1',
    'cab:dye_entangled_singularity2',
    'cab:dye_entangled_singularity3',
    'cab:dye_entangled_singularity4',
]
ItemEvents.modification(event =>{

function stack_modify(inputsArray) {
    for (const item_ball of inputsArray) {
        
            event.modify(item_ball,item =>{
                item.fireResistant = true
                item.maxStackSize = 1
                item.rarity = "EPIC"
                })
}}

// 调用函数
stack_modify(modify_ball);

})



// "aether.loot"   "twilight"   绿色
//  'RARE'        蓝色
//  "EPIC"        紫色
//  "uncommon"    金色

//type Internal.Rarity_ =  | Rarity |  | "epic" |  | "common"