tiles.setCurrentTilemap(tilemap`Level1`)
let mySprite = sprites.create(img`
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
tiles.placeOnRandomTile(mySprite, sprites.dungeon.darkGroundCenter)
tiles.setWallAt(tiles.getTileLocation(4, 2), true)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
