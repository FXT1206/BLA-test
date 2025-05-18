LootJS.modifiers(event => {
    //定义添加权重物品[物品id,概率]
    let weightLootItem = [
        ['minecraft:diamond', 5],//钻石
        ['goety:ectoplasm', 5],//灵质
        ['minecraft:amethyst_shard', 5],//紫水晶碎片
        ['2x minecraft:nether_wart', 5],//下界油
        ['goety:forbidden_piece', 5],//禁书碎片
    ]

    let lootItem = [
        ['enigmaticaddons:earth_heart_fragment', 0.1],//大地之心碎片
        ['enigmaticlegacy:earth_heart', 0.1],//大地之心
        ['goety:totem_of_roots', 0.1],//根之图腾
        ['enigmaticaddons:ichor_droplet', 0.1],//灵液滴
        ['goety:necro_crown', 0.05],//死灵王冠
        ['goety:necro_cape', 0.05],//死灵长袍
        ['goety:necro_staff', 0.05],//死灵魔杖
        ['goety:rotting_focus', 0.1],//腐烂聚晶
        ['goety:illusion_focus', 0.1],//幻想聚晶
        ['goety:soul_bolt_focus', 0.1],//灵魂束聚晶
        ['goety:soul_bolt_focus', 0.01],//不洁圣杯
        ['goety:chill_fabric', 0.1],//寒冷布料
        ['goety:gale_fabric', 0.1],//烈风布料
        ['goety:occult_fabric', 0.1],//神秘布料
    ]

    //定义删除物品,[物品id]
    let removeLoot = [
        ['minecraft:arrow'],//箭
        ['minecraft:dandelion'],//蒲公英
        ['minecraft:gunpowder'],//火药
        ['minecraft:sugar_cane'],//甘蔗
        ['minecraft:bone_meal'],//骨粉
        ['minecraft:flint'],//小麦种子
        ['minecraft:sand'],//沙子
        ['minecraft:torch'],//火把
        ['twilightforest:ironwood_pickaxe'],//铁木稿
        ['minecraft:pumpkin_pie'],//南瓜派
        ['twilightforest:steeleaf_ingot'],//钢叶
        ['minecraft:potato'],//马铃薯
        ['minecraft:gold_nugget'],//金粒
        ['minecraft:feather'],//羽毛
        ['minecraft:cod'],//鱼
        ['minecraft:wheat_seeds'],//小麦种子
        ['minecraft:cactus'],//仙人掌
        ['minecraft:flower_pot'],//花盆
        ['minecraft:bow'],//弓
        ['minecraft:stone_sword'],//石剑
        ['minecraft:wooden_sword'],//木剑
        ['minecraft:iron_sword'],//铁剑
        ['minecraft:iron_leggings'],//铁护腿
        ['minecraft:paper'],//纸
        ['minecraft:ladder'],//梯子
        ['minecraft:fire_charge'],//火焰弹
        ['minecraft:map'],//地图
        ['minecraft:bone'],//骨头
        ['minecraft:clay_ball'],//黏土
        ['minecraft:glass_bottle'],//玻璃瓶
        ['minecraft:book'],//书
        ['minecraft:potion'],//水瓶
        ['minecraft:golden_pickaxe'],//金稿
    ]

    weightLootItem.forEach(([item, chance]) => {
        event
            .addLootTableModifier('twilightforest:chests/tower_library')//巫妖怪塔
            .addWeightedLoot([2, 3], [
                Item.of(item).withChance(chance)
            ])
    })

    lootItem.forEach(([item, chance]) => {
        event
            .addLootTableModifier('twilightforest:chests/tower_library')
            .addLoot([
                LootEntry.of(item).when(c => c.randomChance(chance))
            ])
    })

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('twilightforest:chests/tower_library')//巫妖怪塔
            .removeLoot(item)

     })
})

//工兵矿山
LootJS.modifiers(event => {
    let weightLootItem = [
        ['minecraft:diamond', 5],//钻石
        ['goety:ectoplasm', 5],//灵质
        ['born_in_chaos_v1:pieceofdarkmetal', 5],//暗金属
        ['2x minecraft:copper_ingot', 5],//铜
        ['2x minecraft:iron_ingot', 5],//铁锭
        ['1x minecraft:gold_ingot', 5],//金锭
        ['4x minecraft:coal', 5],//煤炭
        ['1x minecraft:amethyst_shard', 5],//紫水晶碎片
    ]

    let lootItem = [
        ['enigmaticaddons:earth_heart_fragment', 0.1],//大地之心碎片
        ['enigmaticlegacy:earth_heart', 0.1],//大地之心
    ]

    //定义删除物品,[物品id]
    let removeLoot = [
        ['minecraft:arrow'],//箭
        ['minecraft:dandelion'],//蒲公英
        ['minecraft:gunpowder'],//火药
        ['minecraft:sugar_cane'],//甘蔗
        ['minecraft:bone_meal'],//骨粉
        ['minecraft:flint'],//小麦种子
        ['minecraft:sand'],//沙子
        ['minecraft:torch'],//火把
        ['twilightforest:ironwood_pickaxe'],//铁木稿
        ['minecraft:pumpkin_pie'],//南瓜派
        ['twilightforest:steeleaf_ingot'],//钢叶
        ['minecraft:potato'],//马铃薯
        ['minecraft:gold_nugget'],//金粒
        ['minecraft:feather'],//羽毛
        ['minecraft:cod'],//鱼
        ['minecraft:wheat_seeds'],//小麦种子
        ['minecraft:cactus'],//仙人掌
        ['minecraft:flower_pot'],//花盆
        ['minecraft:carrot'],//胡萝卜
        ['minecraft:baked_potato'],//烤马铃薯
        ['minecraft:bucket'],//桶
        ['minecraft:poppy'],//虞美人
        ['minecraft:ladder'],//梯子
        ['twilightforest:uncrafting_table'],//拆解台
    ]

    weightLootItem.forEach(([item, chance]) => {
        event
            .addLootTableModifier('twilightforest:chests/hill_2')//工兵矿山
            .addWeightedLoot([1, 3], [
                Item.of(item).withChance(chance)
            ])
    })

    lootItem.forEach(([item, chance]) => {
        event
            .addLootTableModifier('twilightforest:chests/hill_2')
            .addLoot([
                LootEntry.of(item).when(c => c.randomChance(chance))
            ])
    })

     removeLoot.forEach(([item]) => {
         event
             .addLootTableModifier('twilightforest:chests/hill_2')
            .removeLoot(item)

     })
})