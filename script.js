var text = ["Deal with your problems before they deal with your happiness","In order to succeed, we must first believe that we can","A creative man is motivated by the desire to achieve, not by the desire to beat others","Life is 10% what happens to you and 90% how you react to it","Aim for the moon. If you miss, you may hit a star","Knowing is not enough; we must apply. Willing is not enough; we must do"];
$(document).ready(function(){
  $(".btn-primary").click(function(){
    i = Math.floor(Math.random()*6);
    document.getElementById("quote").innerHTML=
      text[i];
  });
  $(".btn-info").click(function(){
   
   url ="https://twitter.com/intent/tweet?text=" ;
    url += text[i];
    window.open(url,'_blank');
  });
});
