let btns = document.getElementsByClassName('review');

let stars = document.getElementsByClassName('fas');

let prev_def = (event) => {
    event.preventDefault();
}


for (x of btns) {
    x.addEventListener('click', prev_def);
}



// changing stars background
let skill_div = document.getElementById('skill');
let skill_div_stars = skill_div.getElementsByTagName('button');
var skill_rating_inText = document.querySelector('.ratin_overview_text_skill');

//availability div
let availability_div = document.getElementById('availability');
let availability_div_stars = availability_div.getElementsByTagName('button');
var availability_rating_inText = document.querySelector('.availability_rating_inText');

//communicatin div
let communication_div = document.getElementById('communication');
let communication_div_stars = communication_div.getElementsByTagName('button');
var communication_rating_inText = document.querySelector('.communication_rating_inText'); 


//co-operation div
let cooperation_div = document.getElementById('cooperation');
let cooperation_div_stars = cooperation_div.getElementsByTagName('button');
var cooperation_rating_inText = document.querySelector('.cooperation_rating_inText');

//Quality of work div
let quality_work_div = document.getElementById('quality_work');
let quality_work_div_stars = quality_work_div.getElementsByTagName('button');
var quality_rating_inText = document.querySelector('.quality_rating_inText');


//skill stars
for (let i = 0; i < skill_div_stars.length; i++) {


    if (i == 0) {
        skill_div_stars[0].addEventListener('mouseover', function () {
            this.style.color = 'yellow';
            skill_rating_inText.innerHTML = "Very Bad!";
            skill_rating_inText.style.color = "red";
        });
        skill_div_stars[0].addEventListener('mouseout', function () {
            this.style.color = 'black';
            skill_rating_inText.innerHTML = '';
        });
    }

    if (i == 1) {
        skill_div_stars[1].addEventListener('mouseover', function () {
            skill_div_stars[0].style.color = 'yellow';
            skill_div_stars[1].style.color = 'yellow';
            skill_rating_inText.innerHTML = "Bad!";
            skill_rating_inText.style.color = 'red';
        });
        skill_div_stars[1].addEventListener('mouseout', function () {
            skill_div_stars[0].style.color = 'black';
            skill_div_stars[1].style.color = 'black';
            skill_rating_inText.innerHTML = '';
        });
    }

    if (i == 2) {
        skill_div_stars[2].addEventListener('mouseover', function () {
            skill_div_stars[0].style.color = 'yellow';
            skill_div_stars[1].style.color = 'yellow';
            skill_div_stars[2].style.color = 'yellow';
            skill_rating_inText.innerHTML = "Good!";
            skill_rating_inText.style.color = 'Green';
        });
        skill_div_stars[2].addEventListener('mouseout', function () {
            skill_div_stars[0].style.color = 'black';
            skill_div_stars[1].style.color = 'black';
            skill_div_stars[2].style.color = 'black';
            skill_rating_inText.innerHTML = '';
        });
    }

    if (i == 3) {
        skill_div_stars[3].addEventListener('mouseover', function () {
            skill_div_stars[0].style.color = 'yellow';
            skill_div_stars[1].style.color = 'yellow';
            skill_div_stars[2].style.color = 'yellow';
            skill_div_stars[3].style.color = 'yellow';
            skill_rating_inText.innerHTML = "Very Good!";
            skill_rating_inText.style.color = 'Green';
        });
        skill_div_stars[3].addEventListener('mouseout', function () {
            skill_div_stars[0].style.color = 'black';
            skill_div_stars[1].style.color = 'black';
            skill_div_stars[2].style.color = 'black';
            skill_div_stars[3].style.color = 'black';
            skill_rating_inText.innerHTML = '';
        });
    }

    if (i == 4) {
        skill_div_stars[4].addEventListener('mouseover', function () {
            skill_div_stars[0].style.color = 'yellow';
            skill_div_stars[1].style.color = 'yellow';
            skill_div_stars[2].style.color = 'yellow';
            skill_div_stars[3].style.color = 'yellow';
            skill_div_stars[4].style.color = 'yellow';
            skill_rating_inText.innerHTML = "The Best!";
            skill_rating_inText.style.color = 'Green';
        });
        skill_div_stars[4].addEventListener('mouseout', function () {
            skill_div_stars[0].style.color = 'black';
            skill_div_stars[1].style.color = 'black';
            skill_div_stars[2].style.color = 'black';
            skill_div_stars[3].style.color = 'black';
            skill_div_stars[4].style.color = 'black';
            skill_rating_inText.innerHTML = '';
        });
    }


}

