ItemEvents.tooltip(event =>{


    event.addAdvanced('tacz_rebuild:steel_bounce',(item,advanced,text) =>{
        if (event.shift){
            text.add(1,Text.gray("[").append(Text.lightPurple("shift")).append(Text.gray("]查看提示-")).append(Text.lightPurple("[MOBAI]")))
            text.add(2,"提示：")
            text.add(3,Text.blue("由萃钢制作而来的金属弹簧，兼具弹性与硬度，适合制作坚固的武器零件"))
            text.add(4,Text.green("蹦哪去了？"))
        }
        else{
            text.add(1,Text.gray("[shift]查看提示-[MOBAI]"))
        }

    })


})