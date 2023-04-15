function age() {
    var d1 = document.getElementById('date').value;
    var m1 = document.getElementById('month').value;
    var y1 = document.getElementById('year').value;
    
    var date = new Date();
    var d2 = date.getDay();
    var m2 = 1 + date.getMonth();
    var y2 = date.getFullYear();
    var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (d1 > d2){
        d2 = d2 + month[m2 - 1];
        m2 = m2 - 1;
    }
    if (m1> m2) {
        m2 = m2 + 12;
        y2 = y2 - 1;
    }
    var d = d2 - d1;
    var m = m2 - m1;
    var y = y2 - y1;

    const dates  = document.getElementById('date');
    const months  = document.getElementById('month');
    const  years = document.getElementById('year');

    const dis1  = document.querySelector(".day");
    const dis2  = document.querySelector(".month");
    const dis3  = document.querySelector(".year");

    const head1  = document.querySelector(".head1");
    const head2  = document.querySelector(".head2");
    const head3  = document.querySelector(".head3");

    const finalD = document.getElementById('days');
    const finalM = document.getElementById('months');
    const finalY = document.getElementById('years');

    finalD.innerText = d;
    finalM.innerText = m;
    finalY.innerText = y;

    if (d1 == "") {
        dates.classList.add("active");
        head1.classList.add("active");
        dis1.innerText = 'This fied is required';
        finalD.innerText = "--";
    }
    if (d1 < 0 || d1 > 31) {
        dates.classList.add("active");
        head1.classList.add("active");
        dis1.innerText = 'Must be a valid day';
        finalD.innerText = "--";
    }
    if (m1 == "") {
        months.classList.add("active");
        head2.classList.add("active");
        dis2.innerText = 'This fied is required';
        finalM.innerText = "--";
    }
    if (m1 < 0 || m1 > 12) {
        months.classList.add("active");
        head2.classList.add("active");
        dis2.innerText = "Must be a valid month";
        finalM.innerText = "--";
    }
    if (y1 == "") {
        years.classList.add("active");
        head3.classList.add("active");
        dis3.innerText = 'This fied is required';
        finalY.innerText = "--";
    }
    if (y1 > y2) {
        years.classList.add("active");
        head3.classList.add("active");
        dis3.innerText = 'Must be a valid year';
        finalY.innerText = "--";
    } 
    const wrong = [2, 4, 6, 9, 11,];
    for (i = 0; i < wrong.length; i++) {
       m3 = wrong[i]
       if (m1 == m3 && d1 > 30) {
        dates.classList.add('active');
        dis1.innerText = "Must be a valid day";
        finalD.innerText = "--";
        finalM.innerText = "--";
        finalY.innerText = "--";
       }
    }
    if (m1 == 2 && d1 >= 29) {
        dates.classList.add('active');
        dis1.innerText = "Must be a valid day";
        finalD.innerText = "--";
        finalM.innerText = "--";
        finalY.innerText = "--";
    }
}