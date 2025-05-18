StartupEvents.registry('minecraft:item', event => {
    event.create('kubejs:home', 'basic').tooltip("按住Shift加右键即可放置").unstackable().displayName("初始别墅")
})