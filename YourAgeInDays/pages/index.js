function getAge(){
    var birthYear = prompt('What year were you born in');
    var currentYear = 2022;
    var inDays = (currentYear - birthYear)*365;
    var h1 = document.createElement('h5');
    var answer = document.createTextNode('you are ' + inDays + ' days old');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(answer);
    document.getElementById('result').appendChild(h1);


}

function reset(){
    document.getElementById('ageInDays').remove();
}