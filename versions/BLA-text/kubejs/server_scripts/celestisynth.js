ServerEvents.recipes(event => {
    // 仪式所需的类型,主要方便第一个参数的补全
    let ritual_type = {
        forge: 'forge',// 锻造仪式
        animation: 'animation', // 活力仪式
        magic: 'magic',// 魔法仪式
        frost: 'frost',// 霜冻仪式
        necroturgy: 'necroturgy',// 死灵仪式
        geoturgy: 'geoturgy', // 大地仪式
        lich: 'lich',// 大师死灵仪式
        sky: 'sky',// 天空仪式
        storm: 'storm',// 风暴仪式
        sabbath: 'sabbath',// 安息仪式
        adept_nether: 'adept_nether',// 进阶下界仪式
        expert_nether: 'expert_nether'// 专家下界仪式
    }

    /**
    * 定义方法用于创建Goety仪式配方
    * @param {string} craftType 配方类型
    * @param {number} soulCost 每秒的灵魂消耗
    * @param {number} duration 持续时间/s
    * @param {Array} ingredients 材料
    * @param {string} input 输入物品
    * @param {string} result 输出物品
    */
    const ritualRecipe = (craftType, soulCost, duration, ingredients, input, result) => {
        // 定义输入材料,使其可以根据输入的材料数量进行拓展
        const ingredientObjects = ingredients.map(item => ({ "item": item }))
        // 定义配方对象
        let recipe = {
            "type": "goety:ritual",
            "ritual_type": "goety:craft",
            "craftType": craftType,
            "soulCost": soulCost,
            "duration": duration,
            "ingredients": ingredientObjects,
            "activation_item": {
                "item": input
            },
            "result": {
                "item": result
            }
        }
       event.custom(recipe) // 注册配方
    }
ritualRecipe(ritual_type.forge, 300, 10, [

                "celestisynth:starstruck_scrap",
                "celestisynth:starstruck_scrap",
                "legendary_monsters:corrupted_soul",
                "legendary_monsters:corrupted_soul",
                "minecraft:nether_star",
                "soulsweapons:soul_ingot",
                "soulsweapons:soul_ingot",
                "soulsweapons:soul_ingot",
            ], // 输入物品
        "minecraft:netherite_sword" , //反应物
        "legendary_monsters:soul_great_sword" // 灵魂剑


    );




ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "cataclysm:ignitium_ingot",
                "cataclysm:ignitium_ingot",
                "bosses_of_mass_destruction:obsidian_heart",
                "traveloptics:flame_tempered_handguard",
                "traveloptics:flame_tempered_handguard",
                "l2hostility:chaos_ingot",
                "l2hostility:chaos_ingot",
            ], // 输入物品
        "l2complements:eternium_chestplate" , //反应物
        "cataclysm:ignitium_chestplate" // 阎魔甲


    );




ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "cataclysm:ignitium_ingot",
                "cataclysm:ignitium_ingot",
                "bosses_of_mass_destruction:obsidian_heart",
                "traveloptics:flame_tempered_handguard",
                "traveloptics:flame_tempered_handguard",
                "l2hostility:chaos_ingot",
                "l2hostility:chaos_ingot",
            ], // 输入物品
        "l2complements:eternium_helmet" , //反应物
        "cataclysm:ignitium_helmet" // 阎魔头盔


    );




ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "cataclysm:ignitium_ingot",
                "cataclysm:ignitium_ingot",
                "bosses_of_mass_destruction:obsidian_heart",
                "traveloptics:flame_tempered_handguard",
                "traveloptics:flame_tempered_handguard",
                "l2hostility:chaos_ingot",
                "l2hostility:chaos_ingot",
            ], // 输入物品
        "l2complements:eternium_boots" , //反应物
        "cataclysm:ignitium_boots" // 阎魔鞋


    );




ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "cataclysm:ignitium_ingot",
                "cataclysm:ignitium_ingot",
                "bosses_of_mass_destruction:obsidian_heart",
                "traveloptics:flame_tempered_handguard",
                "traveloptics:flame_tempered_handguard",
                "l2hostility:chaos_ingot",
                "l2hostility:chaos_ingot",
            ], // 输入物品
        "l2complements:eternium_leggings" , //反应物
        "cataclysm:ignitium_leggings" // 阎魔护腿


    );




