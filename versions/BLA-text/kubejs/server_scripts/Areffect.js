PlayerEvents.tick(event =>{
    let player = event.player;
    let health = player.health;
    let maxHealth = player.maxHealth;
    let head = player.headArmorItem;
    let chestplate = player.chestArmorItem;
    let leggings = player.legsArmorItem;
    let boots = player.feetArmorItem;
    let mainHandItem = player.mainHandItem;//获取玩家生命值、装备栏和主手物品等
    let attacker = player.lastAttacker;
    if(head.id =='gobber2:gobber2_helmet'&&chestplate.id =='gobber2:gobber2_chestplate'&&leggings.id =='gobber2:gobber2_leggings'&&boots.id =='gobber2:gobber2_boots')
    {
    player.potionEffects.add('minecraft:jump_boost',30,1);
    }
    if(head.id =='minecraft:diamond_helmet'&&chestplate.id =='minecraft:diamond_chestplate'&&leggings.id =='minecraft:diamond_leggings'&&boots.id =='minecraft:diamond_boots')
    {
        player.potionEffects.add("goety:iron_hide", 30, 0);
    }
    if(head.id =='composite_material:amethyst_helmet'&&chestplate.id =='composite_material:amethyst_chestplate'&&leggings.id =='composite_material:amethyst_leggings'&&boots.id =='composite_material:amethyst_boots')
    {
        player.potionEffects.add('minecraft:strength',30,0);
    }
    if(head.id =='minecraft:netherite_helmet'&&chestplate.id =='minecraft:netherite_chestplate'&&leggings.id =='minecraft:netherite_leggings'&&boots.id =='minecraft:netherite_boots')
    {
        player.potionEffects.add('minecraft:strength',30,0);
        player.potionEffects.add('enigmaticlegacy:molten_heart',30,0);
    }

    if(head.id =='composite_material:echoium_helmet'&&chestplate.id =='composite_material:echoium_chestplate'&&leggings.id =='composite_material:echoium_leggings'&&boots.id =='composite_material:echoium_boots')
    {
        player.potionEffects.add('alexsmobs:soulsteal',30,0);
    }

    if(head.id =='twilightforest:knightmetal_helmet'&&chestplate.id =='twilightforest:knightmetal_chestplate'&&leggings.id =='twilightforest:knightmetal_leggings'&&boots.id =='twilightforest:knightmetal_boots')
    {
        player.potionEffects.add('minecraft:strength',30,0);
    }
    if(head.id =='gobber2:gobber2_helmet_nether'&&chestplate.id =='gobber2:gobber2_chestplate_nether'&&leggings.id =='gobber2:gobber2_leggings_nether'&&boots.id =='gobber2:gobber2_boots_nether')
    {
        player.potionEffects.add('minecraft:strength',30,0);
        player.potionEffects.add('enigmaticlegacy:molten_heart',30,0);
        player.potionEffects.add('minecraft:resistance',30,0);
    }
    if(head.id =='minecraft:netherite_helmet'&&chestplate.id =='minecraft:netherite_chestplate'&&leggings.id =='minecraft:netherite_leggings'&&boots.id =='minecraft:netherite_boots')
    {
        player.potionEffects.add('minecraft:regeneration',30,0);
    }
    if(head.id =='cataclysm:ignitium_helmet'&&chestplate.id =='cataclysm:ignitium_chestplate'&&leggings.id =='cataclysm:ignitium_leggings'&&boots.id =='cataclysm:ignitium_boots')
    {
        player.potionEffects.add('minecraft:strength',30,1);
        player.potionEffects.add('enigmaticlegacy:molten_heart',30,0);
        player.potionEffects.add('minecraft:resistance',30,0);
    }
    if(head.id =='enigmaticlegacy:etherium_helmet'&&chestplate.id =='enigmaticlegacy:etherium_chestplate'&&leggings.id =='enigmaticlegacy:etherium_leggings'&&boots.id =='enigmaticlegacy:etherium_boots')
    {
        player.potionEffects.add('minecraft:resistance',30,1);
    }
    if(head.id =='enigmaticlegacy:etherium_helmet'&&chestplate.id =='enigmaticlegacy:etherium_chestplate'&&leggings.id =='enigmaticlegacy:etherium_leggings'&&boots.id =='enigmaticlegacy:etherium_boots')
    {
        player.potionEffects.add('minecraft:strength',30,1);
        player.potionEffects.add('minecraft:speed',30,1);
    }
    if(head.id =='enigmaticlegacy:etherium_helmet'&&chestplate.id =='enigmaticlegacy:etherium_chestplate'&&leggings.id =='enigmaticlegacy:etherium_leggings'&&boots.id =='enigmaticlegacy:etherium_boots')
    {
        player.potionEffects.add('minecraft:strength',30,0);
        player.potionEffects.add('minecraft:speed',30,1);
        player.potionEffects.add('minecraft:regeneration',30,0);
    }
    if(head.id =='gobber2:gobber2_helmet_end'&&chestplate.id =='gobber2:gobber2_chestplate_end'&&leggings.id =='gobber2:gobber2_leggings_end'&&boots.id =='gobber2:gobber2_boots_end')
    {
        player.potionEffects.add('minecraft:resistance',30,0);
        player.potionEffects.add('minecraft:speed',30,1);
        player.potionEffects.add('minecraft:regeneration',30,0);
    }
    if(head.id =='born_in_chaos_v1:dark_metal_armor_helmet'&&chestplate.id =='born_in_chaos_v1:dark_metal_armor_chestplate'&&leggings.id =='born_in_chaos_v1:dark_metal_armor_leggings'&&boots.id =='born_in_chaos_v1:dark_metal_armor_boots')
    {
        player.potionEffects.add('minecraft:resistance',30,1);
    }
    if(head.id =='twilightforest:fiery_helmet'&&chestplate.id =='twilightforest:fiery_chestplate'&&leggings.id =='twilightforest:fiery_leggings'&&boots.id =='twilightforest:fiery_boots')
    {
        player.potionEffects.add('minecraft:fire_resistance',30,0);
    }
    if(head.id =='terramity:conductite_scouter_helmet'&&chestplate.id =='terramity:conductite_armor_chestplate'&&leggings.id =='terramity:conductite_armor_leggings'&&boots.id =='terramity:conductite_armor_boots')
    {
        player.potionEffects.add('minecraft:resistance',30,0);
        player.potionEffects.add('irons_spellbooks:charged',30,0)
    }
    if(head.id =='terramity:cosmilite_armor_helmet'&&chestplate.id =='terramity:cosmilite_armor_chestplate'&&leggings.id =='terramity:cosmilite_armor_leggings'&&boots.id =='terramity:cosmilite_armor_boots')
    {
        player.potionEffects.add('minecraft:regeneration',30,1);
        player.potionEffects.add('irons_spellbooks:gluttony',30,0)
        player.potionEffects.add('goety:save_effects',30,0)
    }
    if(head.id =='terramity:hellspec_helmet'&&chestplate.id =='terramity:hellspec_chestplate'&&leggings.id =='terramity:hellspec_leggings'&&boots.id =='terramity:hellspec_boots')
    {
        player.potionEffects.add('minecraft:regeneration',30,0);
        player.potionEffects.add('enigmaticlegacy:molten_heart',30,1);
        player.potionEffects.add('goety:fiery_aura',30,1)
    }
    if(head.id =='terramity:hellspec_helmet'&&chestplate.id =='terramity:hellspec_chestplate'&&leggings.id =='terramity:hellspec_leggings'&&boots.id =='terramity:hellspec_boots')
    {
        player.potionEffects.add('alexsmobs:soulsteal',30,0);
        player.potionEffects.add('enigmaticlegacy:molten_heart',30,0)
    }
    if(head.id =='terramity:dimlite_helmet'&&chestplate.id =='terramity:dimlite_chestplate'&&leggings.id =='terramity:dimlite_leggings'&&boots.id =='terramity:dimlite_boots')
    {
        player.potionEffects.add('irons_spellbooks:vigor',30,2)
    }
    if(
        head.id == "l2complements:sculkium_helmet" && 
        chestplate.id == "l2complements:sculkium_chestplate" && 
        leggings.id == "l2complements:sculkium_leggings" && 
        boots.id == "l2complements:sculkium_boots"
    ) {
        player.potionEffects.add('goety:insight',30,0);
        player.potionEffects.add('irons_spellbooks:vigor',30,3);
    }
    if(
        head.id == "composite_material:obsidian_helmet" && 
        chestplate.id == "composite_material:obsidian_chestplate" && 
        leggings.id == "composite_material:obsidian_leggings" && 
        boots.id == "composite_material:obsidian_boots"
    ) {
        player.potionEffects.add("minecraft:fire_resistance", 30, 1);
        player.potionEffects.add("goety:iron_hide", 30, 0);
    }
    if(
        head.id == "terramity:iridium_armor_helmet" && 
        chestplate.id == "terramity:iridium_Armor_chestplate" && 
        leggings.id == "terramity:iridium_armor_leggings" && 
        boots.id == "terramity:iridium_armor_boots"
    ) {
        player.potionEffects.add('minecraft:health_boost',30,1)
        player.potionEffects.add("goety:iron_hide", 30, 0);
    }
    if(
        head.id == "blasphemouspatch:moonstone_helmet" && 
        chestplate.id == "blasphemouspatch:moonstone_chestplate" && 
        leggings.id == "blasphemouspatch:moonstone_leggings" && 
        boots.id == "blasphemouspatch:moonstone_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add('irons_spellbooks:vigor',30,2);
        player.potionEffects.add("l2complements:cleanse", 30, 0);
    }
    if(
        head.id == "terramity:reverium_paladin_helmet" && 
        chestplate.id == "terramity:reverium_paladin_chestplate" && 
        leggings.id == "terramity:reverium_paladin_leggings" && 
        boots.id == "terramity:reverium_paladin_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("l2complements:cleanse", 30, 0);
    }
    if(
        head.id == "terramity:nyxium_knight_helmet" && 
        chestplate.id == "terramity:nyxium_knight_chestplate" && 
        leggings.id == "terramity:nyxium_knight_leggings" && 
        boots.id == "terramity:nyxium_knight_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 0);
        player.potionEffects.add("minecraft:fire_resistance", 30, 0);
        player.potionEffects.add('irons_spellbooks:vigor',30,1);
    }
    if(
        head.id == "mythicmetals:hallowed_helmet" && 
        chestplate.id == "mythicmetals:hallowed_chestplate" && 
        leggings.id == "mythicmetals:hallowed_leggings" && 
        boots.id == "mythicmetals:hallowed_boots"
    ) {
        player.potionEffects.add("minecraft:regeneration", 30, 1);
        player.potionEffects.add("l2complements:cleanse", 30, 1);
    }
    if(
        head.id == "l2complements:eternium_helmet" && 
        chestplate.id == "l2complements:eternium_chestplate" && 
        leggings.id == "l2complements:eternium_leggings" && 
        boots.id == "l2complements:eternium_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("enigmaticdelicacy:perseverance", 30, 1);
    }
    if(
        head.id == "cataclysm:cursium_helmet" && 
        chestplate.id == "cataclysm:cursium_chestplate" && 
        leggings.id == "cataclysm:cursium_leggings" && 
        boots.id == "cataclysm:cursium_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("enigmaticaddons:frozen_heart", 30, 1);
    }
    if(
        head.id == "twilightforest:yeti_helmet" && 
        chestplate.id == "twilightforest:yeti_chestplate" && 
        leggings.id == "twilightforest:yeti_leggings" && 
        boots.id == "twilightforest:yeti_boots"
    ) {
        player.potionEffects.add("enigmaticaddons:frozen_heart", 30, 1);
    }
    if(
        chestplate.id == "twilightforest:naga_chestplate" && 
        leggings.id == "twilightforest:naga_leggings"
    ) {
        player.potionEffects.add("minecraft:strength", 30, 1);
    }
    if(
        head.id == "mythicmetals:celestium_helmet" && 
        chestplate.id == "mythicmetals:celestium_chestplate" && 
        leggings.id == "mythicmetals:celestium_leggings" && 
        boots.id == "mythicmetals:celestium_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("terramity:mirroring", 30, 0);
    }
    if(
        head.id == "mythicmetals:metallurgium_helmet" && 
        chestplate.id == "mythicmetals:metallurgium_chestplate" && 
        leggings.id == "mythicmetals:metallurgium_leggings" && 
        boots.id == "mythicmetals:metallurgium_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("goety:bottling", 30, 1);
        player.potionEffects.add("goety:save_effects", 30, 0);
    }
    if(
        head.id == "terramity:exodium_warlock_helmet" && 
        chestplate.id == "terramity:exodium_warlock_chestplate" && 
        leggings.id == "terramity:exodium_warlock_leggings" && 
        boots.id == "terramity:exodium_warlock_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("traveloptics:replenish", 30, 0);
        player.potionEffects.add("traveloptics:floodgate", 30, 0);
        player.potionEffects.add('traveloptics:vigor_siphon', 20, 0, false);
    }
    if(
        head.id == "dragonloot:dragon_helmet" && 
        chestplate.id == "dragonloot:dragon_chestplate" && 
        leggings.id == "dragonloot:dragon_leggings" && 
        boots.id == "dragonloot:dragon_boots"
    ) {
        player.potionEffects.add("minecraft:resistance", 30, 1);
        player.potionEffects.add("traveloptics:replenish", 30, 0);
        player.potionEffects.add("traveloptics:floodgate", 30, 0);
    }
    if(
        chestplate.id == "alexscaves:hood_of_darkness" && 
        leggings.id == "alexscaves:desolate_dagger"
    ) {
        player.potionEffects.add("traveloptics:replenish", 30, 0);
        player.potionEffects.add("traveloptics:floodgate", 30, 0);
    }
if(
    head.id == "mythicmetals:durasteel_helmet" && 
    chestplate.id == "mythicmetals:durasteel__chestplate" && 
    leggings.id == "mythicmetals:durasteel__leggings" && 
    boots.id == "mythicmetals:durasteel__boots"
) {
    player.potionEffects.add("alexsmobs:strong_knockback_resistance", 30, 1);
}
    if (
        head.id == 'mythicmetals:durasteel_helmet' && 
        chestplate.id == 'mythicmetals:durasteel_chestplate' && 
        leggings.id == 'mythicmetals:durasteel_leggings' && 
        boots.id == 'mythicmetals:durasteel_boots'
    ) {
        player.potionEffects.add('alexsmobs:strong_knockback_resistance', 20, 0, false);
    }
    
    // 爆裂者
    if (
        head.id == 'mythicmetals:legendary_banglum_helmet' && 
        chestplate.id == 'mythicmetals:legendary_banglum_chestplate' && 
        leggings.id == 'mythicmetals:legendary_banglum_leggings' && 
        boots.id == 'mythicmetals:legendary_banglum_boots'
    ) {
        player.potionEffects.add('goety:explosive', 20, 0, false);
    }
    
    // 眷顾
    if (
        head.id == 'mythicmetals:carmot_helmet' && 
        chestplate.id == 'mythicmetals:carmot_chestplate' && 
        leggings.id == 'mythicmetals:carmot_leggings' && 
        boots.id == 'mythicmetals:carmot_boots'
    ) {
        player.potionEffects.add('minecraft:luck', 20, 0, false);
    }
    
    // 破石
    if (
        head.id == 'mythicmetals:mythril_helmet' && 
        chestplate.id == 'mythicmetals:mythril_chestplate' && 
        leggings.id == 'mythicmetals:mythril_leggings' && 
        boots.id == 'mythicmetals:mythril_boots'
    ) {
        player.potionEffects.add('alexscaves:haste', 20, 0, false);
    }
    
    // 蛮力
    if (
        head.id == 'mythicmetals:mythril_helmet' && 
        chestplate.id == 'mythicmetals:mythril_chestplate' && 
        leggings.id == 'mythicmetals:mythril_leggings' && 
        boots.id == 'mythicmetals:mythril_boots'
    ) {
        player.potionEffects.add('minecraft:strength', 20, 0, false);
    }
    
    // 致密
    if (
        head.id == 'mythicmetals:adamantite_helmet' && 
        chestplate.id == 'mythicmetals:adamantite_chestplate' && 
        leggings.id == 'mythicmetals:adamantite_leggings' && 
        boots.id == 'mythicmetals:adamantite_boots'
    ) {
        player.potionEffects.add('minecraft:strength', 20, 0, false);
    }
    
    // 魔法
    if (
        head.id == 'mythicmetals:runite_helmet' && 
        chestplate.id == 'mythicmetals:runite_chestplate' && 
        leggings.id == 'mythicmetals:runite_leggings' && 
        boots.id == 'mythicmetals:runite_boots'
    ) {
        player.potionEffects.add("goety:charged", 30, 0);
    }
    
    // 符文
    if (
        head.id == 'mythicmetals:kyber_helmet' && 
        chestplate.id == 'mythicmetals:kyber_chestplate' && 
        leggings.id == 'mythicmetals:kyber_leggings' && 
        boots.id == 'mythicmetals:kyber_boots'
    ) {
        player.potionEffects.add("traveloptics:replenish", 30, 0);
    }
    
    // 再生
    if (
        head.id == 'mythicmetals:prometheum_helmet' && 
        chestplate.id == 'mythicmetals:prometheum_chestplate' && 
        leggings.id == 'mythicmetals:prometheum_leggings' && 
        boots.id == 'mythicmetals:prometheum_boots'
    ) {
        player.potionEffects.add('minecraft:regeneration', 20, 0, false);
    }
    
    // 终末符文
    if (
        head.id == 'mythicmetals:star_platinum_helmet' && 
        chestplate.id == 'mythicmetals:star_platinum_chestplate' && 
        leggings.id == 'mythicmetals:star_platinum_leggings' && 
        boots.id == 'mythicmetals:star_platinum_boots'
    ) {
        player.potionEffects.add("goety:charged", 30, 0);
        player.potionEffects.add("traveloptics:replenish", 30, 0);
     }
    
    // 雷霆
    if (
        head.id == 'mythicmetals:stormyx_helmet' && 
        chestplate.id == 'mythicmetals:stormyx_chestplate' && 
        leggings.id == 'mythicmetals:stormyx_leggings' && 
        boots.id == 'mythicmetals:stormyx_boots'
    ) {
        player.potionEffects.add("goety:charged", 30, 0);
        player.potionEffects.add("traveloptics:replenish", 30, 0);
    }
    
    // 固实
    if (
        head.id == 'mythicmetals:steel_helmet' && 
        chestplate.id == 'mythicmetals:steel_chestplate' && 
        leggings.id == 'mythicmetals:steel_leggings' && 
        boots.id == 'mythicmetals:steel_boots'
    ) {
        player.potionEffects.add('minecraft:resistance', 20, 0, false);
    }
    
    // 波塞冬恩惠
    if (
        head.id == 'l2complements:poseidite_helmet' && 
        chestplate.id == 'l2complements:poseidite_chestplate' && 
        leggings.id == 'l2complements:poseidite_leggings' && 
        boots.id == 'l2complements:poseidite_boots'
    ) {
        player.potionEffects.add("traveloptics:replenish", 30, 0);
        player.potionEffects.add('enigmaticaddons:frozen_heart', 20, 0, false);
    }
    
    // 海之恩赐
    if (
        head.id == 'traveloptics:deepling_mage_armor_helmet' && 
        chestplate.id == 'traveloptics:deepling_mage_armor_robe' && 
        leggings.id == 'traveloptics:deepling_mage_armor_leggings' && 
        boots.id == 'traveloptics:deepling_mage_armor_boots'
    ) {
        player.potionEffects.add("traveloptics:replenish", 30, 0);
    }
    
    // 地核之怒
    if (
        head.id == 'traveloptics:tectonic_crest_armor_helmet' && 
        chestplate.id == 'traveloptics:tectonic_crest_armor_chestplate' && 
        leggings.id == 'traveloptics:tectonic_crest_armor_leggings' && 
        boots.id == 'traveloptics:tectonic_crest_armor_boots'
    ) {
        player.potionEffects.add('minecraft:resistance', 20, 1, false);
        player.addAttribute("attributeslib:fire_damage", player.uuid, 3, 'addition');
    }
    
    // 毁灭章续
    if (
        head.id == 'traveloptics:mechanized_exoskeleton_helmet' && 
        chestplate.id == 'traveloptics:mechanized_exoskeleton_chestplate' && 
        leggings.id == 'traveloptics:mechanized_exoskeleton_leggings' && 
        boots.id == 'traveloptics:mechanized_exoskeleton_boots'
    ) {
        player.potionEffects.add('minecraft:resistance', 20, 0, false);
        player.potionEffects.add('goety:charged', 20, 0, false);
    }
    
    // 原初之怒
    if (
        head.id == 'traveloptics:primordial_crest_armor_helmet' && 
        chestplate.id == 'traveloptics:primordial_crest_armor_chestplate' && 
        leggings.id == 'traveloptics:primordial_crest_armor_leggings' && 
        boots.id == 'traveloptics:primordial_crest_armor_boots'
    ) {
        player.potionEffects.add('minecraft:resistance', 20, 1, false);
    }
    
    // 禁忌巫术
    if (
        head.id == 'traveloptics:forlorn_harbinger_hood' && 
        chestplate.id == 'traveloptics:forlorn_harbinger_robe' && 
        leggings.id == 'traveloptics:forlorn_harbinger_leggings' && 
        boots.id == 'traveloptics:forlorn_harbinger_boots'
    ) {
        player.potionEffects.add('traveloptics:vigor_siphon', 20, 0, false);
        player.potionEffects.add('goety:save_effects', 20, 1, false);
    }
    
    // 深渊巫法
    if (
        head.id == 'traveloptics:abyssal_hide_armor_hat' && 
        chestplate.id == 'traveloptics:abyssal_hide_armor_robe' && 
        leggings.id == 'traveloptics:abyssal_hide_armor_leggings' && 
        boots.id == 'traveloptics:abyssal_hide_armor_boots'
    ) {
        player.potionEffects.add('traveloptics:vigor_siphon', 20, 1, false);
        player.potionEffects.add('goety:save_effects', 20, 1, false);
    }
})

    
