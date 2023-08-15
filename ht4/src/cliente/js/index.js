require('../css/styles.css');

let students = [],
    ratings = [],
    btn_add_student = document.getElementById("btn-add-student"),
    btn_add_score = document.getElementById("btn-add-score"),
    field_carnet = document.getElementById("carnet"),
    field_name_student = document.getElementById("fname"),
    field_taskname = document.getElementById("taskname"),
    field_scoretask = document.getElementById("scoretask"),
    data_students = (localStorage.getItem('data_students')) ? JSON.parse(localStorage.data_students) : [],
    data_ratings = (localStorage.getItem('data_ratings')) ? JSON.parse(localStorage.data_ratings) : [];

let fields = document.querySelectorAll(".field-validate");
let fields_scores = document.querySelectorAll(".field-validate-score");

if (data_students.length > 0) {
    for (let index = 0; index < data_students.length; index++) {
        const student = data_students[index];
        students.push({ carnet: student.carnet, fullname: student.fullname });
    }
}

if (data_ratings.length > 0) {
    for (let index = 0; index < data_ratings.length; index++) {
        const score_value = data_ratings[index];
        ratings.push({ carnet: score_value.carnet, fullname: score_value.fullname, taskname: score_value.taskname, score: score_value.score });
    }
}

console.log("students", students);
console.log("ratings", ratings);

initDataTableStudents(students);
initDataTableScores(ratings);

function validate_fields() {
    if (fields.length > 0) {
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            field.className = "form-control field-validate";
            if (field.value == "") {
                field.classList.add("is-invalid");
            } else {
                field.classList.add("is-valid");
            }
        }
    }
    if (field_carnet.value != "" && field_name_student.value != "") {
        let validate_exists = alreadyExistsStudent(field_carnet.value);
        if (!validate_exists) {
            field_carnet.className = "form-control field-validate";
            field_name_student.className = "form-control field-validate";
            addStudent(field_carnet.value, field_name_student.value);
        } else {
            field_carnet.classList.add("is-invalid");
            field_name_student.classList.add("is-invalid");
            alert("El estudiante ya existe");
        }
    }
}

function addStudent(_carnet, _fullname) {
    students.push({ carnet: _carnet, fullname: _fullname });
    localStorage.setItem('data_students', JSON.stringify(students));
    initDataTableStudents(students);
    console.log("students", students);
    if (fields.length > 0) {
        for (let index = 0; index < fields.length; index++) {
            const field = fields[index];
            field.className = "form-control field-validate";
            field.value = "";
        }
    }
}

if (btn_add_student) {
    btn_add_student.addEventListener("click", validate_fields);
}

function initDataTableStudents(_students) {
    $('#TableStudentData').DataTable().destroy();
    $('#TableStudentData tbody').empty();
    if (_students.length > 0) {
        for (let index = 0; index < _students.length; index++) {
            const row_student = _students[index];
            $('#TableStudentData tbody').append(`<tr><td>${row_student.carnet}</td><td>${row_student.fullname}</td><td><button type="button" class="btn btn-primary btn-score" data-bs-toggle="modal" data-bs-target="#addRatingModal" id="btnAddRating" data-carnet="${row_student.carnet}">Ingresar Nota</button></td></tr>`);
        }

        let btn_add_rating = document.querySelectorAll(".btn-score");
        for (let index = 0; index < btn_add_rating.length; index++) {
            const btn_add = btn_add_rating[index];
            btn_add.addEventListener("click", function () {
                let id = this.getAttribute("data-carnet");
                field_taskname.className = "form-control field-validate";
                field_scoretask.className = "form-control field-validate";
                getStudentData(id);
            });
        }
    }
    $('#TableStudentData').DataTable();
}

function alreadyExistsStudent(_carnet) {
    return students.some((student) => student.carnet == _carnet);
}

function getStudentData(_carnet) {
    let result = students.find((student) => student.carnet == _carnet);
    console.log(result);
    document.getElementById("name-student-modal").innerHTML = "";
    document.getElementById("carnet-student-modal").innerHTML = "";
    document.getElementById("name-student-modal").innerHTML = result.fullname;
    document.getElementById("carnet-student-modal").innerHTML = result.carnet;
}

if (btn_add_score) {
    btn_add_score.addEventListener("click", validate_fields_score);
}

function validate_fields_score() {
    if (fields_scores.length > 0) {
        for (let index = 0; index < fields_scores.length; index++) {
            const field_score = fields_scores[index];
            field_score.className = "form-control field-validate";
            if (field_score.value == "") {
                field_score.classList.add("is-invalid");
            } else {
                field_score.classList.add("is-valid");
            }
        }
    }
    if (field_taskname.value != "" && field_scoretask.value != "") {
        field_taskname.className = "form-control field-validate";
        field_scoretask.className = "form-control field-validate";
        let field_carnet = document.getElementById("carnet-student-modal").innerHTML;
        let field_student = document.getElementById("name-student-modal").innerHTML;
        addScore(field_carnet, field_student, field_taskname.value, field_scoretask.value);
    }
}

function addScore(_field_carnet, _field_student,_field_taskname, _field_scoretask) {
    console.log(_field_carnet, _field_student, _field_taskname, _field_scoretask);
    
    ratings.push({ carnet: _field_carnet, fullname: _field_student, taskname: _field_taskname, score: _field_scoretask});
    localStorage.setItem('data_ratings', JSON.stringify(ratings));
    initDataTableScores(ratings);
    console.log("ratings", ratings);
    if (fields_scores.length > 0) {
        for (let index = 0; index < fields_scores.length; index++) {
            const field_score = fields_scores[index];
            field_score.className = "form-control field-validate";
            field_score.value = "";
        }
    }
}


function initDataTableScores(_ratings) {
    $('#TableScoreData').DataTable().destroy();
    $('#TableScoreData tbody').empty();
    if (_ratings.length > 0) {
        for (let index = 0; index < _ratings.length; index++) {
            const row_score = _ratings[index];
            $('#TableScoreData tbody').append(`<tr><td>${row_score.carnet}</td><td>${row_score.fullname}</td><td>${row_score.taskname}</td><td>${row_score.score}</td></tr>`);
        }
    }
    $('#TableScoreData').DataTable();
}