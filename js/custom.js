/**
 * Created by Alejandro on 11/07/2015.
 */

$(document).onload(
    $('.tooltip-demo').tooltip({
        selector: "[data-toggle=tooltip]",
        container: "body"
    }),
    calcAge()
);
function calcAge() {
    var birthday = new Date("July 24, 1991");
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    var age = Math.abs(ageDate.getUTCFullYear() - 1970);
    $("#age").html(age);
}