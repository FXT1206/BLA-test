// 欢迎信息脚本
PlayerEvents.loggedIn(event => {
    let player = event.player;

    // 检查玩家的持久数据，判断是否首次登录
    if (!player.persistentData.hasLoggedInBefore) {
        // 发送欢迎消息
        player.tell('§b欢迎游玩§6MineBlasphemy[亵渎]整合包！');
        player.tell('§b整合包作者:§6FXT1206');
        player.tell('§b本整合包不会进行任何收费§6请注意维护自身利益!');
        player.tell('§b整合包官方QQ群713784391');
        player.tell('§b本整合包§4不准在未经许可的情况下进行任何转载!');
        player.tell('§b若发现未经许可转载请联系作者');
        player.tell('§b最后祝您游玩愉快!');
        // 设置玩家的持久数据，标记为已登录
        player.persistentData.hasLoggedInBefore = true;
    }
});
