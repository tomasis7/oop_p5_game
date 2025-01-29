class InteractionScreen extends GameScreen {
    returnToStartMenu: Button;
    constructor() {
        super();
        this.returnToStartMenu = new Button(
            "Return",
            createVector(width / 2, height -50),
            "#515151",
            createVector(200, 50),
            "#FFFFFF"
        );
    }

    update(): void {
        if(this.returnToStartMenu.isClicked()) {
            game.changeScreen(new Game());
        }
    }

    draw(): void {
        push()
        background("black");

        // Title
        fill("#45FF8C");
        imageMode(CENTER, CENTER);
        textAlign(CENTER, CENTER);
        textSize(32);
        textFont(customFont);
        text("HOW TO PLAY", width / 2, height / 2 -300);

        // Info about the entities
        fill("#FFFFFF");
        textSize(28);
        text("What to get and what to avoid in the game", width / 2, height / 2 -250);

        // Text about what to get and what to avoid
        fill("#CCCCCC");
        textSize(24);
        text("Power-ups", width / 2 -200, height / 2 -200);
        image(images.heart, width / 2 -330, height / 2 -160, 25, 25);
        text("= +1 Life", width / 2 -180, height / 2 -160);
        

        // Info and players
        fill("#FFFFFF");
        textSize(28);
        text("Use the following keys on you keyboard\nto navigate your snake in the game", width / 2, height / 2);
        
        fill("#00FFFF");
        text("Player 1", width / 2 -200, height / 2 +70);
        fill("#FF00FF");
        text("Player 2", width / 2 +200, height / 2 +70);

        // Arrow Controls
        fill("#FFFFFF");
        textSize(28);
        text("↑", width / 2 -200, height / 2 +140);
        text("← ↓ →", width / 2 -200, height / 2 +200);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 -200, height / 2 +140, 50);
        square(width / 2 -200, height / 2 +200, 50);
        square(width / 2 -140, height / 2 +200, 50);
        square(width / 2 -260, height / 2 +200, 50);

        // WASD Controls
        fill("#FFFFFF");
        textSize(28);
        text("W", width / 2 +200, height / 2 +140);
        text("A S D", width / 2 +200, height / 2 +200);
        noFill();
        strokeWeight(2);
        stroke(255);
        rectMode(CENTER);
        square(width / 2 +200, height / 2 +140, 50);
        square(width / 2 +200, height / 2 +200, 50);
        square(width / 2 +140, height / 2 +200, 50);
        square(width / 2 +260, height / 2 +200, 50);
        
        noStroke();
        this.returnToStartMenu.draw();
        pop();
    }
}