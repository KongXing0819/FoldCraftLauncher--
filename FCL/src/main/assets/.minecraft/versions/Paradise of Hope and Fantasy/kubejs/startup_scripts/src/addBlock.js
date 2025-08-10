StartupEvents.registry('block',e=>{

  //  e.create("cab:steelblock",'basic'); // 你可以替换为你需要的标签
    e.create("cab:deep_rock_sand","falling"); // 定义方块，黑沙zinc_machine
    e.create("cab:deep_gravel",'falling')
    e.create("cab:brass_machine",'basic').defaultCutout()
    e.create("cab:copper_machine",'basic').defaultCutout()
    e.create("cab:andesite_machine",'basic').defaultCutout()
    e.create("cab:enderium_machine","basic").defaultCutout().displayName('空间折叠机械装置')
    e.create("cab:zinc_machine","basic").defaultCutout().displayName('锌制机械装置')
    e.create("cab:material_block","basic").defaultCutout().displayName('物质嬗变机械装置')
    //e.create("cab:enderium_machine","basic").defaultCutout().displayName('锌制机械装置')
    e.create("cab:rubber_block",'falling')
    e.create("cab:cured_rubber_block",'basic')


    e.create('enderium_casing').model('cab:block/enderium_casing').soundType('metal').hardness(4.0).displayName('空间稳定机壳')
	  e.create('zinc_casing').soundType('metal').hardness(3.0).displayName('锌制还原机壳')
  	e.create('invar_casing').soundType('metal').hardness(3.0).displayName('物质稳定机壳')
	  e.create('fluix_casing').soundType('metal').hardness(3.0).displayName('备用机壳')



    e.create('cab:rose_pearl_block').hardness(2.0).displayName('软糯紫颂珍珠块').tag('minecraft:mineable/shovel')
    e.create('cab:haunt_pearl_block').hardness(2.5).displayName('活化的紫颂珍珠块').tag('minecraft:mineable/shovel')



    e.create('tacz_rebuild:part_box',"falling").model('tacz_rebuild:block/part_box').defaultCutout().displayName('通用零件拆解盒')

})

StartupEvents.registry('block',e=>{


  
      e.create('mobaicore:capsid',"basic").soundType('metal').displayName('稳定衣壳体').tag('minecraft:mineable/shovel').defaultCutout()
      e.create('cataclysm:spawn_base1',"basic").unbreakable().displayName('英魂生成器')
  
    
     
  })