
ServerEvents.recipes(event => {
  event.custom({
"type": "iceandfire:dragonforge",
"dragon_type": "fire",//火龙
"cook_time": 1000,
"input": {
  "item": "mythicmetals:hallowed_ingot"
},
"blood": {
  "item": "iceandfire:fire_dragon_blood"
},
"result": {
  "item": "iceandfire:dragonsteel_fire_ingot"
}
})
})

ServerEvents.recipes(event => {
  event.custom({
  "type": "iceandfire:dragonforge",
  "dragon_type": "ice",//冰龙
  "cook_time": 1000,
  "input": {
    "item": "mythicmetals:hallowed_ingot"
  },
  "blood": {
    "item": "iceandfire:ice_dragon_blood"
  },
  "result": {
    "item": "iceandfire:dragonsteel_ice_ingot"
  }
})
})


ServerEvents.recipes(event => {
  event.custom({
          "type": "iceandfire:dragonforge",
          "dragon_type": "lightning",//电龙
          "cook_time": 1000,
          "input": {
            "item": "mythicmetals:hallowed_ingot"
          },
          "blood": {
            "item": "iceandfire:lightning_dragon_blood"
          },
          "result": {
            "item": "iceandfire:dragonsteel_lightning_ingot"
          }
})
})//龙钢