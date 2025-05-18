EntityEvents.hurt(event =>{
    if((event.source.actual!=null)&&(event.entity.isLiving()))
    {
        if(event.source.actual.isPlayer())
        {
            let player = event.source.actual;
            let mainHandItem = player.mainHandItem;
            let level = 0;
            if(player.mainHandItem.id =='cataclysm:the_incinerator')
            {
                event.entity.potionEffects.add('cataclysm:blazing_brand',100,0);
                event.entity.potionEffects.add('l2complements:flame',100,1);

            }    
        }
    }
})

EntityEvents.hurt(event =>{
    if((event.source.actual!=null)&&(event.entity.isLiving()))
    {
        if(event.source.actual.isPlayer())
        {
            let player = event.source.actual;
            let mainHandItem = player.mainHandItem;
            let level = 0;
            if(player.mainHandItem.id =='kubejs:red')
            {
                event.entity.potionEffects.add('cataclysm:blazing_brand',100,0);
                event.entity.potionEffects.add('l2complements:flame',100,1);

            }    
        }
    }
})