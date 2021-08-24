var nbPersonne = document.getElementsByClassName('nbPersonne');
var ingredient1 = document.getElementsByClassName('ingredient1');
var test = document.getElementsByClassName('test');
var test2 = document.getElementsByClassName('test2');
var test3 = document.getElementsByClassName('test3');
var test4 = document.getElementsByClassName('test4');
var test5 = document.getElementsByClassName('test5');
var test6 = document.getElementsByClassName('test6');
var ingredient2 = document.getElementsByClassName('ingredient2');
var ingredient3 = document.getElementsByClassName('ingredient3');
var ingredient4 = document.getElementsByClassName('ingredient4');
var ingredient5 = document.getElementsByClassName('ingredient5');
var ingredient6 = document.getElementsByClassName('ingredient6');
var niveau1 = document.getElementsByClassName('niveau1');
var niveau2 = document.getElementsByClassName('niveau2');
var niveau3 = document.getElementsByClassName('niveau3');
var niveau = document.getElementsByClassName('niveau');
var infoNiveau = document.getElementsByClassName('infoNiveau');
var PrixInit = document.getElementsByClassName('PrixInit');
var donneePrixAffiche = document.getElementsByClassName('donneePrixAffiche');



TotalIngredient();

function TotalIngredient()
{
for (var i = 0; i < test.length; i++)
{
test[i].innerHTML = nbPersonne[i].value * ingredient1[i].value;
test2[i].innerHTML = nbPersonne[i].value * ingredient2[i].value;
test3[i].innerHTML = nbPersonne[i].value * ingredient3[i].value;
test4[i].innerHTML = nbPersonne[i].value * ingredient4[i].value;
test5[i].innerHTML = nbPersonne[i].value * ingredient5[i].value;
test6[i].innerHTML = nbPersonne[i].value * ingredient6[i].value;
donneePrixAffiche[i].innerHTML = PrixInit[i].value * nbPersonne[i].value / 4;
setTimeout(TotalIngredient,10);
}
}


for (var i = 0; i < niveau.length; i++)
{
    if (niveau[i].value == 1)
    {
        niveau1[i].style.background = 'rgb(236, 144, 24)'
        infoNiveau[i].innerHTML = 'facile'
    }
    
    else if (niveau[i].value == 2)
    {
        niveau1[i].style.background = 'rgb(236, 144, 24)'        
        niveau2[i].style.background = 'rgb(236, 144, 24)'
        infoNiveau[i].innerHTML = 'moyen'
    }

    else if (niveau[i].value = 3)
    {
        niveau1[i].style.background = 'rgb(236, 144, 24)'
        niveau2[i].style.background = 'rgb(236, 144, 24)'
        niveau3[i].style.background = 'rgb(236, 144, 24)'
        infoNiveau[i].innerHTML = 'top chef'
    }


}



