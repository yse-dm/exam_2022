function R_Click(p_janken_r) {
    let janken = ['グー','チョキ','パー',];//"janken"のリストを作成します。
    let janken_r = Math.floor( Math.random() * 3);//Math.random() で乱数を作ります

    let p_janken = ['グー','チョキ','パー'];//"プレイヤーのjanken"のリストを作成します。
        //勝ち負けの判定機プログラムです
        if (janken_r === p_janken_r) {
            Result_end = "あいこです";
        } else if(p_janken_r === 0 && janken_r === 1) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 1 && janken_r === 2) {
            Result_end = "あなたの【勝ち】";
        }else if(p_janken_r === 2 && janken_r === 0) {
            Result_end = "あなたの【勝ち】";
        }else {
            Result_end = "あなたの【負け】";
        }

        //結果を表示するためのプログラムです
        document.getElementById("jankenpon").src="jan" + janken_r + ".png";
        document.getElementById("Rejan1").innerHTML = p_janken[p_janken_r] +"を選択しました。ジャンケンの結果は・・・？";
        document.getElementById("Rejan2").innerHTML = "相手は" + janken[janken_r] + Result_end;
        document.getElementById("jankenpon2").src="jan" + p_janken_r + ".png";
    }