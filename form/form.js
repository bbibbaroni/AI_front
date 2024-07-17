$diabetes = document.getElementById('diabetes');
$vagetarian = document.getElementById('vegetarian');
$allerge = document.getElementById('allerge');
$hatefood = document.getElementById('hatefood');
$img = document.getElementById('contentsImg');

$diabetes.style.display="block";
function showVegetarian(){
    $diabetes.style.display="none";
    $vagetarian.style.display="block";
    $img.style.backgroundImage = "url('../images/form2-background.png')";
}
function showAllerge(){
    $vagetarian.style.display="none";
    $allerge.style.display="block";
    $img.style.backgroundImage = "url('../images/form3-background.png')";
}
function showHatefood(){
    $allerge.style.display="none";
    $hatefood.style.display="block";
    $img.style.backgroundImage = "url('../images/form4-background.png')";
}