ServerEvents.recipes(event => {
	//修改配方
	event.shaped('6x iceandfire:dragonforge_ice_brick', [//冰锻炉砖块 
	  'CCC',
	  'ABA',
	  'CCC'
	], {
	  A: '#forge:storage_blocks/scales/dragon/ice',//冰龙鳞块
	  B: 'iceandfire:sapphire_block',//蓝宝石块
	  C: '#iceandfire:scales/dragon/ice'//冰龙鳞
	})

//冰封之血
	event.shaped('2x irons_spellbooks:blank_rune', [//符文
	  'BBB',
	  'BAB',
	  'BBB'
  ], {
	A: 'irons_spellbooks:arcane_ingot',//奥术锭
	B: 'minecraft:tuff',//凝灰岩
  })

	event.shaped('8x minecraft:soul_sand', [//符文
	  'BBB',
	  'BAB',
	  'BBB'
  ], {
	A: 'goety:ectoplasm',//奥术锭
	B: 'minecraft:sand',//凝灰岩
  })
	event.shaped('kubejs:sacred_heart', [//神圣之心
	  'BBB',
	  'BAB',
	  'BBB'
  ], {
	A: 'minecraft:nether_star',//奥术锭
	B: 'mythicmetals:hallowed_ingot',//凝灰岩
  })

	event.shaped('composite_material:obsidian_wand', [//符文
	  ' B ',
	  'CAC',
	  ' A '
  ], {
	A: 'composite_material:obsidian_steel_ingot',//黑曜石锭
	B: 'twilightforest:hydra_trophy',//九头蛇奖杯
	C: 'minecraft:gold_block',//金块
  })

	event.shaped('composite_material:disc_axe', [//特攻
	  'CBD',
	  'CA ',
	  ' A '
  ], {
	A: 'minecraft:netherite_ingot',//合金
	B: 'composite_material:warden_hand',//坚守者的手
	C: 'composite_material:echoium_ingot',//回响锭
	D: 'l2complements:sculkium_ingot'//幽匿
  })



	event.shaped('minecraft:experience_bottle', [//特攻
	  ' B ',
	  'ACA',
	  'ABA'
  ], {
	A: 'minecraft:polished_andesite',//合金
	B: 'minecraft:experience_bottle',//坚守者的手
	C: 'composite_material:echoium_ingot'//回响锭
  })

  event.shaped('6x iceandfire:dragonforge_lightning_brick', [//电锻炉砖块
	'CCC',
	'ABA',
	'CCC'
], {
  A: '#forge:storage_blocks/scales/dragon/lightning',//电龙鳞块
  B: 'iceandfire:sapphire_block',//蓝宝石块
  C: '#iceandfire:scales/dragon/lightning'//电龙鳞
})

  event.shaped('goety:dark_anvil', [//黑暗铁砧
	' E ',
	'DAD',
	'BCB'
], {
  A: 'minecraft:anvil',//铁砧
  B: 'l2complements:blackstone_core',//黑石核心
  C: 'l2complements:explosion_shard',//碎块
  D: 'goety:dark_metal_block',//诅咒金属
  E: 'alexscaves:pure_darkness'//黑暗
})

  event.shaped('celestisynth:celestial_spell_book', [//
	'BEB',
	'DAD',
	'BCB'
], {
  A: 'irons_spellbooks:dragonskin_spell_book',//龙书
  B: 'enigmaticlegacy:etherium_ingot',//以太
  C: 'terramity:opaline_moonstone',//月蛋白
  D: 'enigmaticlegacy:astral_dust',//星
  E: 'enigmaticlegacy:eye_of_nebula'//星云之眼
})

  event.shaped('enigmaticaddons:hell_blade_charm', [//
	'BEB',
	'DAD',
	'BEB'
], {
  A: 'enigmaticlegacy:berserk_charm',
  B: 'enigmaticaddons:ichor_droplet',
  D: 'enigmaticdelicacy:curse_blade',
  E: 'enigmaticlegacy:evil_ingot'
})

  event.shaped('enigmaticdelicacy:weapon_charm', [//
	'BBB',
	'DAD',
	' E '
], {
  A: 'irons_spellbooks:divine_pearl',
  B: 'farmersdelight:iron_knife',
  D: 'endermanoverhaul:enderman_tooth',
  E: 'minecraft:gold_block'
})

  event.shaped('refinedstorage:creative_controller', [//
	'BDB',
	'DAD',
	'BCB'
], {
  A: 'irons_spellbooks:blank_rune',
  B: 'minecraft:polished_andesite',
  C: 'terramity:battery',
  D: 'minecraft:diamond'
})

  event.shaped('confluence:anklet_of_the_wind', [//电锻炉砖块
	' A ',
	'A A',
	' B '
], {
  A: 'terramity:virentium_alloy_ingot',//铁砧
  B: 'minecraft:spore_blossom'//孢子
})

event.shaped('iceandfire:dragonforge_ice_input', [//冰锻炉焰孔
'ACA',
'BDC',
'ABA'
], {
A: 'iceandfire:dragonforge_ice_brick',//冰龙砖块
B: 'twilightforest:fiery_ingot',//炽铁锭
C: 'minecraft:netherite_ingot',//下界合金锭
D: 'twilightforest:carminite'//神千铁矿石
})

event.shaped('iceandfire:dragonforge_fire_input', [//火锻炉焰孔
'ACA',
'BDC',
'ABA'
], {
A: 'iceandfire:dragonforge_fire_brick',//火
B: 'twilightforest:fiery_ingot',//炽铁锭
C: 'minecraft:netherite_ingot',//下界合金锭
D: 'twilightforest:carminite'//神千铁矿石
})


event.shaped('confluence:shiny_red_balloon', [//气球
' C ',
'DAD',
' B '
], {
A: 'terramity:cloud_in_a_bottle',//
B: 'minecraft:string',//
C: 'minecraft:red_dye',//
D: 'minecraft:white_wool'//
})

event.shaped('iceandfire:dragonforge_lightning_input', [//电锻炉焰孔
'ACA',
'BDC',
'ABA'
], {
A: 'iceandfire:dragonforge_lightning_brick',//电龙砖块
B: 'twilightforest:fiery_ingot',//炽铁锭
C: 'minecraft:netherite_ingot',//下界合金锭
D: 'twilightforest:carminite'//神千铁矿石
})

event.shaped('enigmaticlegacy:enchantment_transposer', [//求知之书
'BDB',
'CAC',
'BEB'
], {
A: 'goety:magic_emerald',//觉醒绿宝石
B: 'goety:spirit_fabric',//魔法布料
C: 'irons_spellbooks:arcane_essence',//奥术源质
D: 'minecraft:amethyst_shard',//烈焰粉
E: 'minecraft:blaze_powder'//紫水晶
})

event.shaped('waystones:warp_stone', [//传送石头
'BCB',
'CAC',
'BCB'
], {
A: 'goety:magic_emerald',//觉醒绿宝石
B: 'irons_spellbooks:arcane_essence',//奥术源质
C: 'minecraft:blaze_powder'//紫水晶
})

event.shaped('enigmaticlegacy:xp_scroll', [//传送石头
'BCB',
'DAD',
'BDB'
], {
A: 'enigmaticlegacy:thicc_scroll',//空卷轴
B: 'irons_spellbooks:magic_cloth',//奥
D: 'minecraft:emerald_block',//绿宝石块
C: 'minecraft:nether_star'//下界之星
})

event.shaped('kubejs:chapter_axe_god', [//传送石头
'EFE',
'DAD',
'BCB'
], {
A: 'confluence:warrior_emblem',
B: 'mythicmetals:steel_ingot',
D: 'cataclysm:ancient_metal_ingot',
C: 'confluence:feral_claws',
F: 'confluence:shackle',
E: 'minecraft:netherite_ingot'
})

event.shaped('enigmaticdelicacy:infinisoil', [//无尽沃土
'BBB',
'BAB',
'BBB'
], {
A: 'enigmaticlegacy:infinimeal',//狂野
B: 'farmersdelight:rich_soil'//沃土
})

event.shaped('enigmaticdelicacy:infinisoil', [//再生
'ABC',
'B B',
'ABA'
], {
B: 'spelunkery:cinnabar',//朱砂
A: 'minecraft:iron_ingot',//铁
C: 'minecraft:diamond'//钻石
})

event.shaped('traveloptics:dark_gem_of_the_living_void', [//活体水晶
'DBD',
'CAC',
'BEB'
], {
A: 'terramity:iridescent_shard',//虹钻
B: 'alexscaves:pure_darkness',//黑暗
C: 'alexscaves:dark_tatters',//黑暗布料
D: 'alexscaves:vesper_wing',//蝙蝠翅膀
E: 'alexscaves:occult_gem'//神秘宝石
})

event.shaped('enigmaticlegacy:enchantment_transposer', [//求知之书
'BCB',
'CAC',
'BDB'
], {
A: 'enigmaticlegacy:enchantment_transposer',//求知之书
B: 'mythicmetals:enchanted_midas_gold_block',//万巴达金块
C: 'gobber2:gobber2_ingot_nether',//下戈伯
D: 'enigmaticaddons:pure_heart',//纯净之心
})

event.shaped('eeeabsmobs:ghost_steel_ingot', [//塞壬长笛
'DCD',
'BAB',
'DCD'
], {
A: 'goety:cursed_ingot',//诅咒钢
B: 'iceandfire:silver_ingot',//银
C: 'enigmaticlegacy:evil_essence',//邪恶精髓
D: 'twilightforest:knightmetal_ingot'//海莽鳞片
})

event.shaped('enigmaticlegacy:desolation_ring', [//荒芜之负
'DCD',
'BAB',
'EFE'
], {
A: 'alexscaves:pure_darkness',//纯粹黑暗
B: 'eeeabsmobs:ghost_steel_ingot',//幽冥钢锭
C: 'enigmaticlegacy:abyssal_heart',//深渊之心 
D: 'enigmaticlegacy:cosmic_heart',//寰宇之心
E: 'enigmaticlegacy:evil_essence',//邪恶精髓
F: 'enigmaticlegacy:evil_ingot'//极恶锭
})

event.shaped('enigmaticaddons:earth_promise', [//地灵之诺
' C ',
'BAD',
'FEF'
], {
A: 'enigmaticaddons:pure_heart',//纯净之心
B: 'mowziesmobs:sol_visage',//太阳面具
C: 'mowziesmobs:ice_crystal',//霜冻结晶
D: 'mowziesmobs:wrought_helmet',//精炼头盔
E: 'enigmaticaddons:quartz_ring',//魔法石英戒指
F: 'alexscaves:tectonic_shard'//地壳碎片
})

event.shaped('traveloptics:trident_of_the_eternal_maelstrom', [//海戟
' C ',
'ABA',
' A '
], {
A: 'traveloptics:hullbreaker_steel',//恐锭
B: 'iceandfire:tide_trident',//三叉戟
C: 'goety:abyss_crown',//深渊王冠
})



event.shaped('irons_spellbooks:scroll_forge', [//
' D ',
'CBC',
'BAB'
], {
A: 'born_in_chaos_v1:pileof_dark_metal',//暗金属

B: 'minecraft:crying_obsidian',//哭泣黑曜石

C: 'goety:ectoplasm',//魂质

D: 'goety:empty_focus'//聚晶
})

event.shaped('minecraft:enchanting_table', [//附魔台
'   ',
'CDC',
'BAB'
], {
A: 'minecraft:lapis_block',//青金石块

B: 'minecraft:crying_obsidian',//哭泣黑曜石

C: 'minecraft:diamond',//钻石

D: 'minecraft:book'//书
})


event.shaped('gobber2:gobber2_paxel', [//戈多
'CBD',
' A ',
' A '
], {
A: 'gobber2:gobber2_rod',//戈伯棒
B: 'gobber2:gobber2_block',//戈伯棒块
C: 'gobber2:gobber2_shovel',//戈伯斧
D: 'gobber2:gobber2_axe'//戈伯斧铲
})

event.shaped('terramity:iridium_pickaxe', [//yi
'CBC',
' A ',
' A '
], {
A: 'minecraft:stick',//木棍
B: 'enigmaticlegacy:evil_essence',//邪恶精髓
C: 'terramity:iridium'//依
})

event.shaped('gobber2:gobber2_paxel', [//戈多
'CBD',
' A ',
' A '
], {
A: 'gobber2:gobber2_rod',//戈伯棒
B: 'gobber2:gobber2_block',//戈伯棒块
C: 'gobber2:gobber2_shovel',//戈伯斧
D: 'gobber2:gobber2_axe'//戈伯斧铲
})

event.shapeless('terramity:raw_cosmilite', ['terramity:virentium_alloy_ingot'])

event.shapeless('terramity:raw_cosmilite', ['terramity:dimlite_ingot'])

event.shapeless('6x minecells:throwing_knife', ['minecraft:iron_nugget','mythicmetals:steel_ingot','irons_spellbooks:blood_vial','minecraft:iron_nugget'])

event.shapeless('3x minecraft:paper', ['minecraft:sugar_cane','minecraft:sugar_cane','minecraft:sugar_cane'])

event.shapeless('8x minecraft:paper', ['goety:ectoplasm','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand','minecraft:sand'])

event.shaped('gobber2:gobber2_paxel', [//戈多
' D ',
'CAC',
'ABA'
], {
A: 'gobber2:gobber2_rod',//戈伯棒
B: 'gobber2:gobber2_block',//戈伯棒块
C: 'gobber2:gobber2_axe',//戈伯斧
D: 'gobber2:gobber2_shovel'//戈伯斧铲
})
event.shaped('irons_spellbooks:amethyst_rapier', [//刺剑
' BD',
'BCB',
'AB '
], {
A: 'irons_spellbooks:weapon_parts',//武器零件
B: 'terramity:iridescent_shard',//彩钻
C: 'twilightforest:lich_trophy',//巫妖头颅
D: 'composite_material:amethyst_sword'//紫水晶剑
})

event.shaped('born_in_chaos_v1:death_totem', [//死灵图腾
'EDE',
'BAC',
'EDE'
], {
A: 'born_in_chaos_v1:shattered_skull',//裂纹头骨
B: 'born_in_chaos_v1:seedof_chaos',//混沌种子
C: 'born_in_chaos_v1:ethereal_spirit',//缥缈灵魂
D: 'minecraft:diamond',//钻石
E: 'goety:ectoplasm'//灵质
})

event.shaped('enigmaticlegacy:twisted_mirror', [//扭曲魔镜
'CBC',
'CAC',
' C '
], {
A: 'confluence:magic_mirror',//魔镜
B: 'enigmaticlegacy:twisted_heart',//扭曲之心
C: 'born_in_chaos_v1:dark_metal_ingot'//暗金属锭
})

event.shaped('confluence:workshop', [//工匠作坊
'CBC',
'CAC',
'CBC'
], {
A: 'minecraft:crafting_table',//工作台
B: 'minecraft:anvil',//铁砧
C: 'minecraft:red_wool'//红色羊毛
})

event.shaped('gobber2:gobber2_helmet_nether', [//下戈头盔
'AAA',
'ABA',
'   '
], {
A: 'gobber2:gobber2_ingot_nether',//下戈
B: 'minecraft:netherite_ingot'//下界合金锭
})

event.shaped('gobber2:gobber2_chestplate_nether', [//下戈胸甲
'ABA',
'AAA',
'AAA'
], {
A: 'gobber2:gobber2_ingot_nether',//下界戈锭
B: 'minecraft:netherite_ingot'//下界合金锭
})

event.shaped('gobber2:gobber2_leggings_nether', [//下戈护腿
'AAA',
'ABA',
'A A'
], {
A: 'gobber2:gobber2_ingot_nether',//下戈锭
B: 'minecraft:netherite_ingot'//下界合金锭
})

event.shaped('gobber2:gobber2_boots_nether', [//下戈靴子
'A A',
'ABA',
'   '
], {
A: 'gobber2:gobber2_ingot_nether',//下戈锭
B: 'minecraft:netherite_ingot'//下界合金锭
})

event.shaped('twilightforest:yeti_helmet', [//雪怪头盔
'AAA',
'ABA',
'   '
], {
A: 'twilightforest:alpha_yeti_fur',//雪怪皮
B: 'irons_spellbooks:ice_rune'//冰符文
})

event.shaped('twilightforest:yeti_chestplate', [//雪怪胸甲
'ABA',
'AAA',
'AAA'
], {
A: 'twilightforest:alpha_yeti_fur',//雪怪皮
B: 'irons_spellbooks:ice_rune'//冰符文
})

event.shaped('twilightforest:yeti_leggings', [//雪护腿
'AAA',
'ABA',
'A A'
], {
A: 'twilightforest:alpha_yeti_fur',//雪怪皮
B: 'irons_spellbooks:ice_rune'//冰符文
})

event.shaped('twilightforest:yeti_boots', [//雪怪鞋
'A A',
'ABA',
'   '
], {
A: 'twilightforest:alpha_yeti_fur',//雪怪皮
B: 'irons_spellbooks:ice_rune'//冰符文
})

event.shaped('blasphemouspatch:heavy_stone', [//暮初之石
' A ',
'ABA',
' A '
], {
A: 'minecraft:amethyst_shard',//紫水晶
B: 'minecraft:ender_pearl'//末影珍珠
})

event.shaped('enigmaticaddons:sanguinary_handbook', [//血腥狩猎手册
'ECE',
'BAB',
'EDE'
], {
A: 'enigmaticlegacy:hunter_guidebook',//野猎指南
B: 'enigmaticaddons:ichor_droplet',//灵液滴
C: 'alexscaves:pure_darkness',//纯粹黑暗
D: 'enigmaticlegacy:twisted_heart',//扭曲之心
E: 'born_in_chaos_v1:ethereal_spirit'//飘渺灵魂
})

event.shaped('kubejs:baonu', [//七宗罪
'BAB',
'BCB',
'BAB'
], {
A: 'born_in_chaos_v1:dark_metal_ingot',//暗金属
B: 'alexscaves:pure_darkness',//纯粹黑暗
C: 'enigmaticlegacy:twisted_heart'//扭曲之心
})

event.shaped('irons_spellbooks:amethyst_rapier', [//刺剑
'ADA',
'BCB',
'ADA'
], {
A: 'minecraft:leather',//皮革
B: 'minecraft:lapis_lazuli',//青金石
C: 'minecraft:diamond',//钻石
D: 'minecraft:quartz'//石英
})

event.shaped('kubejs:lunar_ring', [//
' DA',
'B B',
' B '
], {
A: 'minecraft:nether_star',//下界之星
B: 'terramity:moonstone_rock',//月岩
D: 'terramity:opaline_moonstone'//月蛋白
})

event.shaped('l2backpack:ender_pocket', [//
'ADA',
'BCB',
'ADA'
], {
A: 'minecraft:leather',
B: 'mythicmetals:durasteel_ingot',//
C: 'minecraft:ender_pearl',
D: 'minecraft:diamond'
})

event.shaped('born_in_chaos_v1:fire_dust', [//
' A ',
'ABA',
' A '
], {
A: 'minecraft:redstone_wire',
B: 'minecraft:blaze_powder'
})



	})