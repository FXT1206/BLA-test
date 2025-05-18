BlockEvents.rightClicked((event) => {
    const { block, player, hand, item } = event
    const { x, y, z } = block.pos

    /**
     * @param {string} blockid 方块
     * @param {string} itemid 手中物品
     * @param {string} entityid 召唤实体的名字
     * @param {boolean} isChangeCount 是否改变物品数量
     */
    function summonBoss(blockid, itemid, entityid, isChangeCount) {
        if (block.id == blockid && item.id == itemid) {
            let entity = block.createEntity(entityid)
            entity.setPosition(x, y, z)
            entity.spawn()
            if (isChangeCount) player.mainHandItem.count--
        }
    }
    // 判断是否为主手 不是主手就退出
    if (hand != 'MAIN_HAND') return
    //  如果在暮色 目标方块为风化死岩 物品是不朽符文 召唤不朽者 消耗材料
    if (event.level.dimension == "twilightforest:twilight_forest")
        summonBoss('twilightforest:weathered_deadrock', 'celestial_core:void_essence', 'eeeabsmobs:immortal', true)
    // 目标方块为苔藓块 物品是紫水晶巨蟹肉 召唤紫水晶巨蟹 消耗材料
        summonBoss('minecraft:moss_block', 'cataclysm:amethyst_crab_meat', 'cataclysm:amethyst_crab', true)
    // 目标方块为赋魂台 物品是皇家凝胶 召唤史莱姆王 消耗材料    
        summonBoss('goety:animator', 'blasphemouspatch:king_slime_gel', 'terra_entity:king_slime', true)
})

