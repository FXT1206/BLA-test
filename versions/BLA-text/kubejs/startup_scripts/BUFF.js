StartupEvents.registry('mob_effect', e => {
    /**@type {Special.MobEffect[]} */
    let ids = [
      'born_in_chaos_v1:rotten_smell',
      'majruszsdifficulty:bleeding',
      'majruszsdifficulty:bleeding_immunity',
    ];
    // 移除
    ids.forEach(id=>{
      e.create(id).effectTick((ett, lv)=>ett.removeEffect(id))
    })
  })
