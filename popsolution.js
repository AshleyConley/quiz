//change 10 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which Bravolebrity is known for saying, "I'm not about the pasta"?"
choice1[1]="James Kennedy"
choice1[2]="Jax Taylor"
choice1[3]="Kristen Doute"
choice1[4]="Tom Schwartz"

question[2]=" Which Real Housewife is famous for her tagline, "Who gon' check me, boo?""
choice2[1]="Nene Leakes"
choice2[2]="Kenya Moore"
choice2[3]="Shereé Whitfield"
choice2[4]="Porsha Williams"

question[3]="Which Bravolebrity opened a restaurant named SUR (Sexy Unique Restaurant)?"
choice3[1]="Lisa Vanderpump"
choice3[2]="Bethenny Frankel"
choice3[3]="Ramona Singer"
choice3[4]="Heather Dubrow"

question[4]="Which of these Real Housewives stars is also a singer with singles like "Money Can’t Buy You Class"?"
choice4[1]="Lisa Rinna"
choice4[2]="Luann de Lesseps"
choice4[3]="Erika Jayne"
choice4[4]=" Melissa Gorga"

question[5]="Which Bravolebrity is known for her business Skinnygirl Cocktails?"
choice5[1]="Kyle Richards"
choice5[2]="Bethenny Frankel"
choice5[3]="Teresa Giudice"
choice5[4]=" Tamra Judge"

question[6]=" On Vanderpump Rules, who is Tom Sandoval’s business partner in their bar, TomTom?"
choice6[1]="Tom Schwartz"
choice6[2]="Jax Taylor"
choice6[3]="James Kennedy"
choice6[4]="Peter Madrigal"

question[7]="Which Real Housewife of Beverly Hills once held a diamond-studded gala for charity?"
choice7[1]=" Lisa Vanderpump"
choice7[2]="Kyle Richards"
choice7[3]="Yolanda Hadid"
choice7[4]="Dorit Kemsley"

question[8]="Which Bravolebrity is also known as "Bubba" on Vanderpump Rules?"
choice8[1]="Katie Maloney"
choice8[2]="Stassi Schroeder"
choice8[3]="Kristen Doute"
choice8[4]=" Lala Kent"

question[9]="Who was the first Real Housewife of Orange County?"
choice9[1]="Tamra Judge"
choice9[2]="Vicki Gunvalson"
choice9[3]="Heather Dubrow"
choice9[4]="Gretchen Rossi"

question[10]="Which Bravolebrity is known for their tagline, "The only thing better than having it all is having even more"?"
choice10[1]="Lisa Vanderpump"
choice10[2]="Erika Jayne"
choice10[3]="Teresa Giudice"
choice10[4]=" Heather Dubrow"


solution[1]="a"
solution[2]="c"
solution[3]="a"
solution[4]="b"
solution[5]="b"
solution[6]="a"
solution[7]="a"
solution[8]="a"
solution[9]="b"
solution[10]="d"

