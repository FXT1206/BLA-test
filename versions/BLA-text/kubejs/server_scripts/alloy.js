ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "mythicmetals:aquarium_ingot"},  //神话金属的激水锭
                {"item": "minecraft:amethyst_shard"},          //
                {"item": "gobber2:gobber2_glob"},   
                {"item": "twilightforest:naga_scale"},   
                {"item": "minecraft:iron_ingot"},      
                {"item": "minecraft:diamond"}                   //原版钻石
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "gobber2:gobber2_ingot",                  
              "count": 3                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "gobber2:gobber2_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "gobber2:gobber2_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 80                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "gobber2:gobber2_glob_end"},          //
                {"item": "l2complements:blackstone_core"},   
                {"item": "l2complements:explosion_shard"},     
                {"item": "l2complements:sculkium_ingot"},      
                {"item": "gobber2:gobber2_block_nether"}             
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "gobber2:gobber2_ingot_end",                  
              "count": 4                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "gobber2:gobber2_ingot_end",
                "count": 4                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "gobber2:gobber2_ingot_end",
                "count": 4
              }
            },
            "min_forge_tier": 3,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "minecraft:echo_shard"},  //合金
                {"item": "minecraft:netherite_ingot"},          //
                {"item": "bosses_of_mass_destruction:ancient_anima"},   
                {"item": "minecraft:copper_block"},     
                {"item": "l2complements:warden_bone_shard"},      
                {"item": "meetyourfight:phantoplasm"}             
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2complements:sculkium_ingot",                  
              "count": 4                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2complements:sculkium_ingot",
                "count": 4                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2complements:sculkium_ingot",
                "count": 6
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "gobber2:gobber2_block"},  
                {"item": "gobber2:gobber2_glob_nether"},        
                {"item": "twilightforest:fiery_ingot"},   
                {"item": "mythicmetals:palladium_ingot"},     
                {"item": "mythicmetals:stormyx_ingot"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "gobber2:gobber2_ingot_nether",                  
              "count": 4                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "gobber2:gobber2_ingot_nether",
                "count": 4                       //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "gobber2:gobber2_ingot_nether",
                "count": 6
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "alexscaves:pure_darkness"},  
                {"item": "mythicmetals:unobtainium"},        
                {"item": "meetyourfight:violet_bloom"},   
                {"item": "bosses_of_mass_destruction:ancient_anima"},     
                {"item": "bosses_of_mass_destruction:obsidian_heart"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2hostility:chaos_ingot",                  
              "count": 3                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2hostility:chaos_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2hostility:chaos_ingot",
                "count": 6
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "enigmaticlegacy:astral_block"},  
                {"item": "l2hostility:chaos_ingot"},        
                {"item": "l2complements:heirophant_green"},   
                {"item": "l2complements:eternium_ingot"},     
                {"item": "terramity:prismatic_jewel"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2hostility:miracle_ingot",                  
              "count": 3                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2hostility:miracle_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2hostility:miracle_ingot",
                "count": 3
              }
            },
            "min_forge_tier": 3,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 200                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})


ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "minecraft:gold_ingot"},
                {"item": "minecraft:gold_ingot"},        
                {"item": "minecraft:blaze_powder"},   
                {"item": "minecraft:netherite_scrap"},    
                {"item": "minecraft:netherite_scrap"},   
                {"item": "minecraft:netherite_scrap"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "minecraft:netherite_ingot",                  
              "count": 1                        //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "minecraft:netherite_ingot",
                "count": 1                       //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "minecraft:netherite_ingot",
                "count": 2
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 200                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
  event.custom({
    "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
    "inputs": [                                   //输入物品，这里的item可以切换为tag
        {"item": "l2complements:sculkium_ingot"},
        {"item": "l2complements:shulkerate_ingot"},        
        {"item": "l2complements:poseidite_ingot"},   
        {"item": "enigmaticlegacy:etherium_ingot"},    
        {"item": "composite_material:obsidian_steel_ingot"},   
        {"item": "minecraft:echo_shard"},
        {"item": "alshanex_familiars:mysterious_orb"}       

    ],
    "output": {                               //输出物品，注意这里不能使用"item":"XX"
      "id": "l2complements:eternium_ingot",                  
      "count": 2                       //输出物品的数量，取值范围是1-64
    },
    "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
      "2": {
        "id": "l2complements:eternium_ingot",
        "count": 2                       //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
      },
      "3+": {
        "id": "l2complements:eternium_ingot",
        "count": 3
      }
    },
    "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
    "fuel_per_tick": 200                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
  })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "terramity:sapphire"},  
                {"item": "terramity:onyx"},
                {"item": "terramity:topaz"},        
                {"item": "terramity:ruby"},   
                {"item": "terramity:moonstone_rock"},     
                {"item": "terramity:iridescent_shard"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "terramity:prismatic_jewel",                  
              "count": 1                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "terramity:prismatic_jewel",
                "count": 1                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "terramity:prismatic_jewel",
                "count": 2
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 180                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
  event.custom({
    "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
    "inputs": [                                   //输入物品，这里的item可以切换为tag
        {"item": "minecraft:iron_block"},  
        {"item": "minecraft:iron_block"},
        {"item": "minecraft:iron_block"},        
        {"item": "mythicmetals:steel_block"},   
        {"item": "mythicmetals:unobtainium"}    

    ],
    "output": {                               //输出物品，注意这里不能使用"item":"XX"
      "id": "kubejs:broken_bow",                  
      "count": 1                            //输出物品的数量，取值范围是1-64
    },
    "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
      "2": {
        "id": "kubejs:broken_bow",
        "count": 1                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
      },
      "3+": {
        "id": "kubejs:broken_bow",
        "count": 1
      }
    },
    "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
    "fuel_per_tick": 800                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
  })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "minecraft:emerald"},  
                {"item": "minecraft:emerald"},
                {"item": "terramity:prismatic_jewel"}     
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "minecraft:emerald_block",                  
              "count": 1                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "minecraft:emerald_block",
                "count": 1                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "minecraft:emerald_block",
                "count": 2
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 120                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "terramity:cracked_microcosm"},  
                {"item": "terramity:antiprism"},
                {"item": "alexscaves:tectonic_shard"},        
                {"item": "legendary_monsters:lava_eaters_skin"},   
                {"item": "minecraft:netherite_ingot"},     
                {"item": "bosses_of_mass_destruction:obsidian_heart"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "terramity:exodium_superalloy",                  
              "count": 1                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "terramity:exodium_superalloy",
                "count": 1                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "terramity:exodium_superalloy",
                "count": 3
              }
            },
            "min_forge_tier": 3,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 300                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})


ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "minecraft:prismarine_shard"},  
                {"item": "minecraft:iron_ingot"},
                {"item": "minecraft:nautilus_shell"},        
                {"item": "minecraft:prismarine_crystals"},   
                {"item": "gobber2:gobber2_ingot"},     
                {"item": "minecraft:iron_ingot"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2complements:poseidite_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2complements:poseidite_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2complements:poseidite_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 100                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "terramity:opaline_moonstone"},  
                {"item": "gobber2:gobber2_ingot_nether"},
                {"item": "minecraft:glistering_melon_slice"},        
                {"item": "minecraft:glistering_melon_slice"},   
                {"item": "enigmaticaddons:ichor_droplet"},     
                {"item": "minecraft:totem_of_undying"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2complements:totemic_gold_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2complements:totemic_gold_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2complements:totemic_gold_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 180                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "enigmaticlegacy:etherium_ore"},  
                {"item": "terramity:opaline_moonstone"},
                {"item": "gobber2:gobber2_ingot_end"},        
                {"item": "bosses_of_mass_destruction:ancient_anima"},       
                {"item": "bosses_of_mass_destruction:obsidian_heart"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "enigmaticlegacy:etherium_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "enigmaticlegacy:etherium_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "enigmaticlegacy:etherium_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 3,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 300                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "terramity:empty_essence"},  
                {"item": "terramity:iridium"},
                {"item": "terramity:iridium"},
                {"item": "terramity:black_matter"},        
                {"item": "bosses_of_mass_destruction:void_thorn"},       
                {"item": "l2complements:blackstone_core"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "terramity:void_alloy",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "terramity:void_alloy",
                "count": 2                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "terramity:void_alloy",
                "count": 3
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 200                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "terramity:chthonic_crystal"},  
                {"item": "terramity:iridium"},
                {"item": "terramity:iridium"},
                {"item": "terramity:black_matter"},        
                {"item": "bosses_of_mass_destruction:blazing_eye"},       
                {"item": "l2complements:sun_membrane"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "terramity:hellspec_alloy",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "terramity:hellspec_alloy",
                "count": 2                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "terramity:hellspec_alloy",
                "count": 3
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 200                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "mythicmetals:durasteel_ingot"},  
                {"item": "mythicmetals:durasteel_ingot"},
                {"item": "minecraft:netherite_ingot"},
                {"item": "born_in_chaos_v1:dark_metal_ingot"}
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "born_in_chaos_v1:armor_plate_from_dark_metal",                  
              "count": 1                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "born_in_chaos_v1:armor_plate_from_dark_metal",
                "count": 2                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "born_in_chaos_v1:armor_plate_from_dark_metal",
                "count": 3
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "mythicmetals:steel_ingot"},  
                {"item": "minecraft:iron_ingot"},
                {"item": "minecraft:diamond"},
                {"item": "minecraft:shulker_shell"}
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "l2complements:shulkerate_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "l2complements:shulkerate_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "l2complements:shulkerate_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 150                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "l2complements:totemic_gold_ingot"},  
                {"item": "composite_material:allay_steel_ingot"},
                {"item": "bosses_of_mass_destruction:ancient_anima"},
                {"item": "enigmaticlegacy:etherium_ingot"},        
                {"item": "terramity:void_alloy"},       
                {"item": "mythicmetals:metallurgium_ingot"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "composite_material:etherite_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "composite_material:etherite_ingot",
                "count": 2                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "composite_material:etherite_ingot",
                "count": 2
              }
            },
            "min_forge_tier": 3,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 300                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "minecraft:iron_ingot"},  
                {"item": "minecraft:quartz"},
                {"item": "minecraft:diamond"},        
                {"item": "minecraft:obsidian"}      
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "composite_material:obsidian_steel_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "composite_material:obsidian_steel_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "composite_material:obsidian_steel_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 130                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "mythicmetals:unobtainium"},  
                {"item": "mythicmetals:unobtainium"},
                {"item": "l2complements:resonant_feather"},        
                {"item": "l2complements:resonant_feather"},     
                {"item": "meetyourfight:phantoplasm"},        
                {"item": "meetyourfight:phantoplasm"}
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "mythicmetals:celestium_ingot",                  
              "count": 2                            //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "mythicmetals:celestium_ingot",
                "count": 3                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "mythicmetals:celestium_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 2,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 180                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})

