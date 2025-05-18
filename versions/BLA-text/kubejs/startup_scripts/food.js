StartupEvents.registry('item', (event) => {
    //腐肉汤
    event.create("kubejs:rotten_flesh_soup")
    .unstackable().tooltip("§9腐肉煮成的汤，谁知道吃了会发生什么呢？")
    .texture("kubejs:item/soup_rotten_flesh")
    .food(food => {
        food.hunger(6)
        food.saturation(3/5) // 3/5 = 0.6
        food.alwaysEdible()
        food.effect("irons_spellbooks:vigor",20*60,2,1)
        food.effect("minecraft:hunger",20*60,0,1)
        food.eaten(foodEatenEvent=>{
                /**
                 * @type {$Player}
                 */
                let player = foodEatenEvent.getPlayer()
                if (foodEatenEvent.getPlayer() != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("腐肉汤")  
        
    //灵质汤
    event.create("kubejs:soup_ectoplasm")
    .unstackable().tooltip("§9灵质熬制的汤，能让人短暂地隐形")
    .texture("kubejs:item/soup_ectoplasm")
    .food(food => {
        food.hunger(4)
        food.saturation(4/4) // 10/10 = 1.0
        food.alwaysEdible()
        food.effect("irons_spellbooks:true_invisibility",20*10,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("灵质汤")
    
    //暗金属汤
    event.create("kubejs:soup_pieceofdarkmetal")
    .unstackable().tooltip("§9暗金属熬制的汤，蕴含强大力量")
    .texture("kubejs:item/soup_pieceofdarkmetal")
    .food(food => {
        food.hunger(8)
        food.saturation(6/6) 
        food.alwaysEdible()
        food.effect("minecraft:strength",20*60*10,1,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("暗金属汤")
    
    //蛆汤
    event.create("kubejs:soup_corpse_maggot")
    .unstackable().tooltip("§9蛆虫熬制的汤，闻起来令人作呕")
    .texture("kubejs:item/soup_corpse_maggot")
    .food(food => {
        food.hunger(5)
        food.saturation(3/5) // 3/5 = 0.6
        food.alwaysEdible()
        food.effect("minecraft:nausea",20*60,0,1)
        food.effect("farmersdelight:nourishment",20*60,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("尸蛆汤")
    
    //烈焰粉汤
    event.create("kubejs:soup_blaze_powder")
    .unstackable().tooltip("§9烈焰粉熬制的汤，能抵御火焰伤害")
    .texture("kubejs:item/soup_blaze_powder")
    .food(food => {
        food.hunger(8)
        food.saturation(6/6) // 8/8 = 1.0
        food.alwaysEdible()
        food.effect("minecraft:fire_resistance",20*60*5,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("烈焰汤")
    
    //凋零骷髅汤
    event.create("kubejs:soup_witherbone")
    .unstackable().tooltip("§9凋零骷髅熬制的汤，闻着有股焦糊味")
    .texture("kubejs:item/soup_witherbone")
    .food(food => {
        food.hunger(8)
        food.saturation(6/6) // 8/8 = 1.0
        food.alwaysEdible()
        food.effect("minecraft:strength",20*60*10,1,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("凋零骷髅汤")

    //幽匿汤
    event.create("kubejs:soup_sculkium")
    .unstackable().tooltip("§9幽匿物质熬制的汤，能让你的攻击产生回音")
    .texture("kubejs:item/soup_sculkium")
    .food(food => {
        food.hunger(6)
        food.saturation(4/4) // 12/12 = 1.0
        food.alwaysEdible()
        food.effect("irons_spellbooks:echoing_strikes",20*60,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("幽匿汤")
    
    //恶魂汤
    event.create("kubejs:soup_ghast_tear")
    .unstackable().tooltip("§9恶魂之泪熬制的汤，有轻飘飘的感觉")
    .texture("kubejs:item/soup_ghast_tear")
    .food(food => {
        food.hunger(6)
        food.saturation(4/4) // 10/10 = 1.0
        food.alwaysEdible()
        food.effect("irons_spellbooks:antigravity",20*60,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("恶魂汤")
    
    //粘液球汤
    event.create("kubejs:soup_slime_ball")
    .unstackable().tooltip("§9粘液球熬制的汤，有弹性十足的质感")
    .texture("kubejs:item/soup_slime_ball")
    .food(food => {
        food.hunger(4)
        food.saturation(4/4) // 8/8 = 1.0
        food.alwaysEdible()
        food.effect("minecraft:jump_boost",20*60*5,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("粘液球汤")
    
    //娜迦汤
    event.create("kubejs:soup_poisonous_fang")
    .unstackable().tooltip("§9娜迦牙齿熬制的汤，散发着毒素与生命的气息")
    .texture("kubejs:item/soup_poisonous_fang")
    .food(food => {
        food.hunger(8)
        food.saturation(10/10) // 14/14 = 1.0
        food.alwaysEdible()
        food.effect("farmersdelight:nourishment",20*60*8,0,1)
        food.effect("minecraft:regeneration",20*60*8,0,1)
        food.effect("minecraft:poison",20*30*8,0,1) 
        food.effect("irons_spellbooks:spider_aspect",20*60*8,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("娜迦汤")
    
    //火药汤
    event.create("kubejs:soup_gunpowder")
    .unstackable().tooltip("§9火药熬制的汤，嗅起来令人紧张")
    .texture("kubejs:item/soup_gunpowder")
    .food(food => {
        food.hunger(8)
        food.saturation(8/8) // 8/8 = 1.0
        food.alwaysEdible()
        food.effect("irons_spellbooks:hastened",20*60*5,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("火药汤")
    
    //下界合金巨兽汤
    event.create("kubejs:soup_monstrous_horn")
    .unstackable().tooltip("§9下界合金巨兽犄角熬制的汤，充满原始力量")
    .texture("kubejs:item/soup_monstrous_horn")
    .food(food => {
        food.hunger(16)
        food.saturation(16/16) // 16/16 = 1.0
        food.alwaysEdible()
        food.effect("minecraft:fire_resistance",20*60*10,0,1)
        food.effect("cataclysm:monstrous",20*60*10,1,1)
        food.effect("farmersdelight:nourishment",20*60*10,0,1)
        food.effect("minecraft:regeneration",20*60*10,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("下界合金巨兽汤")
    
    //虚无之花汤
    event.create("kubejs:soup_crystal_fruit")
    .unstackable().tooltip("§9虚无之花水晶果实熬制的汤，散发着神秘能量")
    .texture("kubejs:item/soup_crystal_fruit")
    .food(food => {
        food.hunger(16)
        food.saturation(16/16) // 16/16 = 1.0
        food.alwaysEdible()
        food.effect("minecraft:resistance",20*60*10,0,1)
        food.effect("farmersdelight:nourishment",20*60*10,0,1)
        food.eaten(foodEatenEvent=>{
                let player = foodEatenEvent.getPlayer()
                if (player != null){
                    player.give("bowl")
                }
            })
    })
    .displayName("虚无汤")
})