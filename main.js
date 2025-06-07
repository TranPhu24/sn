$(document).ready(function () {
  const flame = $("#flame");
  const txt = $("h1");
  const body = $("body");

  setTimeout(function () {
    $("#candle").fadeIn(600);
  }, 5000);

  for (let i = 0; i < 5; i++) {
    const sparkle = $("<div>").addClass("sparkle");
    sparkle.css({
      left: `calc(50% - ${Math.random() * 2 - 1}em)`,
      bottom: `calc(0.15em + ${Math.random() * 2}em)`,
      "animation-delay": `${Math.random() * 1}s`
    });
    $("#top").append(sparkle);
  }

  flame.on("click", function () {
    flame.removeClass("burn").addClass("puff");
    $(".smoke").each(function () {
      $(this).addClass("puff-bubble");
    });
    $("#glow").remove();
    $(".sparkle").remove();
    txt.hide().html("Happy Birthday, My 🎉").addClass("celebrate-text").fadeIn(500);
    $("#candle").animate({ opacity: ".5" }, 100);
    body.addClass("glow-bg");

    // Add fireworks
    for (let i = 0; i < 8; i++) {
      const firework = $("<div>").addClass("firework");
      firework.css({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        "background-color": ["#ff4b6f", "#ffe566", "#6be7ff"][Math.floor(Math.random() * 3)],
        "animation-delay": `${Math.random() * 1.5}s`
      });
      body.append(firework);
    }

    // Add background stars
    for (let i = 0; i < 500; i++) {
      const star = $("<div>").addClass("star");
      star.css({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        "animation-delay": `${Math.random() * 2}s`
      });
      body.append(star);
    }

    let duration = 11000;
    let end = Date.now() + duration;

    setTimeout(function () {
      $("#letter-modal").addClass("open");
    }, 800);

    // Đóng modal khi bấm dấu X và hiển thị lại modal sau 1 giây
    $("#close-modal").off("click").on("click", function () {
      $("#letter-modal").removeClass("open");
    });

    (function frame() {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#ff4b6f', '#ffe566', '#6be7ff'],
        shapes: ['circle', 'square', 'star'],
        scalar: Math.random() * 0.5 + 0.5
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#ff4b6f', '#ffe566', '#6be7ff'],
        shapes: ['circle', 'square', 'star', 'heart'],
        scalar: Math.random() * 0.5 + 0.5
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  });
});