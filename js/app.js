// Enemies our player must avoid
class Enemy {
  constructor() {
    this.sprite = "images/enemy-bug.png";
    this.step = 101;
    this.jump = 83;
    this.startx = -this.step;
    this.starty = this.jump * 1 - 20;
    this.x = this.startx;
    this.y = this.starty;
  }

  // Update the enemy's position, required method for game
  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.step * 5) {
      this.x += this.step * dt;
    }
    else {
      this.x = this.startx;
    }
  }

  // Draw the enemy on the screen, required method for game
  render() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }
}

// Player Class
class Player {
  constructor() {
    this.sprite = "images/char-boy.png"; // sprite character
    this.step = 101;
    this.jump = 83;
    this.startx = this.step * 2;
    this.starty = this.jump * 5 - 20;
    this.x = this.startx; // x postion
    this.y = this.starty; // y position
  }

  update() {
    // let playerCollision = false;
    // while (!playerCollision) {
    //     playerCollision = true;
    // }
    // Check for winning the game
    // Did the player reach the last tile?
  }

  render() {
    // Draw the player sprite on the right x and y coordinate
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  }

  handleInput(input) {
    switch (input) {
      case "left":
        if (this.x > 0) {
          this.x -= this.step;
        }
        break;
      case "up":
        if (this.y > 0) {
          this.y -= this.jump;
        }
        break;
      case "right":
        if (this.x < this.step * 4) {
          this.x += this.step;
        }
        break;
      case "down":
        if (this.y < this.starty) {
          this.y += this.jump;
        }
        break;
    }
  }

  // resetHero()
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();
const bug1 = new Enemy();
const allEnemies = [];

allEnemies.push(bug1);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener("keyup", function(e) {
  var allowedKeys = {
    37: "left",
    38: "up",
    39: "right",
    40: "down"
  };

  player.handleInput(allowedKeys[e.keyCode]);
});
