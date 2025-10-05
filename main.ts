controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    tiles.placeOnTile(mySprite, mySprite.tilemapLocation())
})
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`Level1`)
mySprite = sprites.create(img`
    f f f f f f f f f f f f f f f f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 f 1 1 1 f 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f 
    f f f f f f f f f f f f f f f f 
    `, SpriteKind.Player)
let location = 0
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundCenter)
tiles.setWallAt(tiles.getTileLocation(4, 2), true)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite)
