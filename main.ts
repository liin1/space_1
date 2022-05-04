input.onButtonPressed(Button.A, function () {
    ship.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.AB, function () {
    bullet = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    basic.pause(200)
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, -1)
        basic.pause(200)
    }
    bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    ship.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let ship: game.LedSprite = null
ship = game.createSprite(2, 4)
basic.forever(function () {
	
})
