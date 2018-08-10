// TODO:
// Add collision feature
// Reset the player if collision occurs
// Win game notification

// Enemies the player must avoid
class Enemy {
  constructor(x, y, speed) {
    this.sprite = "images/enemy-bug.png";
    this.speed = speed;
    this.step = 101;
    this.startx = -101;
    this.starty = y - 20;
    this.x = x;
    this.y = this.starty;
  }

  // Parameter: dt, a time delta between ticks
  update(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if (this.x < this.step * 5) {
      this.x += this.speed * dt;
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

  // resetHero() {}
}

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

const player = new Player();

// I decided to name them just to give me them a personality!
// Pacman's ghosts have personalities and names so why no!?
const ronny = new Enemy(-101, 83, 101);
const carol = new Enemy(101, 83, 101);
const alex = new Enemy(-101, 83 * 2, 101 * 3);
const casey = new Enemy(-101, 83 * 3, 101 * 2);
const allEnemies = [];

allEnemies.push(ronny, carol, alex, casey);

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
