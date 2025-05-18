ServerEvents.recipes(event => { 
event.custom(
{
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "minecraft:diorite"
    }
  ],
  "tool": {
    "tag": "forge:tools/pickaxes"
  },
  "result": [
    {
      "item": "minecraft:quartz",
      "count": 2
    }
  ]
}
)})

ServerEvents.recipes(event => { 
event.custom(
{
  "type": "farmersdelight:cutting",
  "ingredients": [
    {
      "item": "minecraft:netherite_ingot"
    }
  ],
  "tool": {
    "tag": "forge:tools/pickaxes"
  },
  "result": [
    {
      "item": "l2complements:explosion_shard",
      "count": 2
    }
  ]
}
)})
