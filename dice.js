$(document).ready(() => {
    let faces = ["first", "second", "third", "fourth", "fifth", "sixth"];
    let face = faces[Math.floor(Math.random() * faces.length)];
    $("[class*='face'").click(() => {
        face = faces[Math.floor(Math.random() * faces.length)];
        $("[class*='face'").hide();
        $("[class*=" + face + "-face]").show();
    });
});