const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload(){
}

function setup() {
	createCanvas(1600,1600);

	engine = Engine.create();
	world = engine.world;

	bob1 = new Bob (452,600,70);
	bob2 = new Bob (589,600,70);
	bob3 = new Bob (726,600,70);
	bob4 = new Bob (863,600,70);
	bob5 = new Bob (1000,600,70);

	roof = new Roof (700,100,900,100);
	ground = new Roof (700,1000,900,100);

    rope1 = new Rope (452,600,roof.body,bob1.body);
	rope2 = new Rope (589,600,bob2.body,roof.body);
	rope3 = new Rope (726,600,bob3.body,roof.body);
	rope4 = new Rope (863,600,bob4.body,roof.body);
	rope5 = new Rope (1000,600,bob5.body,roof.body);

    Engine.run(engine);  
}

function draw() {
  rectMode(CENTER);
  background(0);

  bob1.display();   
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  roof.display();
  ground.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function keyPressed() {
	if (keyCode === 32) {
	Matter.Body.applyForce(bob1.body,bob2.body,{x:-20,y:+30});
}		
}

/*

var Example = Example || {};

Example.newtonsCradle = function() {
    var Engine = Matter.Engine,
        Render = Matter.Render,
        Runner = Matter.Runner,
        Body = Matter.Body,
        Composites = Matter.Composites,
        MouseConstraint = Matter.MouseConstraint,
        Mouse = Matter.Mouse,
        World = Matter.World;

  var engine = Engine.create(),
        world = engine.world;

    var render = Render.create({
        element: document.body,
        engine: engine,
        options: {
            width: 800,
            height: 600,
            wireframes: false
        }
    });

    Render.run(render);

    var runner = Runner.create();
    Runner.run(runner, engine);

    var cradle = Composites.newtonsCradle(280, 100, 5, 30, 200);
    World.add(world, cradle);
    Body.translate(cradle.bodies[0], { x: -180, y: -100 });
    
    cradle = Composites.newtonsCradle(280, 380, 7, 20, 140);
    World.add(world, cradle);
    Body.translate(cradle.bodies[0], { x: -140, y: -100 });

    var mouse = Mouse.create(render.canvas),
        mouseConstraint = MouseConstraint.create(engine, {
            mouse: mouse,
            constraint: {
                stiffness: 0.2,
                render: {
                    visible: false
                }
            }
        });

    World.add(world, mouseConstraint);

    render.mouse = mouse;

    Render.lookAt(render, {
        min: { x: 0, y: 50 },
        max: { x: 800, y: 600 }
    });

    return {
        engine: engine,
        runner: runner,
        render: render,    
        canvas: render.canvas,
        stop: function() {
            Matter.Render.stop(render);
            Matter.Runner.stop(runner);
        }
    };
};

MatterTools.Demo.create({
  toolbar: {
    title: 'matter-js',
    url: 'https://github.com/liabru/matter-js',
    reset: true,
    source: true,
    fullscreen: true,
    exampleSelect: true
  },
  preventZoom: true,
  resetOnOrientation: true,
  examples: [
    {
      name: 'Newton\'s Cradle',
      id: 'newtonsCradle',
      init: Example.newtonsCradle,
      sourceLink: 'https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js'
    }
  ]
});
*/ 