let $Player = Java.loadClass("net.minecraft.world.entity.player.Player")
let $SuperpositionHandler = Java.loadClass("com.aizistral.enigmaticlegacy.handlers.SuperpositionHandler")
            StartupEvents.registry('item', event => {
                event
                .create('kubejs:baonu')
                .displayName('§c七宗罪§6[暴怒]')
                .texture("kubejs:item/baonu")
                    .attachCuriosCapability(
                        CuriosJSCapabilityBuilder.create()
                        .addAttribute("minecraft:generic.max_health", "1", -0.2, "multiply_base")
                        .addAttribute("minecraft:generic.armor", "2", -0.15, "multiply_base")
                        .addAttribute("minecraft:generic.armor_toughness", "5", -0.15, "multiply_base")
                        .addAttribute("minecraft:generic.attack_damage", "3", 0.3, "multiply_base")
                        .addAttribute("l2damagetracker:magic_damage", "4", 0.2, "multiply_base")
                    )
                    .maxStackSize(1)
                    .tag("curios:body")
            })

            StartupEvents.registry('item', event => {
                event
                .create('kubejs:baoshi')
                .displayName('§c七宗罪§6[暴食]')
                .texture("kubejs:item/baoshi")
                    .attachCuriosCapability(
                        CuriosJSCapabilityBuilder.create()
                        .addAttribute("minecraft:generic.max_health", "1", 1.0, "multiply_base")
                        .addAttribute("l2damagetracker:damage_reduction", "2", 0.4, "multiply_base")
                        .addAttribute("minecraft:generic.armor_toughnes", "5", 6.0, "multiply_base")
                    )
                    .maxStackSize(1)
                    .tag("curios:body")
            })

