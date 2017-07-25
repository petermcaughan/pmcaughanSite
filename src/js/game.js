/**
 * Created by peter_000 on 6/20/2017.
 */
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create, update:update });

var text;
var counter = 0;

function preload () {

    //  You can fill the preloader with as many assets as your game requires

    //  Here we are loading an image. The first parameter is the unique
    //  string by which we'll identify the image later in our code.

    //  The second parameter is the URL of the image (relative)
    game.load.image('einstein', '../../assets/einstein.jpg');
    game.load.image('background', '../../assets/background.jpg');
    game.load.spritesheet('robot', '../../assets/robosheet.bmp', 50, 100);

}

var einstein, robot, background;
var text, cursors;
var facingLeft = false;
function create() {

    //  This creates a simple sprite that is using our loaded image and
    //  displays it on-screen and assign it to a variable
    background = game.add.tileSprite(0,0,2521,790, 'background');
    background.scale.setTo(.7,.7);
    game.world.setBounds(0, 0, 1765, 553);
    game.physics.startSystem(Phaser.Physics.ARCADE);
    cursors = game.input.keyboard.createCursorKeys();

    robot = game.add.sprite(200,100,'robot');
    robot.animations.add('right', [10,11,12,13,14,15,16], 10, true);

    game.physics.enable(robot, Phaser.Physics.ARCADE);
    robot.body.collideWorldBounds=true;


    //  Moves the image anchor to the middle, so it centers inside the game properly
    robot.anchor.set(0.5);


    text = game.add.text(250, 16, '', { fill: '#ffffff' });


}

function update(){

    robot.animations.play('right');
    game.camera.x = robot.x-100;
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT))
    {
        if (!facingLeft){
            robot.scale.x *= -1;
            robot.x += 10;
        }
        facingLeft = true;
        robot.x -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT))
    {
        if (facingLeft){
            robot.scale.x *= -1;
            robot.x -= 10;
        }
        facingLeft = false;
        robot.x += 4;
    }

    if (game.input.keyboard.isDown(Phaser.Keyboard.UP))
    {
        robot.y -= 4;
    }
    else if (game.input.keyboard.isDown(Phaser.Keyboard.DOWN))
    {
        robot.y += 4;
    }




}
function listener () {

    counter++;
    text.text = "You clicked " + counter + " times!";

}