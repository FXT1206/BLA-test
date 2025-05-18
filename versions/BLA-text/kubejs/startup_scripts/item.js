let $Player = Java.loadClass("net.minecraft.world.entity.player.Player")

StartupEvents.registry('item', event => {
    event
        .create('kubejs:solar_ring')
        .displayName('§6烈日之戒')
        .texture("kubejs:item/solar_ring") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)

                .addAttribute( "minecraft:generic.attack_damage", "identdd",0.15, 'multiply_base')
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)  
        )
        .maxStackSize(1)
        .tag("curios:ring")
}),

StartupEvents.registry('item', event => {
    event
        .create('kubejs:lunar_ring')
        .displayName('§b寒月之戒')
        .texture("kubejs:item/lunar_ring") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true) 
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "l2damagetracker:magic_damage",
                        "identifddddier",
                        0.15,
                        
                        'multiply_base'
                    )
                })
        )
        .maxStackSize(1)
        .tag("curios:ring")
})

StartupEvents.registry('item', event => {
    event
    .create('kubejs:ice_and_fire')
    .displayName('§6灼寒圣物')
    .texture("kubejs:item/iceandfire") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "li",
                    0.25,
                    'multiply_base'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "l2damagetracker:magic_damage",
                        "li",
                        0.25,
                        'multiply_base'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
        )
        .maxStackSize(1)
        .tag("curios:ring")
})

StartupEvents.registry('item', event => {
    event
    .create('kubejs:curse_sword')
    .displayName('§6固咒之刃')
    .texture("kubejs:item/curse_sword") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "attribute_extra:injury_limit",
                    "lizz",
                    0.25,
                    'multiply_base'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "minecraft:generic.max_health",
                        "liz",
                        -0.75,
                        'multiply_base'
                    )
                }    
            )
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
        )
        .maxStackSize(1)
        .tag("curios:charm")
})