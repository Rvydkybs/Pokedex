# Pokedex

# Basic
 This is a pokedex website that shows pokemons and their images.
 I listed 10 items per page,and i added pagination to make page more effective to control.
 I imported a search bar top of the page to search pokemons by their names. If there is no such a pokemon,
 then it's gonna show you an animation about "not found". 
 For that, i used "Looti Files". Here is the website; https://lottiefiles.com/
 
 # api requests
 i searhed for pokemon fake api's before started the application. There was an api for pokemons that called;
 "Pokapi". But unfortunately ,this api is not working right now, so i found another api for fetching pokemon datas.
 So i used "https://pokeapi.co/api/v2/pokemon?limit=150" url .You can define your own limit for data length.
 
 # errors
 with that api, we can't split the string the right way for add the ".png" end of the url.
 So i choose a different api for images. Then i split the string and added ".png" end of them.
 Now it's working but if you want to see correct images, you should refresh the page when you browse between pages.
 
