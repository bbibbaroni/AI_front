$diabetes = document.getElementById('diabetes');
$vagetarian = document.getElementById('vegetarian');
$allerge = document.getElementById('allerge');
$hatefood = document.getElementById('hatefood');

$diabetes.style.display="block";
function showVegetarian(){
    $diabetes.style.display="none";
    $vagetarian.style.display="block";
}
function showAllerge(){
    $vagetarian.style.display="none";
    $allerge.style.display="block";
}
function showHatefood(){
    $allerge.style.display="none";
    $hatefood.style.display="block";
}