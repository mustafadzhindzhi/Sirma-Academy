Имаме 2 варианта за хандълвне на евенти - единия през хтмл атрибута, който е по стария начин, но не е препоръчителен.

Евент лисънър и евент хандлер са заменими думи, по принцип хендлър е функция, която се изпълнява когато се тригърне евент. Или функцията, която изпълняваме когато потребителя натисне върху елемента.

oncontextmenu - това е когато натиснем с дясно копче на мишката върху елемента
onmouseover - когато курсора на мишката е отгоре
onmouseout - това когато курсора излезе от елемента. Тези двете са mouse hover
onmousedown  - нужно е само да натиснем вътре в елемента
onmouseup - да пуснем копчето на мишката докато се намираме вътре в елемента
onmousemoove - мишката ни е на елемента и започваме да я мърдаме така задействаме евента. 

Върху един елемент мога да имам различни на брой евенти, за които да слушам. Може да са няколко действия, при влизане, излизане, натискане, дърпане и т.н. Един елемент може да има много евент хендлъри за различни евенти. 

Вторият начин е през dom пропъртита. DOM - обектна репрезентация на елементите, които имаме на екрана. Всяка атрибут и стойност влизат като ключ и стойност, вътре в обектната репрезентация.
Имаме и 3ти вариант, който е произлязъл от неволята. Досега в предишните 2 не може да имаме 2 хендлъра за онлик, поради самия факт, че те са обектни репрезентации няма как да имам в обекта 2 пропъртита с едно и също име, така презаписваме само последното. 

на addEventListenet като първи параметър му казваме за кой евент искам да слуша и като втори параметър функцията, хендлъра, който да се изпъни когато дойде тригъра на този евент. Тя има и още една 3-та, която е обект, на която може да му подаваме 3 стойности. дали да се изпълни само веднъж и след това да се прамхне, capture е втория и третия е passive, който ако го зададем на тру няма да извика preventDefault метода.

ако кажем, че onclick = null ние вече нямаме хендлър и нищо няма да се изпълнява върху кутийката. При addEventListener ние не можем толкова лесно да я премахне, за да може да я премахнем е нужно да използваме remooveEventListener, който трябва да отговаря на евентлисънура, който сме добавили. remooveEvent трябва да има същата функция, която е дадена на addEventListener и евентите трябва да отговарят. 

Когато изпълняваме евент получаваме евент обджект, който ни казва какво се е случило, къде, от кого. 

В по-голямата част от случаите информацията която ни интересува е таргет, върху кого сме тригърнали евента, къде се намираме, кой бутон сме натиснали, дали сме натиснали cntr c или shift.

preventDefault - спира тяхното по съдържание. 

Обобщение: имаме 3 вариант за закачане на евент хендлър - през хтмл атрибута, през дом пропъртитата и през метода addEventListenet, като с add.. добаяме с removeEventL... премахваме евент лисънири, като функцията трябва да бъде една и съща. ХТМЛ атрибутите и дом атрибутите почти не се използват, много рядко. Но в идеалния свят ще си използваме адд евент лисънъра. Изпълнявайки един евент ние получаваме евент обджект, от който можем да получим информация какво се е случило, къде, кога, потребителя колко се е наклонил наляво като е натискал мишката. С аддевентлисънира може да имаме повече от един хендлър за един евент, докато с другите това няма как да се случи. 

Евентите имат фази - когато се случи един евен първо се изпълнява неговия хендлър после хендлъра на родителя, след това на прародителя и т.н. докато не стигнем до хтмл-а. Първата фаза е bubеling, натискам един елемент и след това по пътя на всеки един родител тригървам хендлърите за този евент. Може да получим евен таргет който ни казва аз върху кого съм натиснал за да тръгърна евента. 
Capturing - работи на следния принцип, натискаме върху b тага от своя страна започва един процес, който минава през window документа, хтмл-а през бодито, дива параграфа и тогава стига до <b>. Тук идва втората фаза от евентите, които се наричат таргетиране, на тази фаза елемента е стигнал до мястото където сме го тригърнали. След като вземем тази информация взимаме бъбълинга, който връща обратното. Ако искаме да минаваме през реда през който минават през capturing фазата е нужно да им дам capture:true, противен случай си работим с бъбъл, което е и най-правилното. 


Модули - да разбием кода си на малки парченца, наречени модули. Модулът може да съдържа в себе си библиотека, клас, функция, някакви променливи, константни стойности. Той държи в себе си js информация, която може да използваме там където ни е необходимо. За node js стандартна е common js. Импорта ни позволява да вкараме фунцкионалност от друг модул, а експорт ни дава възможността да разкрием тази функционалност към други модули за да бъде импортната. Модулите работят само под http and htthps. 
