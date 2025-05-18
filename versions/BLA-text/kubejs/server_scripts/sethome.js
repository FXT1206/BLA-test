ItemEvents.rightClicked(event => {
    let {player,player:{level,mainHandItem},server} = event
    let x = parseInt(player.getX());
    let y = parseInt(player.getY());
    let z = parseInt(player.getZ());
    
    if(mainHandItem.id == 'kubejs:home'
        && player.isCrouching()
        && level.isOverworld()){
            player.tell("§a正在生成别墅，请稍等")
            server.runCommandSilent(`place template kubejs:home ${x} ${y} ${z}`)
            mainHandItem.shrink(1)
        }else if(mainHandItem.id == 'kubejs:home'){
            player.tell("§c请先蹲下再使用")
        }
})