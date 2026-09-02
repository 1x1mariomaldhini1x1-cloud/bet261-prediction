function calculerPrediction() {
    let c1 = parseFloat(document.getElementById('c1').value);
    let cx = parseFloat(document.getElementById('cx').value);
    let c2 = parseFloat(document.getElementById('c2').value);

    if (!c1 || !cx || !c2 || c1 <= 0 || cx <= 0 || c2 <= 0) {
        alert("Azafady, ampidiro tsara ny côte 3!");
        return;
    }

    // Calcul des probabilités brutes
    let raw1 = 1 / c1;
    let rawX = 1 / cx;
    let raw2 = 1 / c2;
    let total = raw1 + rawX + raw2;

    // Normalisation en % (enlève la marge du bookmaker)
    let p1 = Math.round((raw1 / total) * 100);
    let px = Math.round((rawX / total) * 100);
    let p2 = Math.round((raw2 / total) * 100);

    // Affichage des pourcentages et barres
    document.getElementById('p1').innerText = p1;
    document.getElementById('px').innerText = px;
    document.getElementById('p2').innerText = p2;

    document.getElementById('b1').style.width = p1 + '%';
    document.getElementById('bx').style.width = px + '%';
    document.getElementById('b2').style.width = p2 + '%';

    // Algorithme pour estimer le Score Exact
    let score = "";
    let conseil = "";

    if (p1 > 50) {
        score = "2 - 0 na 2 - 1";
        conseil = "Victoire 1 na Over 1.5";
    } else if (p2 > 50) {
        score = "0 - 2 na 1 - 2";
        conseil = "Victoire 2 na Over 1.5";
    } else if (px > 33) {
        score = "1 - 1 na 0 - 0";
        conseil = "1X na X2 (Double Chance)";
    } else if (p1 > p2) {
        score = "1 - 0 na 2 - 1";
        conseil = "1X (Double Chance)";
    } else {
        score = "0 - 1 na 1 - 2";
        conseil = "X2 (Double Chance)";
    }

    document.getElementById('scorePred').innerText = score;
    document.getElementById('conseilPred').innerText = conseil;

    // Afficher les résultats
    document.getElementById('results').style.display = "block";
}