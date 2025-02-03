document.addEventListener("DOMContentLoaded", function () {
  
    const divisionsData = [
        
  
    {
        diseaseName: '/Apple Blackrot', 
        imageSrc: '/static/Apple Blackrot.jpg',
        title: 'Apple Blackrot',
    }
    


,

    {
        diseaseName: '/Apple Cedarapple rust', 
        imageSrc: '/static/Apple Cedarapple rust.jpg',
        title: 'Apple  Cedarapple rust',
    }
    


,

    {
        diseaseName: '/Apple healthy',
        imageSrc: '/static/Apple healthy.jpg',
        title: 'Apple  healthy',
    }
    


,

    {
        diseaseName: '/Blueberry healthy',
        imageSrc: '/static/Blueberry healthy.jpg',
        title: 'Blueberry  healthy',
    }
    


,

    {
        diseaseName: '/Cherry Powderymildew', 
        imageSrc: '/static/Cherry Powderymildew.jpg',
        title: 'Cherry  Powderymildew',
    }
    
,

    {
        diseaseName: '/Cherry healthy', 
        imageSrc: '/static/Cherry healthy.jpg',
        title: 'Cherry healthy',
    }
    
,

    {
        diseaseName: '/Corn Cercospora leafspot Gray leafspot', 
        imageSrc: '/static/Corn Cercospora leafspot Gray leafspot.jpg',
        title: 'Corn Cercospora leafspot Gray leafspot',
    }
    
,

    {
        diseaseName: '/Corn Common rust',
        imageSrc: '/static/Corn Common rust.jpg',
        title: 'Corn Common rust ',
    }
    
,

    {
        diseaseName: '/Corn Northern LeafBlight', 
        imageSrc: '/static/Corn Northern LeafBlight.jpg',
        title: 'Corn Northern LeafBlight',
    }
    
,

    {
        diseaseName: '/Corn (maize) healthy', 
        imageSrc: '/static/Corn (maize) healthy.jpg',
        title: 'Corn (maize) healthy',
    }
    
,

    {
        diseaseName: '/Grape Blackrot', 
        imageSrc: '/static/Grape Blackrot.jpg',
        title: 'Grape Blackrot',
    }
    
,

    {
        diseaseName: '/Grape Esca(Black Measles)',
        imageSrc: '/static/Grape Esca(Black Measles).jpg',
        title: 'Grape Esca(Black Measles)',
    }
    
,

    {
        diseaseName: '/Grape Leafblight (IsariopsisLeaf Spot)', 
        imageSrc: '/static/Grape Leafblight (IsariopsisLeaf Spot).jpg',
        title: 'Grape Leafblight (IsariopsisLeaf Spot)',
    }
    
,

    {
        diseaseName: '/Grape healthy',
        imageSrc: '/static/Grape healthy.jpg',
        title: 'Grape healthy',
    }
    
,

    {
        diseaseName: '/Orange Haunglongbing(Citrus greening)',
        imageSrc: '/static/Orange Haunglongbing(Citrus greening).jpg',
        title: 'Orange Haunglongbing(Citrus greening)',
    }
    
,

    {
        diseaseName: '/Peach Bacterialspot',
        imageSrc: '/static/Peach Bacterialspot.jpg',
        title: 'Peach Bacterialspot',
    }
    
,

    {
        diseaseName: '/Peach healthy', 
        imageSrc: '/static/Peach healthy.jpg',
        title: 'Peach healthy',
    }
    


,

    {
        diseaseName: '/Pepper bell Bacterial spot',
        imageSrc: '/static/Pepper bell Bacterial spot.jpg',
        title: 'Pepper bell Bacterial spot',
    }
    
,

    {
        diseaseName: '/Pepper bell healthy',
        imageSrc: '/static/Pepper bell healthy.jpg',
        title: 'Pepper bell healthy',
    }
    
,

    {
        diseaseName:'/Potato Earlyblight', 
        imageSrc: '/static/Potato Earlyblight.jpg',
        title: 'Potato Earlyblight',
    }
    
,

    {
        diseaseName: '/Potato Lateblight',
        imageSrc: '/static/Potato Lateblight.jpg',
        title: 'Potato Lateblight',
    }
    
,

    {
        diseaseName: '/Potato healthy',
        imageSrc: '/static/Potato healthy.jpg',
        title: 'Potato healthy',
    }
    
,

    {
        diseaseName: '/Raspberry healthy',
        imageSrc: '/static/Raspberry healthy.jpg',
        title: 'Raspberry healthy',
    }
    
,

    {
        diseaseName: '/Soybean healthy', 
        imageSrc: '/static/Soybean healthy.jpg',
        title: 'Soybean healthy',
    }
    
,

    {
        diseaseName: '/Squash Powdery mildew',
        imageSrc: '/static/Squash Powdery mildew.jpg',
        title: 'Squash Powdery mildew',
    }
    
,

    {
        diseaseName: '/Strawberry Leafscorch', 
        imageSrc: '/static/Strawberry Leafscorch.jpg',
        title: 'Strawberry Leafscorch',
    }
    
,

    {
        diseaseName: '/Strawberry healthy',
        imageSrc: '/static/Strawberry healthy.jpg',
        title: 'Strawberry healthy',
    }
    
,

    {
        diseaseName: '/Tomato Bacterialspot', 
        imageSrc: '/static/Tomato Bacterialspot.jpg',
        title: 'Tomato Bacterialspot',
    }
    
,

    {
        diseaseName: '/Tomato Earlyblight', 
        imageSrc: '/static/Tomato Earlyblight.jpg',
        title: 'Tomato Earlyblight',
    }
    


,

    {
        diseaseName: '/Tomato Lateblight',
        imageSrc: '/static/Tomato Lateblight.jpg',
        title: 'Tomato Lateblight',
    }
    


,

    {
        diseaseName: '/Tomato LeafMold',
        imageSrc: '/static/Tomato LeafMold.jpg',
        title: 'Tomato LeafMold',
    }
    


,

    {
        diseaseName: '/Tomato Septorialeaf spot',
        imageSrc: '/static/Tomato Septorialeaf spot.jpg',
        title: 'Tomato Septorialeaf spot',
    }
    
,

    {
        diseaseName: '/Tomato Two-spotted spidermite',
        imageSrc: '/static/Tomato Two-spotted spidermite.jpg',
        title: 'Tomato Two-spotted spidermite',
    }
    
,

    {
        diseaseName: '/Tomato TargetSpot',
        imageSrc: '/static/Tomato TargetSpot.jpg',
        title: 'Tomato  TargetSpot',
    }
    
,

    {
        diseaseName: '/Tomato Yellow LeafCurl Virus',
        imageSrc: '/static/Tomato Yellow LeafCurl Virus.jpg',
        title: 'Tomato  Yellow LeafCurl Virus',
    }
    
,

    {
        diseaseName: '/Tomato mosaicvirus', 
        imageSrc: '/static/Tomato mosaicvirus.jpg',
        title: 'Tomato  mosaicvirus',
    }
    
,

    {
        diseaseName: '/Tomato healthy',
        imageSrc: '/static/Tomato healthy.jpg',
        title: 'Tomato healthy',
    }

];

const commonStyle = {
    display: "flex",
    alignItems: "center", 
 
    flexDirection: "row",  
};
const imageStyle = {
    flex: "0 0 auto", 
    marginRight: "20px", 

};

const textStyle = {
    flex: "1", 
    display: "inline", 
   
};
function createDivision(data) {
    const divisionContainer = document.getElementById("divisionContainer");

    const division = document.createElement('div');
    division.classList.add('division');
    division.setAttribute('data-disease-name', data.diseaseName);

  
    Object.assign(division.style, commonStyle);

    division.innerHTML = `
    <img src="${data.imageSrc}" alt="${data.title}" width="300" height="300"> <!-- Set width and height here -->
    <div class="division-content" style="${Object.entries(textStyle).map(([key, value]) => `${key}: ${value};`).join(' ')}">
        <h2>${data.title}</h2>
    </div>
    `;

   const section3 = document.getElementById("section3");
   section3.style.display = "none";

   division.addEventListener('click', () => {
    window.scrollTo({
        top: 400,
        behavior: 'smooth' 
    });
    const diseaseName = division.getAttribute('data-disease-name');
    const iframe = document.getElementById("iframe");
    iframe.style.display = commonStyle.display; 
    iframe.src = `/division/${encodeURIComponent(diseaseName)}`;

    section3.style.display = commonStyle.display;

    const section2 = document.getElementById("section2");
    section2.style.display = "none";

 
    backButton.style.display = commonStyle.display;
});

    return division;
}


divisionsData.forEach(data => {
    const division = createDivision(data);
    document.getElementById("divisionContainer").appendChild(division);
});


function goBack() {
    const iframe = document.getElementById("iframe");
    section3.style.display = 'none'; 

    // Hide the "Back" button
    backButton.style.display = "none";

    // Show section 2
    const section2 = document.getElementById("section2");
    section2.style.display = commonStyle.display;
    searchInput.value = "";

    // Show all divisions
    divisions.forEach(function (division) {
        division.style.display = commonStyle.display; 
    });
}

// Add a click event listener to the "Back" button
const backButton = document.getElementById("backButton");
backButton.addEventListener("click", goBack);


// Initially hide the iframe section and "Back" button
const iframe = document.getElementById("iframe");
iframe.style.display = "none";
backButton.style.display = "none";

// Slideshow functionality (assuming you have HTML elements with the "slides" class)
let slideIndex = 0;
showSlides();

function showSlides() {
    const slides = document.querySelectorAll('.slides');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 5000); // Change slide every 5 seconds
}

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const divisions = document.querySelectorAll(".division");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.toLowerCase();

    divisions.forEach(function (division) {
        const divisionText = division.innerText.toLowerCase();

        if (divisionText.includes(searchText)) {
            division.style.display = commonStyle.display; ;
        } else {
            division.style.display = "none";
        }
    });

    // Show the "Back" button when performing a search
    backButton.style.display = "block";
});


    const predictButton = document.getElementById("predictButton");
    predictButton.addEventListener("click", function () {
        // Redirect to the desired URL, in this case, "/"
        window.location.href = "/";
    });
});