ServerEvents.recipes(event => {    
          event.custom({
            "type": "alloy_forgery:forging",  
            "inputs": [                                  
                {"item": "mythicmetals:unobtainium"},  
                {"item": "mythicmetals:unobtainium"},
                {"item": "l2complements:sun_membrane"},        
                {"item": "l2complements:sun_membrane"},     
                {"item": "meetyourfight:phantoplasm"},        
                {"item": "meetyourfight:phantoplasm"}
 
            ],
            "output": {                             
              "id": "mythicmetals:metallurgium_ingot",                  
              "count": 2                            
            },
            "overrides": {                       
              "2": {
                "id": "mythicmetals:metallurgium_ingot",
                "count": 3                        
              },
              "3+": {
                "id": "mythicmetals:metallurgium_ingot",
                "count": 4
              }
            },
            "min_forge_tier": 2,                 
            "fuel_per_tick": 180                 
          })
})

ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
          event.custom({
            "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
            "inputs": [                                   //输入物品，这里的item可以切换为tag
                {"item": "spelunkery:cinnabar"},  //合金
                {"item": "spelunkery:cinnabar"},          //
                {"item": "spelunkery:cinnabar"},   
                {"item": "spelunkery:cinnabar"},     
                {"item": "composite_material:obsidian_steel_ingot"},      
                {"item": "minecraft:obsidian"}             
 
            ],
            "output": {                               //输出物品，注意这里不能使用"item":"XX"
              "id": "soulsweapons:crimson_obsidian",                  
              "count": 1                           //输出物品的数量，取值范围是1-64
            },
            "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
              "2": {
                "id": "soulsweapons:crimson_obsidian",
                "count": 1                     //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
              },
              "3+": {
                "id": "soulsweapons:crimson_obsidian",
                "count": 1
              }
            },
            "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
            "fuel_per_tick": 80                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
          })
})
ServerEvents.recipes(event => {    //仅限1.19以上，1.19以下请使用OnEvents
  event.custom({
    "type": "alloy_forgery:forging",  //配方类型，这是本模组冶炼炉的配方类型
    "inputs": [                                   //输入物品，这里的item可以切换为tag
        {"item": "mythicmetals:aquarium_ingot"},  //神话金属的激水锭
        {"item": "wizards_reborn:arcanum"},          //Wizards Reborn的秘术水晶
        {"item": "gobber2:gobber2_glob"},            //戈伯2的戈伯簇
        {"item": "minecraft:diamond"}                   //原版钻石

    ],
    "output": {                               //输出物品，注意这里不能使用"item":"XX"
      "id": "gobber2:gobber2_ingot",                 //戈伯2的戈伯锭
      "count": 1                            //输出物品的数量，取值范围是1-64
    },
    "overrides": {                        //冶炼炉的等级，下面的"2"表示2级冶炼炉，2级以上可以用"2+"表示
      "2": {
        "id": "gobber2:gobber2_ingot",
        "count": 2                        //数量，这里指的是上述配方在2级冶炼炉冶炼时可以产出的数量
      },
      "3+": {
        "id": "gobber2:gobber2_ingot",
        "count": 3
      }
    },
    "min_forge_tier": 1,                  //最低冶炼炉等级需求，这里代表至少需要1级的冶炼炉才能冶炼这个配方
    "fuel_per_tick": 100                  //熔炉每刻消耗的燃料(热值)，一桶熔岩是 24000J
  })
})