//availability stars
for (let i = 0; i < availability_div_stars.length; i++) {


    if (i == 0) {
        availability_div_stars[0].addEventListener('mouseover', function () {
            this.style.color = 'yellow';
            availability_rating_inText.innerHTML = 'Very Bad!';
            availability_rating_inText.style.color = 'red';
        });
        availability_div_stars[0].addEventListener('mouseout', function () {
            this.style.color = 'black';
            availability_rating_inText.innerHTML = '';
        });
    }

    if (i == 1) {
        availability_div_stars[1].addEventListener('mouseover', function () {
            availability_div_stars[0].style.color = 'yellow';
            availability_div_stars[1].style.color = 'yellow';
            availability_rating_inText.innerHTML = 'Bad!';
            availability_rating_inText.style.color = 'red';
        });
        availability_div_stars[1].addEventListener('mouseout', function () {
            availability_div_stars[0].style.color = 'black';
            availability_div_stars[1].style.color = 'black';
            availability_rating_inText.innerHTML = '';
        });
    }

    if (i == 2) {
        availability_div_stars[2].addEventListener('mouseover', function () {
            availability_div_stars[0].style.color = 'yellow';
            availability_div_stars[1].style.color = 'yellow';
            availability_div_stars[2].style.color = 'yellow';
            availability_rating_inText.innerHTML = 'Good!';
            availability_rating_inText.style.color = 'Green';
        });
        availability_div_stars[2].addEventListener('mouseout', function () {
            availability_div_stars[0].style.color = 'black';
            availability_div_stars[1].style.color = 'black';
            availability_div_stars[2].style.color = 'black';
            availability_rating_inText.innerHTML = '';
        });
    }

    if (i == 3) {
        availability_div_stars[3].addEventListener('mouseover', function () {
            availability_div_stars[0].style.color = 'yellow';
            availability_div_stars[1].style.color = 'yellow';
            availability_div_stars[2].style.color = 'yellow';
            availability_div_stars[3].style.color = 'yellow';
            availability_rating_inText.innerHTML = 'Verry Good!';
            availability_rating_inText.style.color = 'Green';
        });
        availability_div_stars[3].addEventListener('mouseout', function () {
            availability_div_stars[0].style.color = 'black';
            availability_div_stars[1].style.color = 'black';
            availability_div_stars[2].style.color = 'black';
            availability_div_stars[3].style.color = 'black';
            availability_rating_inText.innerHTML = '';
        });
    }

    if (i == 4) {
        availability_div_stars[4].addEventListener('mouseover', function () {
            availability_div_stars[0].style.color = 'yellow';
            availability_div_stars[1].style.color = 'yellow';
            availability_div_stars[2].style.color = 'yellow';
            availability_div_stars[3].style.color = 'yellow';
            availability_div_stars[4].style.color = 'yellow';
            availability_rating_inText.innerHTML = 'The Best!';
            availability_rating_inText.style.color = 'Green';
            
        });
        availability_div_stars[4].addEventListener('mouseout', function () {
            availability_div_stars[0].style.color = 'black';
            availability_div_stars[1].style.color = 'black';
            availability_div_stars[2].style.color = 'black';
            availability_div_stars[3].style.color = 'black';
            availability_div_stars[4].style.color = 'black';
            availability_rating_inText.innerHTML = '';
        });
    }


}

