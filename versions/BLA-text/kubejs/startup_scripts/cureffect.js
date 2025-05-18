        StartupEvents.registry('item', event => {
            event
                .create('kubejs:chapter_axe_god')
                .displayName('§d狂战士之章')
                .texture("kubejs:item/chapter_axe_god") 
                .attachCuriosCapability(
                    CuriosJSCapabilityBuilder.create()
                        .onEquip((slotContext, oldStack, newStack) => { })
                        .onUnequip((slotContext, oldStack, newStack) => { })
                        .canEquip((slotContext, stack) => true)
                        .canUnequip((slotContext, stack) => true)

                        .addAttribute( "minecraft:generic.max_health", "ttk",8, 'addition')
                        .addAttribute( "minecraft:generic.armor", "ar",6, 'addition')
                        .addAttribute( "minecraft:generic.attack_damage", "ittk",0.2, 'multiply_base')
                        .addAttribute( "l2damagetracker:magic_damage", "iden",-0.2, 'multiply_base')
                        .modifyAttribute(attributeModificationContext => {

                            let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                            attributeModificationContext.modify(
                                "minecraft:generic.attack_speed","idefier", 0.18, 'multiply_base' ) })
                        .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)  
                )
                .maxStackSize(1)
                .tag("curios:accessory")
        })

        
StartupEvents.registry('item', event => {
    event
    .create('kubejs:lich_heart')
    .displayName('§6灾祸之心')
    .texture("kubejs:item/lich_heart") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "minecraft:generic.attack_damage",
                    "lich",
                    -0.2,
                    'multiply_base'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "l2damagetracker:magic_damage",
                        "lich",
                        0.12,
                        'multiply_base'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
        )
        .maxStackSize(1)
        .tag("curios:body")
})

StartupEvents.registry('item', event => {
    event
        .create('kubejs:sacred_heart')
        .displayName('§6神圣之心')
        .maxStackSize(1)
        .tag("curios:body")
        .texture("kubejs:item/sacred_heart") 
})

StartupEvents.registry('item', event => {
    event
    .create('kubejs:broken_bow')
    .displayName('§d机动脊髓')
    .texture("kubejs:item/broken_bow") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .modifySlotsTooltip((tooltips, stack) => tooltips)
                .addAttribute(
                    "attributeslib:draw_speed",
                    "speed",
                    0.25,
                    'multiply_base'
                )
                .modifyAttribute(attributeModificationContext => {
                    let { slotContext, UUID, stack, modifiers } = attributeModificationContext
                    attributeModificationContext.modify(
                        "attributeslib:experience_gained",
                        "iex",
                        0.08,
                        'multiply_base'
                    )
                })
                .canDrop((slotContext, source, lootingLevel, recentlyHit, stack) => true)
                .modifyAttributesTooltip((tooltips, stack) => tooltips)
        )
        .maxStackSize(1)
        .tag("curios:charm")
})

StartupEvents.registry('item', event => {
    event
    .create('kubejs:miners_relics')
    .displayName('§6矿工遗物')
    .texture("kubejs:item/miners_relics") 
        .attachCuriosCapability(
            CuriosJSCapabilityBuilder.create()
                .onEquip((slotContext, oldStack, newStack) => { })
                .onUnequip((slotContext, oldStack, newStack) => { })
                .canEquip((slotContext, stack) => true)
                .canUnequip((slotContext, stack) => true)
                .addAttribute(
                    "attributeslib:mining_speed","dff",0.2,'multiply_base'
                )
        )
        .maxStackSize(1)
        .tag("curios:charm")
})

StartupEvents.registry('item', event => {
    event
        .create('kubejs:curse')
        .displayName('§c暴食诅咒')
        .maxStackSize(1)
        .tag("curios:curse_ring")
        .texture("kubejs:item/curse") 
})

StartupEvents.registry('item', event => {
    event
        .create('kubejs:qiji')
        .displayName('§6奇迹物质')
        .maxStackSize(1)
        .texture("kubejs:item/qiji") 
})

