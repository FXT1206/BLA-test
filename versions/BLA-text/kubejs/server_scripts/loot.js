EntityEvents.spawned(e => {
    if(e.entity.type == 'minecraft:chicken'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'minecraft:pig'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'minecraft:sheep'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'minecraft:cow'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'minecraft:mooshroom'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'alexsmobs:bison'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'alexsmobs:kangaroo'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'twilightforest:deer'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'twilightforest:wild_boar'){
            e.cancel()
        }
    }
)
EntityEvents.spawned(e => {
    if(e.entity.type == 'twilightforest:bighorn_sheep'){
            e.cancel()
        }
    }
)

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:apostle")    
        .addLoot('2x alexscaves:pure_darkness');});               

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("goety:apostle")    
        .addLoot('2x irons_spellbooks:legendary_ink');});                          

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:hydra")    
        .addLoot('confluence:worm_scarf');});             

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:naga")    
        .addLoot('confluence:shield_of_cthulhu');});             

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("soulsweapons:moonknight")    
        .addLoot('blasphemouspatch:ice_moon_shadow');});    

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("celestisynth:traverser")    
        .addLoot('enigmaticdelicacy:curse_blade');});

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:wither")    
        .addLoot('ringsofascension:ring_wither');});             

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("eeeabsmobs:nameless_guardian")    
        .addLoot('4x bosses_of_mass_destruction:ancient_anima');});       

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("meetyourfight:swampjaw")    
        .addLoot('confluence:shackle');});         
      
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendary_monsters:cloud_golem")    
        .addLoot('celestisynth:breezebreaker');});         

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:ender_dragon")    
        .addLoot('celestisynth:crescentia');});        

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:ur_ghast")    
        .addLoot('minecraft:wither_skeleton_skull');});         

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:hydra")    
        .addLoot('minecraft:wither_skeleton_skull');});        

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:snow_queen")    
        .addLoot('minecraft:wither_skeleton_skull');});   

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("legendary_monsters:posessed_paladin")    
        .addLoot('legendary_monsters:corrupted_soul');});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexscaves:luxtructosaurus")    
        .addLoot('traveloptics:tectonic_upgrade_smithing_template');});  

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("alexscaves:forsaken")    
        .addLoot('traveloptics:darkness_upgrade_smithing_template');});   

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:the_harbinger")    
        .addLoot('traveloptics:witherite_upgrade_smithing_template');});   

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("cataclysm:the_leviathan")    
        .addLoot('traveloptics:abyssal_upgrade_smithing_template');});   

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:naga")    
        .addLoot('blasphemouspatch:poisonous_fang');}); 
  
LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("mowziesmobs:ferrous_wroughtnaut")    
        .addLoot('blasphemouspatch:iron_heart');});   

LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:lich")    
        .addLoot('blasphemouspatch:magic_scroll');});   


LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("twilightforest:lich")    
        .addLoot('3x l2complements:sun_membrane');});  

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("minecraft:blaze") 
        .randomChance(0.15)                           
        .addLoot("l2complements:sun_membrane");});        

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("netherexp:apparition") 
        .randomChance(0.1)                           
        .addLoot("minecraft:ghast_tear");});     

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("mythsandlegends:black_charro") 
        .randomChance(0.1)                           
        .addLoot("mythsandlegends:umbras_whisper");});     

 LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:wither")    
        .addLoot('minecraft:netherite_upgrade_smithing_template');});             

 




