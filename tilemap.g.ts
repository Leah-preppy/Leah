// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level2":
            case "level2":return tiles.createTilemap(hex`2000080001000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000006000000000000000000000000000000000000060000000000000000000000000000050005000000000000000000000500000000000000000005000000000000000004000400000000000000000500040400000000000000000400000000000000000000000000000000000005030000000000000000000000000000000000000000000000000000000000000303000000000000000000000000060000040000000005000400060000040000030303030303030303030303030303030303030303030303030303030303030303`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . 2 . 2 . . . . . . . . 
. . 2 2 . . . . . . . . 2 . . . . . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 2 . . . . . . 2 . . . . 2 . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.swamp.swampTile19,sprites.swamp.swampTile18,sprites.builtin.forestTiles10,sprites.dungeon.chestClosed,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`2000080000000000000000000000000000000000000000000000000000000000000000080000000000000000000000000000000000000900000000000000000000000000000009000000000000000000000000070000000000000000000000000000000000000000000000000000050000000004000000000000000007000000000700000700000000070000000004000000000000000000000004040400000000040000040000000004000000000400000000000000000000000909000007000000000700000404000000040000070000040909070000040000000000000400000900060102020202020202020202020202020202020202020202020202020202020203`, img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . . . . . . . 2 2 2 . . . . 2 . . 
2 . . . . 2 . . . . 2 . . . . . . . . . . . . . . . . . . . . . 
. . 2 2 . . . 2 . . . . . 2 . . . . . 2 . . . . . . 2 . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath7,sprites.castle.tilePath8,sprites.castle.tilePath9,sprites.builtin.brick,sprites.dungeon.chestOpen,sprites.castle.tilePath3,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.collectibleInsignia,sprites.dungeon.hazardLava1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
