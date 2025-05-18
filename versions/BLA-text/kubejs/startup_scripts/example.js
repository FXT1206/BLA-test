StartupEvents.registry('mob_effect', e => {
    /**@type {Special.MobEffect[]} */

    e.create('minecraft:speed').modifyAttribute("minecraft:generic.movement_speed", "ModifyArmor", 0.08 , "multiply_base")
    e.create('l2complements:curse').modifyAttribute("minecraft:generic.max_health", "max_health", -0.02 , "multiply_base")
})