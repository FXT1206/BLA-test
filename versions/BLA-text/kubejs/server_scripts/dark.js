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
                "eeeabsmobs:guardian_core",
                "l2complements:storm_core",
                "l2complements:sculkium_block",
                "l2complements:storm_core",
            ], // 输入物品
        "l2weaponry:sculkium_machete", // 反应物
        "l2weaponry:abyss_resonance" // 冰冻烙印
    )
    ritualRecipe(ritual_type.forge, 300, 10, [
        "minecraft:nether_star",
        "l2complements:hard_ice",
        "l2complements:hard_ice",
        "l2complements:hard_ice",
    ], // 输入物品
"twilightforest:ice_sword", // 反应物
"terramity:icebrand" // 冰冻烙印
)
    ritualRecipe(ritual_type.forge, 300, 10, [

                "enigmaticlegacy:cosmic_heart",
                "l2complements:sculkium_helmet",
                "l2complements:shulkerate_helmet",
                "l2complements:poseidite_helmet",
                "l2complements:void_eye",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
            ], // 输入物品
        "enigmaticlegacy:etherium_helmet", // 反应物
        "l2complements:eternium_helmet" // 永恒头盔
    )

    ritualRecipe(ritual_type.forge, 300, 10, [

                "enigmaticlegacy:cosmic_heart",
                "l2complements:sculkium_chestplate",
                "l2complements:shulkerate_chestplate",
                "l2complements:poseidite_chestplate",
                "l2complements:void_eye",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
            ], // 输入物品
        "enigmaticlegacy:etherium_chestplate", // 反应物
        "l2complements:eternium_chestplate" // 永恒

      
    );

    ritualRecipe(ritual_type.forge, 300, 10, [

                "alexscaves:immortal_embryo",
                "terramity:antiprism",
                "terramity:chthonic_crystal",
                "terramity:chthonic_crystal",
                "terramity:lost_soul",
                "terramity:lost_soul",
                "alexscaves:gazing_pearl",
            ], // 输入物品
        "minecells:boss_stem_cell", // 反应物
        "terramity:chthonic_curse_bracelets" // 永恒

      
    );


    ritualRecipe(ritual_type.forge, 300, 10, [

                "enigmaticlegacy:cosmic_heart",
                "l2complements:sculkium_leggings",
                "l2complements:shulkerate_leggings",
                "l2complements:poseidite_leggings",
                "l2complements:void_eye",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
            ], // 输入物品
        "enigmaticlegacy:etherium_leggings", // 反应物
        "l2complements:eternium_leggings" // 永恒

      
    );

    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:crying_obsidian",
                "minecraft:crying_obsidian",
                "minecraft:crying_obsidian",
                "mythicmetals:enchanted_midas_gold_block",
                "mythicmetals:enchanted_midas_gold_block",
            ], // 输入物品
        "bosses_of_mass_destruction:ancient_anima", // 反应物
        "bosses_of_mass_destruction:mob_ward" // 杖

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "enigmaticlegacy:cosmic_heart",
                "l2complements:sculkium_boots",
                "l2complements:shulkerate_boots",
                "l2complements:poseidite_boots",
                "l2complements:void_eye",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
            ], // 输入物品
        "enigmaticlegacy:etherium_boots", // 反应物
        "l2complements:eternium_boots" // 永恒

      
    );

    ritualRecipe(ritual_type.forge, 300, 10, [

                "l2complements:sun_membrane",
                "cataclysm:ignitium_ingot",
                "bosses_of_mass_destruction:blazing_eye",
                "cataclysm:ignitium_ingot",
            ], // 输入物品
        "l2weaponry:eternium_claw", // 反应物
        "l2weaponry:claw_of_determination" // 不懈
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:antiprism",
                "l2complements:guardian_eye",
                "l2complements:captured_wind",
                "l2complements:soul_flame",
                "l2complements:hard_ice",
                "mythicmetals:unobtainium",
                "enigmaticlegacy:astral_dust",
                "enigmaticlegacy:astral_dust",
            ], // 输入物品
        "alexscaves:immortal_embryo", // 反应物
        "enigmaticlegacy:cosmic_heart" // 寰宇之心
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
   "terramity:warden_soul",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_helmet", // 反应物
        "l2complements:sculkium_helmet" // 幽匿头盔
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "terramity:warden_soul",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_chestplate", // 反应物
        "l2complements:sculkium_chestplate" // 幽匿甲
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "terramity:warden_soul",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_leggings", // 反应物
        "l2complements:sculkium_leggings" // 幽匿护腿
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
              "terramity:warden_soul",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_boots", // 反应物
        "l2complements:sculkium_boots" // 幽匿鞋
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                  "born_in_chaos_v1:dark_metal_ingot",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:life_essence",
                "l2complements:life_essence",
                "l2hostility:miracle_ingot",
                "cataclysm:cursium_ingot",
                "cataclysm:cursium_ingot",
                "traveloptics:echo_winglet",
            ], // 输入物品
           "l2complements:sculkium_helmet", // 反应物
        "cataclysm:cursium_helmet" // 咒魂
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "born_in_chaos_v1:dark_metal_ingot",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:life_essence",
                "l2complements:life_essence",
                "l2hostility:miracle_ingot",
                "cataclysm:cursium_ingot",
                "cataclysm:cursium_ingot",
                "traveloptics:echo_winglet",
            ], // 输入物品
           "l2complements:sculkium_chestplate", // 反应物
        "cataclysm:cursium_chestplate" // 咒魂

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "born_in_chaos_v1:dark_metal_ingot",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:life_essence",
                "l2complements:life_essence",
                "l2hostility:miracle_ingot",
                "cataclysm:cursium_ingot",
                "cataclysm:cursium_ingot",
                "traveloptics:echo_winglet",
            ], // 输入物品
           "l2complements:sculkium_leggings", // 反应物
        "cataclysm:cursium_leggings" // 咒魂

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
                "born_in_chaos_v1:dark_metal_ingot",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:life_essence",
                "l2complements:life_essence",
                "l2hostility:miracle_ingot",
                "cataclysm:cursium_ingot",
                "cataclysm:cursium_ingot",
                "traveloptics:echo_winglet",
            ], // 输入物品
        "l2complements:sculkium_boots", // 反应物
        "cataclysm:cursium_boots" // 咒魂

      
    );






    ritualRecipe(ritual_type.forge, 300, 10, [
                "terramity:hero_sword",
                "l2hostility:chaos_ingot",
                "l2hostility:chaos_ingot",
                "mythicmetals:stormyx_shell",
                "terramity:advanced_gun_parts",
                "terramity:exodium_superalloy",
                "terramity:exodium_superalloy",
                "terramity:exodium_superalloy",
            ], // 输入物品
        "terramity:hellspec_sword", // 反应物
        "terramity:murasama" // 鬼妖

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
                "l2complements:sun_membrane",
                "l2complements:eternium_ingot",
                "l2complements:eternium_ingot",
                "alexscaves:tectonic_shard",
                "alexscaves:tectonic_shard",
                "terramity:exodium_superalloy",
                "enigmaticlegacy:cosmic_heart",
                "bosses_of_mass_destruction:blazing_eye",
            ], // 输入物品
        "l2archery:explosion_bow", // 反应物
        "l2archery:sun_bow" // 烈阳

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
                "enigmaticlegacy:cosmic_heart",
                "traveloptics:abyssal_tentacle",
                "traveloptics:abyssal_tentacle",
                "enigmaticlegacy:the_twist",
                "enigmaticlegacy:eye_of_nebula",
                "traveloptics:last_glow",
            ], // 输入物品
        "confluence:fire_gauntlet", // 反应物
        "l2hostility:platinum_star" // 破风

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [
                "terramity:nyxium",
                "terramity:nyxium",
                "enigmaticlegacy:evil_ingot",
                "enigmaticlegacy:evil_ingot",
                "terramity:cracked_microcosm",
                "terramity:cracked_microcosm",
            ], // 输入物品
        "terramity:magma_stone", // 反应物
        "terramity:shadowflame_stone" // 影石
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:opaline_moonstone",
                "terramity:opaline_moonstone",
                "terramity:void_alloy",
                "terramity:void_alloy",
                "terramity:daemonium_glass",
                "terramity:daemonium_glass",
            ], // 输入物品
        "terramity:glass_ring", // 反应物
        "terramity:daemonium_glass_ring" // 恶魔玻璃戒
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:warden_soul",
                "terramity:dimlite_ingot",
                "terramity:void_alloy",
                "terramity:void_alloy",
                "terramity:prismatic_jewel",
                "terramity:prismatic_jewel",
            ], // 输入物品
        "artifacts:scarf_of_invisibility", // 反应物
        "terramity:prismatic_scarf" // 免伤围巾
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:exodium_superalloy",
                "terramity:exodium_superalloy",
                "enigmaticlegacy:cosmic_heart",
                "l2complements:explosion_shard",
                "l2complements:explosion_shard",
                "l2complements:blackstone_core",
            ], // 输入物品
        "terramity:anxiety_amulet", // 反应物
        "terramity:exodium_shield_amulet" // 异维护符
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "enigmaticlegacy:astral_dust",
                "enigmaticlegacy:astral_dust",
                "terramity:hellspec_alloy",
                "terramity:hellspec_alloy",
                "terramity:profanum",
                "terramity:profanum",
                "terramity:voidguard_pendant",
                "terramity:steady_pendant",
            ], // 输入物品
        "terramity:lava_locket", // 反应物
        "terramity:solar_safeguard_pendant" // 炼狱项链
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:nether_star",
                "terramity:leap_ring_plus",
                "terramity:excavation_ring",
                "terramity:rush_ring_plus",
                "terramity:iridium",
                "terramity:iridium",
                "terramity:prismatic_jewel",
                "terramity:prismatic_jewel",
            ], // 输入物品
        "enigmaticlegacy:iron_ring", // 反应物
        "terramity:express_ring" // 超速
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:blaze_powder",
                "gobber2:gobber2_ingot",
                "minecraft:netherite_ingot",
            ], // 输入物品
        "minecraft:diamond", // 反应物
        "l2hostility:charm_of_looting_1" // 一阶抢夺珠
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "legendary_monsters:corrupted_soul",
                "stalwart_dungeons:tungsten_ingot",
                "minecraft:nether_star",
                "soulsweapons:lord_soul_white",
                "legendary_monsters:withered_horn",
            ], // 输入物品
        "l2hostility:charm_of_looting_1", // 反应物
        "l2hostility:charm_of_looting_2" // 二阶抢夺珠
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:hero_sword",
                "terramity:guiding_moonlight",
                "terramity:crescent_moonblade",
                "terramity:exodium_superalloy",
                "terramity:exodium_superalloy",
                "enigmaticaddons:hell_blade_charm",
            ], // 输入物品
        "goety:unholy_blood", // 反应物
        "terramity:sword_of_the_imprisoned" // 圣剑
      
    );





    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:nether_star",
                "terramity:hellspec_alloy",
                "terramity:hellspec_alloy",
                "minecraft:netherite_ingot",
                "minecraft:netherite_ingot",
            ], // 输入物品
        "confluence:moon_stone", // 反应物
        "blasphemouspatch:annihilation_flame" // 渎火
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:nether_star",
                "terramity:hellspec_alloy",
                "terramity:hellspec_alloy",
                "minecraft:netherite_ingot",
                "minecraft:netherite_ingot",
            ], // 输入物品
        "confluence:sun_stone", // 反应物
        "blasphemouspatch:annihilation_flame" // 渎火
    );





    ritualRecipe(ritual_type.forge, 30, 10, [

                "minecraft:ender_pearl",
                "minecraft:golden_apple",
                "minecraft:glistering_melon_slice",
                "minecraft:diamond",
                "minecraft:coal",
                "meetyourfight:mossy_tooth",
            ], // 输入物品
        "extraalchemy:empty_vial", // 反应物
        "blasphemouspatch:health_bottle_small" // 血瓶
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecraft:netherite_ingot",
                "minecraft:nether_star",
                "minecraft:enchanted_golden_apple",
                "terramity:warden_soul",
                "minecells:boss_stem_cell",
                "bosses_of_mass_destruction:void_thorn",
            ], // 输入物品
        "blasphemouspatch:health_bottle_small", // 反应物
        "blasphemouspatch:health_bottle" // 中型血瓶
    );




    ritualRecipe(ritual_type.forge, 500, 10, [

                "l2complements:void_eye",
                "bosses_of_mass_destruction:void_thorn",
                "bosses_of_mass_destruction:void_thorn",
                "enigmaticlegacy:evil_ingot",
                "bosses_of_mass_destruction:obsidian_heart",
            ], // 输入物品
        "minecraft:netherite_sword", // 反应物
        "enigmaticlegacy:ender_slayer" // 末影屠
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "minecells:boss_stem_cell",
                "terramity:profanum",
                "l2complements:sun_membrane",
                "terramity:hellspec_alloy",
                "terramity:hellspec_alloy",
            ], // 输入物品
        "artifacts:fire_gauntlet", // 反应物
        "cataclysm:blazing_grips" // 烙印拳套
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "legendary_monsters:void_entity_warper",
                "l2complements:storm_core",
                "enigmaticlegacy:twisted_heart",
                "gobber2:gobber2_ingot_end",
                "gobber2:gobber2_ingot_end",
            ], // 输入物品
        "enigmaticlegacy:darkest_scroll", // 反应物
        "enigmaticaddons:night_scroll" // 暗黑契约
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "confluence:magma_stone",
                "minecraft:netherite_ingot",
                "minecraft:netherite_ingot",
                "gobber2:gobber2_ingot_nether",
                "gobber2:gobber2_ingot_nether"
            ], // 输入物品
        "artifacts:fire_gauntlet", // 反应物
        "l2hostility:flaming_thorn" // 魂火
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:exodium_block",
                "l2complements:eternium_ingot",
                "terramity:empty_essence",
                "terramity:cracked_microcosm",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:void_eye",
                "l2complements:resonant_feather"
            ], // 输入物品
        "terramity:void_mage_helmet", // 反应物
        "terramity:exodium_warlock_helmet" // 异维

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:exodium_block",
                "l2complements:eternium_ingot",
                "terramity:empty_essence",
                "terramity:cracked_microcosm",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:void_eye",
                "l2complements:resonant_feather"
            ], // 输入物品
        "terramity:void_mage_chestplate", // 反应物
        "terramity:exodium_warlock_chestplate" // 异维

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:exodium_block",
                "l2complements:eternium_ingot",
                "terramity:empty_essence",
                "terramity:cracked_microcosm",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:void_eye",
                "l2complements:resonant_feather"
            ], // 输入物品
        "terramity:void_mage_leggings", // 反应物
        "terramity:exodium_warlock_leggings" // 异维

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "terramity:exodium_block",
                "l2complements:eternium_ingot",
                "terramity:empty_essence",
                "terramity:cracked_microcosm",
                "born_in_chaos_v1:dark_metal_ingot",
                "l2complements:void_eye",
                "l2complements:resonant_feather"
            ], // 输入物品
        "terramity:void_mage_boots", // 反应物
        "terramity:exodium_warlock_boots" // 异维

      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "dragonloot:dragon_scale",
                "dragonloot:dragon_scale",
                "mythicmetals:metallurgium_ingot",
                "mythicmetals:metallurgium_ingot",
                "enigmaticlegacy:void_stone",
                "terramity:cracked_microcosm",
                "terramity:cracked_microcosm"
            ], // 输入物品
        "l2archery:eagle_bow", // 反应物
        "enigmaticaddons:dragon_bow"// 龙息弓
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "irons_spellbooks:weapon_parts",
                "irons_spellbooks:shriving_stone",
                "minecraft:diamond",
                "minecraft:diamond",
                "minecraft:diamond",
                "minecraft:diamond",
                "meetyourfight:phantoplasm"
            ], // 输入物品
        "minecraft:diamond_sword", // 反应物
        "irons_spellbooks:spellbreaker"// 破魔剑
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "l2complements:explosion_shard",
                "minecraft:blaze_rod",
                "minecraft:blaze_rod",
                "legendary_monsters:lava_eaters_skin",
                "legendary_monsters:lava_eaters_skin",
                "legendary_monsters:withered_horn",
                "legendary_monsters:withered_horn"
            ], // 输入物品
        "minecraft:netherite_axe", // 反应物
        "enigmaticlegacy:forbidden_axe" // 行刑者
      
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "gobber2:gobber2_ingot_nether",
                "gobber2:gobber2_ingot_nether",
                "minecraft:nether_star",
                "legendary_monsters:lava_eaters_skin",
                "meetyourfight:fortunes_favor"
            ], // 输入物品
        "enigmaticlegacy:forbidden_axe", // 反应物
        "gobber2:gobber2_sword_nether" // 下界戈伯剑
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "born_in_chaos_v1:pileof_dark_metal",
                "born_in_chaos_v1:pileof_dark_metal",
                "twilightforest:lich_trophy",
                "soulsweapons:lord_soul_rose",
            ], // 输入物品
        "minecraft:netherite_sword", // 反应物
        "soulsweapons:lich_bane" // 巫妖灾祸
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "alexscaves:heavy_bone",
                "alexscaves:heavy_bone",
                "alexscaves:tough_hide",
                "alexscaves:tough_hide",
                "born_in_chaos_v1:dark_metal_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
            ], // 输入物品
        "mythicmetals:prometheum_helmet", // 反应物
        "traveloptics:primordial_crest_armor_helmet" // 幽匿头盔
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "alexscaves:heavy_bone",
                "alexscaves:heavy_bone",
                "alexscaves:tough_hide",
                "alexscaves:tough_hide",
                "born_in_chaos_v1:dark_metal_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
            ], // 输入物品
        "mythicmetals:prometheum_chestplate", // 反应物
        "traveloptics:primordial_crest_armor_chestplate" // 幽匿甲
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "alexscaves:heavy_bone",
                "alexscaves:heavy_bone",
                "alexscaves:tough_hide",
                "alexscaves:tough_hide",
                "born_in_chaos_v1:dark_metal_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
            ], // 输入物品
        "mythicmetals:prometheum_leggings", // 反应物
        "traveloptics:primordial_crest_armor_leggings" // 幽匿护腿
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "alexscaves:heavy_bone",
                "alexscaves:heavy_bone",
                "alexscaves:tough_hide",
                "alexscaves:tough_hide",
                "born_in_chaos_v1:dark_metal_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
                "terramity:virentium_alloy_ingot",
            ], // 输入物品
        "mythicmetals:prometheum_boots", // 反应物
        "traveloptics:primordial_crest_armor_boots" // 原初鞋
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "bosses_of_mass_destruction:void_thorn",
                "bosses_of_mass_destruction:obsidian_heart",
                "l2complements:explosion_shard",
                "minecraft:enchanted_golden_apple",
                "enigmaticlegacy:etherium_block",
            ], // 输入物品
        "enigmaticlegacy:etherium_boots", // 反应物
        "composite_material:etherite_boots" // 
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "bosses_of_mass_destruction:void_thorn",
                "bosses_of_mass_destruction:obsidian_heart",
                "l2complements:explosion_shard",
                "minecraft:enchanted_golden_apple",
                "enigmaticlegacy:etherium_block",
            ], // 输入物品
        "enigmaticlegacy:etherium_helmet", // 反应物
        "composite_material:etherite_helmet" // 
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "bosses_of_mass_destruction:void_thorn",
                "bosses_of_mass_destruction:obsidian_heart",
                "l2complements:explosion_shard",
                "minecraft:enchanted_golden_apple",
                "enigmaticlegacy:etherium_block",
            ], // 输入物品
        "enigmaticlegacy:etherium_chestplate", // 反应物
        "composite_material:etherite_chestplate" // 
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "composite_material:etherite_ingot",
                "bosses_of_mass_destruction:void_thorn",
                "bosses_of_mass_destruction:obsidian_heart",
                "l2complements:explosion_shard",
                "minecraft:enchanted_golden_apple",
                "enigmaticlegacy:etherium_block",
            ], // 输入物品
        "enigmaticlegacy:etherium_leggings", // 反应物
        "composite_material:etherite_leggings" // 
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "composite_material:warden_hand",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_helmet", // 反应物
        "composite_material:echoium_helmet" // 幽匿头盔
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "composite_material:warden_hand",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_chestplate", // 反应物
        "composite_material:echoium_chestplate" // 幽匿甲
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "composite_material:warden_hand",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_leggings", // 反应物
        "composite_material:echoium_leggings" // 幽匿护腿
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                 "composite_material:warden_hand",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:evil_essence",
                "enigmaticlegacy:earth_heart",
                "minecraft:nether_star",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
                "l2complements:sculkium_ingot",
            ], // 输入物品
        "terramity:dimlite_boots", // 反应物
        "composite_material:echoium_boots" // 幽匿鞋
    );

    ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "alexscaves:tectonic_shard",
                "alexscaves:tectonic_shard",
            ], // 输入物品
        "traveloptics:primordial_crest_armor_helmet", // 反应物
        "traveloptics:tectonic_crest_armor_helmet" // 地壳头
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "alexscaves:tectonic_shard",
                "alexscaves:tectonic_shard",
            ], // 输入物品
        "traveloptics:primordial_crest_armor_chestplate", // 反应物
        "traveloptics:tectonic_crest_armor_chestplate" // 地壳甲

    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "alexscaves:tectonic_shard",
                "alexscaves:tectonic_shard",
            ], // 输入物品
        "traveloptics:primordial_crest_armor_leggings", // 反应物
        "traveloptics:tectonic_crest_armor_leggings" // 地壳护腿
    );




    ritualRecipe(ritual_type.forge, 300, 10, [

                "bosses_of_mass_destruction:blazing_eye",
                "alexscaves:tectonic_shard",
                "alexscaves:tectonic_shard",
            ], // 输入物品
        "traveloptics:primordial_crest_armor_boots", // 地壳鞋
        "traveloptics:tectonic_crest_armor_boots", // 地壳鞋
    );
})