//communication stars
for (let i = 0; i < communication_div_stars.length; i++) {


    if (i == 0) {
        communication_div_stars[0].addEventListener('mouseover', function () {
            this.style.color = 'yellow';
            communication_rating_inText.innerHTML = "Verry Bad!";
            communication_rating_inText.style.color = "red";
        });
        communication_div_stars[0].addEventListener('mouseout', function () {
            this.style.color = 'black';
            communication_rating_inText.innerHTML = "";
        });
    }

    if (i == 1) {
        communication_div_stars[1].addEventListener('mouseover', function () {
            communication_div_stars[0].style.color = 'yellow';
            communication_div_stars[1].style.color = 'yellow';
            communication_rating_inText.innerHTML = "Bad!";
            communication_rating_inText.style.color = "red";
        });
        communication_div_stars[1].addEventListener('mouseout', function () {
            communication_div_stars[0].style.color = 'black';
            communication_div_stars[1].style.color = 'black';
            communication_rating_inText.innerHTML = "red";
        });
    }

    if (i == 2) {
        communication_div_stars[2].addEventListener('mouseover', function () {
            communication_div_stars[0].style.color = 'yellow';
            communication_div_stars[1].style.color = 'yellow';
            communication_div_stars[2].style.color = 'yellow';
            communication_rating_inText.innerHTML = "Good!";
            communication_rating_inText.style.color = "green";
        });
        communication_div_stars[2].addEventListener('mouseout', function () {
            communication_div_stars[0].style.color = 'black';
            communication_div_stars[1].style.color = 'black';
            communication_div_stars[2].style.color = 'black';
            communication_rating_inText.innerHTML = "";
        });
    }

    if (i == 3) {
        communication_div_stars[3].addEventListener('mouseover', function () {
            communication_div_stars[0].style.color = 'yellow';
            communication_div_stars[1].style.color = 'yellow';
            communication_div_stars[2].style.color = 'yellow';
            communication_div_stars[3].style.color = 'yellow';
            communication_rating_inText.innerHTML = "Very Good!";
            communication_rating_inText.style.color = "green";
        });
        communication_div_stars[3].addEventListener('mouseout', function () {
            communication_div_stars[0].style.color = 'black';
            communication_div_stars[1].style.color = 'black';
            communication_div_stars[2].style.color = 'black';
            communication_div_stars[3].style.color = 'black';
            communication_rating_inText.innerHTML = "";
        });
    }

    if (i == 4) {
        communication_div_stars[4].addEventListener('mouseover', function () {
            communication_div_stars[0].style.color = 'yellow';
            communication_div_stars[1].style.color = 'yellow';
            communication_div_stars[2].style.color = 'yellow';
            communication_div_stars[3].style.color = 'yellow';
            communication_div_stars[4].style.color = 'yellow';
            communication_rating_inText.innerHTML = "The Best!";
            communication_rating_inText.style.color = "green";
        });
        communication_div_stars[4].addEventListener('mouseout', function () {
            communication_div_stars[0].style.color = 'black';
            communication_div_stars[1].style.color = 'black';
            communication_div_stars[2].style.color = 'black';
            communication_div_stars[3].style.color = 'black';
            communication_div_stars[4].style.color = 'black';
            communication_rating_inText.innerHTML = "";
        });
    }


}

//co-operation div
for (let i = 0; i < cooperation_div_stars.length; i++) {


    if (i == 0) {
       cooperation_div_stars[0].addEventListener('mouseover', function () {
                this.style.color = 'yellow';
                cooperation_rating_inText.innerHTML = "Verry Bad!";
                cooperation_rating_inText.style.color = "red";
           
            });
       cooperation_div_stars[0].addEventListener('mouseout', function () {
                this.style.color = 'black';
                cooperation_rating_inText.innerHTML = "";
            });
    }

    if (i == 1) {
        cooperation_div_stars[1].addEventListener('mouseover', function () {
            cooperation_div_stars[0].style.color = 'yellow';
            cooperation_div_stars[1].style.color = 'yellow';
            cooperation_rating_inText.innerHTML = "Bad!";
            cooperation_rating_inText.style.color = "red";
        });
        cooperation_div_stars[1].addEventListener('mouseout', function () {
            cooperation_div_stars[0].style.color = 'black';
             cooperation_div_stars[1].style.color = 'black';
            cooperation_rating_inText.innerHTML = "";
        });
    }

    if (i == 2) {
        cooperation_div_stars[2].addEventListener('mouseover', function () {
                cooperation_div_stars[0].style.color = 'yellow';
                cooperation_div_stars[1].style.color = 'yellow';
                cooperation_div_stars[2].style.color = 'yellow';
                cooperation_rating_inText.innerHTML = "Good!";
                cooperation_rating_inText.style.color = "green";
            });
        cooperation_div_stars[2].addEventListener('mouseout', function () {
                cooperation_div_stars[0].style.color = 'black';
                cooperation_div_stars[1].style.color = 'black';
                cooperation_div_stars[2].style.color = 'black';
                cooperation_rating_inText.innerHTML = "";
            });
    }

    if (i == 3) {
        cooperation_div_stars[3].addEventListener('mouseover', function () {
                cooperation_div_stars[0].style.color = 'yellow';
                cooperation_div_stars[1].style.color = 'yellow';
                cooperation_div_stars[2].style.color = 'yellow';
                cooperation_div_stars[3].style.color = 'yellow';
                cooperation_rating_inText.innerHTML = "Very Good!";
                cooperation_rating_inText.style.color = "green";
            });
        cooperation_div_stars[3].addEventListener('mouseout', function () {
                cooperation_div_stars[0].style.color = 'black';
                cooperation_div_stars[1].style.color = 'black';
                cooperation_div_stars[2].style.color = 'black';
                cooperation_div_stars[3].style.color = 'black';
                cooperation_rating_inText.innerHTML = "";
            });
    }

    if (i == 4) {
        cooperation_div_stars[4].addEventListener('mouseover', function () {
                cooperation_div_stars[0].style.color = 'yellow';
                cooperation_div_stars[1].style.color = 'yellow';
                cooperation_div_stars[2].style.color = 'yellow';
                cooperation_div_stars[3].style.color = 'yellow';
                cooperation_div_stars[4].style.color = 'yellow';
                cooperation_rating_inText.innerHTML = "The Best!";
                cooperation_rating_inText.style.color = "green";
            });
        cooperation_div_stars[4].addEventListener('mouseout', function () {
                cooperation_div_stars[0].style.color = 'black';
                cooperation_div_stars[1].style.color = 'black';
                cooperation_div_stars[2].style.color = 'black';
                cooperation_div_stars[3].style.color = 'black';
                cooperation_div_stars[4].style.color = 'black';
                cooperation_rating_inText.innerHTML = "";
            });
    }


}