ritualRecipe(ritual_type.forge, 300, 10, [

                "ars_nouveau:source_gem",
                "ars_nouveau:source_gem",
                "minecraft:ender_eye",
                "enigmaticlegacy:enchantment_transposer",
                "minecraft:diamond",
                "minecraft:diamond",
                "minecraft:netherite_ingot",
            ], // 输入物品
        "minecraft:crying_obsidian" , //反应物
        "minecraft:enchanting_table" // 附魔台


    );




ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "enigmaticlegacy:blazing_core",
                    "alexscaves:tectonic_shard",
                    "alexscaves:tectonic_shard",
                    "bosses_of_mass_destruction:blazing_eye",
                    "alexscaves:amber_curiosity",
                    "alexscaves:amber_curiosity",
                ], // 输入物品
            "iceandfire:tide_trident" , //反应物
            "alexscaves:extinction_spear" // 地狱矛
    
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "terramity:black_matter",
                    "terramity:void_alloy",
                    "terramity:black_matter",
                    "terramity:void_alloy",
                    "terramity:black_matter",
                    "terramity:void_alloy",
                ], // 输入物品
            "alexscaves:nuclear_bomb" , //反应物
            "terramity:black_hole_bomb" // 黑洞
    
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "alexscaves:block_of_uranium",
                    "minecraft:iron_block",
                    "alexscaves:block_of_uranium",
                    "minecraft:iron_block",
                    "alexscaves:block_of_uranium",
                    "minecraft:iron_block",
                ], // 输入物品
            "alexscaves:fissile_core" , //反应物
            "terramity:black_hole_bomb" // 黑洞
    
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "minecraft:netherite_ingot",
                    "minecraft:netherite_ingot",
                    "minecraft:netherite_ingot",
                    "minecraft:netherite_ingot",
                    "legendary_monsters:withered_horn",
                    "legendary_monsters:corrupted_soul",
                ], // 输入物品
            "minecraft:totem_of_undying" , //反应物
            "enigmaticaddons:disaster_sword" // 黑洞
    
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "composite_material:etherite_ingot",
                    "bosses_of_mass_destruction:blazing_eye",
                    "composite_material:etherite_ingot",
                    "bosses_of_mass_destruction:obsidian_heart",
                    "composite_material:etherite_ingot",
                    "bosses_of_mass_destruction:void_thorn"
                ], // 输入物品
            "minecraft:totem_of_undying" , //反应物
            "composite_material:etherite_totem" // 以太合金图腾
    
    
        );
    



ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "l2complements:poseidite_ingot",
                    "l2complements:poseidite_ingot",
                    "l2complements:poseidite_ingot",
                    "l2complements:poseidite_ingot",
                ], // 输入物品
            "iceandfire:dragonbone_sword_ice" , //反应物
            "l2weaponry:spear_of_winter_storm" // 冰矛
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "bosses_of_mass_destruction:blazing_eye",
                    "terramity:hellspec_alloy",
                    "minecraft:enchanted_golden_apple",
                    "terramity:hellspec_alloy",
                ], // 输入物品
            "terramity:hellspec_sword" , //反应物
            "composite_material:disc_sword" // 赤金
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "minecraft:crying_obsidian",
                    "minecraft:crying_obsidian",
                    "born_in_chaos_v1:pileof_dark_metal",
                    "minecraft:crying_obsidian",
                ], // 输入物品
            "goety:empty_focus" , //反应物
            "irons_spellbooks:scroll_forge" //
    
        );
    


ritualRecipe(ritual_type.forge, 300, 10, [
    
                    "composite_material:perkin",
                    "l2complements:totemic_gold_ingot",
                    "l2complements:totemic_gold_ingot",
                    "irons_spellbooks:divine_pearl",
                    "artifacts:crystal_heart",
                    "minecells:boss_stem_cell",
                ], // 输入物品
            "royalvariations:royal_staff" , //反应物
            "l2weaponry:dogmatic_punishment" //
    
        );
    })

