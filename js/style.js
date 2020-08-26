function MouseEvents(cards) {
    var card = "[data-select='card']:nth-child(" + cards + ")",
        buy = "[data-snap='cardBtn']",
        title = "[data-exchange='titleDesc']",
        footer = "[data-exchange='cardFooter']",
        i = $(card).find(title).text(),
        a,
        n = !1;
    if ($(card).on("click", $(buy), function(cards) {
        if (cards.preventDefault(), 0 == n) {
            n = !0, $(this).addClass("select"), a = $(this).find(footer).children().detach();

            $(this).find(footer).text($(this).find(footer).data("text"))
        } else
            n = !1, $(this).removeClass("select").removeClass("approves"), $(this).find(footer).text("").append(a), $(this).find(title).text(i)
    }), $(card).on("mouseleave", function() {
        1 == n && $(this).addClass("approves").find(title).text("Котэ не одобряет?")
    }),
        1 == $(card).hasClass("select")) {
            $(card).off("click").find(s).html("Печалька, " + $(card).find("[data-get='descFilling']").text() + " закончился.")
        }
}
for (var cards = $("[data-select='card']").length, i = 1; i <= cards; i++)
    MouseEvents(i);

