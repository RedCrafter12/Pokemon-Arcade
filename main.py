tiles.set_current_tilemap(tilemap("""
    Level1
    """))
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
tiles.place_on_random_tile(mySprite, sprites.dungeon.dark_ground_center)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)