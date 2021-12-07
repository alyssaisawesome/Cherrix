
function article_antarctica() {

  document.getElementById("articles").style.display="none";
  document.getElementById("newarticlebutton").style.display="none";
  document.getElementById("yourarticles").style.display="none";
  document.getElementById("titlearticle").innerHTML = "Antarctica is melting"
  document.getElementById("imagearticle").src = "antarctica.jpg"
  document.getElementById("articlecontent").innerHTML = "Antarctica has experienced air temperature increases of 3°C in the Antarctic Peninsula. Although that might not seem very much, it is 5 times the mean rate of global warming as reported by the Intergovernmental Panel on Climate Change (IPCC). Over the past 50 years, the west coast of the Antarctic Peninsula has been one of the most rapidly warming parts of the planet. This warming is not only restricted to the land but can also be noted in the Southern Ocean. Upper ocean temperatures to the west of the Antarctic Peninsula have increased over 1°C since 1955. It has now been established that the Antarctic Circumpolar Current is warming more rapidly than the global ocean as a whole. Studying climate change in Antarctica is important because it enables scientists to predict more accurately future climate change and provide information to politicians and policy makers. The warming of the Antarctic Peninsula is causing changes to the physical and living environment of Antarctica. The distribution of penguin colonies has changed as the sea ice conditions alter. Melting of perennial snow and ice covers has resulted in increased colonisation by plants. A long-term decline in the abundance of Antarctic krill in the SW Atlantic sector of the Southern Ocean may be associated with reduced sea ice cover. Large changes have occurred in the ice cover of the Peninsula. Many glaciers have retreated and ice shelves that formerly fringed the Peninsula have been observed to retreat in recent years and some have collapsed completely."
  document.getElementById("ntrendingarticle").innerHTML = "#1 on trending"
  document.getElementById("articleshow").style.display="block";

}

function article_covid() {

  document.getElementById("articles").style.display="none";
  document.getElementById("yourarticles").style.display="none";
  document.getElementById("newarticlebutton").style.display="none";
  document.getElementById("titlearticle").innerHTML = "Covid-19"
  document.getElementById("imagearticle").src = "coronavirus-2.jpg"
  document.getElementById("articlecontent").innerHTML = "Coronaviruses are a type of virus. There are many different kinds, and some cause disease. A coronavirus identified in 2019, SARS-CoV-2, has caused a pandemic of respiratory illness, called COVID-19."
  document.getElementById("ntrendingarticle").innerHTML = "#2 on trending"
  document.getElementById("articleshow").style.display="block";

}

function article_poverty() {

  document.getElementById("articles").style.display="none";
  document.getElementById("yourarticles").style.display="none";
  document.getElementById("newarticlebutton").style.display="none";
  document.getElementById("titlearticle").innerHTML = ""
  document.getElementById("imagearticle").src = "sad.png"
  document.getElementById("articlecontent").innerHTML = ""
  document.getElementById("ntrendingarticle").innerHTML = "Sadly, this article is incompleted, and therefore no one can view it yet!"
  document.getElementById("articleshow").style.display="block";

}

function article_lgbtq() {

  document.getElementById("articles").style.display="none";
  document.getElementById("yourarticles").style.display="none";
  document.getElementById("newarticlebutton").style.display="none";
  document.getElementById("titlearticle").innerHTML = ""
  document.getElementById("imagearticle").src = "sad.png"
  document.getElementById("articlecontent").innerHTML = ""
  document.getElementById("ntrendingarticle").innerHTML = "Sadly, this article is incompleted, and therefore no one can view it yet!"
  document.getElementById("articleshow").style.display="block";

}

function article_flooding() {

  document.getElementById("articles").style.display="none";
  document.getElementById("yourarticles").style.display="none";
  document.getElementById("newarticlebutton").style.display="none";
  document.getElementById("titlearticle").innerHTML = ""
  document.getElementById("imagearticle").src = "sad.png"
  document.getElementById("articlecontent").innerHTML = ""
  document.getElementById("ntrendingarticle").innerHTML = "Sadly, this article is incompleted, and therefore no one can view it yet!"
  document.getElementById("articleshow").style.display="block";

}


function openNav() {
  document.getElementById("mySidebar").style.width = "250px";
  document.getElementById("main").style.marginLeft = "250px";
}


function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
} 


function new_article() {

  window.location="create.html";

}

function backtomain() {

  window.location="news.html";

}

function about() {
  window.location="about.html";
}

function profile() {
  window.location="profile.html";
}

function articles() {
  window.location="news.html";
}

function projects() {
  window.location="projects.html";
}