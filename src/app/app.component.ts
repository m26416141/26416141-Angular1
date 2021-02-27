import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  player = 1;
  row = 0;
  col = 0;
  count = 0;
  tampil = true;

  board = [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
  ];

  move(row, col){
    // console.log(row)
    // console.log(this.player)
    for (var i = 0; i <= 4; i++){
      for (var j = 0; j <= 4; j++){
        if (i == row && j == col){
          if (this.board[i][j] > 0){
            alert("sudah terisi");
            return;
          }
          else {
            this.board[i][j] += this.player;
          }
        }
        else {
          this.board[i][j] += 0;
        }
      }
    }
    // console.log(this.board)
    this.menang(this.player);
    if (this.player == 1){
      this.player = 2;
    }
    else if (this.player = 2) {
      this.player = 1;
    }
    // console.log(row, col);
  }

  menang(player) {
    for (var i = 0; i <= 4; i++){
      this.count = 0;
      for (var j = 0; j <= 4; j++){
        if (this.board[i][j] == player){
          this.count++;
          console.log(this.count);
        }
        // else {
        //   console.log("exit if")
        //   return;
        // }
      }
      if (this.count == 4){
        console.log(this.board);
        alert(player + " menang")
        this.board = [
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
        ]
        console.log(this.board);
      }
    }
    for (var i = 0; i <= 4; i++){
      this.count = 0;
      for (var j = 0; j <= 4; j++){
        if (this.board[j][i] == player){
          this.count++;
          console.log(this.count);
        }
      }
      if (this.count == 4){
        console.log(this.board);
        alert(player + " menang")
        this.board = [
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
          [0,0,0,0,0],
        ]
        console.log(this.board);
      }
    }
  }
}
