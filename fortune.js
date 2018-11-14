$(function(){
  $("#bt1").on("click",function(){
    var yourname = $("#yourname").val();
    if (yourname === ""){
      $("#name1 span").html("名前を入力してください")
    } else {
      $("#name1").html(yourname + "さんの今日のパレットは!!");
      var random = Math.floor(Math.random() * 10);
      var messages = [
        "これ！今日はこのパレットで絵を描いてみましょう！:)",
        "コレです！今日はこのパレットで絵を描いてはいかがでしょう？",
        "これ！今日はこのパレットだけで絵やデザインをしてはいかがでしょう？",
        "これ！今日はこのパレットで絵を描いてみましょう！:)",
        "これ！今日はこのパレットだけで絵やデザインをしてはいかがでしょう？",
        "コレです！今日はこのパレットで絵を描いてはいかがでしょう？",
        "これ！今日はこのパレットで絵を描いてみましょう！:)",
        "コレです！今日はこのパレットで絵を描いてはいかがでしょう？",
        "これ！今日はこのパレットだけで絵やデザインをしてはいかがでしょう？",
        "これ！今日はこのパレットで絵を描いてみましょう！:)"
      ];
      $("#message").html(messages[random]);
      $("#main img").attr("src","./images/fortune" + random + ".png");
      $("#main img").animate({
          "width": "400px",
          "height": "400px",
          "opacity":"1"
      });
      $("#bt1").remove();
    }
  });
});
