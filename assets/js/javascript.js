getData("https://dummyjson.com/products/categories");

function getData(myUrl) {
  if (myUrl) {
    fetch(myUrl)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let myApp = document.getElementById("myApp");

        let myHtml = "";

        data.forEach((categorie) => {
          myHtml += `<button onclick="myCategorie('${categorie.name}','${categorie.url}')">${categorie.name}</button>`;
        });
        myApp.innerHTML = myHtml;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  } else {
    console.error("no data found");
  }
}

function myCategorie(name, myUrl) {
  fetch(myUrl)
    .then((response) => {
      return response.json();
    })
    .then((categorieClicked) => {
      let sectionImg = document.getElementById("sectionImg");
      let imgHeader = document.getElementById("imgHeader");

      let myHeader = "";

      myHeader += `<h1>${name}</h1>`;

      imgHeader.innerHTML = myHeader;

      let myHtml = "";
      categorieClicked.products.forEach((arrayList) => {
        myHtml += `<img src="${arrayList.thumbnail}">`;
      });
      sectionImg.innerHTML = myHtml;
    });
}