//Quality of work

for (let i = 0; i < quality_work_div_stars.length; i++) {


    if (i == 0) {
        quality_work_div_stars[0].addEventListener('mouseover', function () {
                this.style.color = 'yellow';
                quality_rating_inText.innerHTML = "Very Bad!";
                quality_rating_inText.style.color = "red";
            });
        quality_work_div_stars[0].addEventListener('mouseout', function () {
                this.style.color = 'black';
                quality_rating_inText.innerHTML = "";
            });
    }

    if (i == 1) {
        quality_work_div_stars[1].addEventListener('mouseover', function () {
            quality_work_div_stars[0].style.color = 'yellow';
            quality_work_div_stars[1].style.color = 'yellow';
            quality_rating_inText.innerHTML = "Bad!";
            quality_rating_inText.style.color = "red";
        });
        quality_work_div_stars[1].addEventListener('mouseout', function () {
            quality_work_div_stars[0].style.color = 'black';
            quality_work_div_stars[1].style.color = 'black';
            quality_rating_inText.innerHTML = "";
        });
    }

    if (i == 2) {
        quality_work_div_stars[2].addEventListener('mouseover', function () {
                quality_work_div_stars[0].style.color = 'yellow';
                quality_work_div_stars[1].style.color = 'yellow';
                quality_work_div_stars[2].style.color = 'yellow';
                quality_rating_inText.innerHTML = "Good!";
                quality_rating_inText.style.color = "green";
            });
        quality_work_div_stars[2].addEventListener('mouseout', function () {
                quality_work_div_stars[0].style.color = 'black';
                quality_work_div_stars[1].style.color = 'black';
                quality_work_div_stars[2].style.color = 'black';
                quality_rating_inText.innerHTML = "";
            });
    }

    if (i == 3) {
        quality_work_div_stars[3].addEventListener('mouseover', function () {
                quality_work_div_stars[0].style.color = 'yellow';
                quality_work_div_stars[1].style.color = 'yellow';
                quality_work_div_stars[2].style.color = 'yellow';
                quality_work_div_stars[3].style.color = 'yellow';
                quality_rating_inText.innerHTML = "Very Good!";
                quality_rating_inText.style.color = "green";
            });
        quality_work_div_stars[3].addEventListener('mouseout', function () {
                quality_work_div_stars[0].style.color = 'black';
                quality_work_div_stars[1].style.color = 'black';
                quality_work_div_stars[2].style.color = 'black';
                quality_work_div_stars[3].style.color = 'black';
                quality_rating_inText.innerHTML = "";
            });
    }

    if (i == 4) {
        quality_work_div_stars[4].addEventListener('mouseover', function () {
                quality_work_div_stars[0].style.color = 'yellow';
                quality_work_div_stars[1].style.color = 'yellow';
                quality_work_div_stars[2].style.color = 'yellow';
                quality_work_div_stars[3].style.color = 'yellow';
                quality_work_div_stars[4].style.color = 'yellow';
                quality_rating_inText.innerHTML = "The Best!";
                quality_rating_inText.style.color = "green";
            });
        quality_work_div_stars[4].addEventListener('mouseout', function () {
                quality_work_div_stars[0].style.color = 'black';
                quality_work_div_stars[1].style.color = 'black';
                quality_work_div_stars[2].style.color = 'black';
                quality_work_div_stars[3].style.color = 'black';
                quality_work_div_stars[4].style.color = 'black';
                quality_rating_inText.innerHTML = "";
            });
    }


}