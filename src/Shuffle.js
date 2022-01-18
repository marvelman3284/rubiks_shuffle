export function shuffle(len) {
  var scramble = [];

  var faces = ['R', 'L', 'B', 'D', 'U', 'F'];
  var turns = ['1', '1', '1', '2'];

  for (let i = 0; i < len; i++) {

      var face = Math.random() > 0.5 ? faces[Math.floor(Math.random() * faces.length)] : faces[Math.floor(Math.random() * faces.length)] + '\'';

    if (face === last) {
      face = Math.random() > 0.5 ? faces[Math.floor(Math.random() * faces.length)] : faces[Math.floor(Math.random() * faces.length)] + '\'';
    }

    var turnNumber = turns[Math.floor(Math.random() * turns.length)];

    var rotation = face + turnNumber + " ";

    scramble.push(rotation);

    var last = face;
  }

  return scramble;
}
